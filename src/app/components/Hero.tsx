import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Emnet Assefa, RDN
                    </h1>
                    <h2 className={styles.subtitle}>
                        Registered Dietitian Nutritionist specializing in Autism Nutrition
                    </h2>
                    <p className={styles.description}>
                        I’m a Registered Dietitian Nutritionist passionate about nutrition for children with Autism. As a nutrition professional and mother of a child with autism, I bring a unique blend of expertise and personal understanding to every coaching session. I help families address picky eating, GI issues, tube feeding, failure to grow, and more through personalized nutrition plans designed to help their child thrive.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Work With Me
                    </a>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        {/* Placeholder for Emnet's photo */}
                        <Image
                            src="/emnet_placeholder.png"
                            alt="Emnet Assefa, RDN"
                            width={500}
                            height={500}
                            className={styles.image}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
