import { combineReducers } from 'redux';
import { navReducer } from './nav.reducer';
import { grocReducer } from './groceryList.reducer';
import { Ingredients } from '../Model/Ingredient';
import { Recipe } from '../Model/Recipe';
<<<<<<< HEAD
import { enterNewRecipeReducer } from './EnterNewRecipe.reducer';

export interface rTuple {
  rTuple:[number, string, string]
}
=======
import { recipeHistoryReducer } from './RecipeHistory.reducer';
>>>>>>> adb1ea8b8720d264689031e849e5c898faaf7e40

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
<<<<<<< HEAD
  // about: IAboutState,
  // daily: IDailyState
  // favorite: IFavoriteState
  nav: INavState,
  groc: IGRocState,
  newRecipe: IEnterNewRecipeState
  // recipehistory: IRecipeHistoryState
  // setting: ISettingState
  // userinfo: IUserInfoState
  // weeklyview: IWeeklyViewState
=======
    // about: IAboutState,
    // daily: IDailyState
    // favorite: IFavoriteState
    nav: INavState
    groc: IGRocState
    // enterrecipe : IEnterNewRecipeState
    recipehistory: IRecipeHistoryState
    // setting: ISettingState
    // userinfo: IUserInfoState
    // weeklyview: IWeeklyViewState
>>>>>>> adb1ea8b8720d264689031e849e5c898faaf7e40


}



export const state = combineReducers<IState>({
  nav: navReducer,
  groc: grocReducer,
<<<<<<< HEAD
  newRecipe: enterNewRecipeReducer
=======
  recipehistory : recipeHistoryReducer
>>>>>>> adb1ea8b8720d264689031e849e5c898faaf7e40
})