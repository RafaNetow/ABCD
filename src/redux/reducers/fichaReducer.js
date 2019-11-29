import { ADD_FICHA } from '../actions/ActionTypes'
import { handlerActions } from 'redux-actions';

const defaultState = [];



const fichaReducers = handlerActions(
    {
        [ADD_FICHA]: (state, {playload}) => {
            const infoFicha = playload;
            return [...state, ...infoFicha]
        }
    },
    defaultState
)

export default fichaReducers;



