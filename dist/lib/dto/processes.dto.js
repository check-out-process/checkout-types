"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProcessInstanceFromTemplateParams = exports.createProcessInstanceFromDataParams = exports.newSectorInstanceData = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class newSectorInstanceData {
}
__decorate([
    (0, class_validator_1.IsString)()
], newSectorInstanceData.prototype, "sectorId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], newSectorInstanceData.prototype, "workerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], newSectorInstanceData.prototype, "responsibleUserId", void 0);
exports.newSectorInstanceData = newSectorInstanceData;
class createProcessInstanceFromDataParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromDataParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromDataParams.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], createProcessInstanceFromDataParams.prototype, "processType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => newSectorInstanceData)
], createProcessInstanceFromDataParams.prototype, "orderedSectors", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], createProcessInstanceFromDataParams.prototype, "creatorId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromDataParams.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromDataParams.prototype, "roomId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromDataParams.prototype, "bedId", void 0);
exports.createProcessInstanceFromDataParams = createProcessInstanceFromDataParams;
class createProcessInstanceFromTemplateParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromTemplateParams.prototype, "templateId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], createProcessInstanceFromTemplateParams.prototype, "creatorId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromTemplateParams.prototype, "bedId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromTemplateParams.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], createProcessInstanceFromTemplateParams.prototype, "roomId", void 0);
exports.createProcessInstanceFromTemplateParams = createProcessInstanceFromTemplateParams;
