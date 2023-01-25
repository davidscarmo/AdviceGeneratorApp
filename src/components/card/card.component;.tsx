import React from "react";
import { Button } from "../button/button.component";
import { CardPropsInterface } from "./card.interface";
import styles from "./card.module.scss";
export const Card: React.FC<CardPropsInterface> = ({
  advice,
  handleGenerateHandleAdvice,
  loading,
  paragraphRef,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ADVICE #{advice?.slip?.id}</h1>

      <p className={styles.content} ref={paragraphRef} tabIndex={0}>
        {advice?.slip.advice ?? "Generating Advice..."}
      </p>

      <div className={styles.contentDivider} />

      <div className={styles.buttonContainer}>
        <Button
          loading={loading}
          handleGenerateHandleAdvice={handleGenerateHandleAdvice}
        />
      </div>
    </div>
  );
};
