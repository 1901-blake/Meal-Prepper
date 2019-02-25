import React, { Component } from 'react';
import './App.scss';
import './include/Bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './Store';
import NavComponent from './Components/Nav/Nav.component';
import GroceryListComponent from './Components/GroceryList/GroceryList.component';
import { DailyComponent } from './Components/Daily_View/Daily.component';
import { WeeklyViewComponent } from './Components/Weekly_View/WeeklyView.component';
import RecipeHistoryComponent from './Components/Recipe_History/Recipe.component';
import { FavoriteComponent } from './Components/Favorites/Favorite.component';
import { SettingComponent } from './Components/Setting/Setting.component';
import { UserInfoComponent } from './Components/User_Info/UserInfo.component';
import { AboutComponent } from './Components/About/About.component';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavComponent />

            <Route exact path="/home" component={GroceryListComponent} />

            <Route exact path="/grocerylist" component={GroceryListComponent} />

            <Route exact path="/about" component={AboutComponent} />

            <Route exact path="/dailyinfo" component={DailyComponent} />
            <Route exact path="/weeklyinfo" component={WeeklyViewComponent} />

            <Route exact path="/recipehistory" component={RecipeHistoryComponent} />

            <Route exact path="/favorites" component={FavoriteComponent} />

            <Route exact path="/setting" component={SettingComponent} />
            <Route exact path="/userinfo" component={UserInfoComponent} />



          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
