export class SmartBuffer {
    private view: DataView;
    private offset: number;

    constructor(buffer: ArrayBuffer | DataView, offset: number = 0) {
        this.view = buffer instanceof DataView ? buffer : new DataView(buffer);
        this.offset = offset;
    }

    static fromSize(size: number): SmartBuffer {
        return new SmartBuffer(new ArrayBuffer(size));
    }
}
