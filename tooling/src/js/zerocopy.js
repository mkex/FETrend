export default class ZeroCopy {
    constructor(sessionName) {
        this.sessionName = sessionName;
    }

    say() {
        return `[Zero-Copy] ${this.sessionName}`;
    }
}
