import React from "react";
import styles from "./button.module.scss";
import iconDice from "../../assets/images/icon-dice.svg";
import { ButtonPropsInterface } from "./button.interface";
export const Button: React.FC<ButtonPropsInterface> = ({
  loading,
  handleGenerateHandleAdvice,
}) => {
  return (
    <button
      className={styles.container}
      disabled={loading}
      onClick={handleGenerateHandleAdvice}
    >
      <img src={iconDice} alt="" />
    </button>
  );
};
