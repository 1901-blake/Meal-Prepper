import React from "react";
import { connect } from 'react-redux';
import { IGRocState, IState, state } from "../../reducers";
import { loadGroceryRow, addGroceryRow } from "../../Actions/GroceryList.action";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

export interface IGrocProps {
    groc: IGRocState,
    loadGroceryRow: () => void,
    addGroceryRow: (Ingredientname: string, amount: number) => void

}

export class GroceryListComponent extends React.Component<IGrocProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            tempamount: 0,
            tempname: ''

        }
    }



    changeamount = (event) => {
        this.setState({ tempamount: event.target.value });
    }
    changename = (event) => {
        this.setState({ tempname: event.target.value });
    }

    tempfunc = () => {
        this.props.addGroceryRow(this.state.tempname,this.state.tempamount);
    }

    componentDidMount() {
        this.props.loadGroceryRow();
    }

    render() {
        return (
            <div>
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
                            {/* <td> <input type="checkbox" /> </td> */}
                            <td> <button onClick={this.tempfunc}>+</button> </td>
                            <td> <input type="text" placeholder="ingredient name" onChange={this.changename}/> </td>
                            <td> <input type="number" placeholder="amount" onChange={this.changeamount} /> </td>
                        </tr>
                        {
                            this.props.groc.arrayingredient.map((r) => (
                                //dont forget Key
                                <tr >
                                    <td><input type="checkbox" /></td>
                                    <td>{r.name}</td>
                                    <td>{r.id}</td>
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
        groc: state.groc
    }
}

const mapDispatchToProps = {
    loadGroceryRow,
    addGroceryRow
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListComponent);