import React from "react";
import styled from "styled-components";

// Styles for User Card ---------------------

const ImgStyle = styled.img`
  border-radius: 20px;
  width: 30%;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: #c8d4e8;
`;

const UserCard = props => {
  console.log("UserCard.js: props: ", props);
  return (
    <>
      <ImgStyle src={props.user.avatar_url} alt="profile-img" />

      <h2>{props.user.name}</h2>
      <Paragraph>Location: {props.user.location}</Paragraph>
      <Paragraph>Bio: {` "${props.user.bio}"`}</Paragraph>
      <div className="wrap">
        <Paragraph>Followers: {props.user.followers}</Paragraph>
      </div>
    </>
  );
};

export default UserCard;
