import { Status } from "../enums";
import { DepartmentType } from "../types/Department";
export type ProcessInstanceType = {};
export declare class NewSectorInstanceData {
    sectorId: string;
    workerId: number;
    responsibleUserId: number;
}
export declare class CreateProcessInstanceFromDataParams {
    name: string;
    description: string;
    processType: number;
    orderedSectors: NewSectorInstanceData[];
    creatorId: number;
    departmentId: string;
    roomId: string;
    bedId: string;
}
export declare class CreateProcessInstanceFromTemplateParams {
    templateId: string;
    creatorId: number;
    bedId: string;
    departmentId: string;
    roomId: string;
}
export declare class UpdateSectorStatusParams {
    sectorId: string;
    status: Status;
    userId: number;
}
export declare class ProcessInstanceStatusReturnedParams {
    name: string;
    description: string;
    creator: string;
    department: DepartmentType;
}
