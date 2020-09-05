const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('./protos/channel.proto');

const grpcObject = grpc.loadPackageDefinition(packageDef);

const CustomerPackage = grpcObject.channel;

const client = new CustomerPackage.Channel('0.0.0.0:3303', grpc.credentials.createInsecure());

client.SetChannel({
    name:"Soporte",
    groupId:"01EH0AVZT0XR6XWGGJHGNEET3F",
}, (err, resp) => {
    if(err) {
        console.log(err);
    }
    console.log(resp);
})
// client.ReadChannel({}, (err, resp) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(resp);
// })
// client.SetUserToChannel({}, (err, resp) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(resp);
// })