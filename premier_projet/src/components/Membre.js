import React, {Fragment} from 'react';

//Destructuration de ce qu'on à besoin pour definir un membre
const Membre = ({nom, age, children, hideName, handleChange}) => {
    
    return(

<Fragment>
    <h2 style={{backgroundColor: age < 10 ? 'yellow' : 'red'}}>
         {nom} : {age}</h2>

         <input value={nom} onChange=
         {handleChange} type='text'/>

         <button onClick={hideName}>X</button>

  {children ? <p>{children}</p> : <p>Je suis un Humain</p> }
</Fragment>         

    )
}

export default Membre;