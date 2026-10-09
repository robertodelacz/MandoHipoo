var ACTIVIDADES = [
  'NO APLICA',
  'RADIO, CINE, TELEVISION Y TEATRO - DISEÑADORES GRAFICOS',
  'RADIO, CINE, TELEVISION Y TEATRO - EDITORES, PERIODISTAS, REPORTEROS Y REDACTORES',
  'RADIO, CINE, TELEVISION Y TEATRO - ASISTENTES Y/U OPERADORES DE PRODUCCION DE CINE, RADIO Y TELEVISION',
  'RADIO, CINE, TELEVISION Y TEATRO - LOCUTORES, COMENTARISTAS Y CRONISTAS DE RADIO Y TELEVISION',
  'RADIO, CINE, TELEVISION Y TEATRO - PRODUCTORES Y DIRECTORES DE CINE, TELEVISION Y TEATRO',
  'INTERPRETACION ARTISTICA - ACTORES, BAILARINES, MUSICOS, ESCRITORES',
  'INTERPRETACION ARTISTICA - ARTESANOS',
  'INTERPRETACION ARTISTICA - FOTOGRAFOS',
  'INTERPRETACION ARTISTICA - ARTISTAS PLASTICOS',
  'TRADUCCION E INTERPRETACION LINGUISTICA - INTERPRETES Y/O TRADUCTORES',
  'PUBLICIDAD, PROPAGANDA Y RELACIONES PUBLICAS - MODELOS Y EDECANES',
  'PUBLICIDAD, PROPAGANDA Y RELACIONES PUBLICAS - DIRECTORES, GERENTES Y EMPLEADOS DE PUBLICIDAD',
  'AGRICULTURA Y SILVICULTURA - ADMINISTRADORES O TRABAJADORES AGRICOLAS',
  'INVESTIGACION - ECONOMISTAS Y POLITOLOGOS (NO FUNCIONARIOS PUBLICOS)',
  'INVESTIGACION - FISICOS ASTRONOMOS',
  'INVESTIGACION - GEOLOGOS, GEOQUIMICOS, GEOFISICOS Y GEOGRAFOS',
  'INVESTIGACION - INVESTIGADORES Y CONSULTORES EN MERCADOTECNIA',
  'INVESTIGACION - MATEMATICOS, ESTADISTICOS Y ACTUARIOS',
  'INVESTIGACION - METEOROLOGOS',
  'INVESTIGACION - SOCIOLOGOS, ANTROPOLOGOS E HISTORIADORES',
  'ENSEÑANZA - CAPACITADORES E INSTRUCTORES',
  'ENSEÑANZA - PROFESORES O DOCENTES',
  'ENSEÑANZA - DIRECTORES GENERALES DE EDUCACION',
  'DIFUSION CULTURAL - PROMOTORES DE DIFUSION CULTURAL',
  'DIFUSION CULTURAL - TRABAJADORES DE BIBLIOTECA, ARCHIVO, MUSEO Y GALERIA DE ARTE',
  'OTRAS OCUPACIONES - DESEMPLEADO',
  'OTRAS OCUPACIONES - JUBILADO O PENSIONADO',
  'OTRAS OCUPACIONES - AMA DE CASA O QUEHACERES DEL HOGAR',
  'OTRAS OCUPACIONES - MINISTROS DE CULTO RELIGIOSO (SACERDOTE, PASTOR, MONJA, ETC)',
  'OTRAS OCUPACIONES - AGENTE ADUANAL',
  'OTRAS OCUPACIONES - PROPIETARIO, ACCIONISTA O SOCIO',
  'SECTOR PUBLICO - EMPLEADO DEL PODER EJECUTIVO FEDERAL',
  'SECTOR PUBLICO - EMPLEADO PODER EJECUTIVO ESTATAL O DEL DISTRITO FEDERAL',
  'SECTOR PUBLICO - EMPLEADO DEL PODER EJECUTIVO MUNICIPAL O DELEGACIONAL',
  'SECTOR PUBLICO - EMPLEADO DEL PODER JUDICIAL FEDERAL',
  'SECTOR PUBLICO - EMPLEADO DEL PODER LEGISLATIVO FEDERAL',
  'SECTOR PUBLICO - EMPLEADO DEL PODER LEGISLATIVO ESTATAL O DEL DISTRITO FEDERAL',
  'SECTOR PUBLICO - EMPLEADO DEL PODER JUDICIAL ESTATAL O DEL DISTRITO FEDERAL',
  'ORGANISMOS INTERNACIONALES Y EXTRATERRITORIALES - EMPLEADOS DE ORGANISMOS INTERNACIONALES Y EXTRATERRITORIALES',
  'SECTOR PUBLICO - EJERCITO, ARMADA Y FUERZA AEREA',
  'GANADERIA - APICULTORES',
  'GANADERIA - ADMINISTRADORES, CRIADORES O SUPERVISORES AVICOLAS Y GANADEROS',
  'PESCA Y ACUACULTURA - PESCADORES Y TRABAJADORES EN LA CRIA Y CULTIVO DE ESPECIES MARINAS',
  'MINERIA, EXTRACCION Y SUMINISTRO - TECNICOS GEOLOGICOS Y DE MINERALES',
  'MINERIA, EXTRACCION Y SUMINISTRO - INGENIEROS, OPERADORES O AYUDANTES EN LA EXTRACCION Y REFINACION MINERA',
  'MINERIA, EXTRACCION Y SUMINISTRO - AYUDANTES EN LA PERFORACION DE POZOS DE PETROLEO Y GAS NATURAL',
  'MINERIA, EXTRACCION Y SUMINISTRO - INGENIEROS PETROLEROS',
  'MINERIA, EXTRACCION Y SUMINISTRO - OPERADORES DE CENTRALES O SISTEMAS DE ENERGIA ELECTRICAS',
  'MINERIA, EXTRACCION Y SUMINISTRO - OPERADORES DE MAQUINAS DE VAPOR',
  'MINERA, EXTRACCION Y SUMINISTRO - GERENTE, SUPERVISOR U OPERADORES DE TRATAMIENTO Y POTABILIZACION, ABASTECIMIENTO Y RECOLECCION DE AGUA',
  'CONSTRUCCION - DECORADORES DE INTERIORES',
  'CONSTRUCCION - INGENIEROS, TECNICOS Y OPERADORES DE LA CONSTRUCCION',
  'CONSTRUCCION - COLOCADORES DE PRODUCTOS PREFABRICADOS EN INMUEBLES',
  'CONSTRUCCION - PINTORES',
  'CONSTRUCCION - VIDRIEROS',
  'CONSTRUCCION - PLOMEROS E INSTALADORES DE TUBERIA',
  'CONSTRUCCION - ARQUITECTOS',
  'MECANICA - MECANICOS DE EQUIPO PESADO',
  'MECANICA - INGENIERO O MECANICOS INSTALADORES DE MAQUINARIA INDUSTRIAL',
  'MECANICA - INGENIERO O TECNICO EN MECANICA DE VEHICULOS TERRESTRES, AEREOS Y ACUATICOS',
  'ELECTRICIDAD - INGENIEROS O TECNICOS ELECTRICISTAS',
  'ELECTRICIDAD - TECNICOS EN REFRIGERACION, AIRE ACONDICIONADO Y CALEFACCION',
  'ELECTRONICA - MECANICOS DE INSTRUMENTOS INDUSTRIALES',
  'ELECTRONICA - INGENIERO O TECNICOS EN ELECTRONICA',
  'INFORMATICA - INGENIERO O TECNICOS PROGRAMADORES EN INFORMATICA',
  'INFORMATICA - PROFESIONISTAS O TECNICOS DE SISTEMAS DE INFORMACION Y PROCESAMIENTO DE DATOS',
  'TELECOMUNICACIONES - INGENIERO, INSTALADORES Y REPARADORES DE EQUIPOS Y ACCESORIOS DE TELECOMUNICACIONES',
  'TELECOMUNICACIONES - TELEGRAFISTAS Y RADIO-OPERADORES',
  'PROCESOS INDUSTRIALES - INGENIERO O TECNICOS INDUSTRIAL Y DE PRODUCCION',
  'MINERALES NO METALICOS - OPERADORES O TRABAJADORES DE VIDRIO Y CONCRETO',
  'MINERALES NO METALICOS - OPERADORES DE MAQUINAS PROCESADORAS DE MINERALES NO METALICOS',
  'METALES - SUPERVISORES U OPERADORES DE PROCESAMIENTO Y FUNDICION DE METALES',
  'ALIMENTOS Y BEBIDAS - TRABAJADORES EN LA ELABORACION Y PROCESAMIENTO DE ALIMENTOS, BEBIDAS Y TABACO',
  'TEXTILES Y PRENDAS DE VESTIR - TRABAJADORES EN LA PRODUCCION DE TEXTILES, PRENDAS DE VESTIR Y CALZADO',
  'TEXTILES Y PRENDAS DE VESTIR - TRABAJADORES DE REPARACION DE PRENDAS DE VESTIR Y CALZADO',
  'MADERA, PAPEL, Y PIEL - TRABAJADORES EN LA FABRICACION DE MUEBLES O PRODUCTOS DE MADERA Y/O PIEL',
  'PRODUCTOS QUIMICOS - TRABAJADORES EN EL PROCESAMIENTO Y FABRICACION DE PRODUCTOS QUIMICOS Y FARMACOQUIMICAS',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - TRABAJADORES EN LA FABRICACION DE PRODUCTOS METALICOS, DE HULE Y PLASTICOS',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - ENSAMBLADORES Y ACABADORES DE PRODUCTOS DE PLASTICO',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - FABRICANTES DE HERRAMIENTAS Y TROQUELES',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - HERREROS Y FORJADORES',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - JOYEROS Y ORFEBRES',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - SOLDADORES Y OXICORTADORES',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - TRABAJADORES EN EL ENSAMBLADO DE VEHICULOS, MOLDEADO, LAMINADO Y MONTAJE DE PIEZAS METALICAS, HULE O PLASTICO',
  'PRODUCTOS METALICOS Y DE HULE Y PLASTICO - SUPERVISORES EN LA FABRICACION Y MONTAJE DE ARTICULOS DEPORTIVOS, DE JUGUETES Y SIMILARES',
  'PRODUCTOS ELECTRICOS Y ELECTRONICOS - TRABAJADORES EN LA FABRICACION DE PRODUCTOS ELECTRICOS Y ELECTRONICOS',
  'PRODUCTOS IMPRESOS - TRABAJADORES EN LA ELABORACION DE PRODUCTOS IMPRESOS',
  'TRANSPORTE FERROVIARIO - CONDUCTORES Y OPERADORES DE TREN SUBTERRANEO Y DE TREN LIGERO',
  'TRANSPORTE FERROVIARIO - TRABAJADORES DE FERROCARRILES',
  'TRANSPORTE TERRESTRE - CONDUCTORES DE VEHICULOS DE TRANSPORTE, SERVICIOS DE CARGA Y/O REPARTO',
  'TRANSPORTE AEREO - COORDINADORES Y SUPERVISORES EN SERVICIOS DE TRANSPORTE AEREO',
  'TRANSPORTE AEREO - DESPACHADORES DE VUELO Y ESPECIALISTAS EN SERVICIOS AEREOS',
  'TRANSPORTE AEREO - SUPERVISORES DE SISTEMAS DE COMUNICACION PARA LA AERONAVEGACION',
  'TRANSPORTE AEREO - PILOTOS DE AVIACION E INSTRUCTORES DE VUELO',
  'TRANSPORTE AEREO - SOBRECARGOS',
  'TRANSPORTE MARITIMO Y FLUVIAL - CONDUCTORES DE EMBARCACIONES',
  'TRANSPORTE MARITIMO Y FLUVIAL - JEFES Y CONTROLADORES DE TRAFICO MARITIMO',
  'TRANSPORTE MARITIMO Y FLUVIAL - PILOTOS, CAPITANES DE PUERTOS Y OFICIALES DE CUBIERTA',
  'COMERCIO - DESPACHADORES DE GASOLINERA',
  'COMERCIO - EMPACADORES DE MERCANCIAS',
  'COMERCIO - TAQUILLEROS',
  'COMERCIO - VENDEDORES AMBULANTES',
  'COMERCIO - CAJEROS REGISTRADORES',
  'COMERCIO - REPRESENTANTES DE VENTAS POR TELEFONO O POR TELEVISION',
  'COMERCIO - VENDEDORES ESPECIALIZADOS',
  'COMERCIO - GERENTES O SUPERVISOR DE ESTABLECIMIENTO COMERCIAL',
  'COMERCIO - GERENTES O EMPLEADOS DE VENTA',
  'ALIMENTACION Y HOSPEDAJE - TRABAJADORES DE SERVICIO DE ALIMENTOS Y BEBIDAS',
  'ALIMENTACION Y HOSPEDAJE - JEFES DE COCINA, RESTAURANTE Y/O BAR',
  'ALIMENTACION Y HOSPEDAJE - TRABAJADORES DE SERVICIOS DE ALOJAMIENTO',
  'TURISMO - COORDINADORES DE OPERACIONES EN AGENCIAS DE VIAJES',
  'TURISMO - GUIAS DE EXCURSIONES O ECOTURISTICO',
  'DEPORTE Y ESPARCIMIENTO - ANIMADORES RECREATIVOS',
  'DEPORTE Y ESPARCIMIENTO - ATLETAS, ENTRENADORES O INSTRUCTORES EN DEPORTE Y RECREACION',
  'DEPORTE Y ESPARCIMIENTO - OFICIALES, JUECES Y ARBITROS DEPORTIVOS',
  'SERVICIOS PERSONALES - TRABAJADORES DE SERVICIOS FUNERARIOS O CEMENTERIOS',
  'REPARACION DE ARTICULOS DE USO DOMESTICO Y PERSONAL - CERRAJEROS',
  'REPARACION DE ARTICULOS DE USO DOMESTICO Y PERSONAL - REPARADORES DE ARTICULOS DE HULE',
  'REPARACION DE ARTICULOS DE USO DOMESTICO Y PERSONAL - RELOJEROS Y REPARADORES DE RELOJES',
  'REPARACION DE ARTICULOS DE USO DOMESTICO Y PERSONAL - REPARADORES DE APARATOS ELECTRICOS',
  'LIMPIEZA - SERVICIOS DE CAMARISTAS Y ASEADORES',
  'LIMPIEZA - TRABAJADORES DE TINTORERIA Y LAVANDERIA',
  'LIMPIEZA - FUMIGADORES DE PLAGAS',
  'SERVICIO POSTAL Y MENSAJERIA - EMPLEADOS DE SERVICIOS DE MENSAJERIA',
  'BOLSA, BANCA Y SEGUROS - GERENTES O TRABAJADORES DE SERVICIOS Y PRODUCTOS FINANCIEROS',
  'BOLSA, BANCA Y SEGUROS - VALUADORES',
  'BOLSA, BANCA Y SEGUROS - AGENTES DE VALORES, PROMOTORES Y CORREDORES DE INVERSION',
  'ADMINISTRACION - TRABAJADORES DE ARCHIVO, ALMACEN DE INVENTARIOS',
  'ADMINISTRACION - CAPTURISTA Y OPERADORES DE TELEFONO',
  'ADMINISTRACION - PAGADORES Y COBRADORES',
  'ADMINISTRACION - DIRECTORES, GERENTES Y EMPLEADOS DE COMPRAS, FINANZAS, RECURSOS HUMANOS Y SERVICIOS ADMINISTRATIVOS',
  'ADMINISTRACION - ASISTENTES ADMINISTRATIVOS',
  'ADMINISTRACION - CONTADORES Y AUDITORES',
  'ADMINISTRACION - DIRECTORES, GERENTES Y EMPLEADOS DE PRODUCCION',
  'ADMINISTRACION - DIRECTORES, GERENTES Y EMPLEADOS DE SERVICIOS DE TRANSPORTE',
  'ADMINISTRACION - CONSULTORES',
  'ADMINISTRACION - DIRECTORES, GERENTES Y EMPLEADOS DE COMERCIALIZACION',
  'ADMINISTRACION - DIRECTORES, GERENTES Y EMPLEADOS ADMINISTRATIVOS',
  'SERVICIOS LEGALES - ABOGADOS Y ASESORES LEGALES',
  'SERVICIOS LEGALES - NOTARIOS Y CORREDORES PUBLICOS',
  'SERVICIOS MEDICOS - ENFERMERAS Y/O PARAMEDICOS',
  'SERVICIOS MEDICOS - DIETISTAS Y NUTRIOLOGOS',
  'SERVICIOS MEDICOS - TECNICOS DE LABORATORIO MEDICO',
  'SERVICIOS MEDICOS - DIRECTORES DE INSTITUCIONES EN EL CUIDADO DE LA SALUD',
  'SERVICIOS MEDICOS - FARMACEUTICOS',
  'SERVICIOS MEDICOS - FISIOTERAPEUTAS Y QUIROPRACTICOS',
  'SERVICIOS MEDICOS - MEDICOS ESPECIALISTAS',
  'SERVICIOS MEDICOS - MEDICOS GENERALES Y FAMILIARES',
  'INSPECCION - INSPECTORES DE SALUD AMBIENTAL, SANIDAD Y DEL TRABAJO',
  'INSPECCION - INSPECTORES DE TRANSPORTE DE CARGA Y DE PASAJEROS',
  'INSPECCION - INSPECTORES FISCALES Y DE PRECIOS',
  'INSPECCION - INSPECTORES SANITARIOS Y DE CONTROL DE CALIDAD DE PRODUCTOS CARNICOS, PESQUEROS Y AGRICOLAS',
  'SEGURIDAD SOCIAL - CONSEJEROS DE EMPLEO',
  'SEGURIDAD SOCIAL - TRABAJADORES DE SERVICIO SOCIAL Y DE LA COMUNIDAD',
  'PROTECCION DE BIENES Y/O PERSONAS - BOMBEROS',
  'PROTECCION DE BIENES Y/O PERSONAS - GUARDIAS DE SEGURIDAD',
  'PROTECCION DE BIENES Y/O PERSONAS - DETECTIVES PRIVADOS'
];
// ══════════════════════════════════════════════════════════════
//  GENERADOR PRE-AVISO PLD — Backend.gs
//  Financiera Cualli · Contraloria Operativa
//  v2 — Incluye función "Agregar Pago a Operación Existente"
// ══════════════════════════════════════════════════════════════

