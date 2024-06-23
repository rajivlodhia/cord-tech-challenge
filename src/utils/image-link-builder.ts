/**
 * Function to build the MovieDB image link based on the path and size provided.
 *
 * @param path
 * @param size
 *
 * @returns {string} Returns the image link based on the path and size provided.
 */
export const buildImageLink = (path: string, size: "original" | "w500") => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
};
