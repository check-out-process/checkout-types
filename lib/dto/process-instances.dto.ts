import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { Type } from 'class-transformer'
import { Status } from "../enums";
import { DepartmentType } from "../types/Department";
import { RoomType } from "../types/Room";
import { User } from "./users.dto";
import { BedDTO } from "./beds.dto";
import { ProcessType } from "./process-templates.dto";
import { DepartmentDTO } from "./departments.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";



export type ProcessInstanceType = {
    
}

export class NewSectorInstanceData {
    @ApiProperty({type: String})
    @IsString()
    id: string;
    
    @ApiProperty({type: Number})
    @IsNumber()
    workerId: number;
    
    @ApiPropertyOptional({type: String})
    @IsOptional()
    @IsNumber()
    responsibleUserId?: number;
}

export class CreateProcessInstanceFromDataParams {
    @ApiProperty({type: String})
    @IsString()
    name: string;

    @ApiProperty({type: String})
    @IsString()
    description: string;

    @ApiProperty({type: String})
    @IsString()
    processTypeId: string;

    @ApiProperty({type: [() => NewSectorInstanceData]})
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => NewSectorInstanceData)
    orderedSectors: NewSectorInstanceData[];

    @ApiProperty({type: Number})
    @IsNumber()
    creatorId: number;

    @ApiProperty({type: String})
    @IsString()
    departmentId: string;

    @ApiProperty({type: String})
    @IsString()
    roomId: string;

    @ApiProperty({type: String})
    @IsString()
    bedId: string;

    @ApiProperty({type: Boolean})
    @IsBoolean()
    isIsolation: boolean;
}

export class CreateProcessInstanceFromTemplateParams {
    @ApiProperty({type: String})
    @IsString()
    templateId: string;

    @ApiProperty({type: Number})
    @IsNumber()
    creatorId: number;

    @ApiProperty({type: String})
    @IsString()
    bedId: string;

    @ApiProperty({type: String})
    @IsString()
    departmentId: string;

    @ApiProperty({type: String})
    @IsString()
    roomId: string;

}

export class GetProcessInstanceStatusParams {
    @ApiProperty({type: Number})
    @IsNumber()
    userId: number;
}

export class UpdateSectorInstanceParams {
    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    commitingWorkerId?: number;

    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    responsiblePersonId?: number;

    @ApiPropertyOptional({enum: Status})
    @IsOptional()
    @IsEnum(Status)
    status: Status;

}

export class UpdateSectorStatusParams {
    @ApiProperty({type: String})
    @IsString()
    processInstanceId: string;

    @ApiProperty({type: String})
    @IsString()
    sectorInstanceId: string;

    @ApiProperty({enum: Status})
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