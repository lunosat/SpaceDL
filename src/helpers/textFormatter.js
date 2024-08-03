const textFormatter = (text) => {
    const escapeChars = ['[', ']', '(', ')', '~', '`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!'];
    const escapedText = escapeChars.reduce((result, char) => result.replace(new RegExp(`\\${char}`, 'g'), `\\${char}`), text);

    return escapedText;
};

export default textFormatter