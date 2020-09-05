import { GrpcStart } from "./grpc_services";

console.log("Server running");
GrpcStart()
.catch((err)=>{
    console.log(err);
})