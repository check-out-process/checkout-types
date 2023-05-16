import { IsString, IsArray } from "class-validator";

export declare class LogInParams {
    @IsString()
    phoneNumber: string;
    @IsString()
    password: string;
    @IsArray()
    tokens: string[];
}