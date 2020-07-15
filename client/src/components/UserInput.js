import React, { useState } from "react";
import styled from "styled-components";

// styles for input ------------------

const Input = styled.input`
  border: 1px solid #095be3;
  border-radius: 10px;
  height: 25px;
`;

const Button = styled.button`
  border: 1px solid #095be3;
  border-radius: 10px;
  margin-left: 5px;
  height: 25px;
`;

const UserInput = props => {
  const [searchInput, setSearchInput] = useState("");
  // console.log("rh: UserInput: ", props.handleFetchUser)

  const handleChanges = e => {
    setSearchInput(e.target.value);
    console.log("rh: user input:", searchInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(searchInput);
    setSearchInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={searchInput} onChange={handleChanges} />

      <Button type="submit">Fetch User</Button>
    </form>
  );
  // console.log(props.handleFetchUser)
};

export default UserInput;
