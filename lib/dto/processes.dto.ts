import { IsArray, IsJSON, IsNumber, IsString, ValidateNested } from "class-validator"
import { Type } from 'class-transformer'

export type ProcessDTO = {

}

export class newSectorInstanceData {
    @IsString()
    sector_id: string;
    
    @IsNumber()
    worker_id: number;
    
    @IsNumber()
    responsible_user_id: number;
}

export class createProcessInstanceFromDataParams {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    processType: number;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => newSectorInstanceData)
    ordered_sectors: newSectorInstanceData[];

    @IsNumber()
    creator_id: number;

    @IsString()
    departmentId: string;

    @IsString()
    roomId: string;

    @IsString()
    bedId: string;

}

export class createProcessInstanceFromTemplateParams {
    @IsString()
    template_id: string;

    @IsNumber()
    creator_id: number;

    @IsString()
    bedId: string;

}