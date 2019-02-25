const express = require("express");
const AWS = require("aws-sdk");
const app = express();
require("dotenv").config();

AWS.config.update({
  secretAccessKey: process.env.REKOGNITION_ACCESS_SECRET,
  accessKeyId: process.env.REKOGNITION_ACCESS_KEY,
  region: process.env.REKOGNITION_REGION
});

let rekognition = new AWS.Rekognition();

let params = {
  SimilarityThreshold: 90,
  SourceImage: {
    S3Object: {
      Bucket: process.env.REKOGNITION_BUCKET_NAME,
      Name: process.env.REKOGNITION_SOURCE_IMAGE
    }
  },
  TargetImage: {
    S3Object: {
      Bucket: process.env.REKOGNITION_BUCKET_NAME,
      Name: process.env.REKOGNITION_TARGET_IMAGE
    }
  }
};

app.get("/health-check", (req, res) => {
  res.status(200).json({
    status: "success",
    data: null,
    message: "healthy",
    method: req.method,
    url: req.url
  });
});

app.get("/compare", (req, res) => {
  rekognition.compareFaces(params, (err, data) => {
    if (err) {
      res.status(200).json({
        status: "failed",
        data: null,
        message: err,
        method: req.method,
        url: req.url
      });
      return;
    }

    res.status(200).json({
      status: "success",
      data: data,
      message: err,
      method: req.method,
      url: req.url
    });
  });
});
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
