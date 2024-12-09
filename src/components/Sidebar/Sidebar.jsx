import { Pencil } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=50&w=500"
        alt="user background"
      />

      <div className={styles.profile}>
        <img
          src="https://randomuser.me/api/portraits/men/72.jpg"
          alt="user profile picture"
        />

        <strong>Alex Doe</strong>
        <span>Front-End Developer</span>
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
