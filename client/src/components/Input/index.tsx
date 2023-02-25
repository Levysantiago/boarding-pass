import { ChangeEventHandler } from "react";
import { Container, InputTag, Label } from "./styles";

interface IProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  label: string;
}

export function Input({ onChange, value, label }: IProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputTag onChange={onChange} value={value}></InputTag>
    </Container>
  );
}
