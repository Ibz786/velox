// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Velox Maintenance 24/7'
        }
    },
    css: [
        '~/assets/scss/main.scss',
        '~/assets/fonts/FontAwesome.Pro.7.1.0/css/all.css'
    ],
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true }
});