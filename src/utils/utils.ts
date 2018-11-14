export function findMovieById(elementsToFind: any[], idToSearch: string): boolean {
    elementsToFind.find(element => {
        if (element.id === idToSearch) {
            return true;
        }
    });
    return false;
}
