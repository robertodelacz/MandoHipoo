/**
 * ═══════════════════════════════════════════════════════════════════════
 *  CONSOLA DE COORDINACIÓN (solo administradora) + REVISIÓN DE PRE PLD
 * ═══════════════════════════════════════════════════════════════════════
 *  - No modifica la generación del Pre PLD ni sus bitácoras: LEE "Seguimiento de Entregables" e
 *    "Historial_Modificaciones" (CONFIG.BITACORA_SPREADSHEET_ID) y guarda el estado de revisión en su
 *    propia hoja "PLD_Revisiones" (dentro del archivo de registro del APS).
 *  - Estados de un Pre PLD:  SIN_ENVIAR → EN_REVISION → REVISADO
 *                                              ↓
 *                                          OBSERVADO (el asesor corrige y lo vuelve a enviar)
 *  - Cada función verifica el rol en el SERVIDOR (ocultar botones en pantalla no es un control).
 */

var PLD_REV_COLS = ['IDArchivo', 'Nombre', 'Operacion', 'Asociados', 'URL', 'Creador', 'Creado', 'Estado', 'EnviadoPor', 'FechaEnvio', 'RevisadoPor', 'FechaRevision', 'Comentario'];

function APS_requiereAdmin_() {
  var u = APS_requiereUsuario_();
  if (u.rol !== 'coordinador') throw new Error('Esta función es solo para la coordinación.');
  return u;
}
function APS_hoy_() { return Utilities.formatDate(new Date(), APS_CONFIG.ZONA, 'yyyy-MM-dd'); }
function APS_sumaDias_(iso, n) {
  var p = iso.split('-'), d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2] + n));
  return d.toISOString().slice(0, 10);
}

/* ═════════════ LECTURA DE LAS BITÁCORAS DEL PRE PLD ═════════════ */

function PLD_fecha_(v) {
  if (v instanceof Date) return Utilities.formatDate(v, APS_CONFIG.ZONA, 'yyyy-MM-dd HH:mm');
  return String(v || '');
}
function PLD_ssBitacora_() {
  if (typeof CONFIG === 'undefined' || !CONFIG.BITACORA_SPREADSHEET_ID) throw new Error('No se encontró la bitácora del Pre PLD (CONFIG.BITACORA_SPREADSHEET_ID).');
  return SpreadsheetApp.openById(CONFIG.BITACORA_SPREADSHEET_ID);
}
/** TODOS los Pre PLD generados (hoja "Seguimiento de Entregables"). Antes solo leía los últimos 1000: un documento en revisión más antiguo desaparecía de la lista. */
function PLD_bitacora_() {
  var sh = PLD_ssBitacora_().getSheetByName('Seguimiento de Entregables');
  if (!sh || sh.getLastRow() < 2) return [];
  var ult = sh.getLastRow(), desde = 2;
  return sh.getRange(desde, 1, ult - desde + 1, 8).getValues().map(function (v) {
    return { fecha: PLD_fecha_(v[0]), nombre: String(v[1]), operacion: String(v[2]), lado1: String(v[3]), lado2: String(v[4]), id: String(v[5]), url: String(v[6]), creador: String(v[7]).toLowerCase() };
  }).filter(function (r) { return r.id; });
}
/** Últimas modificaciones estructurales por archivo (hoja "Historial_Modificaciones"): id → fecha más reciente. */
function PLD_ultimasMods_() {
  var sh = PLD_ssBitacora_().getSheetByName('Historial_Modificaciones'), mapa = {};
  if (!sh || sh.getLastRow() < 2) return mapa;
  var ult = sh.getLastRow(), desde = 2;
  sh.getRange(desde, 1, ult - desde + 1, 5).getValues().forEach(function (v) {
    var id = String(v[1]), f = PLD_fecha_(v[0]);
    if (id && (!mapa[id] || f > mapa[id])) mapa[id] = f;
  });
  return mapa;
}

/* ═════════════ ESTADO DE REVISIÓN (hoja PLD_Revisiones) ═════════════ */

