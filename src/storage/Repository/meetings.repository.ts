import { AbstractRepository } from "./abstract.repository";
import { Meeting } from "../Entity/Meeting";

export class MeetingRepository extends AbstractRepository {

    private static instance: MeetingRepository;

    public static getInstance(): MeetingRepository {

        if (!MeetingRepository.instance) {

            MeetingRepository.instance = new MeetingRepository();
        }

        return MeetingRepository.instance;
    }

    constructor(){

        super();

        this.connect();

    }

    async connect() {
        await this.dbConn(Meeting);
    }

    async save(meeting: Meeting): Promise<Meeting> {
        return await this.conn.save(meeting);
    }

    async findById(meetingId: string): Promise<Meeting> {
        return await this.conn.findOne(meetingId);
    }
}