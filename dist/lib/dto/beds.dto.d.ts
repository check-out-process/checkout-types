export declare class BedCreationParams {
    textQR: string;
    name: string;
}
export declare class BedPatchParams {
    textQR?: string;
    name?: string;
}
export type BedDTO = {
    id: number;
    uuid: string;
    name: string;
    departmentId: string;
    roomId: string;
};
