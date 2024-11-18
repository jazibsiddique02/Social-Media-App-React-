import React from "react";

const WelcomeMessage = ({ OnGetPostsClick }) => {
  return (
    <>
      <div className="welcome-message">
        <h1>There are no Posts.</h1>
        <button className="btn btn-primary" onClick={OnGetPostsClick}>
          Get Posts From Server
        </button>
      </div>
    </>
  );
};

export default WelcomeMessage;
