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
            </div>
        )
    }
}