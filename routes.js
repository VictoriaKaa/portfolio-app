const routes = require('next-routes')

module.exports = routes()
// .add('about')
.add('test', '/test/:id')
// .add('blogEditor', '/new')

// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})