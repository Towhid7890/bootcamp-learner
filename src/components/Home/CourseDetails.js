import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Reactpdf from "./../Reactpdf";
const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  // const handlePdf = () => {

  // };

  return (
    <>
      <div className="py-5 flex justify-center">
        <h2 className="text-white text-3xl text-center">
          Find details in PDF{" "}
        </h2>

        <PDFDownloadLink document={<Reactpdf />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <FaDownload className="text-amber-600 text-3xl"></FaDownload>
            )
          }
        </PDFDownloadLink>
      </div>
      <div
        style={{
          boxShadow:
            "rgba(162, 162, 224, 0.699) 0px 4px 6px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
        className="card w-full md:w-4/5 lg:w-1/2 mx-auto bg-black border"
      >
        <figure className="px-5 pt-5">
          <img
            src={details.image_url}
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-amber-500 text-2xl">
            {details.title}
          </h2>

          <p className="text-amber-600">{details.details}</p>
          <p className="text-amber-600">Ratting: {details.rating.number} </p>
          <p className="text-amber-600">Instructor: {details.author.name}</p>
          <div className="card-actions">
            <Link to={`/courses/check/${details._id}`}>
              <button className="btn btn-primary">Get premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
