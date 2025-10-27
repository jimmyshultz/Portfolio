import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <ul className={styles.certificationItems}>
          {certifications.map((cert, id) => {
            return (
              <li key={id} className={styles.certificationItem}>
                <img
                  src={`/../assets/${cert.imageSrc}`}
                  alt={`${cert.title} Badge`}
                  className={styles.certBadge}
                />
                <div className={styles.certificationItemText}>
                  <h3>{cert.title}</h3>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <p className={styles.date}>Issued: {cert.date}</p>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.credentialLink}
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

