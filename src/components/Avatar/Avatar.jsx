import styles from "./Avatar.module.css";

export function Avatar({ size, user }) {
  const { name, avatarUrl } = user;

  return (
    <img
      className={styles.avatar}
      src={avatarUrl}
      alt={`${name}'s avatar`}
      width={size * 16}
      height={size * 16}
    />
  );
}