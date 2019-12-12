import {FichaModel } from '../models/FichaModel'

export interface FichaState {
    isFetching: boolean;
    errorMessage: string;
    ficha: FichaModel;
}




export const FichaInitalState: FichaState  ={
    ficha: {
      numAccount: '',
      RNE: '',
      nombre: '',
      apellido: '',
      lugarDeNacimiento: new Date(),
      fechaNacimiento: new Date(),
      genero: false,
      nacionalidad: '',
      direccion: '',
      telefono: '',
      tipoSangre: ''

    },
    isFetching: false,
    errorMessage:''

}