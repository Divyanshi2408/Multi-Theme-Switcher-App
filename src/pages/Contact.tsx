import React from "react";

export default function Contact() {
  return (
    <section
      className="pt-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto transition-all"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font)",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>

      <p className="text-lg sm:text-xl mb-6 leading-relaxed">
        We'd love to hear from you! For any inquiries, feedback, or support, feel free to reach out:
      </p>

      <div className="space-y-4 text-base sm:text-lg">
        <p>
          📍 <strong>Address:</strong> #01-04, 75 Ayer Rajah Crescent, Singapore 139953
        </p>
        <p>
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:hr@hipster-inc.com"
            style={{ color: "var(--link)", textDecoration: "underline" }}
          >
            hr@hipster-inc.com
          </a>
        </p>
        <p>
          📞 <strong>Phone:</strong> +65 8231 4107
        </p>
      </div>
    </section>
  );
}
