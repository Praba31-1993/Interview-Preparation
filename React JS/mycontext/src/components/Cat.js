import React, { useContext } from 'react';
import { userContext } from './Home';

export default function Cat(){
    const auth = useContext(userContext);

    return(
        <div>
            <h1>Welcome</h1>            

        </div>
        

    )

}