import React from "react";
import { connect } from 'react-redux';
import { IState, state, IFavoriteState } from "../../reducers";
import { favoritePlan } from "../../Actions/Favorite.action";

const divStyle = {
    table: {
        margin: '40px',
    },
    row: {
        border: '3px solid pink',
    },
    star: {
        // visibility:'hidden',
        fontSize:'30px',
        cursor:'pointer'
    },
};

const star = {

}

//takein the state from store and any function needed in action
export interface IFavoriteProps {
    favorite: IFavoriteState,
    favoritePlan: () => void
}

//change the prop intake to the interface props and also change the class name if copied and paste
export class FavoriteComponent extends React.Component<IFavoriteProps, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.favoritePlan();
    }
    render() {
        return (
            <div className="bg">
            <h1 className="tableHeaders">Favorites</h1>
                <table style={divStyle.table}>
                    <thead>

                    </thead>

                    <tbody >
                        {
                            this.props.favorite.favoriteRecipeArr.map((r) => (
                                <tr>
                                    <td style={divStyle.row}> {r.name} </td>
                                    <td style={divStyle.row}> {r.description}</td>
                                    <td style={divStyle.row}> {r.instructions}</td>
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
        favorite: state.favorite
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    favoritePlan
}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent);