"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorPatchParams = exports.SectorCreationParams = void 0;
const class_validator_1 = require("class-validator");
class SectorCreationParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], SectorCreationParams.prototype, "sectorName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], SectorCreationParams.prototype, "defaultResponsibleUserId", void 0);
__decorate([
    (0, class_validator_1.IsArray)()
], SectorCreationParams.prototype, "responsibleUsersIds", void 0);
exports.SectorCreationParams = SectorCreationParams;
class SectorPatchParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "sectorName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "defaultResponsibleUserId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "responsibleUsersIds", void 0);
exports.SectorPatchParams = SectorPatchParams;
