import { IsOptional, IsString } from "class-validator";

export class BedCreationParams {

    @IsString()
    textQR: string;
}

export class BedPatchParams {

    @IsString()
    @IsOptional()
    textQR?: string;
}

export type BedDTO = {
    id: number;
    uuid: string;
    name: string
    departmentUuid: string;
    roomUuid: string
}