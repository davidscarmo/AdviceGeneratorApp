import axios, { AxiosResponse } from "axios";
import { AdviceRequestResponseInterface } from "./advice.interface";

export const getAdviceData =
  async (): Promise<AdviceRequestResponseInterface> => {
    const { data: adviceData } = await axios.get(
      "https://api.adviceslip.com/advice"
    );
    return adviceData;
  };
