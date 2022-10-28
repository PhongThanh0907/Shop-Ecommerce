import { Brand } from '../interfaces/brand';
import {Product } from '../interfaces/product';
import {axiosClient} from '../services/axiosClient'
const productAPI =  {
    getProduct: (productID: string | undefined) => {
        return axiosClient.get<unknown, Product>(`/products/${productID}`)
    },
    getProductList: () => {
        return axiosClient.get<unknown, Product[]>("/products/")
    },
    getProductByType: (searchValue: string | undefined ,brand: string[] | undefined, min:number | undefined, max: number | undefined, sort: string | undefined) => {
        return axiosClient.get<unknown, Product[]>(`/products/?searchValue=${searchValue}&brands=${brand?.map((item) => (item))}&min=${min || 0}&max=${max || 1000000000}&sort=${sort || ""}`)
    },
    getBrandList: () => {
        return axiosClient.get<unknown, Brand[]>("/brands");
    },
    getBrand: (brandID: string | undefined) => {
        return axiosClient.get<unknown, Brand>(`/brands/${brandID}`)
    }
}

export default productAPI