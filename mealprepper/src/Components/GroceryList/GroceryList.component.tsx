import React from "react";
import { connect } from 'react-redux';
import { IGRocState, IState, state } from "../../reducers";
import { addGroceryRow } from "../../Actions/GroceryList.action";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

export interface IGrocProps {
    groc: IGRocState,
    addGroceryRow: (amount: number) => void,
}

export class GroceryListComponent extends React.Component<IGrocProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            tempamount: 0
        }
    }



    changeamount = (event) => {
        this.setState({ tempamount: event.target.value });
    }

    tempfunc =  () => {
        // console.log('tempfunc called');
        // var rows = this.state.rows
        // rows.push('new row')
        // this.setState({rows: rows})
         this.props.addGroceryRow(this.state.tempamount);
        console.log('tempfunc called with state of: ' + this.props.groc.arrayingredient + 'with a length of: ' + this.props.groc.arrayingredient.length);

        // this.state.rows.push('new stuff');
    }
componentDidMount(){
    this.tempfunc();
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
                            <td> <button>+</button> </td>
                            <td> <input type="text" placeholder="ingredient name" /> </td>
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

                        <button id="addBtn" onClick={this.tempfunc}>ADD</button>
                    </tbody>

                </table>
                <h1>{this.state.tempamount}</h1>
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
    addGroceryRow
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListComponent);