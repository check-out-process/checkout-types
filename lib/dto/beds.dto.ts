import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class BedCreationParams {
    @ApiProperty({type: String})
    @IsString()
    textQR: string;

    @ApiProperty({type: String})
    @IsString()
    name: string;

    @ApiProperty({type: String})
    @IsString()
    departmentId: string;

    @ApiProperty({type: String})
    @IsString()
    roomId: string;
}

export class BedPatchParams {
    @ApiPropertyOptional({type: String})
    @IsString()
    @IsOptional()
    textQR?: string;

    @ApiPropertyOptional({type: String})
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({type: String})
    @IsString()
    @IsOptional()
    departmentId?: string;

    @ApiPropertyOptional({type: String})
    @IsString()
    @IsOptional()
    roomId?: string;
}

export type BedDTO = {
    id: string;
    uuid: string;
    name: string
    departmentId: string;
    roomId: string
}