import { IsString } from "class-validator";

export class CreateRoleParams {
    @IsString()
    name: string;
}