import React from "react";

const UserCard = ({
  avatar_url,
  github_url,
  description,
  memberSince,
  bugPoints,
  skills,
  username,
  className,
  role,
}) => {
  return (
    <div className={className}>
      <header>
        <h2>Dashboard</h2>
        <h4>{username}</h4>
        <h4>Member since {memberSince}</h4>
        <img src={avatar_url} alt={username} />
      </header>

      {role === "mentor" ? (
        <>
          <p>Description: {description}</p>
          <p>Skills: {(skills[0], skills[1], skills[2])} </p>
          <p>Github URL: {github_url}</p>
        </>
      ) : null}
    </div>
  );
};

export default UserCard;
