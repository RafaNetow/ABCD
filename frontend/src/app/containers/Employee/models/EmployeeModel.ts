export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum SalaryType {
  HOURLY = 'hourly',
  YEARLY = 'yearly',
}

export interface EmployeeModel {
  firstName: string;
  middleName: string;
  lastName: string;
  secondLastName: string;
  displayName: string;
  email: string;
  personalEmail: string;
  birthdate: Date;
  startDate: Date;
  phoneNumber: string;
  address: string;
  bankName: string;
  accountNumber: string;
  gender: Gender;
  tags: string;
  country: string;
  region: string;
  city: string;
  salary: number;
  salaryType: SalaryType;
  effectiveDate: Date;
  isActive: boolean;
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
  salaryType: SalaryType;
  effectiveDate: Date;
  isActive: boolean;
}

export namespace EmployeeModel {
  export const dateFormat = 'M/D/YYYY';
}
