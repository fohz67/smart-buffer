import { Offset } from "./types";
export declare class SmartBuffer {
    private view;
    private offset;
    /**
     * Creates an instance of SmartBuffer.
     *
     * @param data - An ArrayBuffer or a number specifying the initial size in bytes. Defaults to DEFAULT_SIZE.
     */
    constructor(data?: ArrayBuffer | number);
    /**
     * Creates a SmartBuffer from a specified size.
     *
     * @param size - The size in bytes for the SmartBuffer.
     * @returns A new SmartBuffer instance.
     */
    fromSize(size: number): SmartBuffer;
    /**
     * Creates a SmartBuffer from an existing ArrayBuffer.
     *
     * @param buffer - The ArrayBuffer to use for the SmartBuffer.
     * @returns A new SmartBuffer instance.
     */
    fromBuffer(buffer: ArrayBuffer): SmartBuffer;
    /**
     * Gets the current DataView.
     *
     * @returns The current DataView used by the SmartBuffer.
     */
    getView(): DataView;
    /**
     * Sets a new DataView and resets the internal offset to 0.
     *
     * @param newView - The new DataView to use.
     */
    setView(newView: DataView): void;
    /**
     * Gets the current offset within the buffer.
     *
     * @returns The current offset.
     */
    getOffset(): number;
    /**
     * Sets the current offset within the buffer.
     *
     * @param offset - The new offset value.
     */
    setOffset(offset: number): void;
    /**
     * Gets the total length of the buffer in bytes.
     *
     * @returns The length of the buffer in bytes.
     */
    getLength(): number;
    /**
     * Ensures that the buffer has sufficient capacity to accommodate additional data.
     * Resizes the buffer if necessary.
     *
     * @param size - The number of bytes to ensure capacity for.
     */
    ensureCapacity(size: number): void;
    /**
     * Reads a signed 8-bit integer from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 8-bit integer read from the buffer.
     */
    readInt8(offset?: Offset): number;
    /**
     * Reads an unsigned 8-bit integer from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The unsigned 8-bit integer read from the buffer.
     */
    readUInt8(offset?: Offset): number;
    /**
     * Reads a signed 16-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 16-bit integer read from the buffer.
     */
    readInt16(littleEndian?: boolean, offset?: Offset): number;
    /**
     * Reads an unsigned 16-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The unsigned 16-bit integer read from the buffer.
     */
    readUInt16(littleEndian?: boolean, offset?: Offset): number;
    /**
     * Reads a signed 32-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 32-bit integer read from the buffer.
     */
    readInt32(littleEndian?: boolean, offset?: Offset): number;
    /**
     * Reads an unsigned 32-bit integer from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The unsigned 32-bit integer read from the buffer.
     */
    readUInt32(littleEndian?: boolean, offset?: Offset): number;
    /**
     * Reads a 32-bit floating point number from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 32-bit floating point number read from the buffer.
     */
    readFloat32(littleEndian?: boolean, offset?: number | null): number;
    /**
     * Reads a 64-bit floating point number from the buffer.
     *
     * @param littleEndian - Whether to read the value in little-endian format. Defaults to true.
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The 64-bit floating point number read from the buffer.
     */
    readFloat64(littleEndian?: boolean, offset?: number | null): number;
    /**
     * Reads a string from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The string read from the buffer.
     */
    readString(offset?: Offset): string;
    /**
     * Reads a null-terminated string from the buffer.
     *
     * @param offset - The offset from which to start reading. If omitted, the current offset is used.
     * @returns The null-terminated string read from the buffer.
     */
    readStringNT(offset?: Offset): string;
    /**
     * Writes a signed 8-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeInt8(value: number, offset?: Offset): void;
    /**
     * Writes an unsigned 8-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeUInt8(value: number, offset?: Offset): void;
    /**
     * Writes a signed 16-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeInt16(value: number, littleEndian?: boolean, offset?: Offset): void;
    /**
     * Writes an unsigned 16-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeUInt16(value: number, littleEndian?: boolean, offset?: Offset): void;
    /**
     * Writes a signed 32-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeInt32(value: number, littleEndian?: boolean, offset?: Offset): void;
    /**
     * Writes an unsigned 32-bit integer to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeUInt32(value: number, littleEndian?: boolean, offset?: Offset): void;
    /**
     * Writes a 32-bit floating point number to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeFloat32(value: number, littleEndian?: boolean, offset?: number | null): void;
    /**
     * Writes a 64-bit floating point number to the buffer.
     *
     * @param value - The value to write.
     * @param littleEndian - Whether to write the value in little-endian format. Defaults to true.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeFloat64(value: number, littleEndian?: boolean, offset?: number | null): void;
    /**
     * Writes a string to the buffer.
     *
     * @param value - The string to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeString(value: string, offset?: Offset): void;
    /**
     * Writes a null-terminated string to the buffer.
     *
     * @param value - The string to write.
     * @param offset - The offset at which to start writing. If omitted, the current offset is used.
     */
    writeStringNT(value: string, offset?: Offset): void;
}
export default SmartBuffer;
