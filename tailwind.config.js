module.exports = {
    mode: "jit",
    purge: ["./src/**/*.njk"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "brand-blue": "blue",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
