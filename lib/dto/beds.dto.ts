import { IsOptional, IsString } from "class-validator";

export class BedCreationParams {

    @IsString()
    textQR: string;

    @IsString()
    name: string;
}

export class BedPatchParams {

    @IsString()
    @IsOptional()
    textQR?: string;

    @IsOptional()
    @IsString()
    name?: string;
}

//Change properties, keep convention
export type BedDTO = {
    id: number;
    uuid: string;
    name: string
    departmentId: string;
    roomId: string
}