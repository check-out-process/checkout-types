
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Job } from "./jobs.dto";
import { Role } from "./roles.dto";
import { Token } from "./token.dto";

export class UserCreationParams {
    @IsNumber()
    id : number;

    @IsString()
    fullname: string;

    @IsString()
    username : string;

    @IsString()
    password : string;

    @IsString()
    jobId: string;

    @IsString()
    roleId: string;

    //consider changing to string with number check
    @IsString()
    phoneNumber: string;
}

export class UserPatchParams {

    @IsString()
    @IsOptional()
    jobId?: string;

    @IsString()
    @IsOptional()
    roleId?: string;

    @IsNumber()
    @IsOptional()
    phoneNumber?: number;
}

export class UserPatchAddSectorParams {
    @IsString()
    sectorId: string
}

export type UserType = {
}

export type User = {
    id : number;
    fullname: string;
    username : string;
    phoneNumber: string;
    password: string;
    tokens?: Token[];
    job: Job;
    role: Role;
}