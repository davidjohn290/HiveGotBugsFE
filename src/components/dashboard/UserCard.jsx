import React from "react";
import moment from "moment";

const UserCard = ({ user, className }) => {
  return (
    <article className={className}>
      <header>
        <h2>Dashboard</h2>
        <h3>Welcome {user.username}</h3>
        <h4>Became a member: {moment(user.created_at).fromNow()}</h4>
        <img src={user.avatar_url} alt={user.username} />
        {user.role === "mentor" ? (
          <>
            <br />
            <label>
              Bio:
              <h4>{user.description}</h4>
            </label>
            <label>
              Skills:
              <h4>
                {user.skill1}, {user.skill2}, {user.skill3}{" "}
              </h4>
            </label>
            <label>
              Github URL:
              <p className="github">{user.github_url}</p>
            </label>
          </>
        ) : null}
        <br />
      </header>
    </article>
  );
};

export default UserCard;
