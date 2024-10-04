import React, { useState, useEffect } from 'react';
import { FilePdfTwoTone } from '@ant-design/icons';
import { SplTabla } from '../ListasComponentLibrary';
import { Button, Flex, Input, Typography, Col, Row, Select, InputNumber, DatePicker } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;

export const PnlGeneradorDeListas = () => {
    const [position] = useState('start');
    const [nombrePeriodo, setNombrePeriodo] = useState('');
    const [rangoVacaciones, setRangoVacaciones] = useState([]);
    const [horasPorDia, setHorasPorDia] = useState({
        Lunes: '1',
        Martes: '1',
        Miercoles: '1',
        Jueves: '1',
        Viernes: '1'
    });
    const [nombreMateria, setNombreMateria] = useState('');
    const [nombreDocente, setNombreDocente] = useState('');
    const [nombreGrupo, setNombreGrupo] = useState('');
    const [cantidadAlumnos, setCantidadAlumnos] = useState(1);

    const generarPDF = () => {
        const pdfData = {
            nombrePeriodo,
            rangoVacaciones,
            horasPorDia,
            nombreMateria,
            nombreDocente,
            nombreGrupo,
            cantidadAlumnos,
        };

        console.log('Datos para generar PDF:', pdfData);
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
                    <FPeriodoFechas />
                </Col>
                <Col span={12}>
                    <FRangoVacaciones />
                </Col>
            </Row>
            <br />
            <Row gutter={16}>
                <Col span={12}>
                    <FHorasXDia />
                </Col>
                <Col span={12}>
                    <FComplementos />
                    <FDiasInhabiles />
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


function FPeriodoFechas() {
    const [nombrePeriodo, setNombrePeriodo] = useState('');
    const handleNombrePeriodoChange = (e) => {
        setNombrePeriodo(e.target.value);
    };
    const oDatosTabla = [
        {
            key: '1',
            ClPeriodo: <Input
                placeholder="Nombre del Periodo"
                value={nombrePeriodo}
                onChange={handleNombrePeriodoChange}
            />
            ,
            FeInicioFin: <RangePicker />,
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
    const fgBanderaSeleccion = true;
    const [datoRecibido, setDatoRecibido] = useState('');

    const FCallBackSeleccionGrid = (dato) => {
        console.log('Fila seleccionada: ', dato);
        setDatoRecibido(dato);
    };

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} fgHabilitaSeleccion={fgBanderaSeleccion} pColumnas={oColumns}
                pOnSeleccion={FCallBackSeleccionGrid}
            ></SplTabla>
        </div>
    );
};

function FHorasXDia() {

    const [horasPorDia, setHorasPorDia] = useState({
        Lunes: '1',
        Martes: '1',
        Miercoles: '1',
        Jueves: '1',
        Viernes: '1'
    });

    const handleHorasChange = (day, value) => {
        setHorasPorDia((prevState) => ({
            ...prevState,
            [day]: value,
        }));
        console.log(`Horas para ${day}:`, value);
    };


    const oDatosTabla = [
        {
            key: '1',
            ClDiasSemanas: 'Lunes',
            NoHorasXDia: <Select
                defaultValue="1"
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
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Lunes', value)}

            />,
        },
        {
            key: '2',
            ClDiasSemanas: 'Martes',
            NoHorasXDia: <Select
                defaultValue="1"
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
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Martes', value)}
            />,
        },
        {
            key: '3',
            ClDiasSemanas: 'Miercoles',
            NoHorasXDia: <Select
                defaultValue="1"
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
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Miercoles', value)}
            />,
        },
        {
            key: '4',
            ClDiasSemanas: 'Jueves',
            NoHorasXDia: <Select
                defaultValue="1"
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
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Jueves', value)}

            />,
        },
        {
            key: '5',
            ClDiasSemanas: 'Viernes',
            NoHorasXDia: <Select
                defaultValue="1"
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
                ]}
                placeholder="Selecciona una Opcion"
                onChange={(value) => handleHorasChange('Viernes', value)}

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
            clIndice: 'NoHorasXDia', //Maximo 3
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50

        },


    ];
    const fgBanderaSeleccion = true;
    const [datoRecibido, setDatoRecibido] = useState('');

    const FCallBackSeleccionGrid = (dato) => {
        console.log('Fila seleccionada: ', dato);
        setDatoRecibido(dato);
    };

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} fgHabilitaSeleccion={fgBanderaSeleccion} pColumnas={oColumns}
                pOnSeleccion={FCallBackSeleccionGrid}
            ></SplTabla>
        </div>
    );
};

