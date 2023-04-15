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
