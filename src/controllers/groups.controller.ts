import { GroupResponse, SetGroupRequest, ReadGroupRequest, FindGroupsResponse, FindGroupsRequest, GroupsEdge } from "../grpc/protos/group_pb";
import { Group } from "../storage/Entity/Group";
import { GroupRepository } from "../storage/Repository/groups.repository";
import { PageInfo } from "../grpc/protos/find-settings_pb";
import { formatChannelResponse } from "./channels.controller";
import { Channel } from "../storage/Entity/Channel";
import { formatMeetingResponse } from "./meetings.controller";

const RGroups = GroupRepository.getInstance();

export const setGroup = async ({id, name}: SetGroupRequest.AsObject): Promise<GroupResponse> => {

    const newGroup = new Group();

    if (id) {
        newGroup.id = id;
    }

    newGroup.name = name;

    const savedGroup = await RGroups.save(newGroup);

    return formatResponse(savedGroup);
}

export const readGroup = async ({ id }: ReadGroupRequest.AsObject): Promise<GroupResponse> => {

    const savedGroup = await RGroups.findById(id);

    return formatResponse(savedGroup);
}

export const findGroups = async ({ after, before, first, last, filtersList, order, searchTermsList }: FindGroupsRequest.AsObject): Promise<FindGroupsResponse> => {

    const options = {
        first,
        last,
        before,
        after,
        filters: filtersList,
        order,
        search_terms: searchTermsList,
        builderName: 'groups',
    }

    const response = await RGroups.constructQuery(Group, options);

    return formatFindGroupsResponse(response);
}

const formatResponse = (group: Group): GroupResponse => {

    const response = new GroupResponse();

    response.setId(group.id);

    response.setName(group.name);

    return response;
}

const formatFindGroupsResponse = ( result: any ): FindGroupsResponse => {

    const response = new FindGroupsResponse();

    response.setTotalCount(result.total);

    const pageInfo = new PageInfo();
    pageInfo.setEndCursor(result.page.endCursor);
    pageInfo.setStartCursor(result.page.startCursor);
    pageInfo.setHasNextPage(result.page.hasNextPage);
    pageInfo.setHasPreviousPage(result.page.hasNextPage);
    response.setPageInfo(pageInfo);

    result.edges.map( (_edge: any) => {

        const addGroup = formatResponse(_edge.node);

        console.log(_edge.node);

        _edge.node.channels?.map( (channel: Channel) => {

            const channelReps = formatChannelResponse(channel);

            channel.meetings?.map( (meeting) => {
                channelReps.addMeetings(formatMeetingResponse(meeting));
            });

            addGroup.addChannels(channelReps);

        });

        const newEdge =  new GroupsEdge();

        newEdge.setCursor(_edge.cursor);

        newEdge.setNode(addGroup);

        response.addEdges(newEdge);

    });


    return response;
}