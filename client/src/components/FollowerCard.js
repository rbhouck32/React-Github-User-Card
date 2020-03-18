import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  margin: 5px 5px;
  background-color: #c5cad4;
  padding: 0 5px;
  border-radius: 10px;
  box-shadow: 2px 2px #095be3;
`;

const ImgStyle = styled.img`
  border-radius: 10px;
  margin-top: 5px;
`;

const FollowerCard = props => {
  return (
    <CardWrap>
      <ImgStyle
        src={props.user.avatar_url}
        alt={props.user.login}
        width="100px"
      />
      <h3>{props.user.login}</h3>
    </CardWrap>     
  );
};

export default FollowerCard;
