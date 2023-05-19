"use client";
import styles from './button.module.css'
import { FC } from "react";

interface Button {
    variant: string;
}
export const Button: FC<Button> = () => {
  return <>
    <div className={styles.button}>
      Click
    </div>
  </>;
};

export default Button;
