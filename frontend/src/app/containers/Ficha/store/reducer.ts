
import { handleActions } from 'redux-actions';
import { Type } from './types';
import { FichaState, FichaInitalState } from './state';



export const fichaReducer = handleActions<FichaState, any>(
  {
    [Type.ADD_FICHA_REQUEST]: state => {
      return {
        ...state,
        isFetching: true,
      };
    },
    [Type.ADD_FICHA_FAILURE]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message || '',
      };
    },
    [Type.ADD_FICHA_SUCCESS]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message || '',
      }
    }
},FichaInitalState)