import React from "react";
import moment from "moment";

const UserCard = ({ user, className }) => {
  return (
    <article className={className}>
      <header>
        <h2>Dashboard</h2>
        <h3>Welcome {user.username}</h3>
        <h4>Became a member: {moment(user.memberSince).fromNow()}</h4>
        <img src={user.avatar_url} alt={user.username} />
        {user.role === "mentor" ? (
          <>
            <h4>Bio:</h4>
            <h4>{user.description}</h4>
            <h4>
              Skills: {user.skill1}, {user.skill2}, {user.skill3}{" "}
            </h4>
            <h4>Github URL: {user.github_url}</h4>
          </>
        ) : null}
      </header>
    </article>
  );
};

export default UserCard;
