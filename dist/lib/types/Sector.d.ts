export type SectorType = {
    ID: string;
    sectorName: string;
    defaultResponsibleUserId: number;
    responsibleUserIDs: number[];
};
export type SectorResponsibleType = {
    ID: string;
    sectorId: string;
    userId: number;
};
