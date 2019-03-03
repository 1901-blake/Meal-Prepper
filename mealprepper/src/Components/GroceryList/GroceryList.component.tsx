import React from "react";
import { connect } from 'react-redux';
import { IGRocState, IState, state, IGenerateMealPlanState } from "../../reducers";
import { loadGroceryRow, addGroceryRow } from "../../Actions/GroceryList.action";
import { FullRecipe } from "../../Model/FullRecipe";
import { GroceryListrowComponent } from "./GroceryListrow.component";
import Table from "reactstrap/lib/Table";
import { AppState } from "@aws-amplify/core";
import { Redirect } from "react-router";

export interface IGrocProps {
    groc: IGRocState,
    generate: IGenerateMealPlanState,
    isLoggedIn : boolean,
    loadGroceryRow: (generate: FullRecipe[]) => void,
    addGroceryRow: (Ingredientname: string, amount: number) => void

}

export class GroceryListComponent extends React.Component<IGrocProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            tempamount: 0,
            tempname: '',
            linebool: false
        }
    }



    changeamount = (event) => {
        console.log('col value: ' + event.target.parentNode.nodeName);
        this.setState({ tempamount: event.target.value });
    }
    changename = (event) => {
        this.setState({ tempname: event.target.value });
    }

    addrowfunc = () => {
        if (this.state.tempname && this.state.tempamount) {
            this.props.addGroceryRow(this.state.tempname, this.state.tempamount);

        } else {
            console.log(this.props.generate.mealPlan[0].description);
        }
    }

    togglelinestyle = (event) => {
        console.log('togglelinestyle event value : ' + event.target.checked);
        if (event.target.checked) {
            this.setState({ linebool: true });
        }
        else {
            this.setState({ linebool: false });

        }
    }
    componentDidMount() {
        console.log('componentDidMount loadGroceryList');
        if (this.props.generate.mealPlan) {

            this.props.loadGroceryRow(this.props.generate.mealPlan);
        }
    }

    render() {

        let linebool = this.state.linebool;

        return (
            <div className="bg">
            <h1 className="tableHeaders">Grocery List</h1>
                <div className="user-info-class">
                    {/* <table style={divStyle} id="groceryTable"> */}
                    <Table hover id="groceryTable">

                        <thead>
        if (this.props.isLoggedIn) {
            return (
            <div className="bg">
            <h1 className="tableHeaders">Grocery List</h1>
                <div className="user-info-class">
                    {/* <table style={divStyle} id="groceryTable"> */}
                    <Table hover id="groceryTable">

                        <thead>
                            <tr>
                                <th>active</th>
                                <th>ingredient</th>
                                <th>amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>

                                <td> <button onClick={this.addrowfunc}>+</button> </td>
                                <td> <input type="text" placeholder="ingredient name" onChange={this.changename} /> </td>
                                <td> <input type="number" placeholder="amount" onChange={this.changeamount} /> </td>
                            </tr>
    
                            {

                                this.props.groc.arrayingredient.map((r) => (

                                        <tr>
                                            <GroceryListrowComponent ingredient={r.ingredient.name} amount={r.amount} />
                                        </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                    {/* </table> */}
                </div>
            </div>
          )
        } else {
           return (
            <Redirect to='/' />
           );
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        groc: state.groc,
        generate: state.generate,
        isLoggedIn : state.auth.isLoggedIn
    }
}

const mapDispatchToProps = {
    loadGroceryRow,
    addGroceryRow
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListComponent);