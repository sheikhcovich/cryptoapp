import React from "react";
import moment from "moment";
import styles from "./news.module.css";
const PeaceOfNews = ({
  data: { name, description, image, url, provider, datePublished },
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.card}>
      <div className={styles.cardHeader}>
        <p>{name}</p>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src={image?.thumbnail?.contentUrl} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <p>{`${
          description > 110 ? description?.substring(0, 130) : description
        }...`}</p>
      </div>
      <div className={styles.provider}>
        <div>
          <img
            style={{ height: "30px", width: "30px" }}
            src={provider[0]?.image?.thumbnail?.contentUrl}
            alt=""
          />
          <span>{provider[0].name}</span>
        </div>
        <p>{moment(datePublished).startOf("ss").fromNow()}</p>
      </div>
    </a>
  );
};

export default PeaceOfNews;
