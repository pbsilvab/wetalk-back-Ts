import { AbstractRepository } from "./abstract.repository";
import { Channel } from "../Entity/Channel";

export class ChannelRepository extends AbstractRepository {

    private static instance: ChannelRepository;

    public static getInstance(): ChannelRepository {

        if (!ChannelRepository.instance) {

            ChannelRepository.instance = new ChannelRepository();
        }

        return ChannelRepository.instance;
    }

    constructor(){

        super();

        this.connect();

    }

    async connect() {
        await this.dbConn(Channel);
    }

    async save(channel: Channel): Promise<Channel> {
        return await this.conn.save(channel);
    }

    async findById(channelId: string): Promise<Channel> {
        return await this.conn.findOne(channelId);
    }
}