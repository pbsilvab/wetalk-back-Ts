const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('./protos/group.proto');

const grpcObject = grpc.loadPackageDefinition(packageDef);

const CustomerPackage = grpcObject.group;

const client = new CustomerPackage.Group('0.0.0.0:3303', grpc.credentials.createInsecure());

// client.SetGroup({
//     name:"Ecomexperts"
// },(err, resp) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(resp);

// })
// client.ReadGroup({},(err, resp) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(resp);

// })
// client.SetUserToGroup({},(err, resp) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(resp);

// })
client.FindGroups({},(err, resp) =>{
    if(err){
        console.log(err);
    }
    console.log(resp.edges);
})
// client.FindGroupsSettings({},(err, resp) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(resp);
// })