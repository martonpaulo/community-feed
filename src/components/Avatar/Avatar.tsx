import type { UserType } from "../../types/userType";
import styles from "./Avatar.module.css";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size: number;
  user: UserType;
}

export function Avatar({ size, user, ...props }: AvatarProps) {
  const { name, avatarUrl } = user;

  return (
    <img
      className={styles.avatar}
      src={avatarUrl}
      alt={`${name}'s avatar`}
      width={size * 16}
      height={size * 16}
      {...props}
    />
  );
}
