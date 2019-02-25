# NODEJS REKOGNITION
Note: this is not production ready service only quick sample of AWS Rekognition implementation

## Pre-Requisites
1. Get IAM Access Key ID and Secret Key
2. Setup S3 in supported Rekognition region. ie: us-east-1
3. Fill the env
4. Run the service

```shell
    node index.js
```

## Result
```text
{
    "status": "success",
    "data": {
    "SourceImageFace": {
    "BoundingBox": {
        "Width": 0.14278849959373474,
        "Height": 0.14245879650115967,
        "Left": 0.740699052810669,
        "Top": 0.4280965328216553
    },
    "Confidence": 99.9999771118164
    },
    "FaceMatches": [
        {
            "Similarity": 98.55902099609375,
            "Face": {
            "BoundingBox": {
            "Width": 0.2967537045478821,
            "Height": 0.3146434724330902,
            "Left": 0.41031569242477417,
            "Top": 0.4979223608970642
        },
        "Confidence": 99.99998474121094,
        ...
    ]

```