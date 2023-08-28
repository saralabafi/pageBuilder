import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
interface IQueryKey {
  url: string
  page?: number
}
const base_api = axios.create({
  baseURL: 'https://gateway.dourtal.co/api/',
})

const GetData = async ({ queryKey }: QueryFunctionContext) => {
  const { url } = queryKey?.[0] as IQueryKey

  const res = await base_api.get(url)

  return res.data
}

export const services = {
  GetData,
}
