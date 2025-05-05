import React from "react";
import CeoImg1 from "..//..//assets/ceoImg (1).jpg";
import CeoImg2 from "..//..//assets/ceoImg (2).jpg";
import CeoImg3 from "..//..//assets/ceoImg (3).jpg";
import CeoImg4 from "..//..//assets/ceoImg (4).jpg";

const CustomerReview = () => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <section className="bg-gray-100 text-gray-800 rounded-xl">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold text-[#00a4ef]">
                What our customers are saying about us
              </h2>
              <p className="text-gray-600">
                Real stories from real users. Discover how we've helped people
                achieve their goals
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      The professionalism and attention to detail were beyond
                      what I expected. From the initial contact to the final
                      delivery, the team ensured that every aspect met our
                      needs. Their timely communication and in-depth
                      understanding of our requirements made the entire process
                      seamless. I’ve worked with many teams before, but this
                      experience stood out for its clarity and efficiency.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={CeoImg2}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold"> Sofia Müller </p>
                        <p className="text-sm text-gray-600">
                          CTO at BrightWave Tech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      From the very first meeting, I knew we were in good hands.
                      Their approach was structured, efficient, and deeply
                      collaborative. Our vision was brought to life with such
                      accuracy and creativity that it felt like they were part
                      of our in-house team.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={CeoImg1}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Carlos Romero</p>
                        <p className="text-sm text-gray-600">
                          CEO at PixelForge Studio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      The experience was smooth from start to finish. Their team
                      handled every challenge with professionalism and speed.
                      They didn’t just deliver code; they delivered thoughtful
                      solutions that aligned perfectly with our product goals. I
                      appreciated their proactive attitude and technical
                      precision—especially under tight deadlines.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={CeoImg4}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Aiko Tanaka</p>
                        <p className="text-sm text-gray-600">
                          CTO at NovaWare Inc.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      In my role, I’ve worked with countless service providers,
                      but this was a different league. Every step of the process
                      reflected their commitment to excellence. The
                      communication was seamless, deadlines were met without
                      compromise, and the final product spoke volumes about
                      their capabilities. More than a service provider, they
                      became a strategic partner. I’ve already recommended them
                      to peers in my network, and I look forward to working with
                      them again on future ventures.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={CeoImg3}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Luca Moretti</p>
                        <p className="text-sm text-gray-600">
                          CEO at Stratix Consulting
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
