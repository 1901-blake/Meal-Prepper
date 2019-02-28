import { combineReducers } from 'redux';
import { navReducer } from './nav.reducer';
import { grocReducer } from './groceryList.reducer';
import { Recipe } from '../Model/Recipe';
import { enterNewRecipeReducer } from './EnterNewRecipe.reducer';
import { recipeHistoryReducer } from './RecipeHistory.reducer';
import { userInfoReducer } from './userinfo.reducer';
import { weeklyViewReducer } from './weeklyview.reducer';
import { favoriteReducer } from './Favorite.reducer';
import { FullRecipe } from '../Model/FullRecipe';
import { generateMealPlanReducer } from './GenerateMealPlan.reducer';
import { Ingredient } from '../Model/Ingredient';
import { Measure } from '../Model/Measure';


export interface rTuple {
  rTuple: [number, Ingredient, Measure]
}

export interface INavState {
  dropdown1: boolean
  dropdown2: boolean
}

export interface IGenerateMealPlanState {
  mealPlan: FullRecipe[]
}

export interface IAboutStateState {
}
export interface IDailyState {
}
export interface IFavoriteState {
  favoriteRecipeArr: Recipe[]
}
export interface IEnterNewRecipeState {
  ingredArr: rTuple[]
  amount: number
  measure: Measure
  ingredient: Ingredient
}
export interface IRecipeHistoryState {
  recipehistoryarray: Recipe[];
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
//   arrayingredient: Ingredients[]
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

  generate: IGenerateMealPlanState
  // weeklyview: IWeeklyViewState

}



export const state = combineReducers<IState>({
  favorite: favoriteReducer,
  nav: navReducer,
  groc: grocReducer,
  newRecipe: enterNewRecipeReducer,
  weeklyview: weeklyViewReducer,
  recipehistory: recipeHistoryReducer,
  userinfo: userInfoReducer,
  generate: generateMealPlanReducer
})