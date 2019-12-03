import { handleActions } from 'redux-actions';
import { EmployeeActions } from '../actions';
import { EmployeeState } from './state';

export const employeesInitialState: EmployeeState = {
  errorMessage: '',
  isFetching: false,
  employees: [] as any,
};

export const employeeReducer = handleActions<EmployeeState, any>(
  {
    [EmployeeActions.Type.FETCH_EMPLOYEES_REQUEST]: state => {
      return {
        ...state,
        isFetching: true,
      };
    },
    [EmployeeActions.Type.FETCH_EMPLOYEES_FAILURE]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message || '',
      };
    },
    [EmployeeActions.Type.FETCH_EMPLOYEES_SUCCESS]: (state, action) => {
      const payload = action.payload;
      if (!payload) {
        return {
          ...state,
          isFetching: false,
        };
      }

      return {
        ...state,
        isFetching: false,
        employees: payload.employees.data,
      };
    },
    [EmployeeActions.Type.ADD_EMPLOYEE_REQUEST]: state => {
      return {
        ...state,
        isFetching: true,
      };
    },
    [EmployeeActions.Type.ADD_EMPLOYEE_FAILURE]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message || '',
      };
    },
    [EmployeeActions.Type.ADD_EMPLOYEE_SUCCESS]: state => {
      return {
        ...state,
        isFetching: false,
      };
    },
    [EmployeeActions.Type.UPDATE_EMPLOYEE_REQUEST]: state => {
      return {
        ...state,
        isFetching: true,
      };
    },
    [EmployeeActions.Type.UPDATE_EMPLOYEE_FAILURE]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message || '',
      };
    },
    [EmployeeActions.Type.UPDATE_EMPLOYEE_SUCCESS]: state => {
      return {
        ...state,
        isFetching: false,
      };
    },
    [EmployeeActions.Type.UPDATE_EMPLOYEE_STATUS_REQUEST]: state => {
      return {
        ...state,
        isFetching: true,
      };
    },
    [EmployeeActions.Type.UPDATE_EMPLOYEE_STATUS_FAILURE]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message || '',
      };
    },
    [EmployeeActions.Type.UPDATE_EMPLOYEE_STATUS_SUCCESS]: state => {
      return {
        ...state,
        isFetching: false,
      };
    },
  },
  employeesInitialState,
);
