import { IMeetingServer } from "./protos/meeting_grpc_pb";
import { handleUnaryCall } from "grpc";
import { SetMeetingRequest, MeetingResponse, ReadMeetingRequest, ReadChannelMeetingRequest, ChannelMeetingResponse } from "./protos/meeting_pb";
import { setMeeting, readMeeting } from "../controllers/meetings.controller";

export class MeetingsService implements IMeetingServer {
    setMeeting: handleUnaryCall<SetMeetingRequest, MeetingResponse> = async (call, callback) => {
        try {
            const resp = await setMeeting(call.request.toObject());
            callback(null, resp);
        } catch (error) {
            callback(error, null);
        }
    }
    readMeeting: handleUnaryCall<ReadMeetingRequest, MeetingResponse> = async (call, callback) => {
        try {
            const resp = await readMeeting(call.request.toObject());
            callback(null, resp);
        } catch (error) {
            callback(error, null);
        }
    }
    readChannelMeeting: handleUnaryCall<ReadChannelMeetingRequest, ChannelMeetingResponse> = (call, _callback) => {
        console.log(call);
    }
}