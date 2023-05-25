
import { IsString, IsArray } from "class-validator";

export declare class SendSmsParams {
    @IsString()
    message: string;
    @IsString()
    phoneNumber: string;
}