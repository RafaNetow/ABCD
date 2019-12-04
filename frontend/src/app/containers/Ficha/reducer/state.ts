import {FichaModel } from '../models/FichaModel'

export interface FichaState {
    isFetching: boolean;
    errorMessage: string;
    fichas: FichaModel[];
}