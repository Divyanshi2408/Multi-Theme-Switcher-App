// src/pages/Contact.tsx
import React from "react";

export default function Contact() {
  return (
    <section className="pt-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        We'd love to hear from you! For any inquiries, feedback, or support, feel free to reach out:
      </p>

      <div className="space-y-2 text-base text-gray-800 dark:text-gray-200">
        <p>
          📍 <strong>Address:</strong> #01-04, 75 Ayer Rajah Crescent, Singapore 139953
        </p>
        <p>
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:hr@hipster-inc.com"
            className="text-blue-600 dark:text-blue-400 underline"
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
