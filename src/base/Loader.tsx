import styled from "styled-components";
import { ReactComponent as LoadIcon } from "../assets/loader.svg";

const StyledLoader = styled(LoadIcon)`
  max-width: 10rem;
  animation: rotation 2s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  path {
    fill: #4d6a6d;
  }
`;

const Loader = () => {
  return <StyledLoader />;
};

export default Loader;
