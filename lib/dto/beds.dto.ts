import { IsOptional, IsString } from "class-validator";

export class BedCreationParams {

    @IsString()
    textQR: string;

    @IsString()
    name: string;

    @IsString()
    departmentId: string;

    @IsString()
    roomId: string;
}

export class BedPatchParams {

    @IsString()
    @IsOptional()
    textQR?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsString()
    @IsOptional()
    departmentId?: string;

    @IsString()
    @IsOptional()
    roomId?: string;
}

//Change properties, keep convention
export type BedDTO = {
    id: number;
    uuid: string;
    name: string
    departmentId: string;
    roomId: string
}