import React from "react";
import { connect } from 'react-redux';
import { IState, state, IRecipeHistoryState } from "../../reducers";
import { loadrecipeHistoryRow } from "../../Actions/RecipeHistory.action";
import Table from "reactstrap/lib/Table";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

//takein the state from store and any function needed in action
export interface IRecipeHistoryProps {
    recipehistory: IRecipeHistoryState,
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
    }
}

//uncommit this when the store has info for the current component
const mapStateToProps = (state: IState) => {
    return {
        recipehistory: state.recipehistory
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    loadrecipeHistoryRow
}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(RecipeHistoryComponent);