import styles from "./About.module.css";

export default function About() {
    const specialties = [
        "Autism", "Diet & Nutrition", "Food Sensitivity",
        "Gastrointestinal (GI)", "Gluten Free", "Lifestyle", "Nutrigenomics",
        "Weight Loss / Weight Management", "Wellness Counseling"
    ];

    return (
        <section className={styles.about} id="about">
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <h2 className={styles.heading}>About Emnet</h2>
                    <p className={styles.text}>
                        I have additional training in Autism Nutrition and picky eating. I have completed a certificate of training in the SOS Approach to Feeding. My goal is to support you and your child in making real progress toward the nutrition and feeding goals that matter most to you.
                    </p>

                    <div className={styles.card}>
                        <h3 className={styles.subheading}>Credentials</h3>
                        <p className={styles.text}>Board Certification by Commission on Dietetic Registration</p>
                    </div>
                </div>

                <div className={styles.column}>
                    <h2 className={styles.heading}>Specialties</h2>
                    <div className={styles.specialtiesGrid}>
                        {specialties.map((specialty, index) => (
                            <div key={index} className={styles.specialtyTag}>
                                {specialty}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.wave}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </section>
    );
}
