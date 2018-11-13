function bodyIsNotEmpty(body) {
    if (
        (body !== null) |
        (body !== undefined) |
        (Object.keys(body).length > 0)
    ) {
        return true;
    } else {
        return false;
    }
}

module.exports = bodyIsNotEmpty;