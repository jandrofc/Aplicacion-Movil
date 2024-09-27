import {usuario} from './bd.models';

export const usuarioSimulados: usuario[] = [
    {
        id: 1,
        nombreCompleto: 'Administrador',
        usuario: 'admin',
        clave: 'admin',
        tipo: 'admin'
    },
    {
        id: 2,
        nombreCompleto: 'Cristobal Cereno',
        usuario: 'cri.cereno',
        clave: '12345',
        tipo: 'alumno'
    },
    {
        id: 3,
        nombreCompleto: 'Francisco Esteva',
        usuario: 'Mekaiter',
        clave: 'hola12345',
        tipo: 'profesor'
    },
    {
        id: 4,
        nombreCompleto: 'Juanito Perez',
        usuario: 'hola12345',
        clave: 'hola12345',
        tipo: 'alumno'
    }
];