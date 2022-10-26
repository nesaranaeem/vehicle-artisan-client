import React from "react";
import { useLoaderData } from "react-router-dom";
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

  const { tutorialTitle, tutorialPrice, tutorialDetails, tutorialThumbnail } =
    details;

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
            <figure className="mt-3 w-auto h-auto">
              <img src={tutorialThumbnail} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {tutorialTitle}
                <div className="badge badge-secondary">{tutorialPrice}</div>
              </h2>
              <p>{tutorialDetails}</p>
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
              <div className="card-actions justify-end">
                <button
                  className="btn"
                  onClick={() => generatePDFDocument("doc name")}
                >
                  Download As PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
