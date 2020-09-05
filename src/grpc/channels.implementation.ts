import { IChannelServer } from "./protos/channel_grpc_pb";
import { handleUnaryCall } from "grpc";
import { SetChannelRequest, ChannelResponse, ReadChannelRequest, UsertToChannelRequest, UsertToChannelResponse } from "./protos/channel_pb";
import { setChannel, readChannel } from "../controllers/channels.controller";

export class ChannelsService implements IChannelServer {
    setChannel: handleUnaryCall<SetChannelRequest, ChannelResponse> = async (call, callback) => {
        try {
            const resp = await setChannel(call.request.toObject());
            callback(null, resp);
        } catch (error) {
            callback(error, null);
        }
    };
    readChannel: handleUnaryCall<ReadChannelRequest, ChannelResponse> = async (call, callback) => {
        try {
            const resp = await readChannel(call.request.toObject());
            callback(null, resp);
        } catch (error) {
            callback(error, null);
        }
    };
    setUserToChannel: handleUnaryCall<UsertToChannelRequest, UsertToChannelResponse> = (call, _callback) => {
        console.log(call);
    };
}