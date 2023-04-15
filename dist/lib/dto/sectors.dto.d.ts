import { ProcessTemplateType, ProcessType_Type } from "./process-templates.dto";
import { UserType } from "./users.dto";
export type SectorType = {
    id: string;
    name: string;
    defaultResponsibleUser: UserType;
    responsibleUsers: Promise<UserType[]>;
    committingUsers: Promise<UserType[]>;
    relatedProcesses: ProcessTemplateType[];
    processTypes: ProcessType_Type[];
};
export declare class SectorCreationParams {
    name: string;
    defaultResponsibleUserId: number;
    responsibleUsersIds?: number[];
    committingUsersIds?: number[];
    processTypes?: number[];
    relatedProcessIds?: string[];
}
export declare class SectorQueryParams {
    processtype?: number;
}
export declare class SectorPatchParams {
    name?: string;
    defaultResponsibleUserId?: number;
    responsibleUsersIds?: number[];
    committingUsersIds?: number[];
    processTypes?: number[];
    relatedProcessIds?: string[];
}
export declare class SectorPatchAddUsersParams {
    userIds: number[];
}
export declare class SectorPatchAddResponsiblesParams {
    userIds: number[];
}
