import styles from "./Avatar.module.css";

export function Avatar({ size, user }) {
  const { name, avatar } = user;

  return (
    <img
      className={styles.avatar}
      src={avatar}
      alt={`${name}'s avatar`}
      width={size * 16}
      height={size * 16}
    />
  );
}
