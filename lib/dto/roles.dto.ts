import { IsString } from "class-validator";

export class CreateRoleParams {
    @IsString()
    name: string;
}

export class Role {
    id: string;
    name: string;
}
