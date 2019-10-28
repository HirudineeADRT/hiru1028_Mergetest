// hirudinee
let AWS = require('aws-sdk');
let AWS1 = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const s3 = new AWS.S3();
let AWS2 = require('aws-sdk');

// successful response indunil 1
exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitottt,
        Limit: 100
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });
    // cmnt 
    s3.listObjects({
        'Bucket': 'as2-test-lahiru',
        'MaxKeys': 10,
        'Prefix': 'sample'
    }).promise()
        .then(data => {
            console.log(data);
            /*
            data = {
                Contents: [
                    {
                       ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                       Key: "example1.jpg",
                       LastModified: "<Date Representation>",// test
                       Owner: {
                          DisplayName: "myname",
                          ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                       },
                       Size: 1003,
                       StorageClass: "STANDARD"
                    },
                    // {...}
                ]
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); //this is error stack
        });
    // cmnt 
    // successful response indunil 2
    s3.putObject({
        "Body": "1",
        "Bucket": "aws-amplify-hotspaces",
        "Key": "101"
    })
        .promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack);
        });
    // successful response indunil 3
    s3.copyObject({
        'Bucket': "com.sigma.test.318300609668.google11681355567701687.us-east-1",
        'CopySource': `/com.sigma.test.318300609668.chamath.us-east-1/s`,
        'Key': "s"
    }).promise()
        .then(data => {
            console.log(data);
            /*
            data = {
                CopyObjectResult: {
                    ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                    LastModified: "<Date Representation>"
                }
            }
            */
        })
        // successful response indunil 7
        .catch(err => {
            console.log(err, err.stack);
        });
    // successful response indunil 4 fail

    callback(null, { "message": "Successfully executed" });
}
// successful response indunil 6

//hiru added cmment