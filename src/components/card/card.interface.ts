import { AdviceDataInterface } from "../../pages/home/home.interface";

export interface CardPropsInterface {
  advice: AdviceDataInterface | null;
  loading: boolean;
  handleGenerateHandleAdvice: () => void;
  paragraphRef: React.MutableRefObject<HTMLParagraphElement | null>
}