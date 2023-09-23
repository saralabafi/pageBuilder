import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
interface IQueryKey {
  url: string
  page?: number
  pageSize?: number
  body?: string
  data?: string
}
const base_api = axios.create({
  baseURL: 'http://developgateway.dourtal.co/api/',
})

const GetData = async ({ queryKey }: QueryFunctionContext) => {
  const { url, page, pageSize } = queryKey?.[0] as IQueryKey

  const res = await base_api.get(url, { params: { page, pageSize } })

  return res.data
}

const UpdateData = async ({ queryKey }: QueryFunctionContext) => {
  const { url, body } = queryKey?.[0] as IQueryKey

  const res = await base_api.put(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.data
}

export const services = {
  GetData,
  UpdateData,
}
