import React from "react";

import Image, { StaticImageData } from "next/image";
import styles from "../../styles/card.module.css";
interface Props {
  img: StaticImageData;
  width: number;
  height: number;
  title: string;
  paragraph: string;
}
const Card = ({ img, width, height, title, paragraph }: Props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardimgcontainer}>
        <Image src={img} width={width} height={height}></Image>
      </div>

      <h1 className={styles.cardtitle}>{title}</h1>
      <p className={styles.cardpara}>{paragraph}</p>
    </div>
  );
};

export default Card;
