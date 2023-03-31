import { Column, PrimaryColumn } from "typeorm";

export class Department {
    @PrimaryColumn({unique: true})
    ID: string;

    @Column()
    Name: string;

    constructor(id?: string, name?: string ){
         this.ID = id; this.Name = name;
    }
}