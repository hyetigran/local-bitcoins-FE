# LOCAL BITCOIN

`Link to React application - https://local-bitcoins.netlify.app`

#Table of Content

- Front-End Dependencies
- react
- react router
- dotenv
- redux
- redux logger
- redux thunk
- antd
- socket.io client
- axios
- moment
- node-sass

## Guidelines to setup

### Prerequisites

- NPM should be installed: `NPM version > 6.8.5`
- NODE should be installed: `NODE LTS version > 10.12.8`
- MySQL should be installed: `MYSQL version > 8.0.10`

### Steps

1. Create a `.env` file and the format should be as given in `.env.example`.
2. Run these commands then -

   ```
   npm run installDep (To install all the dependencies)

   npm run auditDep (Run this to audit fix all the vulnerabilities)
   ```

3. Run `databaseConfig.sql` file in the mysql client
   ```
   source <file path>/databaseConfig.sql
   ```
4. Start the servers
   `Option 1 (for running both the servers simultaneously): npm run dev Option 2 (for running both the servers individually): npm run server (for backend server only) npm run client (for frontend server only)`
   _NOTE: Might take sometime to start as there will be 2 servers running._

## DEMO

#### IMAGES

<img src="/demo/images/1.png" width=340px /><img src="/demo/images/5.png" width=340px />
<img src="/demo/images/3.png" width=340px /><img src="/demo/images/10.png" width=340px />
<img src="/demo/images/7.png" width=340px /><img src="/demo/images/9.png" width=340px />
