"use client";

import React from "react";

export default function Home() {
  return (
    <div className="app-container">
      <header className="header animate-fade-in-up">
        <div className="logo-container">
          <div className="logo-icon" aria-hidden="true" style={{ display: "flex", alignItems: "center" }}>
            <img 
              src="/logo.png" 
              alt="Dr. Santosh Kulkarni Logo" 
              width="42" 
              height="42" 
              style={{ objectFit: "contain", borderRadius: "4px" }}
            />
          </div>
          <span className="logo-text">DR. SANTOSH<span> KULKARNI</span></span>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Area */}
        <section className="hero-section animate-fade-in-up delay-1">
          <div className="construction-highlight">
            <span>Under Construction by</span> <strong>Kreo Softwares</strong>
          </div>
          <span className="hero-tag">Women's Care Sanctuary</span>
          <h1 className="hero-title">Expert Care for Every Stage of a Woman's Life</h1>
          <p className="hero-description">
            Providing evidence-based, compassionate, and patient-first healthcare. 
            Gynecologist, Obstetrician, & Women's Health Specialist.
          </p>
        </section>

        {/* About the Doctor Section */}
        <section className="about-section animate-fade-in-up delay-2" aria-labelledby="about-doctor-heading">
          <h2 id="about-doctor-heading" className="about-title">About the Doctor</h2>
          <p className="about-subtitle">Dr. Santosh Kulkarni, MBBS, MD (OBG)</p>
          <p className="about-bio">
            Gynecologist, Obstetrician, & Women's Health Specialist with over 15 years of experience, 
            holding an advanced AIIMS Fellowship in Laparoscopy. Dedicated to providing evidence-based, 
            compassionate, and patient-first healthcare.
          </p>
        </section>
      </main>

      <footer className="footer animate-fade-in-up delay-3" style={{ borderTop: "none" }}>
        <span className="copyright">© 2026 Dr. Santosh Kulkarni. All rights reserved.</span>
      </footer>
    </div>
  );
}
