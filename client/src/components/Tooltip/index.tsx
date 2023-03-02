import * as ReactTooltip from "@radix-ui/react-tooltip";
import {
  TooltipArrow,
  TooltipContent,
  TooltipFooter,
  TooltipFooterText,
  TooltipHeader,
  TooltipTitle,
} from "./styles";

interface IProps {
  triggerComponent: JSX.Element;
  title: string;
  description: string;
}

export function Tooltip({ triggerComponent, title, description }: IProps) {
  return (
    <ReactTooltip.Provider>
      <ReactTooltip.Root delayDuration={1}>
        <ReactTooltip.Trigger asChild>{triggerComponent}</ReactTooltip.Trigger>

        <TooltipContent side="top">
          <TooltipHeader>
            <TooltipTitle>{title}</TooltipTitle>
          </TooltipHeader>
          <TooltipFooter>
            <TooltipFooterText>{description}</TooltipFooterText>
          </TooltipFooter>
          <TooltipArrow />
        </TooltipContent>
      </ReactTooltip.Root>
    </ReactTooltip.Provider>
  );
}
