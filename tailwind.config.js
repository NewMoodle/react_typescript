module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                "admin-sidebar-full": `calc(100vh - 64px)`
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
