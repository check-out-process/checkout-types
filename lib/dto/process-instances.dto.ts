import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { Type } from 'class-transformer'
import { Status } from "../enums";
import { DepartmentType } from "../types/Department";
import { RoomType } from "../types/Room";
import { User } from "./users.dto";
import { BedDTO } from "./beds.dto";
import { ProcessType } from "./process-templates.dto";
import { DepartmentDTO } from "./departments.dto";



export type ProcessInstanceType = {
    
}

export class NewSectorInstanceData {
    @IsString()
    id: string;
    
    @IsNumber()
    workerId: number;
    
    @IsNumber()
    responsibleUserId?: number;
}

export class CreateProcessInstanceFromDataParams {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    processTypeId: string;

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

    @IsBoolean()
    isIsolation: boolean;
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
}

export class ProcessInstanceStatusReturnedParamsUI {
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

export class ProcessInstanceStatusReturnedParams {
    processInstanceId: string;
    name: string;
    description: string;
    creator: string;
    department: DepartmentType;
    room: RoomType;
    processStatus: Status;
    processType: string;
    sectorInstances: Object[];
    currentSectorInstance: Object;
}

export class ProcessInstance{
    instanceId: string;
    name: string;
    description: string;
    department: DepartmentDTO;
    room: RoomType;
    processType: ProcessType;
    sectorInstances: SectorInstance[];
    status: Status;
    sectorsOrder: string[]
    creator: User;
    bed: BedDTO;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date;
    isIsolation: boolean;
}

export class SectorInstance {
    instanceId: string;
    sectorId: string;
    name: string;
    status: Status;
    commitingWorker: User;
    responsiblePerson?: User; 
    bed: BedDTO;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date;
}