import React from "react";
import { connect } from 'react-redux';
import { IState, state, IRecipeHistoryState } from "../../reducers";
import { loadrecipeHistoryRow } from "../../Actions/RecipeHistory.action";
import Table from "reactstrap/lib/Table";
import { Redirect } from "react-router";

//takein the state from store and any function needed in action
export interface IRecipeHistoryProps {
    recipehistory: IRecipeHistoryState,
    isLoggedIn: boolean,
    loadrecipeHistoryRow: () => void

}

//change the prop intake to the interface props and also change the class name if copied and paste
export class RecipeHistoryComponent extends React.Component<IRecipeHistoryProps, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.loadrecipeHistoryRow();
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className="bg">
                    <h1 className="tableHeaders">Recipe History</h1>
                    <div className="large-table">
                        <Table hover responsive>
                            <thead >
                                <tr>
                                    <th>name</th>
                                    <th>description</th>
                                    <th>instructions</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col"> Measure</th>
                                    <th scope="col">Ingredient</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.recipehistory.recipehistoryarray.map((r) => (
                                        <tr key={r.id}>
                                            <td>{r.name}</td>
                                            <td>{r.description}</td>
                                            <p><td>{r.instructions}</td></p>
                                            <td>{r.ingredients.map(meal => (
                                                <p className="pre">{meal.amount}</p>
                                            ))}</td>
                                            <td>{r.ingredients.map(meal => (
                                                <p className="pre">{meal.measure.name}</p>
                                            ))}</td>
                                            <td>{r.ingredients.map(meal => (
                                                <p className="pre">{meal.ingredient.name}</p>
                                            ))}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to='/' />
            )
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        recipehistory: state.recipehistory,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = {
    loadrecipeHistoryRow
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeHistoryComponent);