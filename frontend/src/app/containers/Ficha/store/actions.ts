import { createAction } from 'redux-actions';
import { FichaModel } from '../models/FichaModel';
import {Type} from './types'


  // Get FICHA actions
  export const fetchFichaRequest = createAction(
    Type.FETCH_FICHA_REQUEST,
  );
  export const fetchFichaSuccess = createAction(
    Type.FETCH_FICHA_SUCCESS,
  );
  export const fetchFichaFailure = createAction<any>(
    Type.FETCH_FICHA_FAILURE,
  );

  // Create FICHA
  export const addFichaRequest = createAction(Type.ADD_FICHA_REQUEST);
  export const addFichaSuccess = createAction<any>(
    Type.ADD_FICHA_SUCCESS,
  );
  export const addFichaFailure = createAction<any>(
    Type.ADD_FICHA_FAILURE,
  );

  // Delete FICHA
  export const deleteFichaRequest = createAction(
    Type.DELETE_FICHA_REQUEST,
  );
  export const deleteFichauccess = createAction<any>(
    Type.DELETE_FICHA_SUCCESS,
  );
  export const deleteFichaFailure = createAction<any>(
    Type.DELETE_FICHA_FAILURE,
  );

  // Update FICHA
  export const updateFichaRequest = createAction(
    Type.UPDATE_FICHA_REQUEST,
  );
  export const updateFichaSuccess = createAction<any>(
    Type.UPDATE_FICHA_SUCCESS,
  );
  export const updateFichaFailure = createAction<any>(
    Type.UPDATE_FICHA_FAILURE,
  );

  // Update FICHA status
  export const updateFichaStatusRequest = createAction(
    Type.UPDATE_FICHA_STATUS_REQUEST,
  );
  export const updateFichaStatusSuccess = createAction<any>(
    Type.UPDATE_FICHA_STATUS_SUCCESS,
  );
  export const updateFichaStatusFailure = createAction<any>(
    Type.UPDATE_FICHA_STATUS_FAILURE,
  );





export interface AddFichaPayload {
  FICHA: FichaModel;
}

