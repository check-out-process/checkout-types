import { IsString, IsNumber, IsOptional, IsArray } from "class-validator";

export class SectorCreationParams {
    @IsString()
    sectorName: string;

    @IsNumber()
    defaultResponsibleUserId: number;

    @IsArray()
    responsibleUsersIds: number[];
}

export class SectorPatchParams {
    @IsString()
    @IsOptional()
    sectorName?: string;

    @IsNumber()
    @IsOptional()
    defaultResponsibleUserId?: number;

    @IsArray()
    @IsOptional()
    responsibleUsersIds: number[];
}