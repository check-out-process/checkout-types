import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator"
import { Type } from 'class-transformer'



export type ProcessInstanceType = {
    
}

export class NewSectorInstanceData {
    @IsString()
    sectorId: string;
    
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