import * as ReactTooltip from "@radix-ui/react-tooltip";
import {
  TooltipHighlightText,
  TooltipArrow,
  TooltipContent,
  TooltipFooter,
  TooltipFooterText,
  TooltipHeader,
  TooltipSmallText,
  TooltipTitle,
} from "./styles";

interface IProps {
  triggerComponent: JSX.Element;
  title: string;
  description: string;
  smallLabel?: string;
  highlightText?: string;
  disable?: boolean;
}

export function Tooltip({
  triggerComponent,
  title,
  description,
  smallLabel,
  highlightText,
  disable,
}: IProps) {
  return (
    <ReactTooltip.Provider>
      <ReactTooltip.Root delayDuration={1}>
        <ReactTooltip.Trigger asChild>{triggerComponent}</ReactTooltip.Trigger>

        <TooltipContent side="top" hidden={disable}>
          <TooltipHeader>
            <TooltipTitle>{title}</TooltipTitle>
            {highlightText ? (
              <TooltipHighlightText>{highlightText}</TooltipHighlightText>
            ) : null}
            {smallLabel ? (
              <TooltipSmallText>{smallLabel}</TooltipSmallText>
            ) : null}
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
