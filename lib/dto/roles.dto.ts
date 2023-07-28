import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleParams {
    @ApiProperty({type: String})
    @IsString()
    name: string;
}

export class RoleDTO {
    id: string;
    name: string;
}
