import React from "react";
import styles from "../../styles/card.module.css";
import Image, { StaticImageData } from "next/image";
interface Props {
  image: StaticImageData;
  width: number;
  height: number;
  title: string;
  rate: string;
  days: string;
  kiteimg: StaticImageData;
  widths: number;
  heights: number;
  //   paragraph: string;
}
const DestinationCard = ({
  image,
  width,
  height,
  title,
  rate,
  days,
  kiteimg,
  widths,
  heights,
}: Props) => {
  return (
    <div className={styles.destinationcard}>
      <Image src={image} width={width} height={height}></Image>
      <div className={styles.destinationcarddetails}>
        <h1 className={styles.placetitle}>{title}</h1>
        <h2 className={styles.rate}>{rate}</h2>
      </div>
      <div className={styles.dayscontainer}>
        <Image src={kiteimg} width={widths} height={heights}></Image>
        <p className={styles.days}>{days}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
