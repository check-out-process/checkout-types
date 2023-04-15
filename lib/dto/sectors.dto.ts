import { IsString, IsNumber, IsOptional, IsArray, IsObject, ValidateNested } from "class-validator";
import { ProcessTemplateType, ProcessType_Type } from "./process-templates.dto";
import { UserType } from "./users.dto";

export type SectorType = {
    id: string;
    name: string;
    defaultResponsibleUser: UserType;
    responsibleUsers: Promise<UserType[]>
    committingUsers: Promise<UserType[]>; 
    relatedProcesses: ProcessTemplateType[];
    processTypes: ProcessType_Type[]

}

export class SectorCreationParams {
    @IsString()
    name: string;

    @IsNumber()
    defaultResponsibleUserId: number;

    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    responsibleUsersIds?: number[];

    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    committingUsersIds?: number[];

    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    processTypes?: number[]

    @IsArray()
    @IsString({each: true})
    @IsOptional()
    relatedProcessIds?: string[]
    
}

export class SectorQueryParams {
    @IsNumber()
    @IsOptional()
    processtype?: number;
}

export class SectorPatchParams {
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @IsOptional()
    defaultResponsibleUserId?: number;

    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    responsibleUsersIds?: number[];

    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    committingUsersIds?: number[];


    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    processTypes?: number[]

    @IsArray()
    @IsString({each: true})
    @IsOptional()
    relatedProcessIds?: string[]
    
}

export class SectorPatchAddUsersParams {
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    userIds: number[];
}
export class SectorPatchAddResponsiblesParams {
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    userIds: number[];
}