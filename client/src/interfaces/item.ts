import { Product } from "./product";

export interface Item extends Product{
    numberCount: number
    totalCount: number
}