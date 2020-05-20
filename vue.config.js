module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_var.scss";`
            }
        }
    }
};