const isValidUrl = (urlString) => {
    const urlPattern = new RegExp('^[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$', 'i');
    return urlPattern.test(urlString);
};

export default isValidUrl;