function PLD_filaAReg_(f) {
  return { id: String(f[0]), nombre: String(f[1]), operacion: String(f[2]), asociados: String(f[3]), url: String(f[4]), creador: String(f[5]), creado: String(f[6]), estado: String(f[7]),
    enviadoPor: String(f[8]), fechaEnvio: String(f[9]), revisadoPor: String(f[10]), fechaRevision: String(f[11]), comentario: String(f[12]) };
}
function PLD_regAFila_(r) {
  return [r.id, r.nombre, r.operacion, r.asociados, r.url, r.creador, r.creado, r.estado, r.enviadoPor || '', r.fechaEnvio || '', r.revisadoPor || '', r.fechaRevision || '', r.comentario || ''];
}
/** { hoja, mapa: id → { fila, reg } } */
function PLD_revisiones_() {
  var sh = APS_hojaAux_('PLD_Revisiones', PLD_REV_COLS), n = sh.getLastRow() - 1, mapa = {};
  if (n >= 1) sh.getRange(2, 1, n, PLD_REV_COLS.length).getValues().forEach(function (f, i) { mapa[String(f[0])] = { fila: i + 2, reg: PLD_filaAReg_(f) }; });
  return { hoja: sh, mapa: mapa };
}
function PLD_escribirRev_(R, entrada, reg) {
  var fila = entrada ? entrada.fila : R.hoja.getLastRow() + 1;
  if (fila > R.hoja.getMaxRows()) R.hoja.insertRowsAfter(R.hoja.getMaxRows(), 200);
  var rg = R.hoja.getRange(fila, 1, 1, PLD_REV_COLS.length);
  rg.setNumberFormat('@');
  rg.setValues([PLD_regAFila_(reg)]);
  R.mapa[reg.id] = { fila: fila, reg: reg };
}
/** Une un renglón de la bitácora con su estado de revisión. */
function PLD_item_(b, entrada, mod) {
  var r = entrada ? entrada.reg : null, estado = r ? r.estado : 'SIN_ENVIAR';
  var despues = !!(mod && ((estado === 'REVISADO' && r.fechaRevision && mod > r.fechaRevision) || (estado === 'EN_REVISION' && r.fechaEnvio && mod > r.fechaEnvio)));
  return { id: b.id, nombre: b.nombre, operacion: b.operacion, asociados: [b.lado1, b.lado2].filter(Boolean).join(' / '), url: b.url, creador: b.creador, creado: b.fecha,
    estado: estado, enviadoPor: r ? r.enviadoPor : '', fechaEnvio: r ? r.fechaEnvio : '', revisadoPor: r ? r.revisadoPor : '', fechaRevision: r ? r.fechaRevision : '',
    comentario: r ? r.comentario : '', modificadoDespues: despues };
}
function PLD_items_() {
  var b = PLD_bitacora_(), R = PLD_revisiones_(), mods = PLD_ultimasMods_(), desde = String(APS_CONFIG.PLD_DESDE || '');
  // Corte: los Pre PLD generados ANTES de implementar este sistema no cuentan (ni en contadores ni en listas). No se borra nada de la bitácora.
  // Excepción: si alguien ya les dio seguimiento aquí (tienen fila en PLD_Revisiones), se conservan.
  if (desde) b = b.filter(function (x) { return x.fecha >= desde || !!R.mapa[x.id]; });
  return b.map(function (x) { return PLD_item_(x, R.mapa[x.id], mods[x.id]); });
}
function PLD_ordenar_(lista) { return lista.sort(function (a, b) { return a.creado < b.creado ? 1 : -1; }); }

/* ═════════════ API: ASESOR ═════════════ */

/** Los Pre PLD que generó quien consulta, con su estado de revisión. */
function PLD_misDocumentos() {
  var u = APS_requiereUsuario_();
  return PLD_ordenar_(PLD_items_().filter(function (x) { return x.creador === u.email; })).slice(0, 200);
}

