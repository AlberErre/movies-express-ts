import { Movie } from "../models/model";

export function findMovieById(elementsToFind: Movie[], idToSearch: string): boolean {
    elementsToFind.find(element => {
        if (element.id === idToSearch) {
            return true;
        }
    });
    return false;
}
