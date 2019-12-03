import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { FichaModel } from '../models/FichaModel';
import { FichaService } from '../services/ficha';
import { push } from 'react-router-redux';
import { toastNotify } from 'app/utils';
import text from '../../../../assets/translations';

export namespace FichaActions {
  export enum Type {
    FETCH_FICHA_REQUEST = 'FETCH_FICHA_REQUEST',
    FETCH_FICHA_SUCCESS = 'FETCH_FICHA_SUCCESS',
    FETCH_FICHA_FAILURE = 'FETCH_FICHA_FAILURE',
    ADD_FICHA_REQUEST = 'ADD_FICHA_REQUEST',
    ADD_FICHA_SUCCESS = 'ADD_FICHA_SUCCESS',
    ADD_FICHA_FAILURE = 'ADD_FICHA_FAILURE',
    DELETE_FICHA_REQUEST = 'DELETE_FICHA_REQUEST',
    DELETE_FICHA_SUCCESS = 'DELETE_FICHA_SUCCESS',
    DELETE_FICHA_FAILURE = 'DELETE_FICHA_FAILURE',
    UPDATE_FICHA_REQUEST = 'UPDATE_FICHA_REQUEST',
    UPDATE_FICHA_SUCCESS = 'UPDATE_FICHA_SUCCESS',
    UPDATE_FICHA_FAILURE = 'UPDATE_FICHA_FAILURE',
    UPDATE_FICHA_STATUS_REQUEST = 'UPDATE_FICHA_STATUS_REQUEST',
    UPDATE_FICHA_STATUS_SUCCESS = 'UPDATE_FICHA_STATUS_SUCCESS',
    UPDATE_FICHA_STATUS_FAILURE = 'UPDATE_FICHA_STATUS_FAILURE',
  }

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
  export const addFICHAFailure = createAction<any>(
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

  // Async Actions are handled by thunk middleware


  export const addFicha = (payload: FichaModel) => {
    return async (dispatch: Dispatch) => {
      dispatch(addFichaRequest());
      try {
        const FichaServices = new FichaService();
        const response = await FichaServices.createFicha(payload);
        dispatch(addFichaSuccess(response));
        dispatch(push('/FICHA'));
        toastNotify(text.changesSaved);
      } catch (error) {
        console.error(error);
        toastNotify(text.genericError);
        dispatch(addFICHAFailure(error));
      }
    };
  };

  


export type FichaActions = Omit<typeof FichaActions, 'Type'>;
export interface AddFichaPayload {
  FICHA: FichaModel;
}
}
