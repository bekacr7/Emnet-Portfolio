"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Contact Me</h2>
                    <p className={styles.subtext}>
                        Ready to help your child thrive? Send me a message to get started.
                    </p>
                </div>

                <div className={styles.formWrapper}>
                    {status === "success" ? (
                        <div className={styles.successMessage}>
                            <CheckCircle size={48} className={styles.iconSuccess} />
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className={styles.resetButton}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name <span className={styles.required}>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email <span className={styles.required}>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message <span className={styles.required}>*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={styles.textarea}
                                    placeholder="How can I help you?"
                                    rows={5}
                                />
                            </div>

                            {status === "error" && (
                                <div className={styles.errorMessage}>
                                    <AlertCircle size={20} />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={status === "submitting"}
                            >
                                {status === "submitting" ? "Sending..." : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
