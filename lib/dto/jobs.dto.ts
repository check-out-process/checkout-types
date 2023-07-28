import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateJobParams {
    @ApiProperty({type: String})
    @IsString()
    name: string;
}

export class Job {
    id: string;
    name: string;
}