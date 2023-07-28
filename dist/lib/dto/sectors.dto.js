"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorPatchAddResponsiblesParams = exports.SectorPatchAddUsersParams = exports.SectorPatchParams = exports.SectorQueryParams = exports.SectorCreationParams = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SectorCreationParams {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsString)()
], SectorCreationParams.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], SectorCreationParams.prototype, "defaultResponsibleUserId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorCreationParams.prototype, "responsibleUsersIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], SectorCreationParams.prototype, "defaultCommittingUsersId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorCreationParams.prototype, "committingUsersIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorCreationParams.prototype, "processTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)()
], SectorCreationParams.prototype, "relatedProcessIds", void 0);
exports.SectorCreationParams = SectorCreationParams;
class SectorQueryParams {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], SectorQueryParams.prototype, "processtype", void 0);
exports.SectorQueryParams = SectorQueryParams;
class SectorPatchParams {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "defaultResponsibleUserId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "responsibleUsersIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "defaultCommittingUsersId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "committingUsersIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "processTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)()
], SectorPatchParams.prototype, "relatedProcessIds", void 0);
exports.SectorPatchParams = SectorPatchParams;
class SectorPatchAddUsersParams {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorPatchAddUsersParams.prototype, "userIds", void 0);
exports.SectorPatchAddUsersParams = SectorPatchAddUsersParams;
class SectorPatchAddResponsiblesParams {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)()
], SectorPatchAddResponsiblesParams.prototype, "userIds", void 0);
exports.SectorPatchAddResponsiblesParams = SectorPatchAddResponsiblesParams;
