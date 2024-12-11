import { formatDate, timeAgo, getISODate } from "@/utils/dateFormatter";
import styles from "./TimeAgo.module.css";

export function TimeAgo({ timestamp }) {
  return (
    <time
      className={styles.timeAgo}
      title={formatDate(timestamp)}
      dateTime={getISODate(timestamp)}
    >
      <small>{timeAgo(timestamp)}</small>
    </time>
  );
}