var CONFIG = {
  CARPETA_DESTINO_ID: '176oDh98_avfC6wHlvNnofJBHpugAhaPh',
  CORREOS_COMPARTIR: ['robertodelacruz@cualli.mx', 'oficialdecumplimiento@cualli.mx','evelincuriel@cualli.mx'],
  BITACORA_SPREADSHEET_ID: '1yP0mx58dJ7CkeDdKvURk_UEb-an_1qBwI8ER4GHn2IM',

  HDR_BG: '#364494', HDR_TEXT: '#ffffff', HDR_ACCENT: '#35B7C5',
  LADO1_BG: '#35B7C5', LADO1_TEXT: '#ffffff',
  LADO2_BG: '#364494', LADO2_TEXT: '#ffffff',
  SECCION_BG: '#B2B2B2', SECCION_TEXT: '#ffffff',
  LABEL_BG: '#F4F4F8', LABEL_TEXT: '#364494',
  INPUT_BG: '#ffffff', INPUT_BORDER: '#B2B2B2',
  RESUMEN_BG: '#F0F8F9', RESUMEN_BORDER: '#35B7C5', RESUMEN_TEXT: '#364494',
  PIE_BG: '#364494', PIE_TEXT: '#35B7C5', SPACER_BG: '#ffffff',
  DOC_BG: '#F4F6F9', DOC_BORDER: '#35B7C5', DOC_TEXT: '#364494',
  DARK_LINK: '#364494',
  ANCHOS: [80, 170, 155, 170, 155, 130, 150],

  // ── Nuevo: soporte para "Agregar Pago a Operación Existente" ──
  ANCLA_FIN_PAGOS_KEY: 'PLD_ANCLA_FIN_PAGOS',
  CARPETA_RESPALDOS_NOMBRE: 'Respaldos Pre-Insercion',
  PAGOS_MAX: 10,

  PAISES: 'MEXICO,ESTADOS UNIDOS,CANADA,ESPAÑA,COLOMBIA,ARGENTINA,BRASIL,CHILE,PERU,ALEMANIA,FRANCIA,ITALIA,REINO UNIDO,CHINA,JAPON,OTRO',
  ESTADOS: 'AGUASCALIENTES,BAJA CALIFORNIA,BAJA CALIFORNIA SUR,CAMPECHE,CHIAPAS,CHIHUAHUA,CIUDAD DE MEXICO,COAHUILA,COLIMA,DURANGO,GUANAJUATO,GUERRERO,HIDALGO,JALISCO,MEXICO,MICHOACAN,MORELOS,NAYARIT,NUEVO LEON,OAXACA,PUEBLA,QUERETARO,QUINTANA ROO,SAN LUIS POTOSI,SINALOA,SONORA,TABASCO,TAMAULIPAS,TLAXCALA,VERACRUZ,YUCATAN,ZACATECAS',
  TIPO_INMUEBLE: 'Casa / Casa en condominio,Departamento,Edificio habitacional,Edificio comercial,Edificio oficinas,Local comercial independiente,Local en centro comercial,Oficina,Bodega comercial,Bodega industrial,Nave Industrial,Terreno urbano habitacional,Terreno no urbano habitacional,Terreno urbano comercial o industrial,Terreno no urbano comercial o industrial,Terreno ejidal,Rancho/Hacienda/Quinta,Huerta,Otro',
  MONEDAS: 'Peso mexicano,Dolar estadounidense,Euro',
  FORMA_PAGO: 'Contado,Diferido o en parcialidades,Dacion en pago,Prestamo o credito,Permuta',
  INSTRUMENTO_PAGO: 'Efectivo,Tarjeta de Credito,Tarjeta de Debito,Tarjeta de Prepago,Cheque Nominativo,Cheque de Caja,Cheques de Viajero,Transferencia Interbancaria,Transferencia Misma Institucion,Transferencia Internacional,Orden de Pago,Giro,Otros',
  FIGURA_CLIENTE: 'Comprador,Vendedor'

  
};

