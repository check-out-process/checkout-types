"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProcessTypeParams = exports.PatchProcessTemplateParams = exports.AddProcessTemplateParams = exports.ProcessType = void 0;
const class_validator_1 = require("class-validator");
class ProcessType {
}
exports.ProcessType = ProcessType;
class AddProcessTemplateParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], AddProcessTemplateParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], AddProcessTemplateParams.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], AddProcessTemplateParams.prototype, "processType", void 0);
__decorate([
    (0, class_validator_1.IsArray)()
], AddProcessTemplateParams.prototype, "relatedSectors_ids", void 0);
exports.AddProcessTemplateParams = AddProcessTemplateParams;
class PatchProcessTemplateParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], PatchProcessTemplateParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], PatchProcessTemplateParams.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], PatchProcessTemplateParams.prototype, "processType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)()
], PatchProcessTemplateParams.prototype, "relatedSectors_ids", void 0);
exports.PatchProcessTemplateParams = PatchProcessTemplateParams;
class AddProcessTypeParams {
}
__decorate([
    (0, class_validator_1.IsString)()
], AddProcessTypeParams.prototype, "name", void 0);
exports.AddProcessTypeParams = AddProcessTypeParams;
