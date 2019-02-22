import { combineReducers } from 'redux';
import { navReducer } from './nav.reducer';

export interface INavState {
    dropdown1: boolean
    dropdown2: boolean
}

export interface IState {
    nav: INavState
}

export const state = combineReducers<IState>({
  nav: navReducer
})