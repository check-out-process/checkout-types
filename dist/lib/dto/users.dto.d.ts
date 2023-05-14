export declare class UserCreationParams {
    id: number;
    fullname: string;
    username: string;
    password: string;
    jobId: string;
    roleId: string;
    phoneNumber: string;
}

export declare class UserCreationRes {
    id: number;
    fullname: string;
    username: string;
    password: string;
    jobId: string;
    roleId: string;
    phoneNumber: string;
    token:string;
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
