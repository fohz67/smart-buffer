"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartBuffer = void 0;
const StringUtil_1 = require("./StringUtil");
const utils_1 = require("./utils");
class SmartBuffer {
    /**
     * Creates an instance of SmartBuffer.
     *
     * @param data - An ArrayBuffer or a number specifying the initial size in bytes. Defaults to DEFAULT_SIZE.
     */
    constructor(data = utils_1.DEFAULT_SIZE) {
        this.view = new DataView(data instanceof ArrayBuffer ? data : new ArrayBuffer(data));
    }
    /**
     * Creates a SmartBuffer from a specified size.
     *
     * @param size - The size in bytes for the SmartBuffer.
     * @returns A new SmartBuffer instance.
     */
    static fromSize(size) {
        return new SmartBuffer(size);
    }
    /**
     * Creates a SmartBuffer from an existing ArrayBuffer.
     *
     * @param buffer - The ArrayBuffer to use for the SmartBuffer.
     * @returns A new SmartBuffer instance.
     */
    static fromBuffer(buffer) {
        return new SmartBuffer(buffer);
    }
    /**
     * Gets the current DataView.
     *
     * @returns The current DataView used by the SmartBuffer.
     */
    getView() {
        return this.view;
    }
    /**
     * Sets a new DataView and resets the internal offset to 0.
     *
     * @param newView - The new DataView to use.
     */
    setView(newView) {
        this.view = newView;
        this.offset = 0;
    }
    /**
     * Gets the current offset within the buffer.
     *
     * @returns The current offset.
     */
    getOffset() {
        return this.offset;
    }
    /**
     * Sets the current offset within the buffer.
     *
     * @param offset - The new offset value.
     */
    setOffset(offset) {
        this.offset = offset;
    }
    /**
     * Gets the total length of the buffer in bytes.
     *
     * @returns The length of the buffer in bytes.
     */
    getLength() {
        return this.view.byteLength;
    }
    /**
     * Ensures that the buffer has sufficient capacity to accommodate additional data.
     * Resizes the buffer if necessary.
     *
     * @param size - The number of bytes to ensure capacity for.
     */
    ensureCapacity(size) {
        const requiredSize = this.offset + size;
        if (requiredSize > this.view.byteLength) {
            const newBuffer = new ArrayBuffer(requiredSize);
            new Uint8Array(newBuffer).set(new Uint8Array(this.view.buffer));
            this.view = new DataView(newBuffer);
        }
    }
    /**
     * Reads a signed 8-bit integer from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 8-bit integer read from the buffer.
     */
    readInt8(offset) {
        const result = utils_1.ReadUtils.readInt8(this.view, offset !== null && offset !== void 0 ? offset : this.offset);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 1;
        }
        return result;
    }
    /**
     * Reads an unsigned 8-bit integer from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The unsigned 8-bit integer read from the buffer.
     */
    readUInt8(offset) {
        const result = utils_1.ReadUtils.readUInt8(this.view, offset !== null && offset !== void 0 ? offset : this.offset);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 1;
        }
        return result;
    }
    /**
     * Reads a signed 16-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 16-bit integer read from the buffer.
     */
    readInt16(littleEndian = true, offset) {
        const result = utils_1.ReadUtils.readInt16(this.view, offset !== null && offset !== void 0 ? offset : this.offset, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 2;
        }
        return result;
    }
    /**
     * Reads an unsigned 16-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The unsigned 16-bit integer read from the buffer.
     */
    readUInt16(littleEndian = true, offset) {
        const result = utils_1.ReadUtils.readUInt16(this.view, offset !== null && offset !== void 0 ? offset : this.offset, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 2;
        }
        return result;
    }
    /**
     * Reads a signed 32-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 32-bit integer read from the buffer.
     */
    readInt32(littleEndian = true, offset) {
        const result = utils_1.ReadUtils.readInt32(this.view, offset !== null && offset !== void 0 ? offset : this.offset, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 4;
        }
        return result;
    }
    /**
     * Reads an unsigned 32-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The unsigned 32-bit integer read from the buffer.
     */
    readUInt32(littleEndian = true, offset) {
        const result = utils_1.ReadUtils.readUInt32(this.view, offset !== null && offset !== void 0 ? offset : this.offset, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 4;
        }
        return result;
    }
    /**
     * Reads a 32-bit floating point number from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 32-bit floating point number read from the buffer.
     */
    readFloat32(littleEndian = true, offset) {
        const result = utils_1.ReadUtils.readFloat32(this.view, offset !== null && offset !== void 0 ? offset : this.offset, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 4;
        }
        return result;
    }
    /**
     * Reads a 64-bit floating point number from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 64-bit floating point number read from the buffer.
     */
    readFloat64(littleEndian = true, offset) {
        const result = utils_1.ReadUtils.readFloat64(this.view, offset !== null && offset !== void 0 ? offset : this.offset, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 8;
        }
        return result;
    }
    /**
     * Reads a string from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The string read from the buffer.
     */
    readString(offset) {
        return StringUtil_1.StringUtil.readString(this, offset, false);
    }
    /**
     * Reads a null-terminated string from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The null-terminated string read from the buffer.
     */
    readStringNT(offset) {
        return StringUtil_1.StringUtil.readString(this, offset, true);
    }
    /**
     * Writes a signed 8-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeInt8(value, offset) {
        this.ensureCapacity(1);
        utils_1.WriteUtils.writeInt8(this.view, offset !== null && offset !== void 0 ? offset : this.offset++, value);
    }
    /**
     * Writes an unsigned 8-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeUInt8(value, offset) {
        this.ensureCapacity(1);
        utils_1.WriteUtils.writeUInt8(this.view, offset !== null && offset !== void 0 ? offset : this.offset++, value);
    }
    /**
     * Writes a signed 16-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeInt16(value, littleEndian = true, offset) {
        this.ensureCapacity(2);
        utils_1.WriteUtils.writeInt16(this.view, offset !== null && offset !== void 0 ? offset : this.offset, value, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 2;
        }
    }
    /**
     * Writes an unsigned 16-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeUInt16(value, littleEndian = true, offset) {
        this.ensureCapacity(2);
        utils_1.WriteUtils.writeUInt16(this.view, offset !== null && offset !== void 0 ? offset : this.offset, value, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 2;
        }
    }
    /**
     * Writes a signed 32-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeInt32(value, littleEndian = true, offset) {
        this.ensureCapacity(4);
        utils_1.WriteUtils.writeInt32(this.view, offset !== null && offset !== void 0 ? offset : this.offset, value, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 4;
        }
    }
    /**
     * Writes an unsigned 32-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeUInt32(value, littleEndian = true, offset) {
        this.ensureCapacity(4);
        utils_1.WriteUtils.writeUInt32(this.view, offset !== null && offset !== void 0 ? offset : this.offset, value, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 4;
        }
    }
    /**
     * Writes a 32-bit floating point number to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeFloat32(value, littleEndian = true, offset) {
        this.ensureCapacity(4);
        utils_1.WriteUtils.writeFloat32(this.view, offset !== null && offset !== void 0 ? offset : this.offset, value, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 4;
        }
    }
    /**
     * Writes a 64-bit floating point number to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeFloat64(value, littleEndian = true, offset) {
        this.ensureCapacity(8);
        utils_1.WriteUtils.writeFloat64(this.view, offset !== null && offset !== void 0 ? offset : this.offset, value, littleEndian);
        if ((0, utils_1.isNull)(offset)) {
            this.offset += 8;
        }
    }
    /**
     * Writes a string to the buffer.
     *
     * @param value - The string to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeString(value, offset) {
        this.ensureCapacity(value.length);
        StringUtil_1.StringUtil.writeString(this, value, offset, false);
    }
    /**
     * Writes a null-terminated string to the buffer.
     *
     * @param value - The string to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeStringNT(value, offset) {
        this.ensureCapacity(value.length + 1);
        StringUtil_1.StringUtil.writeString(this, value, offset, true);
    }
}
exports.SmartBuffer = SmartBuffer;
exports.default = SmartBuffer;
