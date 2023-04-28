"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPatchAddSectorParams = exports.UserPatchParams = exports.UserCreationParams = void 0;
const class_validator_1 = require("class-validator");
class UserCreationParams {
}
__decorate([
    (0, class_validator_1.IsNumber)()
], UserCreationParams.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], UserCreationParams.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], UserCreationParams.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], UserCreationParams.prototype, "jobId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], UserCreationParams.prototype, "roleId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], UserCreationParams.prototype, "phoneNumber", void 0);
exports.UserCreationParams = UserCreationParams;
class UserPatchParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], UserPatchParams.prototype, "jobId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], UserPatchParams.prototype, "roleId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UserPatchParams.prototype, "phoneNumber", void 0);
exports.UserPatchParams = UserPatchParams;
class UserPatchAddSectorParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], UserPatchAddSectorParams.prototype, "sectorId", void 0);
exports.UserPatchAddSectorParams = UserPatchAddSectorParams;
