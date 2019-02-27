import { combineReducers } from 'redux';
import { navReducer } from './nav.reducer';
import { grocReducer } from './groceryList.reducer';
import { Ingredients } from '../Model/Ingredient';
import { Recipe } from '../Model/Recipe';

import { enterNewRecipeReducer } from './EnterNewRecipe.reducer';

export interface rTuple {
  rTuple:[number, string, string]
}

import { recipeHistoryReducer } from './RecipeHistory.reducer';


import { userInfoReducer } from './userinfo.reducer';
import { weeklyViewReducer } from './weeklyview.reducer';
import { favoriteReducer } from './Favorite.reducer';


export interface INavState {
  dropdown1: boolean
  dropdown2: boolean
}
export interface IAboutStateState {
}
export interface IDailyState {
}
export interface IFavoriteState {
  favoriteRecipeArr : Recipe[]
}
export interface IEnterNewRecipeState {
  ingredArr: rTuple[]
  amount: number
  measure: string
  ingredient: string
}
export interface IRecipeHistoryState {
  recipehistoryarray : Recipe[];
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
  weeklyrecipe: Recipe[];
  // this should be filled by the action by calling an fetch
}



export interface IGRocState {
  arrayingredient: Ingredients[]
  amount: number
}
export interface IState {
  // about: IAboutState,
  // daily: IDailyState
  favorite: IFavoriteState
  nav: INavState,
  groc: IGRocState,
  newRecipe: IEnterNewRecipeState,
  weeklyview: IWeeklyViewState
    // favorite: IFavoriteState
    recipehistory: IRecipeHistoryState
    userinfo: IUserInfoState
    // weeklyview: IWeeklyViewState

}



export const state = combineReducers<IState>({
  favorite: favoriteReducer,
  nav: navReducer,
  groc: grocReducer,
  newRecipe: enterNewRecipeReducer,
  weeklyview: weeklyViewReducer,
  recipehistory : recipeHistoryReducer,
  userinfo: userInfoReducer
})