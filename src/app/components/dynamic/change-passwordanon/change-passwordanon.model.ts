export class ChangePasswordAnonModel {
    constructor(
        public requestId: number,
        public userId: number,
        public username: any,
        public password: string
    ) { }
}
