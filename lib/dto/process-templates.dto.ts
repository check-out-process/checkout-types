import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { Sector } from "./sectors.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export type ProcessTemplateType = {

}

export type ProcessType_Type = {

}

export type ProcessTemplate = {
    id: string;
    name: string;
    description: string;
    processType: ProcessType;
    relatedSectors: Sector[];
    relatedSectorsOrder: string[]
}

export class ProcessType {
    uuid: string;
    id: number;
    name: string;
    relatedSectors: Sector[];
}

export class AddProcessTemplateParams {
    @ApiProperty({type: String})
    @IsString()
    name: string;

    @ApiProperty({type: String})
    @IsString()
    description: string;

    @ApiProperty({type: Number})
    @IsNumber()
    processType: number;

    @ApiProperty({type: [String]})
    @IsArray()
    relatedSectors_ids: string[];
}

export class PatchProcessTemplateParams {
    @ApiPropertyOptional({type: String})
    @IsString()
    @IsOptional()
    name?: string;

    @ApiPropertyOptional({type: String})
    @IsString()
    @IsOptional()
    description?: string;

    @ApiPropertyOptional({type: Number})
    @IsNumber()
    @IsOptional()
    processType?: number

    @ApiPropertyOptional({type: [String]})
    @IsArray()
    @IsOptional()
    relatedSectors_ids?: string[];
}

export class AddProcessTypeParams {
    @ApiProperty({type: String})
    @IsString()
    name: string;
}