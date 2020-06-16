const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.BASE_URL': prod ? 'https://victoria-klimova-portfolio.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE':  'https://victoria-klimova-portfolio.herokuapp.com',
    'process.env.CLIENT_ID': 'XD1WEOZmiIrdtdfrK3FnTdhKIVDOTMGE',
}