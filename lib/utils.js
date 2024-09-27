"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteUtils = exports.ReadUtils = exports.DEFAULT_SIZE = void 0;
exports.isNull = isNull;
exports.DEFAULT_SIZE = 8;
function isNull(value) {
    return value === null || value === undefined;
}
exports.ReadUtils = {
    readInt8: (view, offset) => view.getInt8(offset),
    readUInt8: (view, offset) => view.getUint8(offset),
    readInt16: (view, offset, littleEndian = true) => view.getInt16(offset, littleEndian),
    readUInt16: (view, offset, littleEndian = true) => view.getUint16(offset, littleEndian),
    readInt32: (view, offset, littleEndian = true) => view.getInt32(offset, littleEndian),
    readUInt32: (view, offset, littleEndian = true) => view.getUint32(offset, littleEndian),
    readFloat32: (view, offset, littleEndian = true) => view.getFloat32(offset, littleEndian),
    readFloat64: (view, offset, littleEndian = true) => view.getFloat64(offset, littleEndian),
};
exports.WriteUtils = {
    writeInt8: (view, offset, value) => view.setInt8(offset, value),
    writeUInt8: (view, offset, value) => view.setUint8(offset, value),
    writeInt16: (view, offset, value, littleEndian = true) => view.setInt16(offset, value, littleEndian),
    writeUInt16: (view, offset, value, littleEndian = true) => view.setUint16(offset, value, littleEndian),
    writeInt32: (view, offset, value, littleEndian = true) => view.setInt32(offset, value, littleEndian),
    writeUInt32: (view, offset, value, littleEndian = true) => view.setUint32(offset, value, littleEndian),
    writeFloat32: (view, offset, value, littleEndian = true) => view.setFloat32(offset, value, littleEndian),
    writeFloat64: (view, offset, value, littleEndian = true) => view.setFloat64(offset, value, littleEndian),
};
