
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

export class UserCreationParams {
    @IsNumber()
    id : number;

    @IsString()
    fullname: string;

    @IsString()
    username : string;

    @IsString()
    jobId: string;

    @IsString()
    roleId: string;

    @IsNumber()
    phoneNumber: number;
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