function doGet() {
  return HtmlService.createTemplateFromFile('Interfaz').evaluate()
    .setTitle('Generador de Documentos Hipoo')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .addMetaTag('theme-color', '#364494');      // barra del navegador del celular en el azul institucional
}

function generarPreAvisoPLD(params) {
  try {
    var fechaHoy = Utilities.formatDate(new Date(), 'America/Mexico_City', 'dd-MM-yyyy');
    var nombreArchivo = 'Pre_PLD_' + params.operacion.substring(0, 30) + '_' + fechaHoy;
    
    var ss = SpreadsheetApp.create(nombreArchivo);
    ss.setSpreadsheetLocale('es_MX');
    ss.setSpreadsheetTimeZone('America/Mexico_City');

    var sheet = ss.getActiveSheet();
    sheet.setName('Pre Aviso PLD');

    var archivo = DriveApp.getFileById(ss.getId());
    
    try {
      var userEmail = Session.getActiveUser().getEmail();
      if (userEmail) archivo.addEditor(userEmail);
    } catch (e) { Logger.log('No se pudo obtener el correo: ' + e.message); }

    try {
      var carpeta = DriveApp.getFolderById(CONFIG.CARPETA_DESTINO_ID);
      carpeta.addFile(archivo);
      DriveApp.getRootFolder().removeFile(archivo);
    } catch (e) { Logger.log('Carpeta no encontrada: ' + e.message); }

    for (var i = 0; i < CONFIG.ANCHOS.length; i++) {
      sheet.setColumnWidth(i + 1, CONFIG.ANCHOS[i]);
    }
    sheet.setHiddenGridlines(true);

    // ── Crear hoja oculta de catalogos ──
    var rangoCatalogo = crearHojaCatalogos(ss);

    var fila = 1;
    var celdasEditables = [];
    var celdasDropdown = [];
    var celdasRegex = [];
    var celdasFechas = [];
    var celdasMontos = [];
    var celdasActividad = []; // Celdas que llevan el dropdown de Actividades Economicas
    var marcas = [];

    // ENCABEZADO
    fila = escribirEncabezado(sheet, fila, params, marcas, celdasEditables);

    // VENDEDORES
    for (var v = 1; v <= params.vendedorCount; v++) {
      fila = escribirBarraLado(sheet, fila, 'LADO 1', 'VENDEDOR ' + v + ' DE ' + params.vendedorCount, CONFIG.LADO1_BG, CONFIG.LADO1_TEXT);
      if (params.vendedorRegimen === 'PF') {
        fila = escribirBloquePersonaFisica(sheet, fila, celdasEditables, celdasDropdown, celdasRegex, celdasFechas, celdasMontos, marcas, 'Vendedor_' + v, celdasActividad);
      } else {
        fila = escribirBloquePersonaMoral(sheet, fila, celdasEditables, celdasDropdown, celdasRegex, celdasFechas, celdasMontos, marcas, 'Vendedor_' + v, celdasActividad);
      }
      fila = escribirBarraSeccion(sheet, fila, 'Domicilio Nacional');
      fila = escribirBloqueDomicilio(sheet, fila, celdasEditables, celdasDropdown);
      fila = escribirBarraSeccion(sheet, fila, 'Datos de Contacto');
      fila = escribirBloqueDatosContacto(sheet, fila, celdasEditables, celdasDropdown);
    }

    // DETALLES OPERACIÓN
    fila = escribirBarraLado(sheet, fila, 'LADO 1', 'DETALLES DE LA OPERACION', CONFIG.LADO1_BG, CONFIG.LADO1_TEXT);
    fila = escribirBloqueDetallesOp(sheet, fila, celdasEditables, celdasDropdown, celdasFechas, marcas);

    // COMPRADORES
    for (var c = 1; c <= params.compradorCount; c++) {
      fila = escribirBarraLado(sheet, fila, 'LADO 2', 'COMPRADOR ' + c + ' DE ' + params.compradorCount, CONFIG.LADO2_BG, CONFIG.LADO2_TEXT);
      if (params.compradorRegimen === 'PF') {
        fila = escribirBloquePersonaFisica(sheet, fila, celdasEditables, celdasDropdown, celdasRegex, celdasFechas, celdasMontos, marcas, 'Comprador_' + c, celdasActividad);
      } else {
        fila = escribirBloquePersonaMoral(sheet, fila, celdasEditables, celdasDropdown, celdasRegex, celdasFechas, celdasMontos, marcas, 'Comprador_' + c, celdasActividad);
      }
    }

    // INMUEBLE
    fila = escribirBarraLado(sheet, fila, 'LADO 1', 'CARACTERISTICAS DEL INMUEBLE', CONFIG.LADO1_BG, CONFIG.LADO1_TEXT);
    fila = escribirBloqueInmueble(sheet, fila, celdasEditables, celdasDropdown, celdasMontos, marcas);

    // ESCRITURACIÓN
    fila = escribirBarraLado(sheet, fila, 'LADO 2', 'ESCRITURACION', CONFIG.LADO2_BG, CONFIG.LADO2_TEXT);
    fila = escribirBloqueEscrituracion(sheet, fila, celdasEditables, celdasDropdown, celdasFechas, celdasMontos, marcas);

    // PAGOS
    fila = escribirBarraLado(sheet, fila, 'LADO 2', 'LIQUIDACION  —  ' + params.pagosCount + ' PAGO(S)', CONFIG.LADO2_BG, CONFIG.LADO2_TEXT, marcas, 'Barra_Liquidacion');
    for (var p = 1; p <= params.pagosCount; p++) {
      fila = escribirBarraSeccion(sheet, fila, 'PAGO ' + p);
      fila = escribirBloquePago(sheet, fila, celdasEditables, celdasDropdown, celdasFechas, celdasMontos, marcas, 'Pago_' + p);
    }

    // (El ancla para "Agregar Pago" se coloca MÁS ABAJO, después de aplicar
    // protecciones, dropdowns y validaciones — ver nota junto a LLAMADAS FINALES.
    // Nunca antes: si esa línea llegara a fallar, no debe poder tumbar la
    // protección ni las validaciones del documento.)
    var filaAncla = fila; // se guarda la posición; el ancla se agrega hasta el final

    // PIE
    fila = escribirSpacer(sheet, fila);
    sheet.getRange(fila, 1, 1, 7).merge().setValue('Gracias por tu colaboracion!')
      .setFontFamily('Arial').setFontSize(13).setFontWeight('bold')
      .setHorizontalAlignment('center').setVerticalAlignment('middle')
      .setFontColor(CONFIG.PIE_TEXT).setBackground(CONFIG.PIE_BG);
    sheet.setRowHeight(fila, 44);
    fila++;
    sheet.getRange(fila, 1, 1, 7).merge().setBackground(CONFIG.HDR_ACCENT);
    sheet.setRowHeight(fila, 4);

    // LLAMADAS FINALES
    aplicarDropdowns(sheet, celdasDropdown);
    aplicarDropdownActividad(sheet, celdasActividad, rangoCatalogo);
    aplicarProtecciones(sheet, fila, celdasEditables);
    aplicarValidacionesRegex(sheet, celdasRegex);
    aplicarValidacionesFechas(sheet, celdasFechas);
    aplicarValidacionMontos(sheet, celdasMontos);
    aplicarSemaforo(sheet, celdasEditables);
    
    for (var m = 0; m < marcas.length; m++) {
      ss.setNamedRange(marcas[m].name, sheet.getRange(marcas[m].cell));
    }

    // ── ANCLA para "Agregar Pago" (Developer Metadata, invisible para el
    // usuario). Se coloca AQUÍ a propósito — después de que protecciones,
    // dropdowns y validaciones ya quedaron aplicadas — y envuelta en su
    // propio try/catch: si esta línea llegara a fallar por cualquier motivo,
    // el documento igual queda protegido y validado con normalidad; lo único
    // que se pierde es la posibilidad de usar "Agregar Pago" en automático
    // sobre ese documento (se podría habilitar después con retrofitearAncla).
    try {
      sheet.getRange(filaAncla + ':' + filaAncla).addDeveloperMetadata(CONFIG.ANCLA_FIN_PAGOS_KEY, 'v1', SpreadsheetApp.DeveloperMetadataVisibility.PROJECT);
    } catch (e) {
      Logger.log('No se pudo agregar el ancla de "Agregar Pago": ' + e.message);
      // Diagnóstico visible: se deja constancia en la bitácora (pestaña
      // Historial_Modificaciones) para poder ver el motivo exacto sin tener
      // que entrar al registro de ejecuciones de Apps Script. Envuelto en su
      // propio try/catch para que ni esto pueda interrumpir la generación.
      try {
        registrarModificacionEnBitacora(ss.getId(), params.operacion, userEmail, 'ADVERTENCIA: no se pudo agregar el ancla de "Agregar Pago" al crear el documento — ' + e.message);
      } catch (e2) { Logger.log('Tampoco se pudo registrar la advertencia del ancla: ' + e2.message); }
    }

    compartirArchivo(archivo);
    sheet.setFrozenRows(2);
    var enBitacora = false;
    try {
      enBitacora = registrarEnBitacora(
        ss.getId(), 
        ss.getUrl(), 
        nombreArchivo, 
        params.operacion, 
        params.asociadoLado1, 
        params.asociadoLado2
      );
    } catch (e) {
      Logger.log('No se pudo asentar el registro en la bitácora: ' + e.message);
    }
    // ────────────────────────────────────────────────────────────

    // 'bitacora' avisa a la pantalla si el documento quedó realmente inscrito (sin eso no aparece en «Mis Pre PLD» ni en la revisión).
    return { success: true, url: ss.getUrl(), id: ss.getId(), bitacora: enBitacora };
  } catch (e) {
    Logger.log('Error: ' + e.message + '\n' + e.stack);
    return { success: false, message: e.message };
  }
}


