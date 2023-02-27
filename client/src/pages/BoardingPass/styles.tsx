import styled from "styled-components";
import aircraftBlackIcon from "../../assets/aircraft-black.svg";
import qrcodeIcon from "../../assets/qrcode.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  gap: 0px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const FlightContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px 20px 0px 0px;
  width: 300px;
  position: relative;
  margin-bottom: -1px;

  --mask: radial-gradient(15px at bottom, transparent 95%, black) -180px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;
`;

export const PassengerInfoContainer = styled.div`
  background-color: #ffffff;
  padding: 20px 30px;
  width: 300px;
  position: relative;

  --mask: radial-gradient(15px at 180px, transparent 95%, black) -180px 37px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

export const TopicsLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopicContainer = styled.div(
  (props: { left?: boolean }) => `
  display: flex;
  flex-direction: column;
  align-items: ${props.left ? "flex-start" : "flex-end"};
  justify-items: center;
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
  flex-direction: column;
  background-color: #ffffff;
  padding: 30px;
  width: 300px;
  border-radius: 0px 0px 20px 20px;

  --mask: radial-gradient(15px at top, transparent 95%, black) -180px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;
`;

export const ColumnItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineItems = styled.div`
  display: flex;
  justify-content: space-between;
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

export const IssueText = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #ffffff;
  margin-top: 20px;
  width: 300px;
  text-align: center;
`;
