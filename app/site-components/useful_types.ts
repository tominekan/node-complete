/**
 * Useful types that I should be using over multiple files
 */

export type Product = {
    name: string,
    price: number,
    description: string
};

export type Store = Array<Product>;