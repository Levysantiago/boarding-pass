import styled from "styled-components";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipContent = styled(Tooltip.Content)`
  background-color: #1e0063;
  border: 2px solid #6a33ee;
  border-radius: 5px;
`;

export const TooltipHeader = styled.div`
  padding: 5px 0px;
  background-color: #6a33ee;
  text-align: center;
`;

export const TooltipFooter = styled.div`
  background-color: #1e0063;
  text-align: center;
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: #6a33ee;
`;

export const TooltipTitle = styled.span`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
`;

export const TooltipSmallText = styled.span`
  font-size: 8px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
  display: block;
`;

export const TooltipFooterText = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
  margin: 5px 10px;
`;
