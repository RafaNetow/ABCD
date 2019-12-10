import { FichaModel } from "../models/FichaModel";
import { Dispatch } from "redux";
import { addFichaRequest, addFichaSuccess, addFichaFailure } from "./actions";
import { push } from "connected-react-router";
//import { toastNotify } from "app/utils";
import { FichaService } from "../services/ficha";





export const thunkCreateFicha = (payload: FichaModel) => {
    return async (dispatch: Dispatch) => {
      dispatch(addFichaRequest());
      try {
        const FichaServices = new FichaService();
        const response = await FichaServices.createFicha(payload);
        dispatch(addFichaSuccess(response));
        dispatch(push('/FICHA'));
       // toastNotify(text.changesSaved);
      } catch (error) {
        console.error(error);
       // toastNotify(text.genericError);
        dispatch(addFichaFailure(error));
      }
    };
  };