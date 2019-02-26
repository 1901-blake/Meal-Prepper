import { combineReducers } from 'redux';
import { navReducer } from './nav.reducer';
import { grocReducer } from './groceryList.reducer';
import { Ingredients } from '../Model/Ingredient';
import { Recipe } from '../Model/Recipe';
import { userInfoReducer } from './userinfo.reducer';

export interface INavState {
    dropdown1: boolean
    dropdown2: boolean
}
export interface IAboutStateState {
}
export interface IDailyState {
}
export interface IFavoriteState {
}
export interface IEnterNewRecipeState {
}
export interface IRecipeHistoryState {
}
export interface ISettingState {
}
export interface IUserInfoState {
   firstname: string
   lastname: string
   email: string
   username: string
   feedback: string
}
export interface IWeeklyViewState {
  //create an array of recipe and call it weekly recipe
  weeklyrecipe : Recipe[];
  // this should be filled by the action by calling an fetch
}



export interface IGRocState{
  arrayingredient : Ingredients[]
  amount : number
}
export interface IState {
    // about: IAboutState,
    // daily: IDailyState
    // favorite: IFavoriteState
    nav: INavState
    groc: IGRocState
    // enterrecipe : IEnterNewRecipeState
    // recipehistory: IRecipeHistoryState
    // setting: ISettingState
    userinfo: IUserInfoState
    // weeklyview: IWeeklyViewState


}



export const state = combineReducers<IState>({
  nav: navReducer,
  groc: grocReducer,
  userinfo: userInfoReducer
})