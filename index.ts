/**
 * @file index.ts
 * @version 1.0.0
 * @date 2024-06-06
 * @autor Fohz67
 */

import SmartBuffer from './SmartBuffer/SmartBuffer';

function main(): void {
    const buffer: SmartBuffer = new SmartBuffer();

    buffer.writeString("Hello", null);
    buffer.writeInt8(42, null);
    buffer.writeString("Buffer Test", null);
    buffer.writeInt16(12345, true, null);
    buffer.writeUInt16(54321, true, null);
    buffer.writeInt32(123456789, true, null);
    buffer.writeUInt32(987654321, true, null);
    buffer.writeStringNT("End", null);

    buffer.setOffset(0);

    console.log("Read String:", buffer.readString(null));
    console.log("Read Int8:", buffer.readInt8(null));
    console.log("Read String:", buffer.readString(null));
    console.log("Read Int16:", buffer.readInt16(true, null));
    console.log("Read UInt16:", buffer.readUInt16(true, null));
    console.log("Read Int32:", buffer.readInt32(true, null));
    console.log("Read UInt32:", buffer.readUInt32(true, null));
    console.log("Read String NT:", buffer.readStringNT(null));
}

main();
