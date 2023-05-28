import { ProcessTemplateType, ProcessType } from "./process-templates.dto";
import { User } from "./users.dto";
export type Sector = {
    id: string;
    name: string;
    defaultResponsibleUser?: User;
    defaultCommittingUser?: User;
    responsibleUsers?: User[];
    committingUsers: User[];
    relatedProcesses: ProcessTemplateType[];
    processTypes: ProcessType[];
};
export declare class SectorCreationParams {
    name: string;
    defaultResponsibleUserId?: number;
    responsibleUsersIds?: number[];
    defaultCommittingUsersId?: number;
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
    defaultCommittingUsersId?: number;
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
