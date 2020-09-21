import React from "react";

const UserCard = ({
  avatar_url,
  github_url,
  description,
  memberSince,
  bugPoints,
  skills,
  user,
  className,
}) => {
  return (
    <div className={className}>
      <header>
        <h2>Dashboard</h2>
        <h4>{user}hello</h4>
        <h4>Member since 00/00</h4>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Users avatar"
        />
      </header>
    </div>
  );
};

export default UserCard;
