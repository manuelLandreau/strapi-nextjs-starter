// next.config.js
const withSass = require('@zeit/next-sass');

module.exports = {
    ...withSass(),
    // eslint-disable-next-line no-unused-vars
    async exportPathMap(defaultPathMap) {
        return {
            '/': {page: '/'},
            '/blog': {page: '/blog'},
        };
    },
};
