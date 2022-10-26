import React from "react";
import "./faq.css";
const Faq = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-3xl text-amber-600">
        All of Our Frequently Ask Question
      </h2>
      <div className="grid grid-cols-1 w-3/4 gap-2 mt-10 mx-auto">
        {/* The button to open modal */}
        <label htmlFor="my-modal-6" className="btn modal-button">
          Publish the FAQ page on your site
        </label>
        <label htmlFor="my-modal-6" className="btn modal-button">
          Why you should make an FAQ page
        </label>
        <label htmlFor="my-modal-6" className="btn modal-button">
          Update content and add more solutions over time
        </label>
        <label htmlFor="my-modal-6" className="btn modal-button">
          How can i access the course?
        </label>
        <label htmlFor="my-modal-6" className="btn modal-button">
          Why you should make an FAQ page
        </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thanks for being with us</h3>
          <p className="py-4">
            Your can take this service with enroll any course . All of our
            courses making you professional developer for your future life. So
            access this course menu.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Thank You
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
