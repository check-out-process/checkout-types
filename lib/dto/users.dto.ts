
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Job } from "./jobs.dto";
import { RoleDTO } from "./roles.dto";
import { Token } from "./token.dto";
import {ApiProperty} from '@nestjs/swagger';

export class UserCreationParams {
    @ApiProperty({type: String})
    @IsNumber()
    id : number;

    @ApiProperty({type: String})
    @IsString()
    fullname: string;

    @ApiProperty({type: String})
    @IsString()
    username : string;

    @ApiProperty({type: String})
    @IsString()
    password : string;

    @ApiProperty({type: String})
    @IsString()
    jobId: string;

    @ApiProperty({type: String})
    @IsString()
    roleId: string;

    //consider changing to string with number check
    @ApiProperty({type: String})
    @IsString()
    phoneNumber: string;
}

export class UserPatchParams {

    @ApiProperty({type: String})
    @IsString()
    @IsOptional()
    jobId?: string;

    @ApiProperty({type: String})
    @IsString()
    @IsOptional()
    roleId?: string;

    @ApiProperty({type: String})
    @IsNumber()
    @IsOptional()
    phoneNumber?: number;
}

export class UserPatchAddSectorParams {
    @ApiProperty({type: String})
    @IsString()
    sectorId: string
}

export type User = {
    id : number;
    fullname: string;
    username : string;
    phoneNumber: string;
    password: string;
    tokens?: Token[];
    job: Job;
    role: RoleDTO;
}