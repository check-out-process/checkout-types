import { IsString, IsOptional } from 'class-validator';


export class RoomCreationParams {

    @IsString()
    name: string
}

export class RoomPatchParams {

    @IsString()
    @IsOptional()
    name?: string;
}

export type RoomDTO = {
    id: string;
    name: string,
    departmentId: string;
}