/** Quien generó el documento (o la administradora) lo envía a revisión. Permitido desde SIN_ENVIAR, OBSERVADO, o REVISADO si se modificó después. */
function PLD_enviarRevision(id) {
  var u = APS_requiereUsuario_();
  return APS_conLock_(function () {
    var b = PLD_bitacora_().filter(function (x) { return x.id === String(id); })[0];
    if (!b) throw new Error('No se encontró ese documento en la bitácora.');
    if (u.rol !== 'coordinador' && b.creador !== u.email) throw new Error('Solo quien generó el documento puede enviarlo a revisión.');
    var R = PLD_revisiones_(), e = R.mapa[b.id], est = e ? e.reg.estado : 'SIN_ENVIAR', it = PLD_item_(b, e, PLD_ultimasMods_()[b.id]);
    if (!(est === 'SIN_ENVIAR' || est === 'OBSERVADO' || (est === 'REVISADO' && it.modificadoDespues)))
      throw new Error(est === 'EN_REVISION' ? 'El documento ya está en revisión.' : 'El documento ya fue revisado y no ha cambiado desde entonces.');
    var reg = { id: b.id, nombre: b.nombre, operacion: b.operacion, asociados: it.asociados, url: b.url, creador: b.creador, creado: b.fecha, estado: 'EN_REVISION',
      enviadoPor: u.email, fechaEnvio: APS_ahora_(), revisadoPor: '', fechaRevision: '', comentario: '' };
    PLD_escribirRev_(R, e, reg);
    if (APS_CONFIG.PLD_COMPARTIR_REVISOR) {
      APS_coordinadores_().forEach(function (c) { try { DriveApp.getFileById(b.id).addCommenter(c); } catch (err) { Logger.log('No se pudo compartir con ' + c + ': ' + err.message); } });
    }
    APS_audit_('PLD', 'ENVIAR_REVISION', b.id, b.operacion);
    APS_notificar_(APS_coordinadores_(), 'Pre PLD por revisar — ' + b.nombre, '<b>' + APS_escHtml_(APS_nombreDe_(u.email)) + '</b> envió a revisión un Pre PLD. Ábrelo desde el sistema para revisarlo.',
      { params: { modulo: 'revpld' }, sistema: 'Pre PLD', titulo: 'Hay un Pre PLD esperando tu revisión', etiqueta: 'Por revisar', tono: 'warn', boton: 'Ir a la revisión de Pre PLD',
        datos: [['Documento', b.nombre], ['Operación', b.operacion], ['Asociados', it.asociados], ['Enviado por', APS_nombreDe_(u.email) + ' · ' + u.email], ['Enviado', reg.fechaEnvio]] });
    return PLD_item_(b, R.mapa[b.id], null);
  });
}

/* ═════════════ API: ADMINISTRADORA ═════════════ */

/** filtro: 'revision' | 'observados' | 'revisados' | 'sin_enviar' | 'todos'; texto: búsqueda libre. */
function PLD_listar(filtro, texto) {
  APS_requiereAdmin_();
  var mapaEstado = { revision: 'EN_REVISION', observados: 'OBSERVADO', revisados: 'REVISADO', sin_enviar: 'SIN_ENVIAR' }, q = String(texto || '').toLowerCase().trim();
  var lista = PLD_items_().filter(function (x) {
    if (mapaEstado[filtro] && x.estado !== mapaEstado[filtro]) return false;
    return !q || [x.nombre, x.operacion, x.asociados, x.creador].join(' ').toLowerCase().indexOf(q) >= 0;
  });
  return PLD_ordenar_(lista).slice(0, 300);
}

