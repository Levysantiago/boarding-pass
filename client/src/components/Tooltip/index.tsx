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
  disable?: boolean;
}

export function Tooltip({
  triggerComponent,
  title,
  description,
  disable,
}: IProps) {
  return (
    <ReactTooltip.Provider>
      <ReactTooltip.Root delayDuration={1}>
        <ReactTooltip.Trigger asChild>{triggerComponent}</ReactTooltip.Trigger>

        <TooltipContent side="top" hidden={disable}>
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
