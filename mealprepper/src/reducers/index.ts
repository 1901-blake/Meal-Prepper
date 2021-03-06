import { combineReducers } from 'redux';
import { navReducer } from './nav.reducer';
import { grocReducer } from './groceryList.reducer';
import { Recipe } from '../Model/Recipe';
import { enterNewRecipeReducer } from './EnterNewRecipe.reducer';
import { recipeHistoryReducer } from './RecipeHistory.reducer';
import { userInfoReducer } from './userinfo.reducer';
import { weeklyViewReducer } from './weeklyview.reducer';
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
  breakfast: FullRecipe[] 
  lunch: FullRecipe[]
  dinner: FullRecipe[]
  dessert: FullRecipe[]
  status: string
}

export interface IAboutStateState {
}
export interface IDailyState {
}
export interface IEnterNewRecipeState {
  ingredArr: Ingredients[]
  amount: number
  measure: Measure
  ingredient: Ingredient,
  recipeName: string,
  description: string,
  instructions: string,
  status: string,
  ingredientPop: Ingredient[],
  measurePop: Measure[],
  
}
export interface IRecipeHistoryState {
  recipehistoryarray: FullRecipe[];
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
}

export interface IGRocState {
  arrayingredient: Ingredients[]
  amount: number
}

export interface IState {
  auth : IAuthState,
  // about: IAboutState,
  // daily: IDailyState,
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
  nav: navReducer,
  groc: grocReducer,
  newRecipe: enterNewRecipeReducer,
  weeklyview: weeklyViewReducer,
  recipehistory: recipeHistoryReducer,
  userinfo: userInfoReducer,
  generate: generateMealPlanReducer,
})