# Real Time Chat - App


Simple chat Application created with Node.js Run time Enviroment, Web Sockets which uses socket.io library, and Express.

## Table of Contents

  - Feature
  - Installation 
  - Technologies
  - Screenshots
  
  ## Feature
  
    The real time chat application allows the users to interact with each other.  The communication is bi directional and 
    because these web sockets are always open and this allows the real time data flow. All the different clients
    have their own web sockets connection with the same common server. The thing to note here is that these communications 
    are taking place in real time and the client is not making any AJAX request to the server for the data. 
    
    The approach which this application posses can be seen below in the image:
    
   ![Alt text](/Screenshots/socket.png?raw=true "Working of Web Sockets")

  
  ## Installation 
  
    Real time chat App requires `Node.js` to run.
    
    Install the Dependencies and start the server.The below following dependencies were installed on the local
    environment using npm manager
    Thing to note here is that socket.io was imported at both the front end and the back end. We used npm manager to
    install the socket library at the server side and socket CDN was used at the client side.
    
    
  #### To install: 
  
   ```sh
    npm i nodemon --save-dev (only needed in the development environment )
    npm i express -save
    npm i socket.io --save ( At the server side )
    
   ```
   Place this CDN as the script tag on the front end: [Socket.io](https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.dev.js)
   #### Running the Development Server: 
   
   ```sh
    $ nodemon index
   ```
  
   ## Technologies 
   
   - The application was coded in the Visual Studio code IDE. 
   - The application was created using latest versions of Node.js(v10.15.3) and Express (4.17.1).
   - The application uses the socket.io library both at the front end and the back end
   - Acoording to the recent update with the application, it does not store the chat in any database as Database is not
     included in the current version of the application. So, if you refresh the web page, all the chat will be removed
   
   ## Screenshots
   
   - Broadcasting 'Typing ' Message to other clients who are connected on the same server with the application.
   ![Alt text](/Screenshots/Output_1.png?raw=true "Working of Web Sockets")
   
   - Three users chatting with each other connected to the same server
   ![Alt text](/Screenshots/Output_2.png?raw=true "Working of Web Sockets")
