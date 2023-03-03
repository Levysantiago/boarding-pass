import { useState } from "react";
import { ISummaryData } from "./ISummaryContext";
import { SummaryContext } from "./SummaryContext";

interface IFlightProviderProps {
  children: React.ReactElement;
}

export function SummaryProvider({ children }: IFlightProviderProps) {
  const [summary, setSummary] = useState<ISummaryData | undefined>();

  return (
    <SummaryContext.Provider value={{ summary, setSummary }}>
      {children}
    </SummaryContext.Provider>
  );
}
