import styled from "styled-components";
import aircraftBlackIcon from "../../assets/aircraft-black.svg";
import qrcodeIcon from "../../assets/qrcode.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const BoardingPassContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  width: 300px;
  position: relative;
`;

export const PassengerInfoContainer = styled.div`
  margin-top: 20px;
`;

export const TopicsLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopicContainer = styled.div(
  (props: { left?: boolean }) => `
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props.left ? "flex-start" : "flex-end"}
`
);

export const TopicTitle = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
`;

export const TopicDescription = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);
`;

export const TopicRegularDescription = styled.span`
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.88);
`;

export const LargeTopicDescription = styled.span`
  font-size: 50px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);
`;

export const AircraftBlackIcon = styled.img.attrs({
  src: aircraftBlackIcon,
  alt: "Aircraft icon",
})`
  width: 25px;
  position: absolute;
  top: 120px;
  left: 160px;
`;

export const Badge = styled.div`
  background-color: #633bbc;
  border-radius: 8px;
  padding: 5px 10px;
`;

export const BadgeTitle = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #ffffff;
`;

export const BoardingInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ColumnItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QrCode = styled.img.attrs({
  src: qrcodeIcon,
  alt: "QrCode icon",
})`
  width: 160px;
  align-self: center;
`;

export const QrCodeDescription = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
  align-self: center;
`;

export const FinalMessageContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const FinalMessageTitle = styled.span`
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

export const FinalMessageDescription = styled.span`
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`;

export const DashedDivider = styled.div`
  border: 1px dashed rgba(0, 0, 0, 0.32);
  position: absolute;
  left: 0px;
  right: 0px;
`;

export const Ball1 = styled.div`
  width: 15px;
  height: 30px;
  border-radius: 0px 150px 150px 0px;
  position: absolute;
  top: 183px;
  left: 0px;
`;
export const Ball2 = styled.div``;
export const Ball3 = styled.div``;
export const Ball4 = styled.div``;
