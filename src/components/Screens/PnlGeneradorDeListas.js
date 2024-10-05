import React, { useState, useEffect } from 'react';
import { FilePdfTwoTone } from '@ant-design/icons';
import { SplTabla } from '../ListasComponentLibrary';
import { Button, Flex, Input, Typography, Col, Row, Select, InputNumber, DatePicker } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

const dateFormat = 'DD/MM/YYYY'; // Define el formato deseado

export const PnlGeneradorDeListas = () => {

    let [position] = useState('start');
    let [nombrePeriodo, setNombrePeriodo] = useState('');
    let [feInicioFin, setFeInicioFin] = useState('');
    let [parcial1, setParcial1] = useState('');
    let [parcial2, setParcial2] = useState('');
    let [parcial3, setParcial3] = useState('');
    let [rangoVacaciones, setRangoVacaciones] = useState([]);
    let [horasPorDia, setHorasPorDia] = useState({
        Lunes: '0',
        Martes: '0',
        Miercoles: '0',
        Jueves: '0',
        Viernes: '0'
    });
    let [nombreMateria, setNombreMateria] = useState('');
    let [nombreDocente, setNombreDocente] = useState('');
    let [nombreGrupo, setNombreGrupo] = useState('');
    let [cantidadAlumnos, setCantidadAlumnos] = useState(1);
    let [diasInhabiles, setDiasInhabiles] = useState([]);

    const generarPDF = () => {

        const pdfData = {
            feInicioFin,
            rangoVacaciones,
            horasPorDia,
            parcial1,
            parcial2,
            parcial3,
            diasInhabiles,
            nombrePeriodo,
            nombreMateria,
            nombreDocente,
            nombreGrupo,
            cantidadAlumnos,
        };

        const fechaPeriodo = pdfData.feInicioFin.map(item => formatDate(item.$d));
        const Vacaciones = pdfData.rangoVacaciones.map(item => formatDate(item.$d))
        const diasNoClases = pdfData.diasInhabiles;
        const fechaParcial1 = pdfData.parcial1.map(item => formatDate(item.$d));
        const fechaParcial2 = pdfData.parcial2.map(item => formatDate(item.$d));
        const fechaParcial3 = pdfData.parcial3.map(item => formatDate(item.$d));

        // Convertir las fechas a objetos Date
        const inicioPeriodo = convertirADate(fechaPeriodo[0]);
        const finPeriodo = convertirADate(fechaPeriodo[1]);

        const inicioParcial1 = convertirADate(fechaParcial1[0]);
        const finParcial1 = convertirADate(fechaParcial1[1]);

        const inicioParcial2 = convertirADate(fechaParcial2[0]);
        const finParcial2 = convertirADate(fechaParcial2[1]);

        const inicioParcial3 = convertirADate(fechaParcial3[0]);
        const finParcial3 = convertirADate(fechaParcial3[1]);

        const inicioVacaciones = convertirADate(Vacaciones[0]);
        const finVacaciones = convertirADate(Vacaciones[1]);

        const diasNoClasesFormateados = diasNoClases.map(fecha => {
            return convertirADate(fecha); // Formatear y devolver como date
        });

        const diasFiltrados = Object.fromEntries(
            Object.entries(pdfData.horasPorDia).filter(([dia, horas]) => horas !== "0")
        );
        const todasLasFechas = obtenerFechasEnPeriodo(inicioPeriodo, finPeriodo);

        const diasDeClases = Object.keys(diasFiltrados); // ["Martes", "Jueves"]

        const diasDeClasesEnFechas = todasLasFechas.filter(fecha => {
            const diaSemana = fecha.toLocaleString('es-ES', { weekday: 'long' }); // Obtener el nombre del día en español
            return diasDeClases.includes(diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)); // Comparar con los días filtrados
        });

        // Función para comparar fechas
        const sonFechasIguales = (fecha1, fecha2) => {
            return fecha1.getTime() === fecha2.getTime();
        };

        // Filtrar los días hábiles
        const diasHabilitados = []

        // Iterar sobre los días de clases
        diasDeClasesEnFechas.forEach(fechaClase => {
            let esInhabil = false;

            // Verificar si la fecha está dentro del rango de vacaciones
            if (fechaClase >= inicioVacaciones && fechaClase <= finVacaciones) {
                esInhabil = true;
            }

            // Verificar si la fecha es un día inhábil
            diasNoClasesFormateados.forEach(fechaInhabil => {
                if (sonFechasIguales(fechaClase, fechaInhabil)) {
                    esInhabil = true; // Marcamos como inhábil si hay coincidencia
                }
            });

            if (!esInhabil) {
                diasHabilitados.push(fechaClase);
            }
        });

        // Objeto para agrupar las fechas por parcial
        const agrupacionPorParciales = {
            parcial1: [],
            parcial2: [],
            parcial3: []
        };

        // Agrupar fechas por parcial 
        diasHabilitados.forEach(fechaClase => {
            const diaSemana = obtenerDiaSemana(fechaClase);
            const horasClase = diasFiltrados[diaSemana] || 0;
            let parcial;

            // Clasificar la fecha en el parcial correspondiente
            if (fechaClase >= inicioParcial1 && fechaClase <= finParcial1) {
                parcial = 'parcial1';
            } else if (fechaClase >= inicioParcial2 && fechaClase <= finParcial2) {
                parcial = 'parcial2';
            } else if (fechaClase >= inicioParcial3 && fechaClase <= finParcial3) {
                parcial = 'parcial3';
            }

            // Si la fecha pertenece a algún parcial, duplicarla según las horas de clase
            if (parcial) {
                for (let i = 0; i < horasClase; i++) {
                    agrupacionPorParciales[parcial].push(fechaClase);
                }
            }
        });

        const fechasFinales = convertirFechasTexto(agrupacionPorParciales);
        const fechasCombinadas = [];

        // Iterar sobre cada parcial y agregar las fechas al nuevo array con su referencia
        for (const [parcial, fechasArray] of Object.entries(fechasFinales)) {
            fechasArray.forEach(fecha => {
                fechasCombinadas.push({ fecha, parcial });
            });
        }

        generacionPDF(fechasCombinadas, pdfData)


    };

    return (
        <div>
            <Row gutter={16}>
                <Col span={24}>
                    <Typography.Title level={2} style={{ textAlign: 'center' }} >
                        Generador de Listas de Asistencias
                    </Typography.Title>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <FPeriodoFechas
                        nombrePeriodo={nombrePeriodo}
                        setNombrePeriodo={setNombrePeriodo}
                        feInicioFin={feInicioFin}
                        setFeInicioFin={setFeInicioFin}
                    />
                </Col>

                <Col span={12}>
                    <FRangoParciales
                        parcial1={parcial1}
                        setParcial1={setParcial1}
                        parcial2={parcial2}
                        setParcial2={setParcial2}
                        parcial3={parcial3}
                        setParcial3={setParcial3}
                    />
                </Col>


            </Row>
            <br />
            <Row gutter={16}>
                <Col span={12}>
                    <FHorasXDia
                        horasPorDia={horasPorDia}
                        setHorasPorDia={setHorasPorDia}
                    />
                </Col>
                <Col span={12}>
                    <FComplementos
                        nombreMateria={nombreMateria}
                        setNombreMateria={setNombreMateria}
                        nombreDocente={nombreDocente}
                        setNombreDocente={setNombreDocente}
                        nombreGrupo={nombreGrupo}
                        setNombreGrupo={setNombreGrupo}
                        cantidadAlumnos={cantidadAlumnos}
                        setCantidadAlumnos={setCantidadAlumnos}
                    />
                    <FDiasInhabiles
                        diasInhabiles={diasInhabiles}
                        setDiasInhabiles={setDiasInhabiles}
                    />
                </Col>
            </Row>

            <Row gutter={16}>

                <Col span={12}>
                    <FRangoVacaciones
                        rangoVacaciones={rangoVacaciones}
                        setRangoVacaciones={setRangoVacaciones}
                    />
                </Col>
            </Row>

            <br />
            <Flex gap="small" vertical>
                <Flex wrap gap="small">
                    <Button type="primary" icon={<FilePdfTwoTone />} iconPosition={position} onClick={generarPDF}>
                        Generar PDF
                    </Button>
                </Flex>
            </Flex>
            <br />


        </div>
    )
}

