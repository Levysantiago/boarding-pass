import { ButtonContainer, ButtonText } from "./styles";

interface IProps {
  isBack?: boolean;
  title: string;
}

export function Button({ isBack, title }: IProps) {
  return (
    <ButtonContainer back={isBack}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
