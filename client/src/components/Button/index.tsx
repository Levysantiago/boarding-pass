import { ButtonContainer, ButtonText } from "./styles";

interface IProps {
  isBack?: boolean;
  title: string;
  onClick?: () => void;
}

export function Button({ isBack, title, onClick }: IProps) {
  return (
    <ButtonContainer back={isBack} onClick={onClick}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
