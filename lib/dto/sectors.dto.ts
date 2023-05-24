import { IsString, IsNumber, IsOptional, IsArray } from "class-validator";
import { ProcessTemplateType, ProcessType } from "./process-templates.dto";
import { User } from "./users.dto";

export type Sector = {
    id: string;
    name: string;
    defaultResponsibleUser?: User;
    defaultCommittingUser?: User;
    responsibleUsers?: User[];
    committingUsers: User[];
    relatedProcesses: ProcessTemplateType[];
    processTypes: ProcessType[]
}

export class SectorCreationParams {
    @IsString()
    name: string;

    @IsNumber()
    @IsOptional()
    defaultResponsibleUserId?: number;

    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    responsibleUsersIds?: number[];

    @IsNumber()
    @IsOptional()
    defaultCommittingUsersId?: number;

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

    @IsNumber()
    @IsOptional()
    defaultCommittingUsersId?: number;

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