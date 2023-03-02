import { ButtonContainer, ButtonText } from "./styles";

interface IProps {
  isBack?: boolean;
  title: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ isBack, title, disabled, onClick }: IProps) {
  return (
    <ButtonContainer back={isBack} onClick={onClick} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
