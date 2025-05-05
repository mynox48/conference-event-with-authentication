import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-[#00a4ef] text-4xl font-bold my-10 text-center">
        About Us
      </h2>
      <section class=" py-12 px-4 md:px-8">
        <div class="max-w-5xl mx-auto text-center">
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            Welcome to <span class="font-semibold ">Conference Event</span> –
            your trusted partner in organizing professional, impactful, and
            seamless events. Whether it's a corporate seminar, tech meetup, or
            business expo, we specialize in bringing people together through
            well-executed planning and engaging experiences.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Our dedicated team ensures every event is handled with precision,
            creativity, and care. With years of experience in the event
            management industry, <span>Conference Event</span> is committed to
            turning your vision into reality — on time and within budget.
          </p>
          <Helmet>
            <title>About | Conference Event</title>
          </Helmet>
        </div>
      </section>
    </div>
  );
};

export default About;
