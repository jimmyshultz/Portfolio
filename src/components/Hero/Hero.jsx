import styles from "./Hero.module.css";


export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&apos;m Jimmy Shultz</h1>
            <p className={styles.description}>I&apos;m a software engineer at Regions Bank delivering measurable impact in regulated financial environments, building Python and SQL applications that automate legacy compliance processes. I&apos;m also an AWS Certified AI Practitioner with full-stack experience and a focus on AI-driven development, plus prior experience at Dell and Google. Reach out if you&apos;d like to learn more.</p>
            <a href="mailto:jimmyshultz3@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src='/../assets/hero/me.png'/*{getImageUrl("hero/heroImage.png")}*/ alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};