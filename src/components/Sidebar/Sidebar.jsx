import { Pencil } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { getUser } from "../../data/users";

const user = getUser(0);

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={user.cover}
        alt={`${user.name}'s cover picture`}
      />

      <div className={styles.profile}>
        <img src={user.avatar} alt={`${user.name}'s avatar`} />

        <strong>{user.name}</strong>
        <span>{user.role}</span>
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
