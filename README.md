# SE347-N12_DACK
How to use this project
### Start back-end server
1. [] You will have to have your own database and set it up as an env file which has this template
    NODE_ENV=development
    DATABASE_URI=mongodb+srv://<databaseusername>:<databasepassword>@cluster0.zczkilu.mongodb.net/<databasename>?retryWrites=true&w=majority
    ACCESS_TOKEN_SECRET=42835aa800882ca6385fa6776e268d4f1e048ca730232d368a28d39a7c873d635dd3c876f0aa3a0ec8e836c34fd2fda0fb0f573aa7afc6916b4994be075baea3
    REFRESH_TOKEN_SECRET=c6f88947e20b7735ce1330764e0fc680241b1a6dde441ff830c268840301bc0017328edf19ccc2d705a8e49b511b98d246af4daaebb6be97db8bdce6f08a8f5c

    And place it under the root folder which mean the cinema-be folder
2. [] You will first navigate into the backend directory, its name is cinema-be or more exactly directory is SE347-N12_DACK/cinema-be
3. [] Then you will have to install all the needed dependencies by using $npm i
4. [] Lastly, you have to run this command to start the server $npm run dev, if you have this message which mean you have done it "Server running on port 3500" and "Connected to MongoDB"

### Start front-end service
1. [] Open another terminal and navigate to cinema-fe folder.
2. [] Run this command to install all the needed dependencies
   "npm install" or "npm i"
3. [] After the installation completed, run this command to start front-end service
   "npm run dev"