import React from "react";
import { IState, IGenerateMealPlanState } from "../../reducers";
import { connect } from "react-redux";
import { generateRecipes } from "../../Actions/GenerateMealPlan.action";
import Table from "reactstrap/lib/Table";


interface IGenerateMealPlanProps {
    generate: IGenerateMealPlanState,
    generateRecipes: () => Promise<void>
}

export class GenerateMealPlanComponent extends React.Component<IGenerateMealPlanProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.generateRecipes();
    }

    render() {
        return (
            <div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Recipe Name</td>
                                <td>Description</td>
                                <td>Instructions</td>
                                <td>Amount</td>
                                <td>Measure</td>
                                <td>Ingredient</td>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.generate.mealPlan.map(meal => (
                            <tr key={meal.id}>
                                <td>{meal.id}</td>
                                <td>{meal.name}</td>
                                <td>{meal.description}</td>
                                <td>{meal.instructions}</td>
                                <td>{meal.amount}</td>
                                <td>{meal.measure}</td>
                                <td>{meal.ingredient}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        generate: state.generate
    }
}

const mapDispatchToProps = {
    generateRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateMealPlanComponent);