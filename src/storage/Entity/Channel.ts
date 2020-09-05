import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ulid } from "ulid";
import { Group } from "./Group";
import { Meeting } from "./Meeting";

@Entity('channels')
export class Channel {

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
        name: 'group_id',
        type: 'varchar',
    })
    groupId!: string;

    @Column({
        name: 'created_at',
        type: 'timestamp',
    })
    createdAt!: string;

    @ManyToOne(_type => Group, group => group.channels)
    @JoinColumn({ name: 'group_id'})
    group?: Group;

    @OneToMany(_type => Meeting, meetings => meetings.channel, {
        eager: true,
    })
    meetings?: Meeting[];
}