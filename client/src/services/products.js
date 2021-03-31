import api from './apiConfig'

export const getProducts = async () => {
  try {
      const response = await api.get('/posts')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getProduct = async id => {
  try {
      const response = await api.get(`/posts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createProduct = async post => {
  try {
      const response = await api.post('/posts', post)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateProduct = async (id, post) => {
  try {
      const response = await api.put(`/posts/${id}`, post)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
  try {
      const response = await api.delete(`/posts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}