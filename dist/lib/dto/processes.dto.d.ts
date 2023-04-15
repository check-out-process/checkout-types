export type ProcessDTO = {};
export declare class newSectorInstanceData {
    sectorId: string;
    workerId: number;
    responsibleUserId: number;
}
export declare class createProcessInstanceFromDataParams {
    name: string;
    description: string;
    processType: number;
    orderedSectors: newSectorInstanceData[];
    creatorId: number;
    departmentId: string;
    roomId: string;
    bedId: string;
}
export declare class createProcessInstanceFromTemplateParams {
    templateId: string;
    creatorId: number;
    bedId: string;
    departmentId: string;
    roomId: string;
}
