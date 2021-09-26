import ApiService from './api.service'

const ProductService = {
  fetchProducts() {
    return ApiService.get('/api/products')
  },
  fetchColors() {
    return ApiService.get('/api/colors')
  }
}

export default ProductService
