import { HttpService } from '../../../services/httpService';
import { EmployeeModel, EmployeeUpdateModel } from '../models/EmployeeModel';

export class FichaService {
  private readonly employeesUrl: string;
  private readonly httpService: HttpService;
  constructor(baseUrl = process.env.API_URL) {
    this.employeesUrl = `${baseUrl}/api/Employees`;
    this.httpService = new HttpService();
  }

  async getAllEmployees(filteredBy?: string): Promise<GetEmployeesResponse> {
    const response = await this.httpService.get(this.employeesUrl, {
      params: {
        filter: filteredBy,
      },
    });
    return {
      employees: response,
    };
  }

  createFicha(employee: EmployeeModel) {
    return this.httpService.post(this.employeesUrl, employee);
  }

  async updateEmployee(id: number, employee: EmployeeUpdateModel) {
    const employeeToUpdate = {
      employeeId: id,
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
      secondLastName: employee.secondLastName,
      displayName: employee.displayName,
      email: employee.email,
      personalEmail: employee.personalEmail,
      birthdate: employee.birthdate,
      phoneNumber: employee.phoneNumber,
      address: employee.address,
      tags: employee.tags,
      country: employee.country,
      region: employee.region,
      city: employee.city,
      salary: employee.salary,
      salaryType: employee.salaryType,
      effectiveDate: employee.effectiveDate,
    };

    return this.httpService.put(`${this.employeesUrl}`, employeeToUpdate);
  }

  async updateEmployeeStatus(id: number, isActive: boolean) {
    return this.httpService.put(`${this.employeesUrl}/status/${id}`, {
      isActive,
    });
  }

  async deleteEmployee(employeeId: number) {
    return this.httpService.delete(`${this.employeesUrl}/${employeeId}`);
  }

  async getEmployeeById(id: number): Promise<EmployeeModel> {
    const response = await this.httpService.get(`${this.employeesUrl}`, {
      params: { id },
    });
    return response as EmployeeModel;
  }
}

export interface GetEmployeesResponse {
  employees: EmployeeModel[];
}
