import React from "react";
import { Helmet } from "react-helmet-async";

const ReturnPolicy = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" text-[#00a4ef] text-4xl font-bold my-10 text-center">
        Return Policy
      </h2>

      <section className="bg-white p-8 rounded-lg max-w-4xl mx-auto mt-10">
        <p className="text-sm text-gray-500 mb-6">
          Effective Date: February, 2025{" "}
        </p>

        <p className="text-gray-700 mb-4">
          At <strong>Your Conference Event </strong>, we understand that plans
          change. Our Return & Refund Policy is designed to be transparent and
          fair for both attendees and our organizing team.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          1. Cancellation by Participant
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            More than 7 days before the event: Full refund minus processing fees
          </li>
          <li>3 to 6 days before the event: 50% refund</li>
          <li>Less than 3 days before the event: No refund</li>
          <li>
            To request a cancellation, please email us at{" "}
            <strong>[your email]</strong> with your ticket details and reason
            for cancellation.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          2. Event Postponement or Cancellation by Organizer
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            If the event is canceled or rescheduled due to unforeseen
            circumstances (e.g., natural disaster, public health issues), you
            will be eligible for either:
          </li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>A full refund, or</li>
            <li>A ticket transfer to the rescheduled date</li>
          </ul>
          <li>
            We will inform all participants via email and website notices.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          3. Ticket Transfers
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            You may request a ticket transfer to another person at least 24
            hours before the event.
          </li>
          <li>
            You must provide the full name, email, and phone number of the
            person receiving the ticket.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          4. No-Shows
        </h2>
        <p className="text-gray-700">
          Participants who do not attend the event and do not notify us in
          advance are not eligible for any refund or credit.
        </p>
      </section>
      <Helmet>
        <title>Policy | Return Policy </title>
      </Helmet>
    </div>
  );
};

export default ReturnPolicy;
