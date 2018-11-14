export function bodyIsNotEmpty(body) {
    if (Object.keys(body).length == 0) {
        return false;
    }
    return true;
}
