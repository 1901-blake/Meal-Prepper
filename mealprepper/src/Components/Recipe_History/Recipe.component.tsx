import React from "react";
import { connect } from 'react-redux';
import { IState, state, IRecipeHistoryState } from "../../reducers";
import { loadrecipeHistoryRow } from "../../Actions/RecipeHistory.action";

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
        this.props.loadrecipeHistoryRow();
    }

    render() {
        return (
            <div>
                <table >
                    <thead >
                        <th style = {divStyle}>id</th>
                        <th style = {divStyle}>name</th>
                    </thead>
                    <tbody >
                        {
                            this.props.recipehistory.recipehistoryarray.map((r) => (
                                <tr >
                                    <td style = {divStyle}>{r.recipe_id}</td>
                                    <td style = {divStyle}>{r.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
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