/project-root
├── /config
│ └── config.js # Configuration like JWT secret, DB connection, etc.
├── /controllers
│ └── authController.js # Handles login, registration
├── /middlewares
│ └── authMiddleware.js # JWT verification middleware
├── /routes
│ └── authRoutes.js # Routes for auth (login, register, etc.)
├── /utils
│ └── jwtUtils.js # Utility functions for generating/verifying JWT
├── /config/db.js # Mocked DB or real DB configuration
├── .env # Environment variables (for JWT secret, etc.)
├── server.js # Main entry point for the app
└── package.json # Project dependencies

Deployed API Url 
https://ecommerce-15xo.onrender.com