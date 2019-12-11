import { handleActions } from 'redux-actions';
import { EmployeeActions } from '../actions';
//import { EmployeeState } from './state';

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
}