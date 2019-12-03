import { SET_IDENTITY_NUMBER } from '../actions/ActionTypes'
import { handlerActions } from 'redux-actions';

const defaultState = {};

const fichaReducers = handlerActions(
    {
        [SET_IDENTITY_NUMBER]: (state, {playload}) => {
            const numAccount = playload;
            return [...state, ...numAccount]
        }
    },
    defaultState
)

export default fichaReducers;



