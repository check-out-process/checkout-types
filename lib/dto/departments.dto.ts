import { IsOptional, IsString } from "class-validator"

export class DepartmentPatchParams {
    @IsOptional()
    @IsString()
    name?: string
}

export class DepartmentCreationParams {
    @IsString()
    name: string
}

export type DepartmentDTO = {
    id: string;
    name: string;
}