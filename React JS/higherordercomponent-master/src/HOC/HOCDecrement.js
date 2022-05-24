import React,{useState} from 'react'

const UpdatedDecrement = OriginalDecrement => {
    function NewDecrement (props) {

        const [Decrease, setDecrement] = React.useState(0)

    const Decrement = () =>{
        setDecrement(Decrease-1);
    }
        return (

            <OriginalDecrement Decrease={Decrease} Decrement={Decrement} {...props} />

        )
    }
    return NewDecrement
}

export default UpdatedDecrement