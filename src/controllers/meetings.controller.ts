import { MeetingResponse, SetMeetingRequest, ReadMeetingRequest } from "../grpc/protos/meeting_pb";
import { Meeting } from "../storage/Entity/Meeting";
import { MeetingRepository } from "../storage/Repository/meetings.repository";

const RMeeting = MeetingRepository.getInstance();

export const setMeeting = async ({ id, name, from, to, channelId }: SetMeetingRequest.AsObject): Promise<MeetingResponse> => {

    const meeting = new Meeting();

    if (id) {
        meeting.id = id;
    }

    meeting.name = name;
    meeting.from = from;
    meeting.to =  to;
    meeting.channelId = channelId;

    const savedMeting = await RMeeting.save(meeting);

    return formatMeetingResponse(savedMeting);
}

export const readMeeting = async ({ id }: ReadMeetingRequest.AsObject): Promise<MeetingResponse> => {

    const savedMeting = await RMeeting.findById(id);

    return formatMeetingResponse(savedMeting);
}

export const formatMeetingResponse = (meeting: Meeting): MeetingResponse => {

    const response = new MeetingResponse();

    response.setId(meeting.id);
    response.setName(meeting.name);
    response.setFrom(meeting.from);
    response.setTo(meeting.to);
    response.setChannelId(meeting.channelId);

    return response;
}