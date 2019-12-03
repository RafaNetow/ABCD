
  
  export interface FichaModel {
    numAccount: string,
      RNE: string,
      nombre: string,
      apellido: string,
      lugarDeNacimiento: string,
      genero: boolean,
      nacionalidad: string,
      direccion: string,
      telefono: string,
      tipoSangre: string
  }
  
  export interface EmployeeRowModel {
    id: number;
    lastName: string;
    secondLastName: string;
    displayName: string;
    email: string;
    birthdate: string;
    startDate: string;
    tags: string;
  }
  
  export interface EmployeeUpdateModel {
    firstName: string;
    middleName: string;
    lastName: string;
    secondLastName: string;
    displayName: string;
    email: string;
    personalEmail: string;
    birthdate: Date;
    phoneNumber: string;
    address: string;
    tags: string;
    country: string;
    region: string;
    city: string;
    salary: number;
    effectiveDate: Date;
    isActive: boolean;
  }
  
  export namespace FichaModel {
    export const dateFormat = 'M/D/YYYY';
  }
  