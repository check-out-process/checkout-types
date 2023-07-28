import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsArray } from "class-validator";

export declare class LogInParams {
    @ApiProperty({type: String})
    @IsString()
    phoneNumber: string;

    @ApiProperty({type: String})
    @IsString()
    password: string;

    @ApiProperty({type: [String]})
    @IsArray()
    tokens: string[];
}