function PLD_observar(id, comentario) {
  var u = APS_requiereAdmin_();
  comentario = String(comentario || '').trim().slice(0, 500);
  if (!comentario) throw new Error('Escribe qué debe corregir el asesor.');
  return APS_conLock_(function () {
    var R = PLD_revisiones_(), e = R.mapa[String(id)];
    if (!e || e.reg.estado !== 'EN_REVISION') throw new Error('Solo se puede observar un documento que esté en revisión.');
    e.reg.estado = 'OBSERVADO'; e.reg.comentario = comentario; e.reg.revisadoPor = u.email; e.reg.fechaRevision = APS_ahora_();
    PLD_escribirRev_(R, e, e.reg);
    APS_audit_('PLD', 'OBSERVAR', e.reg.id, comentario);
    APS_notificar_([e.reg.creador], 'Pre PLD con observaciones — ' + e.reg.nombre, 'La coordinación revisó tu Pre PLD y necesita que lo corrijas. Entra a «Ver mis registros», ajusta el documento y envíalo de nuevo a revisión.',
      { params: { modulo: 'pld', misreg: '1' }, sistema: 'Pre PLD', firma: 'Revisó ' + (u.nombre || u.email), titulo: 'Tu Pre PLD tiene observaciones', etiqueta: 'Requiere corrección', tono: 'warn', boton: 'Ver mis Pre PLD',
        datos: [['Documento', e.reg.nombre], ['Operación', e.reg.operacion], ['Qué corregir', comentario], ['Revisado', e.reg.fechaRevision]] });
    return PLD_item_({ id: e.reg.id, nombre: e.reg.nombre, operacion: e.reg.operacion, lado1: e.reg.asociados, lado2: '', url: e.reg.url, creador: e.reg.creador, fecha: e.reg.creado }, e, null);
  });
}

function PLD_marcarRevisado(id, nota) {
  var u = APS_requiereAdmin_();
  return APS_conLock_(function () {
    var R = PLD_revisiones_(), e = R.mapa[String(id)];
    if (!e || e.reg.estado !== 'EN_REVISION') throw new Error('Solo se puede marcar como revisado un documento que esté en revisión.');
    e.reg.estado = 'REVISADO'; e.reg.comentario = String(nota || '').trim().slice(0, 500); e.reg.revisadoPor = u.email; e.reg.fechaRevision = APS_ahora_();
    PLD_escribirRev_(R, e, e.reg);
    APS_audit_('PLD', 'REVISADO', e.reg.id, e.reg.comentario);
    APS_notificar_([e.reg.creador], 'Pre PLD revisado — ' + e.reg.nombre, 'La coordinación revisó tu Pre PLD y no tiene observaciones. Ya está listo.',
      { params: { modulo: 'pld', misreg: '1' }, sistema: 'Pre PLD', firma: 'Revisó ' + (u.nombre || u.email), titulo: 'Tu Pre PLD fue revisado', etiqueta: 'Revisado', tono: 'ok', boton: 'Ver mis Pre PLD',
        datos: [['Documento', e.reg.nombre], ['Operación', e.reg.operacion], ['Nota', e.reg.comentario], ['Revisado', e.reg.fechaRevision]] });
    return PLD_item_({ id: e.reg.id, nombre: e.reg.nombre, operacion: e.reg.operacion, lado1: e.reg.asociados, lado2: '', url: e.reg.url, creador: e.reg.creador, fecha: e.reg.creado }, e, null);
  });
}

/** Modificaciones estructurales (agregar pagos, etc.) y movimientos de revisión de un documento. */
function PLD_historial(id) {
  APS_requiereAdmin_();
  var mods = [], sh = PLD_ssBitacora_().getSheetByName('Historial_Modificaciones');
  if (sh && sh.getLastRow() >= 2) {
    sh.getRange(2, 1, sh.getLastRow() - 1, 5).getValues().forEach(function (v) {
      if (String(v[1]) === String(id)) mods.push({ fecha: PLD_fecha_(v[0]), operacion: String(v[2]), usuario: String(v[3]), detalle: String(v[4]) });
    });
  }
  var eventos = [], aud = APS_hojaAux_('Auditoria', APS_AUD_COLS);
  if (aud.getLastRow() >= 2) {
    aud.getRange(2, 1, aud.getLastRow() - 1, 6).getValues().forEach(function (v) {
      if (String(v[4]) === String(id)) eventos.push({ fecha: String(v[0]), usuario: String(v[1]), accion: String(v[3]), detalle: String(v[5]) });
    });
  }
  return { modificaciones: mods.reverse(), eventos: eventos.reverse() };
}

