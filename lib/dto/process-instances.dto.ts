import { IsArray, IsEnum, IsNumber, IsObject, IsOptional, IsString, ValidateNested, isNumber } from "class-validator"
import { Type } from 'class-transformer'
import { Status } from "../enums";
import { DepartmentType } from "../types/Department";
import { RoomType } from "../types/Room";
import { User } from "./users.dto";
import { BedDTO } from "./beds.dto";



export type ProcessInstanceType = {
    
}

export class NewSectorInstanceData {
    @IsString()
    id: string;
    
    @IsNumber()
    workerId: number;
    
    @IsNumber()
    responsibleUserId: number;
}

export class CreateProcessInstanceFromDataParams {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    processType: number;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => NewSectorInstanceData)
    orderedSectors: NewSectorInstanceData[];

    @IsNumber()
    creatorId: number;

    @IsString()
    departmentId: string;

    @IsString()
    roomId: string;

    @IsString()
    bedId: string;



}

export class CreateProcessInstanceFromTemplateParams {
    @IsString()
    templateId: string;

    @IsNumber()
    creatorId: number;

    @IsString()
    bedId: string;

    @IsString()
    departmentId: string;

    @IsString()
    roomId: string;

}

export class GetProcessInstanceStatusParams {
    @IsNumber()
    userId: number;
}

export class UpdateSectorInstanceParams {
    @IsNumber()
    @IsOptional()
    commitingWorkerId?: number;

    @IsNumber()
    @IsOptional()
    responsiblePersonId?: number;

    @IsOptional()
    @IsEnum(Status)
    status: Status;

}

export class UpdateSectorStatusParams {

    @IsString()
    processInstanceId: string;

    @IsString()
    sectorInstanceId: string;

    @IsEnum(Status)
    status: Status;

    // should be delivered by jwt
    @IsNumber()
    userId: number;
}

export class ProcessInstanceStatusReturnedParams {
    processInstanceId: string;
    name: string;
    description: string;
    creator: string;
    department: DepartmentType;
    room: RoomType;
    processStatus: Status;
    processType: string;
    sectorInstances: SectorInstance[];
    currentSectorInstance: SectorInstance;
}

export class SectorInstance {
    instanceId: string;
    sectorId: string;
    name: string;
    status: Status;
    commitingWorker: User;
    responsiblePerson: User; 
    bed: BedDTO;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date;
}