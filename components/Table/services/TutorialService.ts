import http from './http-common'

const getAll = (params: any | undefined) => {
  debugger
  return http.get('/tutorials', { params })
}

const get = (id: any) => {
  return http.get(`/tutorials/${id}`)
}

const create = (data: any) => {
  return http.post('/tutorials', data)
}

const update = (id: any, data: any) => {
  return http.put(`/tutorials/${id}`, data)
}

const remove = (id: any) => {
  return http.delete(`/tutorials/${id}`)
}

const removeAll = () => {
  return http.delete(`/tutorials`)
}

const findByTitle = (title: any) => {
  return http.get(`/tutorials?title=${title}`)
}

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
}

export default TutorialService