/** Vista de bitácora: últimas 200 modificaciones de cualquier Pre PLD. */
function PLD_modificaciones() {
  APS_requiereAdmin_();
  var sh = PLD_ssBitacora_().getSheetByName('Historial_Modificaciones');
  if (!sh || sh.getLastRow() < 2) return [];
  var ult = sh.getLastRow(), desde = Math.max(2, ult - 199), nombres = {};
  PLD_bitacora_().forEach(function (b) { nombres[b.id] = b.nombre; });
  return sh.getRange(desde, 1, ult - desde + 1, 5).getValues().map(function (v) {
    return { fecha: PLD_fecha_(v[0]), id: String(v[1]), nombre: nombres[String(v[1])] || String(v[1]), operacion: String(v[2]), usuario: String(v[3]), detalle: String(v[4]) };
  }).reverse();
}

/* ═════════════ RESUMEN, TABLERO Y AUDITORÍA ═════════════ */

function CONSOLA_resumen() {
  APS_requiereAdmin_();
  var N = APS_nucleo_(), hoy = APS_hoy_(), lim = APS_sumaDias_(hoy, 30), atras = APS_sumaDias_(hoy, -15), sem = APS_sumaDias_(hoy, -7);
  var aps = { BORRADOR: 0, SIN_TERMINAR: 0, COMPLETO: 0, EN_REVISION: 0, APROBADO: 0, CANCELADO: 0, conDocs: 0, total: 0 }, ajustes = [], vigencias = [], apsPorRevisar = [];
  APS_todos_().forEach(function (r) {
    aps[r.estado] = (aps[r.estado] || 0) + 1; aps.total++;
    var ui = APS_estadoUI_(r); if (ui === 'SIN_TERMINAR' || ui === 'COMPLETO') aps[ui]++;
    if (r.docUrl) aps.conDocs++;
    if (r.estado === 'EN_REVISION') apsPorRevisar.push({ id: r.id, propietarios: r.propietarios, asesor: r.asesor, actualizado: r.actualizado });
    if (r.estado !== 'APROBADO') return;
    var d; try { d = JSON.parse(r.json); } catch (e) { return; }
    var conVenta = d.tipo === 'venta' || d.tipo === 'ambas', conRenta = d.tipo === 'renta' || d.tipo === 'ambas';
    (conVenta ? (d.ajustes || []) : []).forEach(function (a) {
      if (a.fecha >= hoy && a.fecha <= lim) ajustes.push({ id: r.id, propietarios: r.propietarios, fecha: a.fecha, monto: N.U.formatoNum(N.U.parseNum(a.monto) || 0) });
    });
    [[conVenta, d.vigenciaVentaMeses, 'Venta'], [conRenta, d.vigenciaRentaMeses, 'Arrendamiento']].forEach(function (x) {
      var meses = N.U.parseNum(x[1]);
      if (!x[0] || isNaN(meses) || !d.fecha) return;
      var fin = N.U.sumaMeses(d.fecha, Math.round(meses));
      if (fin && fin >= atras && fin <= lim) vigencias.push({ id: r.id, propietarios: r.propietarios, tipo: x[2], vence: fin, vencido: fin < hoy });
    });
  });
  var pldItems = PLD_items_(), pld = { SIN_ENVIAR: 0, EN_REVISION: 0, OBSERVADO: 0, REVISADO: 0, total: pldItems.length, ultimos7: 0, modificadosDespues: 0 }, pldPorRevisar = [];
  pldItems.forEach(function (x) {
    pld[x.estado]++; if (x.creado.slice(0, 10) >= sem) pld.ultimos7++; if (x.modificadoDespues) pld.modificadosDespues++;
    if (x.estado === 'EN_REVISION') pldPorRevisar.push({ id: x.id, nombre: x.nombre, creador: x.creador, fechaEnvio: x.fechaEnvio, url: x.url });
  });
  var porFecha = function (k) { return function (a, b) { return a[k] < b[k] ? -1 : 1; }; };
  return { hoy: hoy, aps: aps, pld: pld, ajustesProximos: ajustes.sort(porFecha('fecha')).slice(0, 15), vigenciasPorVencer: vigencias.sort(porFecha('vence')).slice(0, 15),
    apsPorRevisar: apsPorRevisar.slice(0, 8), pldPorRevisar: pldPorRevisar.slice(0, 8) };
}

