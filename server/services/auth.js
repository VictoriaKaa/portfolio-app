const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = "http://localhost:3000"
// middleware
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true, // Default Value
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-gfgnub9u.eu.auth0.com/.well-known/jwks.json'
      }),
    audience: 'XD1WEOZmiIrdtdfrK3FnTdhKIVDOTMGE',
    issuer: 'https://dev-gfgnub9u.eu.auth0.com/',
    algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
    const user = req.user;
    // process.env.NAMESPACE
    if(user && (user[namespace + '/role'] === role) ) {
      next();
    } else {
      return res.status(401).send({title: 'Not authorized', detail: 'Not authorized to access'})
    }
}