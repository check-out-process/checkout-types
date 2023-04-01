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
    departmentUuid: string;
    roomUuid: string;
};
