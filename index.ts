import SmartBuffer from "./SmartBuffer/SmartBuffer";

function client(): any {
    const smartBuffer: SmartBuffer = new SmartBuffer();
    smartBuffer.writeUInt8(10);
    smartBuffer.writeStringNT("Hello");
    smartBuffer.writeFloat32(1099.99);
    console.log(smartBuffer.getView().buffer);
    return smartBuffer.getView().buffer;
}

function server(data: any): void {
    const smartBuffer: SmartBuffer = new SmartBuffer(data);
    console.log(smartBuffer.readUInt8());
    console.log(smartBuffer.readStringNT());
    console.log(smartBuffer.readFloat32());
}

let dataSent = client();
server(dataSent);
