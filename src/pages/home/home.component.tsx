import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/card.component;";
import { getAdviceData } from "../../services/advices/advices.service";
import { AdviceDataInterface } from "./home.interface";
import styles from "./home.module.scss";
const Home = () => {
  const [adviceData, setAdviceData] = useState<AdviceDataInterface | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const getRandomAdvice = async () => {
    try {
      setLoading(true);
      const advice = await getAdviceData();
      if (advice.slip) setTimeout(() =>setAdviceData(advice), 1000);
    } catch (err) {
      setAdviceData(null);
    } finally {
      setTimeout(() => setLoading(false), 1000)
    }
  };

  const handleGenerateHandleAdvice = async () => {
    getRandomAdvice();
  };
  useEffect(() => {
    getRandomAdvice();
  }, []);

  return (
    <div className={styles.container}>
      <Card
        advice={adviceData}
        handleGenerateHandleAdvice={handleGenerateHandleAdvice}
        loading={loading}
      />
    </div>
  );
};

export default Home;
