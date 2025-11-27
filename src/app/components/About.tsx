import styles from "./About.module.css";

export default function About() {
    const specialties = [
        "Autism", "Diet & Nutrition", "Food Allergy", "Food Sensitivity",
        "Gastrointestinal (GI)", "Gluten Free", "Lifestyle", "Nutrigenomics",
        "Sleep", "Weight Loss / Weight Management", "Wellness Counseling"
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
                        <h3 className={styles.subheading}>Education</h3>
                        <p className={styles.text}>Cal Poly Pomona — Graduated 2006</p>
                    </div>

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
        </section>
    );
}
