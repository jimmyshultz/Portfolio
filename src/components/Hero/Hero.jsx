import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jimmy Shultz</h1>
            <p className={styles.description}>I'm a software engineer at Regions Bank primarily using Python and SQL to build new applications that automate legacy manual compliance processes. I also have other corporate experience at tech companies like Dell and Google.  Reach out if you'd like to learn more.</p>
            <a href="mailto:jimmyshultz3@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src='/../assets/hero/me.png'/*{getImageUrl("hero/heroImage.png")}*/ alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};