import styled from "styled-components";
import MentorImage from "../components/mentors/MentorImage";

export const StyledMentorImage = styled(MentorImage)`
  .hexagon {
    position: relative;
    width: 120px;
    height: 69.28px;
    margin: 34.64px 0;
    background-image: ${(props) => {
      const { url } = props;
      if (url) return `url(${url})`;
      else
        return `url(https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png)`;
    }};
    background-size: auto 138.5641px;
    background-position: center;
    margin: -50px;
  }

  .hexTop,
  .hexBottom {
    position: absolute;
    z-index: 1;
    width: 84.85px;
    height: 84.85px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 17.57px;
  }

  /*counter transform the bg image on the caps*/
  .hexTop:after,
  .hexBottom:after {
    content: "";
    position: absolute;
    width: 120px;
    height: 69.2820323027551px;
    -webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-34.641px);
    -ms-transform: rotate(45deg) scaleY(1.7321) translateY(-34.641px);
    transform: rotate(45deg) scaleY(1.7321) translateY(-34.641px);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    background: inherit;
  }

  .hexTop {
    top: -42.4264px;
  }

  .hexTop:after {
    background-position: center top;
  }

  .hexBottom {
    bottom: -42.4264px;
  }

  .hexBottom:after {
    background-position: center bottom;
  }

  .hexagon:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 120px;
    height: 69.282px;
    z-index: 2;
    background: inherit;
  }
`;
