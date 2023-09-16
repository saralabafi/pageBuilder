import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
interface IQueryKey {
  url: string
  page?: number
  pageSize?: number
  body?: string
}
const base_api = axios.create({
  baseURL: 'http://gateway.dourtal.co/api/',
})

const GetData = async ({ queryKey }: QueryFunctionContext) => {
  const { url, page, pageSize } = queryKey?.[0] as IQueryKey

  const res = await base_api.get(url, { params: { page, pageSize } })

  return res.data
}

const UpdateData = async (data: any, id: string) => {
  const pageContent = { Widgets: data }
  const response = await base_api.put(`cms/v1.0/{site}/pages/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pageContent),
  })

  if (!response) {
    throw new Error('An error occurred while updating the data.')
  }
}

export const services = {
  GetData,
  UpdateData,
}
