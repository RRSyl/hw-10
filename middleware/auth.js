const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    const token = authHeader.split(' ')[1];
  
    if (token === 'your_secure_token') {
      next();
    } else {
      res.status(403).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authMiddleware;
  