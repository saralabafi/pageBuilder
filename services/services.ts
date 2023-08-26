import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
interface IQueryKey {
  url: string
  page?: number
}
const base_api = axios.create({
  baseURL: 'http://api.dourtal.co/api/v1.0/cms/default/',
})

const GetData = async ({ queryKey }: QueryFunctionContext) => {
  const { url } = queryKey?.[0] as IQueryKey

  const res = await base_api.get(url)

  return res.data
}

export const services = {
  GetData,
}
