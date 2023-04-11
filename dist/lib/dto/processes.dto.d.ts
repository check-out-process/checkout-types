export type ProcessDTO = {};
export declare class newSectorInstanceData {
    sector_id: string;
    worker_id: number;
    responsible_user_id: number;
}
export declare class createProcessInstanceFromDataParams {
    name: string;
    description: string;
    processType: number;
    ordered_sectors: newSectorInstanceData[];
    creator_id: number;
    departmentId: string;
    roomId: string;
    bedId: string;
}
export declare class createProcessInstanceFromTemplateParams {
    template_id: string;
    creator_id: number;
    bedId: string;
}
