import styled from "styled-components";

export const ButtonContainer = styled.button.attrs({ type: "button" })(
  (props: { back?: boolean; disabled?: boolean }) => `
  border: none;
  background-color: ${
    props.back ? "#7654C9" : props.disabled ? "#46356d" : "#bea3ff"
  };
  height: 40px;
  width: 140px;
  border-radius: 5px;
  cursor: ${props.disabled ? "default" : "pointer"};
`
);

export const ButtonText = styled.span`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #1e0063;
`;
