// next.config.js
const withSass = require('@zeit/next-sass');

module.exports = {
    ...withSass(),
    async exportPathMap(defaultPathMap) {
        return {
            '/': { page: '/' },
            '/blog': { page: '/blog' },
        };
    },
};
