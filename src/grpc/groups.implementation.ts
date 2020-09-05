import { IGroupServer } from "./protos/group_grpc_pb";
import { handleUnaryCall } from "grpc";
import { SetGroupRequest, GroupResponse, ReadGroupRequest, UsertToGroupRequest, UsertToGroupResponse, FindGroupsRequest, FindGroupsResponse } from "./protos/group_pb";
import { setGroup, readGroup, findGroups } from "../controllers/groups.controller";
import { EmptyRequest, FindSettings } from "./protos/find-settings_pb";

export class GroupsService implements IGroupServer {

    setGroup: handleUnaryCall<SetGroupRequest, GroupResponse> = async (call, callback) => {
        try {
            const resp = await setGroup(call.request.toObject());
            callback(null, resp);
        } catch (error) {
            callback(error, null);
        }
    }
    readGroup: handleUnaryCall<ReadGroupRequest, GroupResponse> = async (call, callback) => {
        try {
            const resp = await readGroup(call.request.toObject());
            callback(null, resp);
        } catch (error) {
            callback(error, null);
        }
    }
    setUserToGroup: handleUnaryCall<UsertToGroupRequest, UsertToGroupResponse> = (_call, _callback) => {
        console.log(_call);
    }
    findGroups: handleUnaryCall<FindGroupsRequest, FindGroupsResponse> = async (call, callback) => {
        try {
            const resp = await findGroups(call.request.toObject());
            callback(null, resp);
        } catch (error) {
            callback(error, null);
        }
    };
    findGroupsSettings: handleUnaryCall<EmptyRequest, FindSettings> = (call, callback) => {
        try {
            console.log(call);
            callback(null, new FindSettings());
        } catch (error) {
            callback(error, null);
        }
    };
}