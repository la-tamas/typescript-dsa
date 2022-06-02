interface IResponseProps {
    [keys: string]: number;
}

export function charCount1(str: string): object {
    const response: IResponseProps = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (/[a-zA-Z0-9]/.test(char)) {
            response[char] = ++response[char] || 1;
        }
    }
    return response;
}

export function charCount2(str: string): object {
    const response: IResponseProps = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (isAlphaNumeric(char)) {
            response[char] = ++response[char] || 1;
        }
    }
    return response;
}

export function isAlphaNumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    if (
        !(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)
    ) {
        return false;
    }
    return true;
}

