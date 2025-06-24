import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#08172b] to-[#01010a] px-4 py-16">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-blue-400/20 p-8 text-white">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">{"This Privacy Policy explains how Linked Digital (\"we\", \"us\", or \"our\") collects, uses, discloses, and safeguards your information when you visit our website and use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it."}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Personal Information:</strong> Information you provide to us directly, such as your name, phone number, and any other information you choose to provide when filling out forms on our website.</li>
          <li><strong>Usage Data:</strong> Information automatically collected when you interact with our website, such as your IP address, browser type, device information, pages visited, and the time and date of your visit.</li>
          <li><strong>Cookies & Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide, operate, and maintain our website and services</li>
          <li>To improve, personalize, and expand our website and services</li>
          <li>To understand and analyze how you use our website</li>
          <li>To develop new products, services, features, and functionality</li>
          <li>To communicate with you, including for customer service, updates, and marketing</li>
          <li>To process your transactions and manage your requests</li>
          <li>To comply with legal obligations and protect our rights</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>We do not sell, trade, or rent your personal information to third parties.</li>
          <li>We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</li>
          <li>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Data Protection Rights</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You have the right to access, update, or delete the information we have on you.</li>
          <li>You have the right to object to or restrict certain types of processing of your personal data.</li>
          <li>You have the right to withdraw consent where consent is the basis of processing.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Links</h2>
        <p className="mb-4">Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Children's Privacy</h2>
        <p className="mb-4">Our website and services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us so we can take appropriate action.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please use the contact form on our website.</p>
      </div>
    </div>
  );
} 