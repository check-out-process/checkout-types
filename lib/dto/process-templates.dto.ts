import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { SectorType } from "./sectors.dto";

export type ProcessTemplateType = {

}

export type ProcessType_Type = {

}

export class ProcessType {
    uuid: string;
    id: number;
    name: string;
    relatedSectors: SectorType[];
}

export class AddProcessTemplateParams{
    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsNumber()
    processType: number;

    @IsArray()
    relatedSectors_ids: string[];
}

export class PatchProcessTemplateParams{
    @IsString()
    @IsOptional()
    name?: string;
    
    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    processType?: number

    @IsArray()
    @IsOptional()
    relatedSectors_ids?: string[];
}

export class AddProcessTypeParams{
    // @IsNumber()
    // id: number;

    @IsString()
    name: string;
}