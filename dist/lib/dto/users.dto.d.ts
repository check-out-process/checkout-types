import { Job } from "./jobs.dto";
import { RoleDTO } from "./roles.dto";
import { Token } from "./token.dto";
export declare class UserCreationParams {
    id: number;
    fullname: string;
    username: string;
    password: string;
    jobId: string;
    roleId: string;
    phoneNumber: string;
}
export declare class UserPatchParams {
    jobId?: string;
    roleId?: string;
    phoneNumber?: number;
}
export declare class UserPatchAddSectorParams {
    sectorId: string;
}
export type User = {
    id: number;
    fullname: string;
    username: string;
    phoneNumber: string;
    password: string;
    tokens?: Token[];
    job: Job;
    role: RoleDTO;
};
