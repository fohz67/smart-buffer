"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtil = void 0;
const utils_1 = require("./utils");
exports.StringUtil = {
    readString: (buffer, offset, nt = false) => {
        const length = buffer.getLength();
        let bufferOffset = offset !== null && offset !== void 0 ? offset : buffer.getOffset();
        let readString = "";
        for (; bufferOffset < length; bufferOffset++) {
            const charCode = utils_1.ReadUtils.readUInt8(buffer.getView(), bufferOffset);
            if (nt && !charCode)
                break;
            readString += String.fromCharCode(charCode);
        }
        if ((0, utils_1.isNull)(offset)) {
            buffer.setOffset(bufferOffset);
        }
        return readString;
    },
    writeString: (buffer, value, offset, nt = false) => {
        const length = value.length;
        const bufferOffset = offset !== null && offset !== void 0 ? offset : buffer.getOffset();
        for (let i = 0; i < length; i++) {
            utils_1.WriteUtils.writeUInt8(buffer.getView(), bufferOffset + i, value.charCodeAt(i));
        }
        if (nt) {
            utils_1.WriteUtils.writeUInt8(buffer.getView(), bufferOffset + length, 0);
        }
        if ((0, utils_1.isNull)(offset)) {
            buffer.setOffset(bufferOffset + length + Number(nt));
        }
    },
};
