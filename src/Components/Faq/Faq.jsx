import React from "react";
import { Helmet } from "react-helmet-async";

const Faq = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-[#00a4ef] text-2xl font-semibold sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600 text-center">
            Find answers to the most common questions about our events and
            registration process.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What types of events do you organize?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                We organize a wide range of tech-related events including
                conferences on AI, blockchain, cybersecurity, startups, and
                digital transformation.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Where are your events held?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Our events take place across major cities in Bangladesh such as
                Dhaka, Sylhet, and Khulna at renowned venues like Pan Pacific
                Sonargaon, BRAC Centre Inn, and Sylhet Tech Park.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                EDo I need to pay to attend an event?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Yes, each event has a specific entry fee ranging from 300 BDT to
                750 BDT depending on the type and scale of the conference.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                How can I register for an event?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                You can register directly through our website by selecting the
                event you're interested in and completing the online
                registration form.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Who should attend these events?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Our events are ideal for tech professionals, entrepreneurs,
                investors, students, and anyone passionate about innovation and
                future technologies.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
      <Helmet>
        <title>Policy | FAQs </title>
      </Helmet>
    </div>
  );
};

export default Faq;
