import styles from "./CamperCard.module.css";

const CamperCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.thumb}
        src={item.gallery[0].thumb}
        alt="Camper preview"
      />

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h2>{item.name}</h2>
          <h2>{`€${item.price}`}</h2>
        </div>

        <p>{item.description}</p>

        <button className="red-button" onClick={() => {}}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
