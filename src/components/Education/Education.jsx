import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src="/../assets/about/me3.png"
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/../assets/about/merrimack.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Merrimack College</h3>
              <ul>
                <li>Master of Science in Computer Science</li>
                <li>GPA: 4.0</li>
                <li>Graduation Date: May 2024</li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/../assets/about/trevecca.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Trevecca Nazarene University</h3>
              <ul>
                <li>Bachelor of Arts</li>
                <li>GPA: 3.9</li>
                <li>Graduation Date: November 2020</li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/../assets/about/turner.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Turner High School</h3>
              <ul>
                <li>Valedictorian</li>
                <li>GPA: 4.0</li>
                <li>Graduation Date: May 2017</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};