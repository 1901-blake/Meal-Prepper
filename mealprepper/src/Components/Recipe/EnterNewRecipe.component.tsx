import React from "react";


interface IEnterNewRecipeProps {

}

export class EnterNewRecipeComponent extends React.Component<IEnterNewRecipeProps, any> {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                Enter New Recipe Component!
                <input type="text" placeholder="name of recipe"/>
                {/* <select name="" id="">Ingrediant</select> */}
                <input type="text" placeholder="Ingrediant"/>
                <input type="text" placeholder="Amount"/>
                <input type="text" placeholder="Description"/>


                <button>Add recipe</button>
            </div>
        )
    }
}