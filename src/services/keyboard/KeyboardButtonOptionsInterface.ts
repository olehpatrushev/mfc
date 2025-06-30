import {Vector3} from "@babylonjs/core";

export interface KeyboardButtonOptionsInterface {
    position?: Vector3,
    rowIndex: number,
    rowsCount?: number,
    columnIndex: number,
    columnsCount?: number,
    char?: string,
    specialChar?: string
}