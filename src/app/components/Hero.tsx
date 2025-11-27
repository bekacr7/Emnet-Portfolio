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
                            src="/emnet_photo.jpg"
                            alt="Emnet Assefa, RDN"
                            width={500}
                            height={500}
                            className={styles.image}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className={styles.wave}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </section>
    );
}

