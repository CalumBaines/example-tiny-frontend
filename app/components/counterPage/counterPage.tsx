import React, { useEffect } from "react";

import { ExampleTinyFrontendProps } from "../../../contract/src/props";
import { useCounter } from "../../context/CounterContext";
import { Button } from "../../lib/button";
import styles from "../../lib/index.module.css";

const CounterPage: React.FC<ExampleTinyFrontendProps> = ({
  name,
  onCounterChange,
}) => {
  const { counter, setCounter } = useCounter();

  useEffect(() => onCounterChange?.(counter), [counter, onCounterChange]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello {name}! 🎉</h1>

      <div className={styles.descriptionContainer}>
        <p>
          I&apos;m a{" "}
          <a
            href="https://tiny-frontend.github.io"
            target="_blank"
            rel="noreferrer"
          >
            tiny frontend lksdfjdfj
          </a>{" "}
          🐰 , I was deployed from{" "}
          <a
            href="https://github.com/tiny-frontend/example-tiny-frontend"
            target="_blank"
            rel="noreferrer"
          >
            this git repository
          </a>
          . I&apos;m just a regular React component, but my implementation was
          loaded at runtime!
        </p>
        <p>
          You pressed my button <strong>{counter} times</strong>!
        </p>
      </div>

      <Button onClick={() => setCounter((count: number) => count + 1)}>
        Press me Remix Europe!
      </Button>
    </div>
  );
};

export default CounterPage;
