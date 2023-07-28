import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator"

export class DepartmentPatchParams {
    @ApiPropertyOptional({type: String})
    @IsOptional()
    @IsString()
    name?: string
}

export class DepartmentCreationParams {
    @ApiProperty({type: String})
    @IsString()
    name: string
}

export type DepartmentDTO = {
    id: string;
    name: string;
}