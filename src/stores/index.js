import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia

export * from './modules/category.js'
export * from './modules/user.js'
