import { SetChannelRequest, ChannelResponse, ReadChannelRequest } from "../grpc/protos/channel_pb";
import { Channel } from "../storage/Entity/Channel";
import { ChannelRepository } from "../storage/Repository/channels.repository";

const RChannel = ChannelRepository.getInstance();

export const setChannel = async ( {name, groupId, id}: SetChannelRequest.AsObject): Promise<ChannelResponse>  => {

    const channel = new Channel();

    if (id) {
        channel.id = id;
    }

    channel.groupId = groupId;
    channel.name = name;

    const savedChannel = await RChannel.save(channel);

    return formatChannelResponse(savedChannel);
}


export const readChannel = async ( { id }: ReadChannelRequest.AsObject): Promise<ChannelResponse>  => {

    const savedChannel = await RChannel.findById(id);

    return formatChannelResponse(savedChannel);
}

export const formatChannelResponse = (channel: Channel): ChannelResponse => {

    const response = new ChannelResponse();

    response.setId(channel.id);
    response.setName(channel.name);
    response.setGroupId(channel.groupId);

    return response;
}