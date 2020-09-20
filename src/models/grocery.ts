import { v4 as uuid } from "uuid";

export class Grocery{

    private _id: string;

    private _name: string;

    public get id(): string{
        return this._id;
    }

    public get name(): string{
        return this._name;
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name
        };
    }

}