function FPeriodoFechas({ nombrePeriodo, setNombrePeriodo, feInicioFin, setFeInicioFin }) {

    const handleNombrePeriodoChange = (e) => {
        setNombrePeriodo(e.target.value);
    };

    const handleFeInicioFinChange = (dates, dateStrings) => {
        setFeInicioFin(dates);
    };
    const oDatosTabla = [
        {
            key: '1',
            ClPeriodo: <Input
                placeholder="Nombre del Periodo"
                value={nombrePeriodo}
                onChange={handleNombrePeriodoChange}
            />,
            FeInicioFin: <RangePicker
                value={feInicioFin}
                format={dateFormat}
                onChange={handleFeInicioFinChange}
            />,
        },
    ];

    const oColumns = [
        {
            dsTitulo: 'Nombre del Periodo',
            clIndice: 'ClPeriodo',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgColumnaEstatica: false,
            noAnchoColumna: 10
        },
        {
            dsTitulo: 'Fecha Inicio - Fecha Final',
            clIndice: 'FeInicioFin',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50
        },
    ];

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla}
                pColumnas={oColumns}
                fgHabilitaSeleccion={false}
            />
        </div>
    );
};

function FHorasXDia({ horasPorDia, setHorasPorDia }) {

    const handleHorasChange = (day, value) => {
        setHorasPorDia((prevState) => ({
            ...prevState,
            [day]: value,
        }));
    };

    const oDatosTabla = [
        {
            key: '1',
            ClDiasSemanas: 'Lunes',
            NoHorasXDia: <Select
                defaultValue="0"
                style={{
                    width: 120,
                }}
                allowClear
                options={[
                    {
                        value: '1',
                        label: '1 Hora',
                    },
                    {
                        value: '2',
                        label: '2 Horas',
                    },
                    {
                        value: '3',
                        label: '3 Horas',
                    },
                    {
                        value: '0',
                        label: 'Ninguna',
                    },
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Lunes', value)}

            />,
        },
        {
            key: '2',
            ClDiasSemanas: 'Martes',
            NoHorasXDia: <Select
                defaultValue="0"
                style={{
                    width: 120,
                }}
                allowClear
                options={[
                    {
                        value: '1',
                        label: '1 Hora',
                    },
                    {
                        value: '2',
                        label: '2 Horas',
                    },
                    {
                        value: '3',
                        label: '3 Horas',
                    },
                    {
                        value: '0',
                        label: 'Ninguna',
                    },
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Martes', value)}
            />,
        },
        {
            key: '3',
            ClDiasSemanas: 'Miércoles',
            NoHorasXDia: <Select
                defaultValue="0"
                style={{
                    width: 120,
                }}
                allowClear
                options={[
                    {
                        value: '1',
                        label: '1 Hora',
                    },
                    {
                        value: '2',
                        label: '2 Horas',
                    },
                    {
                        value: '3',
                        label: '3 Horas',
                    },
                    {
                        value: '0',
                        label: 'Ninguna',
                    },
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Miércoles', value)}
            />,
        },
        {
            key: '4',
            ClDiasSemanas: 'Jueves',
            NoHorasXDia: <Select
                defaultValue="0"
                style={{
                    width: 120,
                }}
                allowClear
                options={[
                    {
                        value: '1',
                        label: '1 Hora',
                    },
                    {
                        value: '2',
                        label: '2 Horas',
                    },
                    {
                        value: '3',
                        label: '3 Horas',
                    },
                    {
                        value: '0',
                        label: 'Ninguna',
                    },
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Jueves', value)}

            />,
        },
        {
            key: '5',
            ClDiasSemanas: 'Viernes',
            NoHorasXDia: <Select
                defaultValue="0"
                style={{
                    width: 120,
                }}
                allowClear
                options={[
                    {
                        value: '1',
                        label: '1 Hora',
                    },
                    {
                        value: '2',
                        label: '2 Horas',
                    },
                    {
                        value: '3',
                        label: '3 Horas',
                    },
                    {
                        value: '0',
                        label: 'Ninguna',
                    },
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Viernes', value)}

            />,
        },
        {
            key: '6',
            ClDiasSemanas: 'Sábado',
            NoHorasXDia: <Select
                defaultValue="0"
                style={{
                    width: 120,
                }}
                allowClear
                options={[
                    {
                        value: '1',
                        label: '1 Hora',
                    },
                    {
                        value: '2',
                        label: '2 Horas',
                    },
                    {
                        value: '3',
                        label: '3 Horas',
                    },
                    {
                        value: '0',
                        label: 'Ninguna',
                    },
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Sábado', value)}

            />,
        },
    ];

    const oColumns = [
        {
            dsTitulo: 'Días de la Semana',
            clIndice: 'ClDiasSemanas',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgColumnaEstatica: false,
            noAnchoColumna: 10
        },
        {
            dsTitulo: 'Seleccione las Horas de Clase por Días',
            clIndice: 'NoHorasXDia',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50
        },
    ];

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} pColumnas={oColumns}
                fgHabilitaSeleccion={false} />
        </div>
    );
};

function FRangoVacaciones({ rangoVacaciones, setRangoVacaciones }) {

    const handleRangoChange = (dates, dateStrings) => {
        setRangoVacaciones(dates);
    };

    const oDatosTabla = [
        {
            key: '1',
            NbCol: 'Seleccione un Rango para las Vacaciones',
            FeRangoVacaciones: <RangePicker format={dateFormat} onChange={handleRangoChange} />,
        },
    ];

    const oColumns = [
        {
            dsTitulo: 'Vacaciones del Periodo',
            clIndice: 'NbCol',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgColumnaEstatica: false,
            noAnchoColumna: 10
        },
        {
            dsTitulo: 'Rango de Vacaciones',
            clIndice: 'FeRangoVacaciones',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50
        },
    ];

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} pColumnas={oColumns}
                fgHabilitaSeleccion={false} />
        </div>
    );
};



function FRangoParciales({
    parcial1,
    setParcial1,
    parcial2,
    setParcial2,
    parcial3,
    setParcial3,
}) {
    const handleParcial1 = (dates) => {
        setParcial1(dates);
    };

    const handleParcial2 = (dates) => {
        setParcial2(dates);
    };

    const handleParcial3 = (dates) => {
        setParcial3(dates);
    };

    const oDatosTabla = [
        {
            key: '1',
            NbCol: '1-Parcial',
            FeRangoParciales: <RangePicker onChange={handleParcial1} format={dateFormat} />,
        },
        {
            key: '2',
            NbCol: '2-Parcial',
            FeRangoParciales: <RangePicker format={dateFormat} onChange={handleParcial2} />,
        },
        {
            key: '3',
            NbCol: '3-Parcial',
            FeRangoParciales: <RangePicker format={dateFormat} onChange={handleParcial3} />,
        },
    ];

    const oColumns = [
        {
            dsTitulo: 'Parciales',
            clIndice: 'NbCol',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgColumnaEstatica: false,
            noAnchoColumna: 10,
        },
        {
            dsTitulo: 'Fecha Inicio - Fecha Final',
            clIndice: 'FeRangoParciales',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50,
        },
    ];

    return (
        <div>
            <SplTabla
                pDatosTabla={oDatosTabla}
                pColumnas={oColumns}
                fgHabilitaSeleccion={false}
            />
        </div>
    );
}

function FComplementos({
    nombreMateria,
    setNombreMateria,
    nombreDocente,
    setNombreDocente,
    nombreGrupo,
    setNombreGrupo,
    cantidadAlumnos,
    setCantidadAlumnos,
}) {

    const handleNombreMateria = (e) => {
        setNombreMateria(e.target.value);
    };

    const handleNombreDocente = (e) => {
        setNombreDocente(e.target.value);
    };

    const handleNombreGrupo = (e) => {
        setNombreGrupo(e.target.value);
    };

    const handleCantidadAlumnosChange = (value) => {
        setCantidadAlumnos(value);
    };

    const oDatosTabla = [
        {
            key: '1',
            NbCol: 'Materia',
            Pusuario: <Input placeholder="Nombre de la Materia" value={nombreMateria} onChange={handleNombreMateria} />,
        },
        {
            key: '2',
            NbCol: 'Docente',
            Pusuario: <Input placeholder="Nombre del Docente" value={nombreDocente} onChange={handleNombreDocente} />,
        },
        {
            key: '3',
            NbCol: 'Grupo',
            Pusuario: <Input placeholder="Nombre del grupo " value={nombreGrupo} onChange={handleNombreGrupo} />,
        },
        {
            key: '4',
            NbCol: 'Cantidad de Alumnos',
            Pusuario: <InputNumber min={1} max={30} defaultValue={1} value={cantidadAlumnos} onChange={handleCantidadAlumnosChange} />,

        },
    ];

    const oColumns = [
        {
            dsTitulo: 'Informacion Complementaria',
            clIndice: 'NbCol',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgColumnaEstatica: false,
            noAnchoColumna: 10
        },
        {
            dsTitulo: '',
            clIndice: 'Pusuario',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50
        },
    ];

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} pColumnas={oColumns}
                fgHabilitaSeleccion={false} />
        </div>
    );
};

function FDiasInhabiles({ diasInhabiles, setDiasInhabiles }) {

    const handleDiasInhabilesChange = (dates, dateStrings) => {
        setDiasInhabiles(dateStrings);
    };

    const oDatosTabla = [
        {
            key: '1',
            NbCol: 'Selecciona los Días inhábiles',
            FeRangoDiasInhabiles: <DatePicker
                format={dateFormat}
                onChange={handleDiasInhabilesChange}
                multiple
                maxTagCount="responsive"
                size="small"
            />,
        },
    ];

    const oColumns = [
        {
            dsTitulo: 'Días inhábiles',
            clIndice: 'NbCol',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgColumnaEstatica: false,
            noAnchoColumna: 10
        },
        {
            dsTitulo: 'Selecciona los Días inhábiles',
            clIndice: 'FeRangoDiasInhabiles',
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50
        },
    ];

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} pColumnas={oColumns}
                fgHabilitaSeleccion={false}
            />
        </div>
    );
};


const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Obtener el día
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtener el mes (0-11)
    const year = date.getFullYear(); // Obtener el año
    return `${day}/${month}/${year}`; // Retornar la fecha en formato dd/mm/yyyy
};


function convertirADate(fechaStr) {
    const [dia, mes, anio] = fechaStr.split('/'); // Separar la cadena
    return new Date(anio, mes - 1, dia); // Crear un objeto Date (mes - 1 porque es 0-indexado)
}


function obtenerFechasEnPeriodo(inicio, fin) {
    const fechas = [];
    let fechaActual = new Date(inicio);

    while (fechaActual <= fin) {
        fechas.push(new Date(fechaActual)); // Agregar una copia de la fecha actual
        fechaActual.setDate(fechaActual.getDate() + 1); // Sumar un día
    }

    return fechas;
}


    
function generacionPDF(fechasFinales, datosExtra) {
    console.log(fechasFinales);
    console.log(datosExtra.nombreGrupo);

    const gruposDeDiez = segmentarDatos(fechasFinales, 10);
    console.log(gruposDeDiez);

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const colores = {
        'parcial1': '#FFCC00',
        'parcial2': '#CCFF00',
        'parcial3': '#00CCFF'
    };
    
    const documentDefinition = {
        pageSize: 'Letter',
        pageOrientation: 'landscape',
        content: [
            // Agregar tablas dinámicamente
            ...gruposDeDiez.flatMap((grupo, index) => [
                {
                    // Tabla de encabezado
                    table: {
                        widths: ['*', 'auto'],
                        body: [
                            [
                                {
                                    text: [
                                        { text: 'Materia: ', bold: true, fontSize: 12 },
                                        { text: datosExtra.nombreMateria, fontSize: 12 }
                                    ],
                                    margin: [0, 1]
                                },
                                {
                                    text: [
                                        { text: 'Periodo: ', bold: true, fontSize: 12 },
                                        { text: datosExtra.nombrePeriodo, fontSize: 12 }
                                    ],
                                    margin: [0, 1],
                                    alignment: 'right'
                                }
                            ],
                            [
                                {
                                    text: [
                                        { text: 'Docente: ', bold: true, fontSize: 12 },
                                        { text: datosExtra.nombreDocente, fontSize: 12 }
                                    ],
                                    margin: [0, 1]
                                },
                                {
                                    text: [
                                        { text: 'Grupo: ', bold: true, fontSize: 12 },
                                        { text: datosExtra.nombreGrupo, fontSize: 12 }
                                    ],
                                    margin: [0, 1],
                                    alignment: 'right'
                                }
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },

                {
                    text: '', // Texto vacío
                    margin: [0, 8] // Margen superior e inferior para crear espacio
                },

                {
                    // Tabla de asistencia
                    style: 'tableExample',
                    table: {
                        headerRows: 1,
                        widths: [15, 250, ...grupo.map(() => 35)], // Ancho fijo para # y Alumno, columnas dinámicas para fechas
                        body: [
                            // Encabezados de la tabla
                            [
                                { text: '#', bold: true, alignment: 'center' },
                                { text: 'Alumno', bold: true, alignment: 'center' },
                                ...grupo.map(item => ({
                                    text: item.fecha,
                                    fillColor: colores[item.parcial], // Color dinámico basado en el parcial
                                    bold: true,
                                    alignment: 'center'
                                }))
                            ],
                            // Agregar filas de alumnos
                            ...Array.from({ length: datosExtra.cantidadAlumnos }, (_, i) => [
                                { text: (i + 1).toString(), alignment: 'center' }, // Número del alumno
                                { text: " ", alignment: 'left' }, // Nombre del alumno (puedes cambiar esto según tus datos)
                                ...grupo.map(() => ({ text: '', alignment: 'center' })) // Celdas vacías para las fechas
                            ])
                        ]
                    },
                    layout: {
                        hLineWidth(i) { return i === 0 ? 2 : 1; }, // Grosor de la línea horizontal
                        vLineWidth() { return 1; }, // Grosor de la línea vertical
                        hLineColor() { return '#000000'; }, // Color de la línea horizontal
                        vLineColor() { return '#000000'; }, // Color de la línea vertical
                        paddingLeft() { return 4; },
                        paddingRight() { return 4; },
                        paddingTop() { return 4; },
                        paddingBottom() { return 4; }
                    }
                },
                // Solo agregar salto de página si no es la última tabla y no hay 19 filas
                ...(index < gruposDeDiez.length - 1 && datosExtra.cantidadAlumnos !== 19 ? [{ text: '', pageBreak: 'before' }] : [])
            ])
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 20, 0, 20]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            }
        }
    };

    let nombreArchivo = `ListaDeAsistencia-${datosExtra.nombreMateria.replace(/\s+/g, '')}-(${datosExtra.nombreGrupo})`;
    pdfMake.createPdf(documentDefinition).download(nombreArchivo);
}


function obtenerDiaSemana(fecha) {
    const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
    return diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
}

function formatearFecha(fecha) {
    const dia = fecha.getDate().toString().padStart(2, '0'); // Agregar ceros si el día es de un solo dígito
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Meses empiezan desde 0, así que se suma 1
    return `${dia}/${mes}`;
}

// Filtrar el arreglo y convertir las fechas a formato dd/mm
function convertirFechasTexto(agrupacion) {
    const resultado = {};
    Object.keys(agrupacion).forEach(parcial => {
        resultado[parcial] = agrupacion[parcial].map(fecha => formatearFecha(fecha));
    });
    return resultado;
}

function segmentarDatos(data, tamañoGrupo) {
    const resultado = [];

    for (let i = 0; i < data.length; i += tamañoGrupo) {
        const grupo = data.slice(i, i + tamañoGrupo);
        resultado.push(grupo);
    }

    return resultado;
}
