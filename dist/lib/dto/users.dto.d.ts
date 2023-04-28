export declare class UserCreationParams {
    id: number;
    fullname: string;
    username: string;
    jobId: string;
    roleId: string;
    phoneNumber: number;
}
export declare class UserPatchParams {
    jobId?: string;
    roleId?: string;
    phoneNumber?: number;
}
export declare class UserPatchAddSectorParams {
    sectorId: string;
}
export type UserType = {};
