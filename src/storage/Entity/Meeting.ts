import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ulid } from "ulid";
import { Channel } from "./Channel";

@Entity('meetings')
export class Meeting {

    @PrimaryColumn({
        name: "id",
        type: "varchar",
    })
    id: string = ulid();

    @Column({
        name: 'name',
        type: 'varchar',
    })
    name!: string;

    @Column({
        name: 'channel_id',
        type: 'varchar',
    })
    channelId!: string;

    @Column({
        name: 'from',
        type: 'timestamp',
    })
    from!: string;

    @Column({
        name: 'to',
        type: 'timestamp',
    })
    to!: string;

    @Column({
        name: 'created_at',
        type: 'timestamp',
    })
    createdAt!: string;

    @ManyToOne(_type => Channel, channels => channels.meetings)
    @JoinColumn({ name: 'channel_id'})
    channel?: Channel;
}