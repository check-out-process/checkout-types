export declare class BedCreationParams {
    textQR: string;
    name: string;
    departmentId: string;
    roomId: string;
}
export declare class BedPatchParams {
    textQR?: string;
    name?: string;
    departmentId?: string;
    roomId?: string;
}
export type BedDTO = {
    id: number;
    uuid: string;
    name: string;
    departmentId: string;
    roomId: string;
};
