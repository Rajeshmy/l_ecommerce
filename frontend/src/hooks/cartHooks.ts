
import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { Product } from '../types/Product'



export const useAddToCartQuery = (slug?:string) =>
useQuery({
  queryKey: ['cart'],
  queryFn: async () => (await apiClient.post<Product>(`api/addtocart/:${slug}`)).data,
  enabled:false
});