// ══════════════════════════════════════════════════════════════
//  HOJA OCULTA DE CATÁLOGOS + DROPDOWN DE ACTIVIDADES
// ══════════════════════════════════════════════════════════════

function crearHojaCatalogos(ss) {
  var hojaCat = ss.insertSheet('_Catalogos');
  
  // Escribir actividades en columna A
  var datos = [];
  for (var i = 0; i < ACTIVIDADES.length; i++) {
    datos.push([ACTIVIDADES[i]]);
  }
  hojaCat.getRange(1, 1, datos.length, 1).setValues(datos);
  
  // Ocultar la hoja
  hojaCat.hideSheet();
  
  // Devolver el rango para usarlo en requireValueInRange
  return hojaCat.getRange(1, 1, datos.length, 1);
}

function aplicarDropdownActividad(sheet, celdasActividad, rangoCatalogo) {
  if (celdasActividad.length === 0) return;
  var regla = SpreadsheetApp.newDataValidation()
    .requireValueInRange(rangoCatalogo, true)
    .setAllowInvalid(false)
    .build();
  for (var i = 0; i < celdasActividad.length; i++) {
    sheet.getRange(celdasActividad[i]).setDataValidation(regla);
  }
}


// ══════════════════════════════════════════════════════════════
//  FUNCIONES DE DIBUJO
// ══════════════════════════════════════════════════════════════

function escribirEncabezado(sheet, fila, params, marcas, celdasEditables) {
  sheet.getRange(fila, 1, 1, 7).merge().setBackground(CONFIG.HDR_ACCENT); sheet.setRowHeight(fila, 4); fila++;
  sheet.getRange(fila, 1, 1, 7).merge().setValue('PRE AVISO PLD  /  Entregable max 48 hrs POSTERIORES a  la firma de Escritura')
    .setFontFamily('Arial').setFontSize(14).setFontWeight('bold').setFontColor(CONFIG.HDR_TEXT).setBackground(CONFIG.HDR_BG)
    .setHorizontalAlignment('center').setVerticalAlignment('middle').setWrap(true);
  sheet.setRowHeight(fila, 48); fila++;
  sheet.getRange(fila, 1, 1, 7).merge().setValue('Recordemos que el momento de la escrituracion es el ULTIMO que tenemos para recabar informacion faltante.')
    .setFontFamily('Arial').setFontSize(9).setFontStyle('italic').setFontColor(CONFIG.HDR_ACCENT).setBackground(CONFIG.HDR_BG)
    .setHorizontalAlignment('center').setVerticalAlignment('middle').setWrap(true);
  sheet.setRowHeight(fila, 30); fila++;
  sheet.getRange(fila, 1, 1, 7).merge().setBackground(CONFIG.HDR_ACCENT); sheet.setRowHeight(fila, 3); fila++;
  fila = escribirSpacer(sheet, fila);

  fila = escribirCampoHeader(sheet, fila, 'Operacion:', params.operacion, marcas, 'Operacion_Nombre', celdasEditables);

  sheet.getRange(fila, 1, 1, 2).merge().setValue('Asociados Responsables:')
    .setFontFamily('Arial').setFontSize(9).setFontWeight('bold').setFontColor(CONFIG.LABEL_TEXT).setBackground(CONFIG.LABEL_BG).setVerticalAlignment('middle');
  
  var a1L1 = sheet.getRange(fila, 3, 1, 2).merge().setValue('Lado 1:  ' + (params.asociadoLado1 || ''))
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG).setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  marcas.push({name: 'Asociado_Lado1', cell: a1L1});
  celdasEditables.push(a1L1);

  var a1L2 = sheet.getRange(fila, 5, 1, 3).merge().setValue('Lado 2:  ' + (params.asociadoLado2 || ''))
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG).setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  marcas.push({name: 'Asociado_Lado2', cell: a1L2});
  celdasEditables.push(a1L2);
  sheet.setRowHeight(fila, 28); fila++;

  sheet.getRange(fila, 1, 1, 2).merge().setValue('Liga a Expediente Digital:')
    .setFontFamily('Arial').setFontSize(9).setFontWeight('bold').setFontColor(CONFIG.LABEL_TEXT).setBackground(CONFIG.LABEL_BG).setVerticalAlignment('middle');
  var a1Liga = sheet.getRange(fila, 3, 1, 5).merge().setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG)
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  celdasEditables.push(a1Liga);
  marcas.push({name: 'Liga_Expediente', cell: a1Liga});
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila);

  var rl = { 'PF': 'Persona Fisica', 'PM': 'Persona Moral' };
  var resumen = '▸ ' + params.vendedorCount + ' Vendedor(es) ' + rl[params.vendedorRegimen] + '    ▸ ' + params.compradorCount + ' Comprador(es) ' + rl[params.compradorRegimen] + '    ▸ ' + params.pagosCount + ' Pago(s)';
  var a1_resumen = sheet.getRange(fila, 1, 1, 7).merge().setValue(resumen)
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.RESUMEN_TEXT).setBackground(CONFIG.RESUMEN_BG)
    .setHorizontalAlignment('center').setVerticalAlignment('middle').setWrap(true).getA1Notation();
  marcas.push({ name: 'Resumen_Operacion', cell: a1_resumen }); // ← permite actualizar el texto al agregar un pago
  sheet.setRowHeight(fila, 34);
  sheet.getRange(fila, 1).setBorder(true, true, true, false, false, false, CONFIG.RESUMEN_BORDER, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(fila, 7).setBorder(true, false, true, true, false, false, CONFIG.RESUMEN_BORDER, SpreadsheetApp.BorderStyle.SOLID_THICK);
  fila++;

  // Sello discreto de auditoría: queda vacío al crear el documento y solo se
  // llena si más adelante se usa "Agregar Pago a Operación Existente".
  var a1_sello = sheet.getRange(fila, 1, 1, 7).merge().setValue('')
    .setFontFamily('Arial').setFontSize(8).setFontStyle('italic').setFontColor('#8a8a8a')
    .setHorizontalAlignment('center').setVerticalAlignment('middle').getA1Notation();
  marcas.push({ name: 'Sello_UltimaModificacion', cell: a1_sello });
  sheet.setRowHeight(fila, 16);
  fila++;

  fila = escribirSpacer(sheet, fila);
  fila = escribirSeccionDocumentos(sheet, fila);
  fila = escribirSpacer(sheet, fila);
  fila = escribirSeccionEnlaces(sheet, fila);
  fila = escribirSpacer(sheet, fila);
  return fila;
}

function escribirCampoHeader(sheet, fila, label, valor, marcas, nombreMarca, celdasEditables) {
  sheet.getRange(fila, 1, 1, 2).merge().setValue(label)
    .setFontFamily('Arial').setFontSize(9).setFontWeight('bold').setFontColor(CONFIG.LABEL_TEXT).setBackground(CONFIG.LABEL_BG).setVerticalAlignment('middle');
  var a1 = sheet.getRange(fila, 3, 1, 5).merge().setValue(valor || '')
    .setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle').setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG)
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  if (marcas && nombreMarca) marcas.push({name: nombreMarca, cell: a1});
  if (celdasEditables) celdasEditables.push(a1);
  sheet.setRowHeight(fila, 28);
  return fila + 1;
}

