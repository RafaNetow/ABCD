import { RouterState } from 'react-router-redux';
import { FichaState } from 'app/containers/Ficha/reducer/state'

export interface RootState {
  router: RouterState;
  fichas: FichaState;
}

export interface SortedColumn {
  id: string;
  desc: boolean;
}
