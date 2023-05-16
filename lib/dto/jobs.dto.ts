import { IsString } from "class-validator";

export class CreateJobParams {
    @IsString()
    name: string;
}

export class Job {
    id: string;
    name: string;
}