import { createContext } from "react";
import { ISummaryContext } from "./ISummaryContext";

export const SummaryContext = createContext<ISummaryContext>({
  summary: undefined,
  setSummary: () => {},
});