function escribirSeccionDocumentos(sheet, fila) {
  sheet.getRange(fila, 1, 1, 7).merge().setValue('📋  DOCUMENTOS REQUERIDOS PLD')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.DOC_TEXT).setBackground(CONFIG.DOC_BG).setVerticalAlignment('middle');
  sheet.getRange(fila, 1).setBorder(true, true, false, false, false, false, CONFIG.DOC_BORDER, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(fila, 7).setBorder(true, false, false, true, false, false, CONFIG.DOC_BORDER, SpreadsheetApp.BorderStyle.SOLID);
  sheet.setRowHeight(fila, 28); fila++;

  var docs = [
    ['✓  La nueva escritura de compraventa', '✓  Comprobantes de pago por monto total de la operacion'],
    ['✓  Identificacion oficial vigente', '✓  Formatos PLD firmados'],
    ['✓  CSF Constancia de Situacion Fiscal', '']
  ];
  for (var i = 0; i < docs.length; i++) {
    sheet.getRange(fila, 1, 1, 3).merge().setValue(docs[i][0]).setFontFamily('Arial').setFontSize(9).setFontColor(CONFIG.DOC_TEXT).setBackground(CONFIG.DOC_BG).setVerticalAlignment('middle');
    sheet.getRange(fila, 4, 1, 4).merge().setValue(docs[i][1]).setFontFamily('Arial').setFontSize(9).setFontColor(CONFIG.DOC_TEXT).setBackground(CONFIG.DOC_BG).setVerticalAlignment('middle');
    sheet.getRange(fila, 1).setBorder(false, true, false, false, false, false, CONFIG.DOC_BORDER, SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(fila, 7).setBorder(false, false, false, true, false, false, CONFIG.DOC_BORDER, SpreadsheetApp.BorderStyle.SOLID);
    sheet.setRowHeight(fila, 22); fila++;
  }
  sheet.getRange(fila - 1, 1, 1, 7).setBorder(false, true, true, true, false, false, CONFIG.DOC_BORDER, SpreadsheetApp.BorderStyle.SOLID);
  return fila;
}

// ── SOLO QUEDA EL LINK DEL FORMULARIO (el catálogo ya es dropdown) ──
function escribirSeccionEnlaces(sheet, fila) {
  var estiloLink = SpreadsheetApp.newTextStyle().setForegroundColor('#ffffff').setUnderline(true).build();

  sheet.getRange(fila, 1, 1, 3).merge().setValue('📝  Formulario de Operaciones Firmadas')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_TEXT).setBackground(CONFIG.DARK_LINK)
    .setVerticalAlignment('middle').setBorder(true, true, true, false, false, false, CONFIG.DARK_LINK, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(fila, 4, 1, 4).merge().setFontFamily('Arial').setFontSize(9).setFontColor(CONFIG.HDR_ACCENT).setBackground(CONFIG.DARK_LINK)
    .setVerticalAlignment('middle').setBorder(true, false, true, true, false, false, CONFIG.DARK_LINK, SpreadsheetApp.BorderStyle.SOLID);
  var rt = SpreadsheetApp.newRichTextValue().setText('▸ Abrir formulario en Google Forms')
    .setLinkUrl(2, 34, 'https://docs.google.com/forms/d/e/1FAIpQLSchuuGFfwQta-UXEt0aFUG4ZTLOAZVOJNrxm6pb09UiR5E4UA/viewform')
    .setTextStyle(2, 34, estiloLink).build();
  sheet.getRange(fila, 4).setRichTextValue(rt); sheet.setRowHeight(fila, 32); fila++;
  return fila;
}

// El parámetro (marcas, nombreMarca) es opcional — solo se usa para la barra
// de "LIQUIDACION", que necesita poder localizarse luego para actualizar su
// texto al agregar un pago. Las demás llamadas siguen funcionando igual.
function escribirBarraLado(sheet, fila, lado, texto, bg, textColor, marcas, nombreMarca) {
  sheet.getRange(fila, 1).setValue(lado).setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(textColor).setBackground(bg).setHorizontalAlignment('center').setVerticalAlignment('middle');
  var a1 = sheet.getRange(fila, 2, 1, 6).merge().setValue(texto).setFontFamily('Arial').setFontSize(11).setFontWeight('bold').setFontColor(textColor).setBackground(bg).setVerticalAlignment('middle').getA1Notation();
  if (marcas && nombreMarca) marcas.push({ name: nombreMarca, cell: a1 });
  sheet.setRowHeight(fila, 34); return fila + 1;
}

function escribirBarraSeccion(sheet, fila, texto) {
  sheet.getRange(fila, 1).setBackground(CONFIG.SECCION_BG);
  sheet.getRange(fila, 2, 1, 6).merge().setValue(texto).setFontFamily('Arial').setFontSize(9).setFontWeight('bold').setFontColor(CONFIG.SECCION_TEXT).setBackground(CONFIG.SECCION_BG).setVerticalAlignment('middle');
  sheet.setRowHeight(fila, 26); return fila + 1;
}

// ── PF: ahora recibe celdasActividad para el dropdown de Actividades ──
function escribirBloquePersonaFisica(sheet, fila, ed, dd, cr, cf, cm, marcas, prefijo, celdasActividad) {
  fila = escribirBarraSeccion(sheet, fila, 'Persona Fisica');
  fila = escribirFilaCampos(sheet, fila, ed, [
    { label: 'Nombres:', col: 2, inputCol: 3, marca: prefijo + '_Nombres' },
    { label: 'Ap. Paterno:', col: 4, inputCol: 5, marca: prefijo + '_ApPaterno' },
    { label: 'Ap. Materno:', col: 6, inputCol: 7, marca: prefijo + '_ApMaterno' }
  ], cf, cm, marcas);
  
  var fVal = fila;
  fila = escribirFilaCampos(sheet, fila, ed, [
    { label: 'Fecha Nac (dd/mm/aaaa):', col: 2, inputCol: 3, type: 'fecha', marca: prefijo + '_FechaNac' },
    { label: 'RFC (13 Posiciones):', col: 4, inputCol: 5, marca: prefijo + '_RFC' },
    { label: 'CURP (18 Posiciones):', col: 6, inputCol: 7, marca: prefijo + '_CURP' }
  ], cf, cm, marcas);
  cr.push({ cell: sheet.getRange(fVal, 5).getA1Notation(), type: 'RFC_PF' });
  cr.push({ cell: sheet.getRange(fVal, 7).getA1Notation(), type: 'CURP' });

  setLabelCell(sheet, fila, 2, 'Pais de Nacionalidad:');
  setInputCell(sheet, fila, 3, ed);
  dd.push({ fila: fila, col: 3, opciones: CONFIG.PAISES });
  
  setLabelCell(sheet, fila, 4, 'Actividad Economica:');
  var a1_act = sheet.getRange(fila, 5, 1, 3).merge().setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG)
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  ed.push(a1_act);
  marcas.push({name: prefijo + '_ActividadEconomica', cell: a1_act});
  celdasActividad.push(a1_act); // ← DROPDOWN DE ACTIVIDADES
  
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila);
  return fila;
}

// ── PM: ahora recibe celdasActividad para el dropdown de Giro Mercantil ──
function escribirBloquePersonaMoral(sheet, fila, ed, dd, cr, cf, cm, marcas, prefijo, celdasActividad) {
  fila = escribirBarraSeccion(sheet, fila, 'Persona Moral');
  var fVal1 = fila;
  fila = escribirFilaCampos(sheet, fila, ed, [
    { label: 'Denominacion / Razon Social:', col: 2, inputCol: 3, marca: prefijo + '_Denominacion' },
    { label: 'Fecha Constitucion:', col: 4, inputCol: 5, type: 'fecha', marca: prefijo + '_FechaConst' },
    { label: 'RFC (12 Posiciones):', col: 6, inputCol: 7, marca: prefijo + '_RFC_Moral' }
  ], cf, cm, marcas);
  cr.push({ cell: sheet.getRange(fVal1, 7).getA1Notation(), type: 'RFC_PM' });

  setLabelCell(sheet, fila, 2, 'Actividad o Giro Mercantil:');
  var a1_giro = sheet.getRange(fila, 3, 1, 2).merge().setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG)
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  ed.push(a1_giro);
  marcas.push({name: prefijo + '_GiroMercantil', cell: a1_giro});
  celdasActividad.push(a1_giro); // ← DROPDOWN DE ACTIVIDADES

  setLabelCell(sheet, fila, 5, 'Pais de Nacionalidad:');
  setInputCell(sheet, fila, 6, ed);
  dd.push({ fila: fila, col: 6, opciones: CONFIG.PAISES });
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila);
  
  fila = escribirBarraSeccion(sheet, fila, 'Representante o Apoderado Legal');
  fila = escribirFilaCampos(sheet, fila, ed, [
    { label: 'Nombres:', col: 2, inputCol: 3, marca: prefijo + '_Rep_Nombres' },
    { label: 'Ap. Paterno:', col: 4, inputCol: 5, marca: prefijo + '_Rep_ApPaterno' },
    { label: 'Ap. Materno:', col: 6, inputCol: 7, marca: prefijo + '_Rep_ApMaterno' }
  ], cf, cm, marcas);
  
  var fVal2 = fila;
  fila = escribirFilaCampos(sheet, fila, ed, [
    { label: 'Fecha Nac (dd/mm/aaaa):', col: 2, inputCol: 3, type: 'fecha', marca: prefijo + '_Rep_FechaNac' },
    { label: 'RFC (13 Posiciones):', col: 4, inputCol: 5, marca: prefijo + '_Rep_RFC' },
    { label: 'CURP (18 Posiciones):', col: 6, inputCol: 7, marca: prefijo + '_Rep_CURP' }
  ], cf, cm, marcas);
  cr.push({ cell: sheet.getRange(fVal2, 5).getA1Notation(), type: 'RFC_PF' });
  cr.push({ cell: sheet.getRange(fVal2, 7).getA1Notation(), type: 'CURP' });

  fila = escribirSpacer(sheet, fila);
  return fila;
}

function escribirBloqueDomicilio(sheet, fila, ed, dd) {
  setLabelCell(sheet, fila, 2, 'Entidad Federativa:'); setInputCell(sheet, fila, 3, ed); dd.push({ fila: fila, col: 3, opciones: CONFIG.ESTADOS });
  setLabelCell(sheet, fila, 4, 'Municipio / Alcaldía:'); setInputCell(sheet, fila, 5, ed);
  setLabelCell(sheet, fila, 6, 'Colonia:'); setInputCell(sheet, fila, 7, ed);
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirFilaCampos(sheet, fila, ed, [{ label: 'Calle, avenida o via:', col: 2, inputCol: 3 }, { label: 'Num. Ext:', col: 4, inputCol: 5 }, { label: 'Num. Int:', col: 6, inputCol: 7 }]);
  setLabelCell(sheet, fila, 2, 'C.P.:'); setInputCell(sheet, fila, 3, ed);
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila); return fila;
}

function escribirBloqueDatosContacto(sheet, fila, ed, dd) {
  setLabelCell(sheet, fila, 2, 'Pais:'); setInputCell(sheet, fila, 3, ed); dd.push({ fila: fila, col: 3, opciones: CONFIG.PAISES });
  setLabelCell(sheet, fila, 4, 'Tel. Movil:'); setInputCell(sheet, fila, 5, ed);
  setLabelCell(sheet, fila, 6, 'Correo electronico:'); setInputCell(sheet, fila, 7, ed);
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila); return fila;
}

function escribirBloqueDetallesOp(sheet, fila, ed, dd, cf, marcas) {
  setLabelCell(sheet, fila, 2, 'Fecha de la Op (dd/mm/aaaa):');
  var a1 = setInputCell(sheet, fila, 3, ed);
  cf.push(a1);
  marcas.push({name: 'Operacion_Fecha', cell: a1});
  setLabelCell(sheet, fila, 4, 'Tipo de la Op:'); setInputCell(sheet, fila, 5, ed);
  setLabelCell(sheet, fila, 6, 'Figura del Cliente:'); setInputCell(sheet, fila, 7, ed); dd.push({ fila: fila, col: 7, opciones: CONFIG.FIGURA_CLIENTE });
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila); return fila;
}

