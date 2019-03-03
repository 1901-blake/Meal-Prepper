import React from "react";
import { connect } from 'react-redux';
import { IState, state, IRecipeHistoryState } from "../../reducers";
import { loadrecipeHistoryRow } from "../../Actions/RecipeHistory.action";
import Table from "reactstrap/lib/Table";
import { Redirect } from "react-router";

//takein the state from store and any function needed in action
export interface IRecipeHistoryProps {
    recipehistory: IRecipeHistoryState,
    isLoggedIn : boolean,
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
        console.log('componentDidMount loadrecipeHistory');
        this.props.loadrecipeHistoryRow();
    }

    render() {
        if(this.props.isLoggedIn) {
            return (
            <div className="bg">
                <h1 className="tableHeaders">Recipe History</h1>
                <div className="large-table">
                    <Table hover responsive>
                        <thead >
                            <th>id</th>
                            <th>name</th>
                            <th>description</th>
                            <th>instructions</th>
    
                        </thead>
                        <tbody >
                            {
                                this.props.recipehistory.recipehistoryarray.map((r) => (
                                    <tr >
                                        <td>{r.recipe_id}</td>
                                        <td>{r.name}</td>
                                        <td>{r.description}</td>
                                        <td>{r.instructions}</td>
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
        isLoggedIn : state.auth.isLoggedIn
    }
}

const mapDispatchToProps = {
    loadrecipeHistoryRow
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeHistoryComponent);