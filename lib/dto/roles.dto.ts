import { IsString } from "class-validator";

export class CreateRoleParams {
    @IsString()
    name: string;
}

export class RoleDTO {
    id: string;
    name: string;
}
