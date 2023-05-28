import { Sector } from "./sectors.dto";
export type ProcessTemplateType = {};
export type ProcessType_Type = {};
export type ProcessTemplate = {
    id: string;
    name: string;
    description: string;
    processType: ProcessType;
    relatedSectors: Sector[];
    relatedSectorsOrder: string[];
};
export declare class ProcessType {
    uuid: string;
    id: number;
    name: string;
    relatedSectors: Sector[];
}
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