function CONSOLA_config() {
  var u = APS_requiereAdmin_();
  return { admin: u.email, tableroUrl: APS_CONFIG.TABLERO_URL || '' };
}

/** Últimos 300 movimientos de la bitácora de auditoría (opcionalmente filtrados por texto y por módulo: 'APS' o 'PLD'). */
function CONSOLA_auditoria(texto, modulo) {
  APS_requiereAdmin_();
  var sh = APS_hojaAux_('Auditoria', APS_AUD_COLS);
  if (sh.getLastRow() < 2) return [];
  var q = String(texto || '').toLowerCase().trim(), ult = sh.getLastRow(), desde = (q || modulo) ? 2 : Math.max(2, ult - 999);      // sin filtros: lo más reciente; con filtros: toda la bitácora
  var filas = sh.getRange(desde, 1, ult - desde + 1, 6).getValues().map(function (v) {
    return { fecha: String(v[0]), usuario: String(v[1]), modulo: String(v[2]), accion: String(v[3]), ref: String(v[4]), detalle: String(v[5]) };
  }).reverse();
  return filas.filter(function (x) { return (!modulo || x.modulo === modulo || (modulo === 'ACC' && (x.modulo === 'ACCESO' || x.modulo === 'ACCESOS'))) && (!q || [x.usuario, x.modulo, x.accion, x.ref, x.detalle].join(' ').toLowerCase().indexOf(q) >= 0); }).slice(0, 300);
}


/**
 * DIAGNÓSTICO (se ejecuta a mano desde el editor de Apps Script, menú Ejecutar → PLD_diagnostico).
 * Responde «¿de dónde sale el número de Pre PLD?»: lista cada documento de la bitácora con su estado.
 * Fuente: hoja "Seguimiento de Entregables" (CONFIG.BITACORA_SPREADSHEET_ID) + hoja "PLD_Revisiones".
 * Un documento SIN fila en PLD_Revisiones cuenta como "SIN_ENVIAR" (nunca se ha enviado a revisión).
 */
function PLD_diagnostico() {
  var items = PLD_items_(), por = {};
  items.forEach(function (x) { (por[x.estado] = por[x.estado] || []).push(x); });
  var out = ['Bitácora: ' + PLD_ssBitacora_().getName() + ' · documentos en la bitácora: ' + PLD_bitacora_().length + ' · contados desde el corte (' + (APS_CONFIG.PLD_DESDE || 'sin corte') + '): ' + items.length];
  Object.keys(por).forEach(function (k) {
    out.push('', k + ' (' + por[k].length + ')');
    por[k].forEach(function (x) { out.push('  · ' + x.creado + ' · ' + x.nombre + ' · creó: ' + x.creador + (x.fechaEnvio ? ' · enviado: ' + x.fechaEnvio : '')); });
  });
  Logger.log(out.join('\n'));
  return out.join('\n');
}

/* ═════════════ ACCESOS DEL EQUIPO (pestaña «Asesores», administrada desde la pantalla) ═════════════
 * La coordinación ve a todo el equipo, agrega asesores nuevos, da de baja o reactiva, y cambia el rol, sin abrir la hoja.
 * Todo se escribe en la pestaña «Asesores» (la misma que ya usaba el sistema), así que editar la hoja a mano o usar esta pantalla es equivalente.
 * Baja (Activo = NO) = fuera de TODA la plataforma en su siguiente operación (la pantalla de acceso restringido). */

