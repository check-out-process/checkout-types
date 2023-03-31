import { Entity } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn";

@Entity()
export class Bed {

    @PrimaryColumn({unique: true})
    ID : string;

    @Column()
    roomId: string

    @Column()
    departmentId: string;

    @Column({unique: true})
    textQR: string;    

    constructor(id?: string, roomId?: string, departmentId?: string, QR?: string){
        this.ID = id; this.roomId = roomId; this.departmentId = this.departmentId; this.textQR = QR;
    }
}