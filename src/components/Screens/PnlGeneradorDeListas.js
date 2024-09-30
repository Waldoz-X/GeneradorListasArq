import React, { useState, useEffect } from 'react';
import { DatabaseTwoTone, DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { SplTabla } from '../ListasComponentLibrary';
import { Button, Flex, Input, Typography, Col, Row, Cascader } from 'antd';


export const PnlGeneradorDeListas = () => {
    const [position] = useState('start');
    return (
        <div>

            <Col span={24}>
                <Typography.Title level={2} style={{ textAlign: 'center' }} >
                    Generador de Listas
                </Typography.Title>
            </Col>

            <br />

            <GridEjemplo></GridEjemplo>

        </div>
    )
}


function GridEjemplo() {

    /// TABLA
    /// Arreglo de datos para la tabla definido por clave / valor
    const oDatosTabla = [
        {
            ///Identificador necesario para el componente Tabla
            key: '1',
            ///Clave del usuario
            clUsuario: 'SDSD',
            ///NOmbre del usuario
            nbUsuario: 'John Brown',
            ///Edad del usuario
            noEdad: 45,
            /// Dirección del usuario
            dsDireccion: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            clUsuario: 'jgreen',
            nbUsuario: 'Jim Green',
            noEdad: 42,
            dsDireccion: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            clUsuario: 'jblack',
            nbUsuario: 'Joe Black',
            noEdad: 32,
            dsDireccion: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            clUsuario: 'jred',
            nbUsuario: 'Jim Red',
            noEdad: 32,
            dsDireccion: 'London No. 2 Lake Park',
        },
    ];
    //Columnas
    /// Definición de cada uno de las columnas que va a tener la tabla
    /// Cada columna puede tener las caracteristicas que se definenn a copntinuación
    const oColumns = [
        {
            ///Titulo de la columna
            dsTitulo: 'Nombre Archivo',
            ///Clave asociada al indice de la columna
            clIndice: 'clUsuario',
            /// Bandera para habilitar el elemento de busqueda/filtro
            fgHabilitaFiltroBusqueda: false,
            /// Bandera para habiltar el elemento de orden
            fgHabilitaOrdeamiento: true,
            ///BAndera para indicar si la columna se precisa estática, Puede ir nula.
            fgColumnaEstatica: true,
            ///Bandera para indicar el ancho de la columna, puede ir nula, en ese caso tomará u ancho predeterminado.
            noAnchoColumna: 200
        },
        {
            dsTitulo: '',
            clIndice: 'nbUsuario',
            fgHabilitaFiltroBusqueda: true,//...getColumnSearchProps('name'),
            fgHabilitaOrdeamiento: true //sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            dsTitulo: 'Acciones',
            clIndice: 'noEdad',
            fgHabilitaFiltroBusqueda: false,//...getColumnSearchProps('name'),
            fgHabilitaOrdeamiento: true,  //sorter: (a, b) => a.age - b.age,
            fgEsColumnaNumerica: true
        },
    ];
    ///Habilita la columna de seleccion en la primer columna del grid.
    const fgBanderaSeleccion = true;
    const [datoRecibido, setDatoRecibido] = useState('');

    const FCallBackSeleccionGrid = (dato) => {
        console.log('Fila seleccionada: ', dato);
        setDatoRecibido(dato); // Actualiza el estado con el dato recibido desde el hijo
    };

    return (
        <div>
            <SplTabla pDatosTabla={oDatosTabla} fgHabilitaSeleccion={fgBanderaSeleccion} pColumnas={oColumns}
            //pOnSeleccion={FCallBackSeleccionGrid}
            ></SplTabla>
        </div>
    );
};
