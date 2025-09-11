import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    return {
        base: mode === 'development' ? '/theatre_experiment/' : '',
        plugins: [react()],
        server: {
            port: 3000,
        },
    }
})
