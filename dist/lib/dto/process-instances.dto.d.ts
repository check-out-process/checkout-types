import { Status } from "../enums";
import { DepartmentType } from "../types/Department";
import { RoomType } from "../types/Room";
import { User } from "./users.dto";
import { BedDTO } from "./beds.dto";
import { ProcessType } from "./process-templates.dto";
import { DepartmentDTO } from "./departments.dto";
export type ProcessInstanceType = {};
export declare class NewSectorInstanceData {
    id: string;
    workerId: number;
    responsibleUserId?: number;
}
export declare class CreateProcessInstanceFromDataParams {
    name: string;
    description: string;
    processTypeId: string;
    orderedSectors: NewSectorInstanceData[];
    creatorId: number;
    departmentId: string;
    roomId: string;
    bedId: string;
    isIsolation: boolean;
}
export declare class CreateProcessInstanceFromTemplateParams {
    templateId: string;
    creatorId: number;
    bedId: string;
    departmentId: string;
    roomId: string;
}
export declare class GetProcessInstanceStatusParams {
    userId: number;
}
export declare class UpdateSectorInstanceParams {
    commitingWorkerId?: number;
    responsiblePersonId?: number;
    status: Status;
}
export declare class UpdateSectorStatusParams {
    processInstanceId: string;
    sectorInstanceId: string;
    status: Status;
}
export declare class ProcessInstanceStatusReturnedParamsUI {
    processInstanceId: string;
    name: string;
    description: string;
    creator: string;
    department: DepartmentType;
    room: RoomType;
    processStatus: Status;
    processType: string;
    sectorInstances: SectorInstance[];
    currentSectorInstance: SectorInstance;
}
export declare class ProcessInstanceStatusReturnedParams {
    processInstanceId: string;
    name: string;
    description: string;
    creator: string;
    department: DepartmentType;
    room: RoomType;
    processStatus: Status;
    processType: string;
    sectorInstances: Object[];
    currentSectorInstance: Object;
}
export declare class ProcessInstance {
    instanceId: string;
    name: string;
    description: string;
    department: DepartmentDTO;
    room: RoomType;
    processType: ProcessType;
    sectorInstances: SectorInstance[];
    status: Status;
    sectorsOrder: string[];
    creator: User;
    bed: BedDTO;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date;
    isIsolation: boolean;
}
export declare class SectorInstance {
    instanceId: string;
    sectorId: string;
    name: string;
    status: Status;
    commitingWorker: User;
    responsiblePerson?: User;
    bed: BedDTO;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date;
}
