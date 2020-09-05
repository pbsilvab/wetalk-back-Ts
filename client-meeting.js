const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('./protos/meeting.proto');

const grpcObject = grpc.loadPackageDefinition(packageDef);

const CustomerPackage = grpcObject.meeting;

const client = new CustomerPackage.Meeting('0.0.0.0:3303', grpc.credentials.createInsecure());

client.SetMeeting({
    name: "Repaso",
    from: "2020-08-30 11:00:00",
    to: "2020-08-30 12:00:00",
    channelId: "01EH0BRB024PXBSXSRZBS1R4YT",
}, (err, resp)=> {
    if (err) {
        console.log(err);
    }
    console.log(resp);
});
// client.ReadMeeting({}, (err, resp)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(resp);
// });
// client.ReadChannelMeeting({}, (err, resp)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(resp);
// });