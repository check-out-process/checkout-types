export type ProcessTemplateType = {};
export type ProcessType_Type = {};
export declare class AddProcessTemplateParams {
    name: string;
    description: string;
    processType: number;
    relatedSectors_ids: string[];
}
export declare class PatchProcessTemplateParams {
    name?: string;
    description?: string;
    processType?: number;
    relatedSectors_ids?: string[];
}
export declare class AddProcessTypeParams {
    name: string;
}
