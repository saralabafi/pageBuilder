import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
interface IQueryKey {
  url: string
  page?: number
  pageSize?: number
}
const base_api = axios.create({
  baseURL: 'http://gateway.dourtal.co/api/',
})

const GetData = async ({ queryKey }: QueryFunctionContext) => {
  const { url, page, pageSize } = queryKey?.[0] as IQueryKey

  const res = await base_api.get(url, { params: { page, pageSize } })

  return res.data
}

export const services = {
  GetData,
}
