import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '', //ADDED LINK FROM HOSTING https://nda17.github.io/YBS-spa/
	plugins: [react()],
	server: {
		open: 'http://localhost:5173/'
	}
})
