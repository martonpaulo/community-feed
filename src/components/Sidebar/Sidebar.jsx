import { Pencil } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { getUserById } from "../../data/users";
import { Avatar } from "../Avatar/Avatar";

const user = getUserById(0);

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={user.cover}
        alt={`${user.name}'s cover picture`}
      />

      <div className={styles.profile}>
        <Avatar size={7.5} user={user} />

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
