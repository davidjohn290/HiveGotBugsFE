import React from "react";

import Title from "./Title";
import Icon from "./Icon";
import Suggestions from "./Suggestions";

class SingleProblem extends React.Component {
  state = {};

  render() {
    return (
      <div className="singleProblemContainer">
        <div className="iconNav">
          <Icon />
        </div>
        <div className="header">
          <Title />
        </div> 
        <div className="problemsContainer" id="singleProblem">
          <h2>Solve A Problem</h2>

          <h4>Problem Title</h4>
          <p>Posted By | Posted When</p>
          <p>Difficulty Rating | Language</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus explicabo recusandae itaque corrupti porro, molestiae
            dignissimos distinctio quidem odio quam perferendis consectetur
            atque rerum tenetur modi! Nisi voluptas sequi vitae! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Voluptatibus explicabo
            recusandae itaque corrupti porro, molestiae dignissimos distinctio
            quidem odio quam perferendis consectetur atque rerum tenetur modi!
            Nisi voluptas sequi vitae!
          </p>

          <div className="difficultyVote">
            <h4>Vote On Difficulty:</h4>

            <div className="difficultyButtons">
              <button className="button" id="easy">
                Easy
              </button>
              <button className="button" id="medium">
                Medium
              </button>
              <button className="button" id="hard">
                Hard
              </button>
            </div>
          </div>

          <Suggestions />
        </div>
      </div>
    );
  }
}

export default SingleProblem;
