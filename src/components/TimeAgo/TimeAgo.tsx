import { formatDate, timeAgo, getISODate } from '../../utils/dateFormatter';
import styles from './TimeAgo.module.css';

interface TimeAgoProps {
  timestamp: Date;
}

export function TimeAgo({ timestamp }: TimeAgoProps) {
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
