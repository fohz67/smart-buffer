/**
 * @file StringUtils.ts
 * @version 1.0.0
 * @date 2024-06-06
 * @autor Fohz67
 */

import {SmartBuffer} from './SmartBuffer';
import {ReadUtils, WriteUtils} from './utils';

export const StringUtil: any = {
    readString: (buffer: SmartBuffer, length: number, offset?: number | null, isNt: boolean = false): string => {
        let position: number = offset ?? buffer.getOffset();
        const endPosition: number = position + length;
        let result: string = '';

        while (position < endPosition) {
            const charCode: number = ReadUtils.readUInt8(buffer.getView(), position);

            position++;
            if (isNt && charCode === 0) {
                break;
            }
            result += String.fromCharCode(charCode);
        }
        if (!offset) {
            buffer.setOffset(position);
        }
        return result;
    },

    writeString: (buffer: SmartBuffer, value: string, offset?: number | null, isNt: boolean = false): void => {
        const length: number = value.length;
        const position: number = offset ?? buffer.getOffset();
        let offsetNt: number = 0;

        for (let i: number = 0; i < length; i++) {
            let charCode: number = value.charCodeAt(i);
            WriteUtils.writeUInt8(buffer.getView(), position + i, charCode);
        }
        if (isNt) {
            WriteUtils.writeUInt8(buffer.getView(), position + length, 0);
            offsetNt = 1;
        }
        if (!offset) {
            buffer.setOffset(position + length + offsetNt);
        }
    }
}
