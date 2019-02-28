import React, { Component } from 'react';
import './App.scss';
import './include/Bootstrap';
import { store } from './Store';
import NavComponent from './Components/Nav/Nav.component';
import GroceryListComponent from './Components/GroceryList/GroceryList.component';
import  WeeklyViewComponent  from './Components/Weekly_View/WeeklyView.component';
import RecipeHistoryComponent from './Components/Recipe_History/Recipe.component';
import  FavoriteComponent  from './Components/Favorites/Favorite.component';
import { SettingComponent } from './Components/Setting/Setting.component';
import UserInfoComponent from './Components/User_Info/UserInfo.component';
import EnterNewRecipeComponent from './Components/Recipe_Input/EnterNewRecipe.component';
import { HomeComponent } from './Components/Home/Home.component';
import Amplify from 'aws-amplify';
import config from './config/cognito.config';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import GenerateMealPlanComponent from './Components/Generate/GenerateMealPlan.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Amplify.configure({
  Auth : {
    mandatorySignIn : true,
    region : config.cognito.REGION,
    userPoolId : config.cognito.USER_POOL_ID,
    identityPoolId : config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId : config.cognito.APP_CLIENT_ID
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavComponent />

            <Route exact path="" component={HomeComponent} />

            <Route exact path="/grocerylist" component={GroceryListComponent} />
            <Route exact path="/weeklyinfo" component={WeeklyViewComponent} />
            <Route exact path="/generate" component={GenerateMealPlanComponent} />

            <Route exact path="/recipehistory" component={RecipeHistoryComponent} />
            <Route exact path="/recipeInput" component={EnterNewRecipeComponent} />
            <Route exact path="/favorites" component={FavoriteComponent} />

            <Route exact path="/setting" component={SettingComponent} />
            <Route exact path="/userinfo" component={UserInfoComponent} />

            <ToastContainer autoClose={3000} />

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
