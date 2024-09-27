import {SmartBuffer} from './SmartBuffer';
import {isNull, ReadUtils, WriteUtils} from './utils';

export const StringUtil: any = {
    readString: (
        buffer: SmartBuffer,
        offset?: number | null,
        nt: boolean = false
    ): string => {
        const length: number = buffer.getLength();
        let bufferOffset: number = offset ?? buffer.getOffset();
        let readString: string = "";

        for (; bufferOffset < length; bufferOffset++) {
            const charCode: number = ReadUtils.readUInt8(buffer.getView(), bufferOffset);
            if (nt && !charCode) break;
            readString += String.fromCharCode(charCode);
        }

        if (isNull(offset)) {
            buffer.setOffset(bufferOffset);
        }

        return readString;
    },


    writeString: (
        buffer: SmartBuffer,
        value: string, offset?: number | null,
        nt: boolean = false
    ): void => {
        const length: number = value.length;
        const bufferOffset: number = offset ?? buffer.getOffset();

        for (let i: number = 0; i < length; i++) {
            WriteUtils.writeUInt8(buffer.getView(), bufferOffset + i, value.charCodeAt(i));
        }

        if (nt) {
            WriteUtils.writeUInt8(buffer.getView(), bufferOffset + length, 0);
        }

        if (isNull(offset)) {
            buffer.setOffset(bufferOffset + length + Number(nt));
        }
    },
}
