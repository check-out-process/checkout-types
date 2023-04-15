import { Role } from "../enums";
export declare class UserCreationParams {
    id: number;
    fullname: string;
    username: string;
    job: number;
    role: Role;
}
export declare class UserPatchParams {
    job?: number;
    role?: Role;
}
export declare class UserPatchAddSectorParams {
    sectorId: string;
}
export type UserType = {};
