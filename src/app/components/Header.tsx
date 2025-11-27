"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Emnet Assefa<span className={styles.credential}>, RDN</span>
                </Link>

                <nav className={styles.nav}>
                    <a href="#about" onClick={(e) => scrollToSection(e, "about")} className={styles.link}>
                        About
                    </a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className={styles.btn}>
                        Work With Me
                    </a>
                </nav>
            </div>
        </header>
    );
}
