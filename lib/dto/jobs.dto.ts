import { IsString } from "class-validator";

export class CreateJobParams {
    @IsString()
    name: string;
}