function escribirBloqueInmueble(sheet, fila, ed, dd, cm, marcas) {
  setLabelCell(sheet, fila, 2, 'Tipo de inmueble:'); setInputCell(sheet, fila, 3, ed); dd.push({ fila: fila, col: 3, opciones: CONFIG.TIPO_INMUEBLE });
  setLabelCell(sheet, fila, 4, 'Valor Pactado: $');
  var a1_valor = setInputCell(sheet, fila, 5, ed); cm.push(a1_valor); marcas.push({name: 'Inmueble_ValorPactado', cell: a1_valor});
  setLabelCell(sheet, fila, 6, 'Folio Real:');
  var a1_folio = setInputCell(sheet, fila, 7, ed); marcas.push({name: 'Inmueble_FolioReal', cell: a1_folio});
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirFilaCampos(sheet, fila, ed, [{ label: 'm2 Terreno:', col: 2, inputCol: 3 }, { label: 'm2 Construccion:', col: 4, inputCol: 5 }]);
  fila = escribirSpacer(sheet, fila);
  fila = escribirBarraSeccion(sheet, fila, 'Direccion del Inmueble');
  setLabelCell(sheet, fila, 2, 'Entidad Federativa:'); setInputCell(sheet, fila, 3, ed); dd.push({ fila: fila, col: 3, opciones: CONFIG.ESTADOS });
  setLabelCell(sheet, fila, 4, 'Municipio / Alcaldía:'); setInputCell(sheet, fila, 5, ed);
  setLabelCell(sheet, fila, 6, 'Colonia:'); setInputCell(sheet, fila, 7, ed);
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirFilaCampos(sheet, fila, ed, [{ label: 'Calle:', col: 2, inputCol: 3 }, { label: 'Num. Ext:', col: 4, inputCol: 5 }, { label: 'Num. Int:', col: 6, inputCol: 7 }]);
  setLabelCell(sheet, fila, 2, 'C.P.:'); setInputCell(sheet, fila, 3, ed);
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila); return fila;
}

function escribirBloqueEscrituracion(sheet, fila, ed, dd, cf, cm, marcas) {
  setLabelCell(sheet, fila, 2, 'Num. del Instrumento Publico:');
  var a1_num = setInputCell(sheet, fila, 3, ed); marcas.push({name: 'Escritura_Num', cell: a1_num});
  setLabelCell(sheet, fila, 4, 'Fecha del Instrumento:');
  var a1_fecha = sheet.getRange(fila, 5, 1, 3).merge().setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG)
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  ed.push(a1_fecha); cf.push(a1_fecha); marcas.push({name: 'Escritura_Fecha', cell: a1_fecha});
  sheet.setRowHeight(fila, 28); fila++;
  setLabelCell(sheet, fila, 2, 'Num. Notario:');
  var a1_not = setInputCell(sheet, fila, 3, ed); marcas.push({name: 'Escritura_Notario', cell: a1_not});
  setLabelCell(sheet, fila, 4, 'Entidad Fed. del Notario:'); setInputCell(sheet, fila, 5, ed); dd.push({ fila: fila, col: 5, opciones: CONFIG.ESTADOS });
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirFilaCampos(sheet, fila, ed, [
    { label: 'Valor Avaluo: $', col: 2, inputCol: 3, type: 'monto' },
    { label: 'Valor Catastral: $', col: 4, inputCol: 5, type: 'monto' }
  ], cf, cm, marcas);
  fila = escribirSpacer(sheet, fila); return fila;
}

function escribirBloquePago(sheet, fila, ed, dd, cf, cm, marcas, prefijo) {
  setLabelCell(sheet, fila, 2, 'Fecha de Pago (dd/mm/aaaa):');
  var a1_fecha = setInputCell(sheet, fila, 3, ed); cf.push(a1_fecha); marcas.push({name: prefijo + '_Fecha', cell: a1_fecha});
  setLabelCell(sheet, fila, 4, 'Comprobante de Pago:');
  var a1_comp = sheet.getRange(fila, 5, 1, 3).merge().setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG)
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  ed.push(a1_comp);
  sheet.setRowHeight(fila, 28); fila++;
  setLabelCell(sheet, fila, 2, 'Monto del pago:');
  var a1_monto = setInputCell(sheet, fila, 3, ed); cm.push(a1_monto); marcas.push({name: prefijo + '_Monto', cell: a1_monto});
  setLabelCell(sheet, fila, 4, 'Moneda o Divisa:');
  var a1_mon = setInputCell(sheet, fila, 5, ed); dd.push({ fila: fila, col: 5, opciones: CONFIG.MONEDAS }); marcas.push({name: prefijo + '_Moneda', cell: a1_mon});
  sheet.setRowHeight(fila, 28); fila++;
  setLabelCell(sheet, fila, 2, 'Forma de Pago:');
  var a1_forma = setInputCell(sheet, fila, 3, ed); dd.push({ fila: fila, col: 3, opciones: CONFIG.FORMA_PAGO }); marcas.push({name: prefijo + '_Forma', cell: a1_forma});
  sheet.setRowHeight(fila, 28); fila++;
  setLabelCell(sheet, fila, 2, 'Instrumento de Pago:');
  var a1_inst = sheet.getRange(fila, 3, 1, 5).merge().setBackground(CONFIG.INPUT_BG).setVerticalAlignment('middle')
    .setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG)
    .setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID).getA1Notation();
  ed.push(a1_inst); dd.push({ fila: fila, col: 3, opciones: CONFIG.INSTRUMENTO_PAGO }); marcas.push({name: prefijo + '_Instrumento', cell: a1_inst});
  sheet.setRowHeight(fila, 28); fila++;
  fila = escribirSpacer(sheet, fila); return fila;
}


// ══════════════════════════════════════════════════════════════
//  HELPERS Y VALIDACIONES
// ══════════════════════════════════════════════════════════════

function aplicarValidacionesFechas(sheet, celdasFechas) {
  var rule = SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).setHelpText('Ingresa una fecha válida. (DD/MM/AAAA)').build();
  for (var i = 0; i < celdasFechas.length; i++) {
    var range = sheet.getRange(celdasFechas[i]); range.setDataValidation(rule); range.setNumberFormat('dd/MM/yyyy');
  }
}

function aplicarValidacionMontos(sheet, celdasMontos) {
  var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThanOrEqualTo(0).setAllowInvalid(false).setHelpText('Solo números. El formato se aplicará automáticamente.').build();
  for (var i = 0; i < celdasMontos.length; i++) {
    var range = sheet.getRange(celdasMontos[i]); range.setDataValidation(rule); range.setNumberFormat('"$ "#,##0.00');
  }
}

function aplicarSemaforo(sheet, celdasEditables) {
  if (celdasEditables.length === 0) return;
  var ranges = celdasEditables.map(function(a1) { return sheet.getRange(a1); });
  var rule = SpreadsheetApp.newConditionalFormatRule().whenCellEmpty().setBackground('#FFEBEB').setRanges(ranges).build();
  var rules = sheet.getConditionalFormatRules(); rules.push(rule); sheet.setConditionalFormatRules(rules);
}

function aplicarValidacionesRegex(sheet, celdasRegex) {
  for (var i = 0; i < celdasRegex.length; i++) {
    var item = celdasRegex[i]; var range = sheet.getRange(item.cell); var formula = ""; var mensaje = "";
    if (item.type === 'RFC_PF') {
      formula = '=OR(ISBLANK(' + item.cell + '), REGEXMATCH(UPPER(TO_TEXT(' + item.cell + ')), "^[A-ZÑ&]{4}[0-9]{6}[A-Z0-9]{3}$"))';
      mensaje = "El RFC Física requiere 13 posiciones (4 letras, 6 números, 3 homoclave).";
    } else if (item.type === 'RFC_PM') {
      formula = '=OR(ISBLANK(' + item.cell + '), REGEXMATCH(UPPER(TO_TEXT(' + item.cell + ')), "^[A-ZÑ&]{3}[0-9]{6}[A-Z0-9]{3}$"))';
      mensaje = "El RFC Moral requiere 12 posiciones (3 letras, 6 números, 3 homoclave).";
    } else if (item.type === 'CURP') {
      formula = '=OR(ISBLANK(' + item.cell + '), REGEXMATCH(UPPER(TO_TEXT(' + item.cell + ')), "^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9]{2}$"))';
      mensaje = "La CURP requiere exactamente 18 posiciones oficiales.";
    }
    if(formula !== "") {
      var rule = SpreadsheetApp.newDataValidation().requireFormulaSatisfied(formula).setAllowInvalid(false).setHelpText(mensaje).build();
      range.setDataValidation(rule);
    }
  }
}

function setLabelCell(sheet, fila, col, texto) {
  sheet.getRange(fila, col).setValue(texto).setFontFamily('Arial').setFontSize(9).setFontWeight('bold').setFontColor(CONFIG.LABEL_TEXT).setBackground(CONFIG.LABEL_BG).setVerticalAlignment('middle').setWrap(true);
}

function setInputCell(sheet, fila, col, editables) {
  var cell = sheet.getRange(fila, col);
  cell.setBackground(CONFIG.INPUT_BG).setBorder(true, true, true, true, false, false, CONFIG.INPUT_BORDER, SpreadsheetApp.BorderStyle.SOLID)
    .setVerticalAlignment('middle').setFontFamily('Arial').setFontSize(10).setFontWeight('bold').setFontColor(CONFIG.HDR_BG);
  var a1Notation = cell.getA1Notation(); editables.push(a1Notation); return a1Notation;
}

function escribirFilaCampos(sheet, fila, editables, campos, cf, cm, marcas) {
  for (var i = 0; i < campos.length; i++) {
    setLabelCell(sheet, fila, campos[i].col, campos[i].label);
    var a1 = setInputCell(sheet, fila, campos[i].inputCol, editables);
    if (campos[i].type === 'fecha' && cf) cf.push(a1);
    if (campos[i].type === 'monto' && cm) cm.push(a1);
    if (campos[i].marca && marcas) marcas.push({ name: campos[i].marca, cell: a1 });
  }
  sheet.setRowHeight(fila, 28); return fila + 1;
}

function escribirSpacer(sheet, fila) { sheet.getRange(fila, 1, 1, 7).merge().setBackground(CONFIG.SPACER_BG); sheet.setRowHeight(fila, 8); return fila + 1; }

function aplicarDropdowns(sheet, dropdowns) {
  for (var i = 0; i < dropdowns.length; i++) {
    var dd = dropdowns[i]; var regla = SpreadsheetApp.newDataValidation().requireValueInList(dd.opciones.split(','), true).setAllowInvalid(false).build();
    sheet.getRange(dd.fila, dd.col).setDataValidation(regla);
  }
}

function aplicarProtecciones(sheet, ultimaFila, celdasEditables) {
  var proteccion = sheet.protect().setDescription('Proteccion PLD'); var rangos = [];
  for (var i = 0; i < celdasEditables.length; i++) { rangos.push(sheet.getRange(celdasEditables[i])); }
  proteccion.setUnprotectedRanges(rangos); proteccion.setWarningOnly(false);
  try {
    var editoresActuales = proteccion.getEditors(); proteccion.removeEditors(editoresActuales);
    if (CONFIG.CORREOS_COMPARTIR && CONFIG.CORREOS_COMPARTIR.length > 0) { proteccion.addEditors(CONFIG.CORREOS_COMPARTIR); }
  } catch (e) { Logger.log('Error protección: ' + e.message); }
}