var ASES_RE_NO_ = /^(no|n|0|false|falso|baja|inactivo|inactiva)$/i;
/** Ubica las columnas de la pestaña por el texto del encabezado (igual que APS_parseAsesores_); crea las que falten al final. */
function ASES_hoja_() {
  var sh = APS_hojaAux_('Asesores', ['Correo', 'Nombre', 'Género', 'Rol', 'Activo']);
  var ult = Math.max(1, sh.getLastColumn()), hdr = sh.getRange(1, 1, 1, ult).getValues()[0].map(function (v) { return String(v).toLowerCase().trim(); });
  var busca = function (re) { for (var i = 0; i < hdr.length; i++) if (re.test(hdr[i])) return i + 1; return 0; };
  var C = { correo: busca(/^(correo|e-?mail|mail|usuario)/), nombre: busca(/^nombre/), genero: busca(/^(genero|género|sexo|trato)/), rol: busca(/^(rol|tipo|perfil|coordinador)/), activo: busca(/^(activo|estatus|estado|vigente)/) };
  if (!C.correo) throw new Error('La pestaña «Asesores» no tiene una columna «Correo» en la fila 1.');
  [['nombre', 'Nombre'], ['genero', 'Género'], ['rol', 'Rol'], ['activo', 'Activo']].forEach(function (p) {
    if (!C[p[0]]) { ult++; sh.getRange(1, ult).setValue(p[1]).setFontWeight('bold'); C[p[0]] = ult; }
  });
  return { sh: sh, C: C };
}
function ASES_esCoord_(v) { return /coord|admin|^(si|sí|s|x|1|true|yes)$/.test(String(v).trim().toLowerCase()); }
/** Equipo completo para la pantalla: filas de la pestaña + cuentas que entran por otra vía (arreglo fijo de coordinadores, archivo externo). */
function ASESORES_listar() {
  APS_requiereAdmin_();
  var H = ASES_hoja_(), sh = H.sh, C = H.C, n = Math.max(0, sh.getLastRow() - 1), rows = n ? sh.getRange(2, 1, n, sh.getLastColumn()).getValues() : [];
  var dueno = ''; try { dueno = String(Session.getEffectiveUser().getEmail() || '').toLowerCase(); } catch (e) { }
  var vistos = {}, lista = [];
  rows.forEach(function (r, i) {
    var em = String(r[C.correo - 1] || '').toLowerCase().trim(); if (!APS_RE_CORREO_.test(em) || vistos[em]) return; vistos[em] = 1;
    var act = r[C.activo - 1], g = String(r[C.genero - 1] || '').trim().toLowerCase();
    lista.push({ correo: em, nombre: String(r[C.nombre - 1] || '').trim(), genero: /^(f|mujer|fem|sra|srita|señora)/.test(g) ? 'f' : (/^(m|h|masc|hombre|sr|señor)/.test(g) ? 'm' : ''),
      coordinador: ASES_esCoord_(r[C.rol - 1]), activo: !(String(act).trim() !== '' && ASES_RE_NO_.test(String(act).trim())), fila: i + 2, fuente: 'hoja', dueno: em === dueno });
  });
  (APS_CONFIG.COORDINADORES || []).forEach(function (c) {
    var em = String(c).toLowerCase().trim(); if (!APS_RE_CORREO_.test(em) || vistos[em]) return; vistos[em] = 1;
    lista.push({ correo: em, nombre: '', genero: '', coordinador: true, activo: true, fila: 0, fuente: 'fijo', dueno: em === dueno });
  });
  var activos = {}; try { activos = APS_asesores_(); } catch (e) { }
  Object.keys(activos).forEach(function (em) { if (vistos[em]) return; vistos[em] = 1; lista.push({ correo: em, nombre: activos[em].nombre || '', genero: activos[em].genero || '', coordinador: !!activos[em].coordinador, activo: true, fila: 0, fuente: 'externo', dueno: em === dueno }); });
  // Último movimiento conocido de cada cuenta (para ver quién ya no usa la plataforma)
  var ult = {};
  try {
    var aud = APS_hojaAux_('Auditoria', APS_AUD_COLS), na = Math.min(aud.getLastRow() - 1, 1500);
    if (na > 0) aud.getRange(aud.getLastRow() - na + 1, 1, na, 2).getValues().forEach(function (v) { var e = String(v[1]).toLowerCase(); if (e) ult[e] = String(v[0]); });
  } catch (e) { }
  lista.forEach(function (x) { x.ultimo = ult[x.correo] || ''; });
  lista.sort(function (a, b) { return (b.activo - a.activo) || (b.coordinador - a.coordinador) || String(a.nombre || a.correo).localeCompare(String(b.nombre || b.correo)); });
  return { equipo: lista, yo: APS_correo_(), bloqueoActivo: APS_CONFIG.BLOQUEO_ACCESO !== false };
}
/** Alta o cambio de una cuenta. acc = { correo, nombre, genero ('m'|'f'|''), coordinador (bool), activo (bool) }. */
function ASESORES_guardar(acc) {
  var u = APS_requiereAdmin_();
  acc = acc || {};
  var correo = String(acc.correo || '').toLowerCase().trim();
  if (!APS_RE_CORREO_.test(correo)) throw new Error('Escribe un correo válido (ej. nombre@hipoo.mx).');
  var nombre = String(acc.nombre || '').trim().slice(0, 80), activo = acc.activo !== false, coord = !!acc.coordinador, g = acc.genero === 'f' ? 'F' : (acc.genero === 'm' ? 'M' : '');
  var dueno = ''; try { dueno = String(Session.getEffectiveUser().getEmail() || '').toLowerCase(); } catch (e) { }
  if (correo === u.email && !activo) throw new Error('No puedes dar de baja tu propia cuenta desde aquí.');
  if (correo === u.email && !coord) throw new Error('No puedes quitarte a ti mismo el rol de coordinación desde aquí.');
  if (correo === dueno && !activo) throw new Error('Esa es la cuenta dueña del sistema: no se puede dar de baja desde la pantalla.');
  return APS_conLock_(function () {
    var H = ASES_hoja_(), sh = H.sh, C = H.C, n = Math.max(0, sh.getLastRow() - 1), fila = 0, nuevo = false, antes = '';
    if (n) sh.getRange(2, C.correo, n, 1).getValues().forEach(function (v, i) { if (!fila && String(v[0]).toLowerCase().trim() === correo) fila = i + 2; });
    // Si la columna «Activo» usa casillas (TRUE/FALSE), se respeta ese formato; si no, SI/NO.
    var usaBool = false;
    if (n) sh.getRange(2, C.activo, n, 1).getValues().some(function (v) { if (typeof v[0] === 'boolean') { usaBool = true; return true; } return String(v[0]).trim() !== ''; });
    var valAct = usaBool ? activo : (activo ? 'SI' : 'NO');
    if (!fila) { fila = Math.max(2, sh.getLastRow() + 1); nuevo = true; sh.getRange(fila, C.correo).setValue(correo); }
    else antes = (ASES_RE_NO_.test(String(sh.getRange(fila, C.activo).getValue()).trim()) ? 'baja' : 'activo') + (ASES_esCoord_(sh.getRange(fila, C.rol).getValue()) ? '/coordinador' : '');
    sh.getRange(fila, C.nombre).setValue(nombre || sh.getRange(fila, C.nombre).getValue());
    if (g || nuevo || acc.genero === '') sh.getRange(fila, C.genero).setValue(g);
    sh.getRange(fila, C.rol).setValue(coord ? 'Coordinador' : '');
    sh.getRange(fila, C.activo).setValue(valAct);
    SpreadsheetApp.flush(); APS_invalidaAsesores_();
    APS_audit_('ACCESOS', nuevo ? 'ALTA_ACCESO' : (activo ? 'ACCESO_ACTIVO' : 'ACCESO_BAJA'), correo, (nuevo ? 'Alta' : 'Antes: ' + antes) + ' · ahora: ' + (activo ? 'activo' : 'baja') + (coord ? '/coordinador' : ''));
    return { ok: true, nuevo: nuevo, correo: correo };
  });
}