function FRangoVacaciones() {
    const [rangoVacaciones, setRangoVacaciones] = useState([]);
    const handleRangoChange = (dates, dateStrings) => {
        console.log('Rango seleccionado:', dates);
        setRangoVacaciones(dates);
    };

    const oDatosTabla = [
        {
            key: '1',
            NbCol: 'Seleccione un Rango para las Vacaciones',
            FeRangoVacaciones: <RangePicker onChange={handleRangoChange} />,
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
        <div>
            <h3>Rango de Vacaciones Seleccionado:</h3>
            {rangoVacaciones[0] && rangoVacaciones[1] ? (
                <p>De {rangoVacaciones[0].format('YYYY-MM-DD')} a {rangoVacaciones[1].format('YYYY-MM-DD')}</p>
            ) : (
                <p>No se ha seleccionado un rango.</p>
            )}
        </div>


    ];
    const fgBanderaSeleccion = true;
    const [datoRecibido, setDatoRecibido] = useState('');

    const FCallBackSeleccionGrid = (dato) => {
        console.log('Fila seleccionada: ', dato);
        setDatoRecibido(dato);
    };

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} fgHabilitaSeleccion={fgBanderaSeleccion} pColumnas={oColumns}
                pOnSeleccion={FCallBackSeleccionGrid}
            ></SplTabla>
        </div>
    );
};

function FComplementos() {
    const [nombreMateria, setNombreMateria] = useState('');
    const [nombreDocente, setnombreDocente] = useState('');
    const [nombreGrupo, setNombreGrupo] = useState('');
    const [cantidadAlumnos, setCantidadAlumnos] = useState(1);


    const handleNombreMateria = (e) => {
        setNombreMateria(e.target.value);
        console.log('NombreMateria: ', e.target.value);
    };
    const handleNombreDocente = (e) => {
        setnombreDocente(e.target.value);
        console.log('NombreDocente: ', e.target.value);

    };
    const handleNombreGrupo = (e) => {
        setNombreGrupo(e.target.value);
        console.log('NombreGrupo: ', e.target.value);

    };
    const handleCantidadAlumnosChange = (value) => {
        setCantidadAlumnos(value);
        console.log('Cantidad de alumnos seleccionada:', value);
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
            dsTitulo: 'Rango de Vacaciones',
            clIndice: 'Pusuario', //Maximo 3
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50

        },


    ];
    const fgBanderaSeleccion = true;
    const [datoRecibido, setDatoRecibido] = useState('');

    const FCallBackSeleccionGrid = (dato) => {
        console.log('Fila seleccionada: ', dato);
        setDatoRecibido(dato);
    };

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} pColumnas={oColumns}
                pOnSeleccion={FCallBackSeleccionGrid}
            ></SplTabla>
        </div>
    );
};

function FDiasInhabiles() {
    const [diasInhabiles, setDiasInhabiles] = useState([]);
    const handleDiasInhabilesChange = (dates, dateStrings) => {
        console.log('Días inhábiles seleccionados:', dateStrings); // Muestra las fechas seleccionadas en formato string
        setDiasInhabiles(dateStrings); // Almacena las fechas seleccionadas
    };

    const oDatosTabla = [
        {
            key: '1',
            NbCol: 'Selecciona los Días inhábiles',
            FeRangoDiasInhabiles: <DatePicker
                onChange={handleDiasInhabilesChange}
                multiple
                maxTagCount="responsive"
                size="small"
            />
            ,
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
            clIndice: 'FeRangoDiasInhabiles', //Maximo 3
            fgHabilitaFiltroBusqueda: false,
            fgHabilitaOrdeamiento: false,
            fgEsColumnaNumerica: false,
            noAnchoColumna: 50

        },


    ];
    const fgBanderaSeleccion = true;
    const [datoRecibido, setDatoRecibido] = useState('');

    const FCallBackSeleccionGrid = (dato) => {
        console.log('Fila seleccionada: ', dato);
        setDatoRecibido(dato);
    };

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} fgHabilitaSeleccion={fgBanderaSeleccion} pColumnas={oColumns}
                pOnSeleccion={FCallBackSeleccionGrid}
            ></SplTabla>
        </div>
    );
};


const GenerarPDF = () => {
};