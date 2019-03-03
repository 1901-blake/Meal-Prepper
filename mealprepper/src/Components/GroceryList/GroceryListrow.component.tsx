import React from "react";
import { Measure } from "../../Model/Measure";
import { Ingredient } from "../../Model/Ingredient";


export interface IGrocProps {
    ingredient: Ingredient,
    amount: number,
    measure: Measure
}

export class GroceryListrowComponent extends React.Component<IGrocProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            linebool: false
        }
    }




    togglelinestyle = (event) => {
        if (event.target.checked) {
            this.setState({ linebool: true });
        }
        else {
            this.setState({ linebool: false });

        }
    }

    render() {

        let linebool = this.state.linebool;

        return (
            < >

                    <td><input type="checkbox" onChange={this.togglelinestyle} /></td>
                    {
                       linebool ?
                       (<td style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', verticalAlign: 'center' }} >{this.props.amount}</td>) :
                       (<td style={{ textDecorationLine: '', textDecorationStyle: 'solid', verticalAlign: 'center' }}>{this.props.amount}</td>)
                    }
                    {
                        linebool ?
                        (<td style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', verticalAlign: 'center' }} >{this.props.measure.name}</td>) :
                        (<td style={{ textDecorationLine: '', textDecorationStyle: 'solid', verticalAlign: 'center' }}>{this.props.measure.name}</td>)
                    }
                    {
                        linebool ?
                        (<td style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', verticalAlign: 'center' }} >{this.props.ingredient.name}</td>) :
                        (<td style={{ textDecorationLine: '', textDecorationStyle: 'solid', verticalAlign: 'center' }}>{this.props.ingredient.name}</td>)
                    }
                    

            </>
        )
    }
}