function compartirArchivo(archivo) {
  for (var i = 0; i < CONFIG.CORREOS_COMPARTIR.length; i++) {
    try { archivo.addEditor(CONFIG.CORREOS_COMPARTIR[i]); } catch (e) { Logger.log('Error al compartir: ' + e.message); }
  }
}

/**
 * Registra los metadatos del archivo generado incluyendo datos de la operación y asociados.
 */
function registrarEnBitacora(idArchivo, urlArchivo, nombreArchivo, operacion, asociadoLado1, asociadoLado2) {
  var idBitacora = CONFIG.BITACORA_SPREADSHEET_ID;
  if (!idBitacora || idBitacora === 'AQUÍ_COLOCA_EL_ID_DE_TU_SPREADSHEET_DE_SEGUIMIENTO') {
    Logger.log('Registro omitido: ID de bitácora no configurado.');
    return false;
  }
  
  try {
    var ssBitacora = SpreadsheetApp.openById(idBitacora);
    var nombrePestana = "Seguimiento de Entregables";
    var hojaBitacora = ssBitacora.getSheetByName(nombrePestana);
    
    // ── CREACIÓN AUTOMÁTICA DE LA PESTAÑA SI NO EXISTE ──
    if (!hojaBitacora) {
      hojaBitacora = ssBitacora.insertSheet(nombrePestana);
      
      // Nuevos encabezados incorporados
      var encabezados = [
        'Fecha y Hora de Creación', 
        'Nombre del Entregable', 
        'Operación', 
        'Asociado Lado 1', 
        'Asociado Lado 2', 
        'ID del Archivo', 
        'URL de Acceso', 
        'Usuario Creador'
      ];
      hojaBitacora.appendRow(encabezados);
      
      // Rango ampliado hasta la columna H (8 columnas en total)
      hojaBitacora.getRange("A1:H1")
        .setFontWeight("bold")
        .setBackground("#364494")
        .setFontColor("#ffffff")
        .setHorizontalAlignment("center");
        
      // Ajuste de anchos para las 8 columnas
      hojaBitacora.setColumnWidth(1, 160); // Fecha y Hora
      hojaBitacora.setColumnWidth(2, 240); // Nombre del Entregable
      hojaBitacora.setColumnWidth(3, 200); // Operación
      hojaBitacora.setColumnWidth(4, 180); // Asociado Lado 1
      hojaBitacora.setColumnWidth(5, 180); // Asociado Lado 2
      hojaBitacora.setColumnWidth(6, 220); // ID del Archivo
      hojaBitacora.setColumnWidth(7, 300); // URL de Acceso
      hojaBitacora.setColumnWidth(8, 200); // Usuario Creador
    }
    
    // ── REGISTRO DE LOS DATOS ──
    var fechaCreacion = new Date();
    var usuarioCreador = Session.getActiveUser().getEmail() || Session.getEffectiveUser().getEmail() || 'Usuario WebApp';
    
    // Se insertan las variables validadas (si vienen vacías pone un texto en blanco)
    hojaBitacora.appendRow([
      fechaCreacion, 
      nombreArchivo, 
      operacion || '',
      asociadoLado1 || '',
      asociadoLado2 || '',
      idArchivo, 
      urlArchivo, 
      usuarioCreador
    ]);
    
    // Aplica formato de fecha a la columna A
    var ultimaFila = hojaBitacora.getLastRow();
    hojaBitacora.getRange(ultimaFila, 1).setNumberFormat('dd/mm/yyyy hh:mm:ss');
    return true;
  } catch (e) {
    Logger.log('Error crítico al escribir en la bitácora: ' + e.message);
    return false;
  }
}


// ══════════════════════════════════════════════════════════════
//  AGREGAR PAGO A OPERACIÓN EXISTENTE
//  Inserta un bloque de pago nuevo directamente en el archivo ya
//  generado, sin crear un documento duplicado. Ver los 9 riesgos
//  cubiertos: ancla por Developer Metadata, doble verificación de
//  conteo, lock de concurrencia, protección/semáforo extendidos
//  (nunca reemplazados), verificación de permisos por documento,
//  respaldo automático previo, y bitácora inmutable.
// ══════════════════════════════════════════════════════════════

var FILAS_POR_BLOQUE_PAGO = 6; // barra de sección (1) + 4 campos + spacer (1)

function agregarPagoAOperacion(inputIdOUrl, cantidadPagos) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
  } catch (e) {
    return { success: false, message: 'El sistema está procesando otra solicitud sobre este documento. Intenta de nuevo en unos segundos.' };
  }

  try {
    // Normaliza la cantidad solicitada: entero, mínimo 1.
    cantidadPagos = parseInt(cantidadPagos, 10);
    if (!cantidadPagos || cantidadPagos < 1) cantidadPagos = 1;

    var idArchivo = extraerIdDeSpreadsheet(inputIdOUrl);
    if (!idArchivo) {
      return { success: false, message: 'No se reconoce el link o ID proporcionado.' };
    }

    var ss, sheet;
    try {
      ss = SpreadsheetApp.openById(idArchivo);
      sheet = ss.getSheetByName('Pre Aviso PLD');
    } catch (e) {
      return { success: false, message: 'No se pudo abrir el archivo. Verifica el link y que tengas acceso a él.' };
    }
    if (!sheet) {
      return { success: false, message: 'El archivo no corresponde a un Pre-Aviso PLD (no se encontró la hoja "Pre Aviso PLD").' };
    }

    // 1. Validar que el documento fue generado por este sistema
    var rangoOperacion = ss.getRangeByName('Operacion_Nombre');
    if (!rangoOperacion) {
      return { success: false, message: 'El archivo no parece haber sido generado por el Generador Pre-Aviso PLD.' };
    }

    // 2. Identidad del usuario para bitácora/sello de auditoría (best-effort).
    //    NOTA: Session.getActiveUser().getEmail() puede devolver vacío en una
    //    WebApp desplegada como "Ejecutar como: yo" — es una limitación
    //    documentada de Apps Script, no un problema de permisos reales. Por
    //    eso NO se usa para bloquear la operación (eso causaba falsos
    //    rechazos incluso al propietario del archivo). El control de acceso
    //    real lo sigue haciendo Drive de forma nativa: si quien ejecuta esto
    //    genuinamente no tiene permiso sobre el archivo, las operaciones de
    //    escritura de más abajo fallan solas y se capturan en el catch general.
    var correoActivo = '';
    try { correoActivo = Session.getActiveUser().getEmail(); } catch (e) { /* puede venir vacío, no es error */ }
    var archivo = DriveApp.getFileById(idArchivo);

    // 3. Localizar el ancla de inserción (Developer Metadata)
    var buscador = sheet.createDeveloperMetadataFinder().withKey(CONFIG.ANCLA_FIN_PAGOS_KEY);
    var resultados = buscador.find();
    if (resultados.length === 0) {
      return { success: false, message: 'Este documento fue generado antes de habilitar esta función y no puede procesarse automáticamente. Ejecuta primero retrofitearAncla() sobre este archivo, o complétalo manualmente.' };
    }
    var filaAncla = resultados[0].getLocation().getRow().getRow();

    // 4. Doble verificación del conteo de pagos: por patrón de rangos con
    //    nombre (fuente confiable) contra el conteo visual de encabezados
    //    "PAGO N" en la columna B (acepta también el formato antiguo "PAGO N DE M").
    var conteoPorNombre = 0;
    while (ss.getRangeByName('Pago_' + (conteoPorNombre + 1) + '_Fecha')) { conteoPorNombre++; }

    var colB = sheet.getRange(1, 2, sheet.getLastRow(), 1).getValues();
    var conteoVisual = 0;
    for (var f = 0; f < colB.length; f++) {
      var val = colB[f][0];
      if (typeof val === 'string' && /^PAGO\s+\d+(\s+DE\s+\d+)?$/i.test(val.trim())) conteoVisual++;
    }

    if (conteoPorNombre === 0 || conteoPorNombre !== conteoVisual) {
      return { success: false, message: 'La estructura de pagos de este documento no coincide con lo esperado (posiblemente fue editada manualmente fuera del sistema). Requiere revisión manual antes de continuar; no se realizó ningún cambio.' };
    }

    if (conteoPorNombre >= CONFIG.PAGOS_MAX) {
      return { success: false, message: 'Esta operación ya alcanzó el máximo de ' + CONFIG.PAGOS_MAX + ' pagos permitidos.' };
    }

    var disponibles = CONFIG.PAGOS_MAX - conteoPorNombre;
    if (cantidadPagos > disponibles) {
      return { success: false, message: 'Esta operación tiene ' + conteoPorNombre + ' pago(s); solo se pueden agregar ' + disponibles + ' más antes de llegar al máximo de ' + CONFIG.PAGOS_MAX + '.' };
    }

    var primerNumeroPago = conteoPorNombre + 1;
    var ultimoNumeroPago = conteoPorNombre + cantidadPagos;

    // 5. Respaldo automático antes de modificar el archivo real (con datos ya
    //    capturados) — uno solo para todo el lote, no uno por cada pago.
    try {
      var carpetaOrigen = DriveApp.getFolderById(CONFIG.CARPETA_DESTINO_ID);
      var carpetaRespaldos = obtenerOCrearCarpeta(carpetaOrigen, CONFIG.CARPETA_RESPALDOS_NOMBRE);
      var marcaTiempo = Utilities.formatDate(new Date(), 'America/Mexico_City', 'yyyyMMdd_HHmmss');
      archivo.makeCopy('RESPALDO_' + marcaTiempo + '_' + archivo.getName(), carpetaRespaldos);
    } catch (e) {
      Logger.log('No se pudo generar respaldo previo: ' + e.message);
      return { success: false, message: 'No se pudo generar el respaldo de seguridad; se canceló la operación por precaución. Ningún dato fue modificado.' };
    }

    // 6. Insertar TODAS las filas necesarias de una sola vez (cantidadPagos
    //    bloques de FILAS_POR_BLOQUE_PAGO filas cada uno), justo antes del ancla.
    var totalFilas = FILAS_POR_BLOQUE_PAGO * cantidadPagos;
    sheet.insertRowsBefore(filaAncla, totalFilas);

    // Sheets copia automáticamente el formato de una fila vecina hacia las
    // filas recién insertadas (incluyendo, en este caso, el azul marino de la
    // barra "LADO 2" de más arriba). Se deja explícito el fondo blanco y sin
    // bordes en todo el bloque nuevo ANTES de escribir nada, para no heredar
    // nada por accidente — sin depender de clearFormat(), que no garantiza
    // limpiar el color de fondo.
    var rangoFilasNuevas = sheet.getRange(filaAncla, 1, totalFilas, 7);
    rangoFilasNuevas.breakApart();
    rangoFilasNuevas.setBackground(CONFIG.SPACER_BG);
    rangoFilasNuevas.setBorder(false, false, false, false, false, false);

    // 7. Escribir cada bloque de pago en secuencia, acumulando las celdas
    //    nuevas de TODOS los bloques para extender protección/validaciones
    //    una sola vez al final (más rápido y con menos llamadas a la API
    //    que repetir el proceso pago por pago).
    var filaEscritura = filaAncla;
    var ed = [], dd = [], cf = [], cm = [], marcasNuevas = [];
    for (var p = primerNumeroPago; p <= ultimoNumeroPago; p++) {
      filaEscritura = escribirBarraSeccion(sheet, filaEscritura, 'PAGO ' + p);
      filaEscritura = escribirBloquePago(sheet, filaEscritura, ed, dd, cf, cm, marcasNuevas, 'Pago_' + p);
    }

    // 8. Extender (nunca reemplazar) protección, validaciones y semáforo
    extenderProteccion(sheet, ed);
    aplicarDropdowns(sheet, dd);
    aplicarValidacionesFechas(sheet, cf);
    aplicarValidacionMontos(sheet, cm);
    extenderSemaforo(sheet, ed);
    for (var m = 0; m < marcasNuevas.length; m++) {
      ss.setNamedRange(marcasNuevas[m].name, sheet.getRange(marcasNuevas[m].cell));
    }

    // 9. Actualizar los textos de resumen (si el documento ya tiene esas marcas)
    actualizarResumenPagos(ss, ultimoNumeroPago);

    // 10. Sello de auditoría visible en el propio documento
    actualizarSelloModificacion(ss, correoActivo);

    // 11. Registro inmutable en bitácora (hoja de historial, nunca se edita una fila existente)
    try {
      var detalle = cantidadPagos === 1
        ? 'Se agregó el Pago ' + primerNumeroPago + ' (antes: ' + conteoPorNombre + ' pago(s), ahora: ' + ultimoNumeroPago + ')'
        : 'Se agregaron los Pagos ' + primerNumeroPago + ' a ' + ultimoNumeroPago + ' (antes: ' + conteoPorNombre + ' pago(s), ahora: ' + ultimoNumeroPago + ')';
      registrarModificacionEnBitacora(idArchivo, rangoOperacion.getValue(), correoActivo, detalle);
    } catch (e) {
      Logger.log('No se pudo registrar en bitácora: ' + e.message);
    }

    return {
      success: true,
      url: ss.getUrl(),
      numeroPago: ultimoNumeroPago,
      primerNumeroPago: primerNumeroPago,
      cantidadAgregada: cantidadPagos
    };

  } catch (e) {
    Logger.log('Error en agregarPagoAOperacion: ' + e.message + '\n' + e.stack);
    return { success: false, message: e.message };
  } finally {
    lock.releaseLock();
  }
}

