import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" text-[#00a4ef] text-4xl font-bold my-10 text-center">
        Terms & Condition
      </h2>
      <section class="bg-white p-8 rounded-lg max-w-4xl mx-auto mt-10">
        <p class="text-sm text-gray-500 mb-6">Effective Date: January, 2025</p>

        <p class="mb-4 text-gray-700">
          Welcome to the official website of <strong>Conference Event</strong>.
          These Terms and Conditions serve as a binding agreement between you
          and our organization regarding the usage of our services,
          participation in events, and engagement with our content.
        </p>

        <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-2">
          1. Registration and Tickets
        </h2>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>
            All event registrations must be completed through our official
            platform or authorized partners.
          </li>
          <li>
            Ticket prices, when applicable, are clearly listed and include any
            applicable taxes or service fees.
          </li>
          <li>
            Tickets are non-transferable without prior notice and approval.
          </li>
          <li>Lost or stolen tickets will not be reissued.</li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-2">
          2. Event Access and Participation
        </h2>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>
            Entry to the event is subject to proper ticket validation and
            identity verification.
          </li>
          <li>
            Attendees must adhere to the event schedule and any guidelines
            communicated before or during the event.
          </li>
          <li>
            We reserve the right to refuse entry or remove any participant
            violating conduct rules or disrupting the event.
          </li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-2">
          3. Code of Conduct
        </h2>
        <p class="mb-2 text-gray-700">All participants are expected to:</p>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Treat speakers, staff, and fellow attendees with respect</li>
          <li>Avoid discriminatory or offensive behavior in any form</li>
          <li>Refrain from unauthorized audio/video recording of sessions</li>
        </ul>
        <p class="text-gray-700">
          Violation of these terms may result in immediate removal from the
          event without refund.
        </p>
      </section>
    </div>
  );
};

export default TermsAndCondition;
