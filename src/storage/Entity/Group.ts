import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ulid } from 'ulid';
import { Channel } from "./Channel";

@Entity('groups')
export class Group {

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
        name: 'created_at',
        type: 'timestamp',
    })
    createdAt!: string;

    @OneToMany(_type => Channel, channel => channel.group, {
        eager: true,
    })
    @JoinColumn({ name: 'group_id'})
    channels?: Channel[];
}