function extraerIdDeSpreadsheet(input) {
  if (!input) return null;
  var texto = input.toString().trim();
  var match = texto.match(/[-\w]{25,}/);
  return match ? match[0] : null;
}

function obtenerOCrearCarpeta(carpetaPadre, nombre) {
  var iter = carpetaPadre.getFoldersByName(nombre);
  if (iter.hasNext()) return iter.next();
  return carpetaPadre.createFolder(nombre);
}

// Extiende la lista de rangos desprotegidos SIN reemplazar la existente.
function extenderProteccion(sheet, celdasNuevasA1) {
  var protecciones = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  if (protecciones.length === 0) return; // no debería ocurrir en un documento válido
  var proteccion = protecciones[0];
  var rangosActuales = proteccion.getUnprotectedRanges();
  var rangosNuevos = celdasNuevasA1.map(function (a1) { return sheet.getRange(a1); });
  proteccion.setUnprotectedRanges(rangosActuales.concat(rangosNuevos));
}

// Localiza la regla de "semáforo" (celdas vacías en rojo) ya existente y le
// agrega las celdas nuevas, en vez de crear una segunda regla o reemplazarla.
function extenderSemaforo(sheet, celdasNuevasA1) {
  if (celdasNuevasA1.length === 0) return;
  var reglas = sheet.getConditionalFormatRules();
  var idx = -1;
  for (var i = 0; i < reglas.length; i++) {
    var cond = reglas[i].getBooleanCondition();
    if (cond && cond.getCriteriaType() === SpreadsheetApp.BooleanCriteria.CELL_EMPTY) { idx = i; break; }
  }
  if (idx === -1) return; // documento generado antes de tener semáforo; no se fuerza su creación aquí
  var rangosNuevos = celdasNuevasA1.map(function (a1) { return sheet.getRange(a1); });
  var reglaExtendida = reglas[idx].copy().setRanges(reglas[idx].getRanges().concat(rangosNuevos)).build();
  reglas[idx] = reglaExtendida;
  sheet.setConditionalFormatRules(reglas);
}

// Actualiza el conteo visible en la barra "LIQUIDACION" y en el resumen
// superior. Si el documento es anterior a que existieran estas marcas
// (ver retrofitearAncla), simplemente no hay nada que actualizar ahí.
function actualizarResumenPagos(ss, nuevoNumeroPago) {
  var rangoBarra = ss.getRangeByName('Barra_Liquidacion');
  if (rangoBarra) {
    var textoActual = rangoBarra.getValue().toString();
    var textoNuevo = textoActual.replace(/\d+\s+PAGO\(S\)/i, nuevoNumeroPago + ' PAGO(S)');
    rangoBarra.setValue(textoNuevo);
  }
  var rangoResumen = ss.getRangeByName('Resumen_Operacion');
  if (rangoResumen) {
    var resumenActual = rangoResumen.getValue().toString();
    var resumenNuevo = resumenActual.replace(/▸\s*\d+\s*Pago\(s\)/i, '▸ ' + nuevoNumeroPago + ' Pago(s)');
    rangoResumen.setValue(resumenNuevo);
  }
}

function actualizarSelloModificacion(ss, correoActivo) {
  var rangoSello = ss.getRangeByName('Sello_UltimaModificacion');
  if (!rangoSello) return;
  var fecha = Utilities.formatDate(new Date(), 'America/Mexico_City', 'dd/MM/yyyy HH:mm');
  rangoSello.setValue('Última modificación estructural: ' + fecha + ' — ' + (correoActivo || 'usuario no identificado'));
}

// Bitácora inmutable de modificaciones: siempre se anexa una fila nueva,
// nunca se edita una fila existente, para no arriesgar el registro original.
function registrarModificacionEnBitacora(idArchivo, operacion, usuario, detalle) {
  var idBitacora = CONFIG.BITACORA_SPREADSHEET_ID;
  if (!idBitacora) return;
  var ssBitacora = SpreadsheetApp.openById(idBitacora);
  var nombrePestana = 'Historial_Modificaciones';
  var hoja = ssBitacora.getSheetByName(nombrePestana);
  if (!hoja) {
    hoja = ssBitacora.insertSheet(nombrePestana);
    var encabezados = ['Fecha y Hora', 'ID del Archivo', 'Operación', 'Usuario', 'Detalle'];
    hoja.appendRow(encabezados);
    hoja.getRange('A1:E1').setFontWeight('bold').setBackground('#364494').setFontColor('#ffffff').setHorizontalAlignment('center');
    hoja.setColumnWidth(1, 150); hoja.setColumnWidth(2, 220); hoja.setColumnWidth(3, 220); hoja.setColumnWidth(4, 200); hoja.setColumnWidth(5, 380);
  }
  hoja.appendRow([new Date(), idArchivo, operacion || '', usuario || 'Usuario WebApp', detalle]);
  var ultimaFila = hoja.getLastRow();
  hoja.getRange(ultimaFila, 1).setNumberFormat('dd/mm/yyyy hh:mm:ss');
}

/**
 * ── UTILIDAD DE UN SOLO USO (no está conectada a la interfaz) ──
 * Agrega el ancla de "Agregar Pago" a un documento generado ANTES de que
 * esta función existiera. Se corre manualmente desde el editor de Apps
 * Script, seleccionando esta función y dando Ejecutar, pasando el link o ID
 * como argumento (edítalo abajo antes de correrla, o conviértela en función
 * con parámetro y llámala desde el editor con un valor de prueba).
 *
 * Nota importante: en documentos migrados así, la barra "LIQUIDACION" y el
 * resumen superior NO se actualizarán automáticamente al agregar un pago,
 * porque esos rangos con nombre tampoco existían en su momento. Es una
 * limitación cosmética conocida, no funcional: el pago se agrega igual,
 * solo el contador de texto en el encabezado se queda desactualizado en
 * esos documentos antiguos.
 */
function retrofitearAncla(inputIdOUrl) {
  var idArchivo = extraerIdDeSpreadsheet(inputIdOUrl);
  if (!idArchivo) { Logger.log('No se reconoce el link o ID.'); return; }

  var ss = SpreadsheetApp.openById(idArchivo);
  var sheet = ss.getSheetByName('Pre Aviso PLD');
  if (!sheet) { Logger.log('No se encontró la hoja "Pre Aviso PLD".'); return; }

  var yaExiste = sheet.createDeveloperMetadataFinder().withKey(CONFIG.ANCLA_FIN_PAGOS_KEY).find();
  if (yaExiste.length > 0) { Logger.log('Este documento ya tiene el ancla.'); return; }

  // El pie ("Gracias por tu colaboracion!") se fusiona empezando en la
  // columna A (sheet.getRange(fila, 1, 1, 7)), así que el texto vive en la
  // columna A — no en la B, que es donde sí viven los encabezados "PAGO N"
  // porque esos se fusionan empezando en columna B.
  var datos = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues();
  var filaPie = -1;
  for (var i = 0; i < datos.length; i++) {
    if (typeof datos[i][0] === 'string' && datos[i][0].indexOf('Gracias por tu colaboracion') === 0) {
      filaPie = i + 1;
      break;
    }
  }
  if (filaPie === -1) { Logger.log('No se encontró el pie del documento; revisar manualmente.'); return; }

  sheet.getRange(filaPie + ':' + filaPie).addDeveloperMetadata(CONFIG.ANCLA_FIN_PAGOS_KEY, 'v1', SpreadsheetApp.DeveloperMetadataVisibility.PROJECT);
  Logger.log('Ancla agregada correctamente en la fila ' + filaPie + ' del archivo ' + idArchivo);
}
