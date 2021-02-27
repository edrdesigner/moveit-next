
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/edrdesigner.png" alt="Eduardo" />
      <div>
        <strong>Eduardo Reichert</strong>
        <p>
          <img src="icons/level.svg" alt="level 1" />
          Level 1
        </p>
      </div>
    </div>
  );
}
