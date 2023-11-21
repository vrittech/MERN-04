import { useContext } from "react";
import { ThemeContext } from "../contexts";
import { styled } from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => (props.userTheme === "light" ? "blue" : "red")};
  background: ${(props) => (props.userTheme === "light" ? "white" : "black")};
`;

export const Button = ({ onClick, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledButton
      onClick={onClick}
      userTheme={theme}
      // style={{
      //   color: theme === "light" ? "blue" : "red",
      //   background: theme === "light" ? "white" : "black",
      // }}
    >
      {children}
    </StyledButton>
  );
};
