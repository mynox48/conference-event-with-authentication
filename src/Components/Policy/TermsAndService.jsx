import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndService = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-[#00a4ef] text-4xl font-bold my-10 text-center">
        Terms and Service
      </h2>
      <section className="bg-white p-8 rounded-lg max-w-4xl mx-auto mt-10">
        <p className="text-sm text-gray-500 mb-6">
          Effective Date: March, 2025
        </p>

        <p className="text-gray-700 mb-4">
          This Terms of Service agreement outlines your rights and obligations
          when accessing the <strong> Conference Event</strong> website and
          participating in our events or services.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          1. Website Usage
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            You may browse our website, view event details, and register without
            creating an account.
          </li>
          <li>
            Creating an account (if applicable) implies that you will provide
            accurate, updated information.
          </li>
          <li>
            We are not responsible for any content shared on third-party links
            accessed from our site.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          2. Intellectual Property Rights
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            All content including logos, event recordings, presentation slides,
            and promotional materials are the property of{" "}
            <strong>[Your Conference Name]</strong> or our partners.
          </li>
          <li>
            You may not copy, reproduce, or distribute any of our materials
            without written permission.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          3. Limitation of Liability
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            We strive to ensure that our services are always accessible and
            error-free. However, we are not liable for:
          </li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Technical glitches or downtime</li>
            <li>Errors in ticket pricing or descriptions</li>
            <li>Loss of personal data due to user negligence</li>
          </ul>
        </ul>
        <p className="text-gray-700 mb-8">
          By using our services, you agree to hold us harmless from any claims
          arising from your use of the website or participation in our events.
        </p>
      </section>
      <Helmet>
        <title>Policy | Terms & Service </title>
      </Helmet>
    </div>
  );
};

export default TermsAndService;
