export class AuthenticatedUser {
    private _token: string;
    private _id: number;

    constructor(id: number, token: string) {
        this._id = id;
        this._token = token;
    }

    public static GetNewInstance(): AuthenticatedUser {
        return new AuthenticatedUser(null, null);
    }

    public static ParseFromObject(object): AuthenticatedUser {
        const model = AuthenticatedUser.GetNewInstance();

        if (object) {
            model.id = object.id;
            model.token = object.token;
        }

        return model;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }


}