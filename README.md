## online-shop folder structure

```
├── client
│   ├── build
│   ├── public
|       ├── img
|       └── index.html
│   ├── src
|       ├── containers
|       |   ├── Accounts
|       |       ├── Admin
|       |           └── Login.js
|       |           └── Profile.js
|       |       ├── Moderator
|       |           └── Login.js
|       |           └── Register.js
|       |           └── Profile.js
|       |       ├── User
|       |           └── Login.js
|       |           └── Register.js
|       |           └── Profile.js
|       |   ├── App
|       |       ├── Router
|       |           ├── WrappedRouter
|       |               └──
|       |           └── index.js
|       |   ├── Dashboard
|       |       └──
|       ├── redux
|       |   ├── actions
|       |       └──
|       |   ├── reducers
|       |       └──
|       ├── css
|       |   ├── Accounts
|       |       └──
|       |   ├── Dashboard
|       |       └──
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
├── DBmodels
│   ├── Account
|       └──
│   ├── Dashboard
|       └──
├── public
├── routes
│   ├── AccountRoutes
|       └──
|   ├── AppRoutes
|       └──
│   ├── DashboardRoutes
|       └──
├── .gitignore
├── server.js
├── package.json
└── README.MD
```