import { Brand } from '../interfaces/brand';
import {Product } from '../interfaces/product';
import {axiosClient} from '../services/axiosClient'

const productAPI =  {
    getProductList: () => {
        return axiosClient.get<unknown, Product[]>("/products");
    },
    getProduct: (productID: string) => {
        return axiosClient.get<unknown, Product>(`/products/${productID}`)
    },
    getProductByBrands: (brand: string[]) => {
        return axiosClient.get<unknown, Product[]>(`/products/getByBrand?brands=${brand.map((item) => (item))}`)
    },
    getBrandList: () => {
        return axiosClient.get<unknown, Brand[]>("/brands");
    },
    getBrand: (brandID: string) => {
        return axiosClient.get<unknown, Brand>(`/brands/${brandID}`)
    }
}

export default productAPI