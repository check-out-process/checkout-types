"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorInstance = exports.ProcessInstance = exports.ProcessInstanceStatusReturnedParams = exports.ProcessInstanceStatusReturnedParamsUI = exports.UpdateSectorStatusParams = exports.UpdateSectorInstanceParams = exports.GetProcessInstanceStatusParams = exports.CreateProcessInstanceFromTemplateParams = exports.CreateProcessInstanceFromDataParams = exports.NewSectorInstanceData = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
class NewSectorInstanceData {
}
__decorate([
    (0, class_validator_1.IsString)()
], NewSectorInstanceData.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], NewSectorInstanceData.prototype, "workerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)()
], NewSectorInstanceData.prototype, "responsibleUserId", void 0);
exports.NewSectorInstanceData = NewSectorInstanceData;
class CreateProcessInstanceFromDataParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromDataParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromDataParams.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromDataParams.prototype, "processTypeId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => NewSectorInstanceData)
], CreateProcessInstanceFromDataParams.prototype, "orderedSectors", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], CreateProcessInstanceFromDataParams.prototype, "creatorId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromDataParams.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromDataParams.prototype, "roomId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromDataParams.prototype, "bedId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)()
], CreateProcessInstanceFromDataParams.prototype, "isIsolation", void 0);
exports.CreateProcessInstanceFromDataParams = CreateProcessInstanceFromDataParams;
class CreateProcessInstanceFromTemplateParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromTemplateParams.prototype, "templateId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], CreateProcessInstanceFromTemplateParams.prototype, "creatorId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromTemplateParams.prototype, "bedId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromTemplateParams.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CreateProcessInstanceFromTemplateParams.prototype, "roomId", void 0);
exports.CreateProcessInstanceFromTemplateParams = CreateProcessInstanceFromTemplateParams;
class GetProcessInstanceStatusParams {
}
__decorate([
    (0, class_validator_1.IsNumber)()
], GetProcessInstanceStatusParams.prototype, "userId", void 0);
exports.GetProcessInstanceStatusParams = GetProcessInstanceStatusParams;
class UpdateSectorInstanceParams {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UpdateSectorInstanceParams.prototype, "commitingWorkerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UpdateSectorInstanceParams.prototype, "responsiblePersonId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.Status)
], UpdateSectorInstanceParams.prototype, "status", void 0);
exports.UpdateSectorInstanceParams = UpdateSectorInstanceParams;
class UpdateSectorStatusParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], UpdateSectorStatusParams.prototype, "processInstanceId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], UpdateSectorStatusParams.prototype, "sectorInstanceId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Status)
], UpdateSectorStatusParams.prototype, "status", void 0);
exports.UpdateSectorStatusParams = UpdateSectorStatusParams;
class ProcessInstanceStatusReturnedParamsUI {
}
exports.ProcessInstanceStatusReturnedParamsUI = ProcessInstanceStatusReturnedParamsUI;
class ProcessInstanceStatusReturnedParams {
}
exports.ProcessInstanceStatusReturnedParams = ProcessInstanceStatusReturnedParams;
class ProcessInstance {
}
exports.ProcessInstance = ProcessInstance;
class SectorInstance {
}
exports.SectorInstance = SectorInstance;
