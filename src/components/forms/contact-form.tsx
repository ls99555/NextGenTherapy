"use client";

import React, { useState, useRef } from "react";
import styles from "./contact-form.module.scss";
import Button from "../ui/button";
import { ContactFormData, FormErrors, LoadingState } from "../../types";
import { validateContactForm } from "../../lib/utils";

export default function ContactForm() {
  const [status, setStatus] = useState<LoadingState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setErrors({});
    
    const form = event.currentTarget;
    const formData: ContactFormData = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    // Client-side validation
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus("success");
        form.reset();
        if (messageRef.current) messageRef.current.style.height = "auto";
      } else {
        const errorData = await res.json().catch(() => ({}));
        setStatus("error");
        if (errorData.errors) {
          setErrors(errorData.errors);
        }
      }
    } catch {
      setStatus("error");
    }
  };

  const handleMessageInput = () => {
    const textarea = messageRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {status === "success" && (
        <div className={styles.statusSuccess} role="alert">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {status === "error" && (
        <div className={styles.statusError} role="alert">
          Sorry, something went wrong. Please try again.
        </div>
      )}
      {status === "loading" && (
        <div className={styles.statusLoading} role="status" aria-live="polite">
          Sending your message...
        </div>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="firstName">First Name *</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          required 
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          className={errors.firstName ? styles.inputError : undefined}
        />
        {errors.firstName && (
          <div id="firstName-error" className={styles.errorMessage} role="alert">
            {errors.firstName}
          </div>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last Name *</label>
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          required 
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
          className={errors.lastName ? styles.inputError : undefined}
        />
        {errors.lastName && (
          <div id="lastName-error" className={styles.errorMessage} role="alert">
            {errors.lastName}
          </div>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? styles.inputError : undefined}
        />
        {errors.email && (
          <div id="email-error" className={styles.errorMessage} role="alert">
            {errors.email}
          </div>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          ref={messageRef}
          onInput={handleMessageInput}
          className={`${styles.textareaAutoGrow} ${errors.message ? styles.inputError : ''}`}
          aria-describedby={errors.message ? "message-error" : undefined}
        ></textarea>
        {errors.message && (
          <div id="message-error" className={styles.errorMessage} role="alert">
            {errors.message}
          </div>
        )}
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
