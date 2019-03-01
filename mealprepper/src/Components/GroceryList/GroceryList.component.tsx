import React from "react";
import { connect } from 'react-redux';
import { IGRocState, IState, state, IGenerateMealPlanState } from "../../reducers";
import { loadGroceryRow, addGroceryRow } from "../../Actions/GroceryList.action";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

export interface IGrocProps {
    groc: IGRocState,
    generate: IGenerateMealPlanState,
    loadGroceryRow: () => void,
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
        this.setState({ tempamount: event.target.value });
    }
    changename = (event) => {
        this.setState({ tempname: event.target.value });
    }

    addrowfunc = () => {
        if (this.state.tempname && this.state.tempamount) {
            this.props.addGroceryRow(this.state.tempname, this.state.tempamount);
            
        }else{
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

        this.props.loadGroceryRow();
    }

    render() {
        
        let linebool = this.state.linebool;

        return (
            <div className="bg">
            <h1 className="tableHeaders">Grocery List</h1>
                <table style={divStyle} id="groceryTable">

                    <thead style={divStyle}>
                        <tr>
                            <th>active</th>
                            <th>ingredient</th>
                            <th>amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr style={divStyle}>
                            <td> <button onClick={this.addrowfunc}>+</button> </td>
                            <td> <input type="text" placeholder="ingredient name" onChange={this.changename} /> </td>
                            <td> <input type="number" placeholder="amount" onChange={this.changeamount} /> </td>
                        </tr>
                        {
                            this.props.groc.arrayingredient.map((r) => (
                                //dont forget Key
                                <tr >
                                    <td><input type="checkbox" onChange={this.togglelinestyle} /></td>
                                    {/* {
                                        linebool ?
                                            (<td style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} >{r.ingredient.name}</td>) :
                                            (<td style={{ textDecorationLine: '', textDecorationStyle: 'solid' }}>{r.ingredient.name}</td>)
                                    } */}
                                    <td>{r.ingredient.name}</td>
                                    <td>{r.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        groc: state.groc,
        generate: state.generate
    }
}

const mapDispatchToProps = {
    loadGroceryRow,
    addGroceryRow
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListComponent);