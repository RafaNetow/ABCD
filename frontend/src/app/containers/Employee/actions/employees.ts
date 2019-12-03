import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { EmployeeModel, EmployeeUpdateModel } from '../models/EmployeeModel';
import { EmployeesService, GetEmployeesResponse } from '../services/employees';
import { push } from 'react-router-redux';
import { toastNotify } from 'app/utils';
import text from '../../../../assets/translations';

export namespace EmployeeActions {
  export enum Type {
    FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST',
    FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS',
    FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE',
    ADD_EMPLOYEE_REQUEST = 'ADD_EMPLOYEE_REQUEST',
    ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS',
    ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE',
    DELETE_EMPLOYEE_REQUEST = 'DELETE_EMPLOYEE_REQUEST',
    DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS',
    DELETE_EMPLOYEE_FAILURE = 'DELETE_EMPLOYEE_FAILURE',
    UPDATE_EMPLOYEE_REQUEST = 'UPDATE_EMPLOYEE_REQUEST',
    UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS',
    UPDATE_EMPLOYEE_FAILURE = 'UPDATE_EMPLOYEE_FAILURE',
    UPDATE_EMPLOYEE_STATUS_REQUEST = 'UPDATE_EMPLOYEE_STATUS_REQUEST',
    UPDATE_EMPLOYEE_STATUS_SUCCESS = 'UPDATE_EMPLOYEE_STATUS_SUCCESS',
    UPDATE_EMPLOYEE_STATUS_FAILURE = 'UPDATE_EMPLOYEE_STATUS_FAILURE',
  }

  // Get employees actions
  export const fetchEmployeesRequest = createAction(
    Type.FETCH_EMPLOYEES_REQUEST,
  );
  export const fetchEmployeesSuccess = createAction<GetEmployeesResponse>(
    Type.FETCH_EMPLOYEES_SUCCESS,
  );
  export const fetchEmployeesFailure = createAction<any>(
    Type.FETCH_EMPLOYEES_FAILURE,
  );

  // Create employee
  export const addEmployeeRequest = createAction(Type.ADD_EMPLOYEE_REQUEST);
  export const addEmployeeSuccess = createAction<any>(
    Type.ADD_EMPLOYEE_SUCCESS,
  );
  export const addEmployeeFailure = createAction<any>(
    Type.ADD_EMPLOYEE_FAILURE,
  );

  // Delete employee
  export const deleteEmployeeRequest = createAction(
    Type.DELETE_EMPLOYEE_REQUEST,
  );
  export const deleteEmployeeSuccess = createAction<any>(
    Type.DELETE_EMPLOYEE_SUCCESS,
  );
  export const deleteEmployeeFailure = createAction<any>(
    Type.DELETE_EMPLOYEE_FAILURE,
  );

  // Update employee
  export const updateEmployeeRequest = createAction(
    Type.UPDATE_EMPLOYEE_REQUEST,
  );
  export const updateEmployeeSuccess = createAction<any>(
    Type.UPDATE_EMPLOYEE_SUCCESS,
  );
  export const updateEmployeeFailure = createAction<any>(
    Type.UPDATE_EMPLOYEE_FAILURE,
  );

  // Update employee status
  export const updateEmployeeStatusRequest = createAction(
    Type.UPDATE_EMPLOYEE_STATUS_REQUEST,
  );
  export const updateEmployeeStatusSuccess = createAction<any>(
    Type.UPDATE_EMPLOYEE_STATUS_SUCCESS,
  );
  export const updateEmployeeStatusFailure = createAction<any>(
    Type.UPDATE_EMPLOYEE_STATUS_FAILURE,
  );

  // Async Actions are handled by thunk middleware
  export function fetchEmployees(
    filteredBy?: string,
  ): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
      dispatch(fetchEmployeesRequest());
      try {
        const employeeService = new EmployeesService();
        const response = await employeeService.getAllEmployees(filteredBy);
        dispatch(fetchEmployeesSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(fetchEmployeesFailure(error));
      }
    };
  }

  export const addEmployee = (payload: EmployeeModel) => {
    return async (dispatch: Dispatch) => {
      dispatch(addEmployeeRequest());
      try {
        const employeeService = new EmployeesService();
        const response = await employeeService.createEmployee(payload);
        dispatch(addEmployeeSuccess(response));
        dispatch(push('/employees'));
        toastNotify(text.changesSaved);
      } catch (error) {
        console.error(error);
        toastNotify(text.genericError);
        dispatch(addEmployeeFailure(error));
      }
    };
  };

  export const deleteEmployee = (employeeId: number) => {
    return async (dispatch: Dispatch) => {
      dispatch(deleteEmployeeRequest());
      try {
        const employeeService = new EmployeesService();
        const response = await employeeService.deleteEmployee(employeeId);
        dispatch(deleteEmployeeSuccess(response));
        dispatch(push('/employees'));
        toastNotify(text.changesSaved);
      } catch (error) {
        console.error(error);
        toastNotify(text.genericError);
        dispatch(deleteEmployeeFailure(error));
      }
    };
  };

  export const updateEmployee = (
    employeeId: number,
    payload: EmployeeUpdateModel,
  ) => {
    return async (dispatch: Dispatch) => {
      dispatch(updateEmployeeRequest());
      try {
        const employeeService = new EmployeesService();
        const response = await employeeService.updateEmployee(
          employeeId,
          payload,
        );
        dispatch(updateEmployeeSuccess(response));
        dispatch(push('/employees'));
        toastNotify(text.changesSaved);
      } catch (error) {
        console.error(error);
        toastNotify(text.genericError);
        dispatch(updateEmployeeFailure(error));
      }
    };
  };

  export const updateEmployeeStatus = (
    employeeId: number,
    isActive: boolean,
  ) => {
    return async (dispatch: Dispatch) => {
      dispatch(updateEmployeeStatusRequest());
      try {
        const employeeService = new EmployeesService();
        const response = await employeeService.updateEmployeeStatus(
          employeeId,
          isActive,
        );
        dispatch(updateEmployeeStatusSuccess(response));
        toastNotify(text.changesSaved);
      } catch (error) {
        console.error(error);
        toastNotify(text.genericError);
        dispatch(updateEmployeeStatusFailure(error));
      }
    };
  };
}

export type EmployeeActions = Omit<typeof EmployeeActions, 'Type'>;
export interface AddEmployeePayload {
  employee: EmployeeModel;
}
