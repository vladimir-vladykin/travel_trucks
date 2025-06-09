import CamperCard from "../CamperCard/CamperCard";
import styles from "./CampersList.module.css";

const CampersList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <li>
            <CamperCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CampersList;
