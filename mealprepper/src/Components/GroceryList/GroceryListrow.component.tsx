import React from "react";


export interface IGrocProps {
    ingredient: string,
    amount: number,
}

export class GroceryListrowComponent extends React.Component<IGrocProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            linebool: false
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

    render() {

        let linebool = this.state.linebool;

        return (
            < >

                    <td><input type="checkbox" onChange={this.togglelinestyle} /></td>
                    {
                        linebool ?
                            (<td style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' ,verticalAlign: 'center'}} >{this.props.ingredient}</td>) :
                            (<td style={{ textDecorationLine: '', textDecorationStyle: 'solid', verticalAlign: 'center'}}>{this.props.ingredient}</td>)
                    }
                    <td style={{verticalAlign: 'right'}}>{this.props.amount}</td>

            </>
        )
    }
}
