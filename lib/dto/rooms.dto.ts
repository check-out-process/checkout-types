import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';


export class RoomCreationParams {
    @ApiProperty({type: String})
    @IsString()
    name: string
}

export class RoomPatchParams {
    @ApiPropertyOptional({type: String})
    @IsString()
    @IsOptional()
    name?: string;
}

export type RoomDTO = {
    id: string;
    name: string,
    departmentId: string;
}