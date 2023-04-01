"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bed = void 0;
const typeorm_1 = require("typeorm");
const Column_1 = require("typeorm/decorator/columns/Column");
const PrimaryColumn_1 = require("typeorm/decorator/columns/PrimaryColumn");
let Bed = class Bed {
    constructor(id, roomId, departmentId, QR) {
        this.ID = id;
        this.roomId = roomId;
        this.departmentId = this.departmentId;
        this.textQR = QR;
    }
};
__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)({ unique: true })
], Bed.prototype, "ID", void 0);
__decorate([
    (0, Column_1.Column)()
], Bed.prototype, "roomId", void 0);
__decorate([
    (0, Column_1.Column)()
], Bed.prototype, "departmentId", void 0);
__decorate([
    (0, Column_1.Column)({ unique: true })
], Bed.prototype, "textQR", void 0);
Bed = __decorate([
    (0, typeorm_1.Entity)()
], Bed);
exports.Bed = Bed;
