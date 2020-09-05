import "reflect-metadata";
import { config as loadEnv } from 'dotenv';
loadEnv();
import * as grpc from 'grpc';
import { IGroupServer, GroupService } from "./grpc/protos/group_grpc_pb";
import { GroupsService } from "./grpc/groups.implementation";
import { IChannelServer, ChannelService } from "./grpc/protos/channel_grpc_pb";
import { ChannelsService } from "./grpc/channels.implementation";
import { IMeetingServer, MeetingService } from "./grpc/protos/meeting_grpc_pb";
import { MeetingsService } from "./grpc/meetings.implementation";

export const GrpcStart = async () => {

    const server = new grpc.Server();

    server.addService<IGroupServer>(GroupService, new GroupsService());
    server.addService<IChannelServer>(ChannelService, new ChannelsService());
    server.addService<IMeetingServer>(MeetingService, new MeetingsService());

    server.bind(`${process.env.HOST}:${process.env.PORT}`, grpc.ServerCredentials.createInsecure());

    server.start();

}

