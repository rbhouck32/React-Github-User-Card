import React from "react"


const UserInput = (props) => {
    console.log("rh: UserInput: ", props.handleFetchUser)
    return(
        <>
        <input
          type="text"
          value={props.handleFetchUser}
          onChange={props.handleChanges}
        />
        
        <button onClick={props.handle}>Fetch User</button>
        </>
    )
    console.log(props.handleFetchUser)
}


export default UserInput;