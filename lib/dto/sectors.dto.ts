import { IsString, IsNumber, IsOptional, IsArray } from "class-validator";
import { ProcessTemplateType, ProcessType } from "./process-templates.dto";
import { User } from "./users.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

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
    @ApiProperty({type: String})
    @IsString()
    name: string;

    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    defaultResponsibleUserId?: number;

    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    responsibleUsersIds?: number[];

    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    defaultCommittingUsersId?: number;

    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    committingUsersIds?: number[];

    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    processTypes?: number[]

    @ApiPropertyOptional({type: [String]})
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    relatedProcessIds?: string[]
    
}

export class SectorQueryParams {
    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    processtype?: number;
}

export class SectorPatchParams {
    @ApiPropertyOptional({type: String})
    @IsString()
    @IsOptional()
    name?: string;

    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    defaultResponsibleUserId?: number;

    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    responsibleUsersIds?: number[];

    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    defaultCommittingUsersId?: number;

    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    committingUsersIds?: number[];

    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    processTypes?: number[]

    @ApiPropertyOptional({type: [String]})
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    relatedProcessIds?: string[]
    
}

export class SectorPatchAddUsersParams {
    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    userIds: number[];
}

export class SectorPatchAddResponsiblesParams {
    @ApiPropertyOptional({type: [Number]})
    @IsArray()
    @IsNumber({}, {each: true})
    @IsOptional()
    userIds: number[];
}