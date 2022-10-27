import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftSide from "../Common/LeftSide";
import QRCode from "react-qr-code";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  ReactPDF,
  pdf,
  Font,
  Image,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
const CourseDetailsCard = () => {
  const details = useLoaderData();

  const {
    tutorialTitle,
    tutorialPrice,
    tutorialDetails,
    tutorialThumbnail,
    tutorialId,
  } = details;

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    image: {
      width: "60%",
      height: "90%",
      paddingLeft: 5,
    },
    centerImage: {
      alignItems: "center",
      flexGrow: 1,
    },
    section: {
      margin: 5,
      padding: 5,
      flexGrow: 1,
    },
    price: {
      marginTop: 15,
    },
  });
  const generatePDFDocument = async () => {
    const blob = await pdf(
      <Document>
        <Page size="A4">
          <View style={styles.section}>
            <Text>Title: {tutorialTitle}</Text>
            <View style={styles.centerImage}>
              <Image style={styles.image} src={tutorialThumbnail} />
            </View>
            <Text>{tutorialDetails}</Text>
            <Text style={styles.price}>Price: {tutorialPrice}</Text>
          </View>
        </Page>
      </Document>
    ).toBlob();

    saveAs(blob, `${tutorialDetails.slice(0, 20)}`);
  };
  return (
    <div className="m-3">
      <div className="grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-4">
        <div className="col-span-1">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-3">
          <div className="card w-full bg-base-100 shadow-xl">
            <h2 className="card-title justify-center m-3 text-center">
              {tutorialTitle}
              <div className="badge badge-secondary w-20 h-8">
                {tutorialPrice}
              </div>
            </h2>
            <div className="card-actions justify-center">
              <button
                className="btn"
                onClick={() => generatePDFDocument("doc name")}
              >
                Download As PDF
              </button>
            </div>
            <figure className="mt-3 w-auto h-auto">
              <img src={tutorialThumbnail} alt="" />
            </figure>
            <div className="card-body">
              <div className="alert alert-info shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Course Details:</span>
                </div>
              </div>
              <h4 className="text-center">QR Code</h4>
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: 64,
                  width: "100%",
                }}
              >
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={window.location.href}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <p>{tutorialDetails}</p>

              <div className="card-title justify-center justify-items-center items-center">
                <Link
                  to={`/checkout/${tutorialId}`}
                  className="btn btn-lg mt-2"
                >
                  Get Premium Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
