"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedPatchParams = exports.BedCreationParams = void 0;
const class_validator_1 = require("class-validator");
class BedCreationParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], BedCreationParams.prototype, "textQR", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], BedCreationParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], BedCreationParams.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], BedCreationParams.prototype, "roomId", void 0);
exports.BedCreationParams = BedCreationParams;
class BedPatchParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], BedPatchParams.prototype, "textQR", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)()
], BedPatchParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], BedPatchParams.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], BedPatchParams.prototype, "roomId", void 0);
exports.BedPatchParams = BedPatchParams;
