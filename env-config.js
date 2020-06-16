const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.BASE_URL': prod ? 'https://aqwrquweoiruqwoeiruoqr.com' : 'http://localhost:3000',
    'process.env.NAMESPACE':  prod ? 'https://aqwrquweoiruqwoeiruoqr.com' : 'http://localhost:3000',
    'process.env.CLIENT_ID': 'XD1WEOZmiIrdtdfrK3FnTdhKIVDOTMGE',
}