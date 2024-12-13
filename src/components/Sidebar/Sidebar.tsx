import { Pencil } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "../Avatar/Avatar";

import type { UserType } from "../../types/userType";

interface SideBarProps {
  user: UserType;
}

export function Sidebar({ user }: SideBarProps) {
  const { name, role, coverUrl } = user;

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={coverUrl}
        alt={`${name}'s cover picture`}
      />

      <div className={styles.profile}>
        <Avatar size={7.5} user={user} />

        <strong>{name}</strong>
        <span>{role}</span>
      </div>

      <footer>
        <a href="#">
          <Pencil size={20} />
          Edit Profile
        </a>
      </footer>
    </aside>
  );
}
