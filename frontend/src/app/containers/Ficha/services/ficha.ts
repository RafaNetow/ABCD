import { HttpService } from '../../../services/httpService';


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





  async updateEmployeeStatus(id: number, isActive: boolean) {
    return this.httpService.put(`${this.employeesUrl}/status/${id}`, {
      isActive,
    });
  }

  async deleteEmployee(employeeId: number) {
    return this.httpService.delete(`${this.employeesUrl}/${employeeId}`);
  }

}

export interface GetEmployeesResponse {
  
}
