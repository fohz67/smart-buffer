/**
 * @file index.ts
 * @version 1.0.0
 * @date 2024-06-06
 * @autor Fohz67
 */

import SmartBuffer from './SmartBuffer/SmartBuffer';

function main(): void {
    const buffer: SmartBuffer = new SmartBuffer();

    buffer.writeString("Hello");
    buffer.writeInt8(42);
    buffer.writeString("Buffer Test");
    buffer.writeInt16(12345, true);
    buffer.writeUInt16(54321, true);
    buffer.writeInt32(123456789, true);
    buffer.writeUInt32(987654321, true);
    buffer.writeStringNT("End");

    buffer.setOffset(0);

    console.log("Read String:", buffer.readString());
    console.log("Read Int8:", buffer.readUInt8());
    console.log("Read String:", buffer.readString());
    console.log("Read Int16:", buffer.readInt16(true));
    console.log("Read UInt16:", buffer.readUInt16(true));
    console.log("Read Int32:", buffer.readInt32(true));
    console.log("Read UInt32:", buffer.readUInt32(true));
    console.log("Read String NT:", buffer.readStringNT());
}

main();
