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
import { Ingredients } from '../Model/Ingredients';
import { AuthReducer } from './Auth.reducer';

export interface IAuthState {
  isLoggedIn : boolean
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
  ingredArr: Ingredients[]
  amount: number
  measure: Measure
  ingredient: Ingredient,
  recipeName: string,
  description: string,
  instructions: string,
  status: number,
  ingredientPop: Ingredient[],
  measurePop: Measure[]
}
export interface IRecipeHistoryState {
  recipehistoryarray: Recipe[];
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
  weeklyrecipe: FullRecipe[];
  // this should be filled by the action by calling an fetch
}

export interface IGRocState {
  arrayingredient: Ingredients[]
  amount: number
}

export interface IState {
  auth : IAuthState,
  // about: IAboutState,
  // daily: IDailyState
  favorite: IFavoriteState,
  nav: INavState,
  groc: IGRocState,
  newRecipe: IEnterNewRecipeState,
  weeklyview: IWeeklyViewState,
  // favorite: IFavoriteState
  recipehistory: IRecipeHistoryState,
  userinfo: IUserInfoState,

  generate: IGenerateMealPlanState
  // weeklyview: IWeeklyViewState
}

export const state = combineReducers<IState>({
  auth: AuthReducer,
  favorite: favoriteReducer,
  nav: navReducer,
  groc: grocReducer,
  newRecipe: enterNewRecipeReducer,
  weeklyview: weeklyViewReducer,
  recipehistory: recipeHistoryReducer,
  userinfo: userInfoReducer,
  generate: generateMealPlanReducer,
})