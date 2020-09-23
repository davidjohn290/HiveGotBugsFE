import React from "react";
import moment from "moment";

const UserCard = ({
  avatar_url,
  github_url,
  description,
  memberSince,
  skills,
  username,
  className,
  role,
}) => {
  return (
    <div className={className}>
      <header>
        <h2>Dashboard</h2>
        <h3>Welcome {username}</h3>
        <h4>Became a member: {moment(memberSince).fromNow()}</h4>
        <img src={avatar_url} alt={username} />
        {role === "mentor" ? (
          <>
            <h4>Bio:</h4>
            <h4>{description}</h4>
            <h4>
              Skills: {skills[0]}, {skills[1]}, {skills[2]}{" "}
            </h4>
            <h4>Github URL: {github_url}</h4>
          </>
        ) : null}
      </header>
    </div>
  );
};

export default UserCard;
