import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-[#00a4ef] text-4xl font-bold my-10 text-center">Privacy Policy</h2>
      <section class="bg-white p-8 rounded-lg  max-w-4xl mx-auto mt-10">
        <p class="text-sm text-gray-500 mb-6">Effective Date: May 2025</p>

        <p class="mb-4">
          At <strong> Our Conference</strong>, protecting your personal data is
          of utmost importance to us. This Privacy Policy explains how we
          collect, use, and secure your information when you interact with our
          website or attend our events. Your privacy is not only a
          responsibility but also a key component of our commitment to trust and
          transparency.
        </p>

        <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul class="list-disc list-inside space-y-1 mb-4 text-gray-700">
          <li>Your full name, email address, phone number</li>
          <li>Company name and job title (if provided)</li>
          <li>Billing and payment information</li>
          <li>Preferences related to event sessions or speakers</li>
          <li>
            Technical information such as browser type, IP address, and device
            information
          </li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul class="list-disc list-inside space-y-1 mb-4 text-gray-700">
          <li>To process ticket purchases and confirm registrations</li>
          <li>To provide customer support and respond to inquiries</li>
          <li>To send event-related information and promotional updates</li>
          <li>
            To analyze website traffic and user engagement for future
            improvements
          </li>
          <li>To comply with legal and financial regulations</li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-2">
          3. Data Sharing and Security
        </h2>
        <p class="mb-4 text-gray-700">
          We never sell or rent your data to third parties. Your data may be
          shared with:
        </p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-gray-700">
          <li>Payment processors (to complete your purchase securely)</li>
          <li>Email service providers (to send you relevant updates)</li>
          <li>Event partners or sponsors, only with your explicit consent</li>
        </ul>
        <p class="mb-4 text-gray-700">
          We use strong security measures including HTTPS encryption, firewalls,
          and access controls to protect your data.
        </p>

        <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-2">
          4. Your Rights
        </h2>
        <ul class="list-disc list-inside space-y-1 mb-4 text-gray-700">
          <li>Access, update, or delete your personal data</li>
          <li>Withdraw consent at any time</li>
          <li>Request information about data sharing practices</li>
        </ul>
        <p class="text-gray-700">
          Please email us at{" "}
          <a href="mailto:[your email]" class="text-blue-600 underline">
            example@gmail.com
          </a>{" "}
          for any such requests.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
