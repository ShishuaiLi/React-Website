A React.js website that supports live filtering.
----------------------------------------------------------------------------------
Instructions to deploy on static server::
1. After unzip, in your terminal, cd to the directory "react".
2. Make sure you have Node.js installed.
3. Run "npm install -g serve" if serve is not installed.
4. Run "serve -s build".
5. In your browser, go to http://localhost:5000/ to see the app live!

-----------------------------------------------------------------------------------
Q: How your interface relates to the user interface design
principles?
A: I designed my page to be aligned in the center with equal margin on both sides. I 
also used HTML table to present the data, so all the rows and columns are aligned to 
each other, which relates to the user interface design principles of being clear and
 organized. 

Q: How data is passed down through your components?
A: The raw data is hard-coded in the App.js as an Array of objects. This Array is passed 
down to component FilteredList's "props.items". In the FilteredList constructor, the data 
is cloned to another variable "state.copyItems", and is filtered and passed down to 
component List. Finally in List.jsx, the data is formated into HTML table. 

Q: How user interactions can trigger changes in the state of components?
A: When user clicks buttons or type in the search box, the corresponding event handler will
be called and run the "setState" to update the state's properties, and React will refresh 
the webpage for every "setState" call. Therefore the changes in the state of components 
are triggerd. 

Q: High-level goal of your application and why it might be valuable to a user?
A: The goal of my app is to ptovide user a produce data search interface that is responsive
and fast. By React, the search and filter functions can be implemented in responsive design.
It is valuable because it is fast and provides better user experience. 
