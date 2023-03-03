import { useContext, useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { SummaryContext } from "../../components/context/SummaryContext";
import { Dropdown } from "../../components/Dropdown";
import { FlightSummary } from "../../components/FlightSummary";
import { Input } from "../../components/Input";
import { IServerError } from "../../error/IServerError";
import { createPassengerService } from "../../services/createPassenger";
import {
  ButtonsContainer,
  Container,
  InputContainer,
  PassengerForm,
  PassengerInfoContainer,
  Title,
} from "./styles";

export function PassengerPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { summary } = useContext(SummaryContext);

  // This could be coming from the backend
  const [genders] = useState([
    { id: "0", value: "Masculino" },
    { id: "1", value: "Feminino" },
    { id: "2", value: "Outro" },
  ]);
  const [selectedGender, setSelectedGender] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [passport, setPassport] = useState("");
  const [cpf, setCPF] = useState("");

  function resetInputs() {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setPassport("");
    setCPF("");
    setSelectedGender(0);
  }

  useEffect(() => {
    if (!summary) {
      navigate({ pathname: "/" });
    }
  }, [navigate, summary]);

  async function handleSubmit() {
    try {
      const params = new URLSearchParams(location.search);
      const flightId = params.get("flightId");
      const seatCode = params.get("seatCode");

      if (flightId && seatCode) {
        const newPassenger = await createPassengerService({
          firstName,
          lastName,
          birthDate,
          cpf,
          gender: genders[selectedGender].value,
          passport,
          flightId,
          seatCode,
        });

        resetInputs();
        navigate({
          pathname: "/boarding-pass",
          search: `${createSearchParams({ passengerId: newPassenger.id })}`,
        });
      }
    } catch (e: any) {
      const data: IServerError = JSON.parse(e.message);
      alert(data.message);
    }
  }

  return (
    <Container>
      {summary ? <FlightSummary summary={summary} /> : null}
      <PassengerInfoContainer>
        <Title>Passageiro</Title>
      </PassengerInfoContainer>

      <PassengerForm>
        <InputContainer>
          <Input
            label="Nome"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </InputContainer>

        <InputContainer>
          <Input
            label="Sobrenome"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </InputContainer>

        <InputContainer>
          <Input
            label="Data de nascimento"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          />
        </InputContainer>

        <InputContainer>
          <Dropdown
            list={genders}
            label="Sexo"
            id="passenger-1"
            selectedIndex={selectedGender}
            setSelectedIndex={setSelectedGender}
          />
        </InputContainer>

        <InputContainer>
          <Input
            label="Passaporte"
            value={passport}
            onChange={(e) => {
              setPassport(e.target.value);
            }}
          />
        </InputContainer>

        <InputContainer>
          <Input
            label="CPF"
            value={cpf}
            onChange={(e) => {
              setCPF(e.target.value);
            }}
          />
        </InputContainer>
      </PassengerForm>

      <ButtonsContainer>
        <Button isBack title="Voltar" />
        <Button title="Continuar" onClick={handleSubmit} />
      </ButtonsContainer>
    </Container>
  );
}
