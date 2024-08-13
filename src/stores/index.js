import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia

export * from './modules/categoryStore.js'
export * from './modules/userStore.js'
export * from './modules/cartStore.js'
