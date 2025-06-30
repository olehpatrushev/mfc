import {KeyboardLayout} from "../KeyboardLayout";

export class RussianKeyboardLayout extends KeyboardLayout {
    protected locale = 'ru';
    protected charsMappings = [
        {
            char: 'Й',
            rowIndex: 0,
            columnIndex: 0,
        },
        {
            char: 'Ц',
            rowIndex: 0,
            columnIndex: 1,
        },
        {
            char: 'У',
            rowIndex: 0,
            columnIndex: 2,
        },
        {
            char: 'К',
            rowIndex: 0,
            columnIndex: 3,
        },
        {
            char: 'Е',
            rowIndex: 0,
            columnIndex: 4,
        },
        {
            char: 'Н',
            rowIndex: 0,
            columnIndex: 5,
        },
        {
            char: 'Г',
            rowIndex: 0,
            columnIndex: 6,
        },
        {
            char: 'Ш',
            rowIndex: 0,
            columnIndex: 7,
        },
        {
            char: 'Щ',
            rowIndex: 0,
            columnIndex: 8,
        },
        {
            char: 'З',
            rowIndex: 0,
            columnIndex: 9,
        },
        {
            char: 'Х',
            rowIndex: 0,
            columnIndex: 10,
        },
        {
            specialChar: 'backspace',
            rowIndex: 0,
            columnIndex: 11,
        },


        {
            char: 'Ф',
            rowIndex: 1,
            columnIndex: 0,
        },
        {
            char: 'Ы',
            rowIndex: 1,
            columnIndex: 1,
        },
        {
            char: 'В',
            rowIndex: 1,
            columnIndex: 2,
        },
        {
            char: 'А',
            rowIndex: 1,
            columnIndex: 3,
        },
        {
            char: 'П',
            rowIndex: 1,
            columnIndex: 4,
        },
        {
            char: 'Р',
            rowIndex: 1,
            columnIndex: 5,
        },
        {
            char: 'О',
            rowIndex: 1,
            columnIndex: 6,
        },
        {
            char: 'Л',
            rowIndex: 1,
            columnIndex: 7,
        },
        {
            char: 'Д',
            rowIndex: 1,
            columnIndex: 8,
        },
        {
            char: 'Ж',
            rowIndex: 1,
            columnIndex: 9,
        },
        {
            char: 'Э',
            rowIndex: 1,
            columnIndex: 10,
        },
        {
            char: '!',
            rowIndex: 1,
            columnIndex: 11,
        },


        {
            specialChar: 'shift',
            rowIndex: 2,
            columnIndex: 0,
        },
        {
            char: 'Я',
            rowIndex: 2,
            columnIndex: 1,
        },
        {
            char: 'Ч',
            rowIndex: 2,
            columnIndex: 2,
        },
        {
            char: 'С',
            rowIndex: 2,
            columnIndex: 3,
        },
        {
            char: 'М',
            rowIndex: 2,
            columnIndex: 4,
        },
        {
            char: 'И',
            rowIndex: 2,
            columnIndex: 5,
        },
        {
            char: 'Т',
            rowIndex: 2,
            columnIndex: 6,
        },
        {
            char: 'Ь',
            rowIndex: 2,
            columnIndex: 7,
        },
        {
            char: 'Б',
            rowIndex: 2,
            columnIndex: 8,
        },
        {
            char: 'Ю',
            rowIndex: 2,
            columnIndex: 9,
        },
        {
            char: 'Ъ',
            rowIndex: 2,
            columnIndex: 10,
        },
        {
            char: '?',
            rowIndex: 2,
            columnIndex: 11,
        },


        {
            specialChar: '123',
            rowIndex: 3,
            columnIndex: 0,
        },
        {
            char: ',',
            rowIndex: 3,
            columnIndex: 1,
        },
        {
            specialChar: 'space',
            rowIndex: 3,
            columnIndex: 2,
            columnsCount: 8
        },
        {
            char: '.',
            rowIndex: 3,
            columnIndex: 10,
        },
        {
            specialChar: '123',
            rowIndex: 3,
            columnIndex: 11,
        },
    ];
}