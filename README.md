### Music Academy

I have built a comprehensive landing page using Accertinity UI. This modern UI framework ensures that the page is visually appealing and highly responsive. The design incorporates cool animations that make the user experience more engaging and interactive. 

Additionally, the smooth transitions and intuitive layout help visitors navigate effortlessly through the content. Key features of the landing page include:

- **Dynamic Animations**: Eye-catching animations that enhance visual appeal and retain user attention.
- **Responsive Design**: Seamless performance across all devices, ensuring an optimal experience whether on a desktop, tablet, or smartphone.
- **User-Friendly Interface**: A clean and intuitive layout that guides users effortlessly through the information.
- **Fast Load Times**: Optimized for quick loading, ensuring users can access the content without delay.

This landing page serves as an inviting introduction to the Music Academy, highlighting its offerings and encouraging potential students to explore further.


# Project Title

Trello-Style Task Management Application

A web-based task management application similar to Trello, specifically designed for desktop use and not optimized for mobile, here are some of the most effective options available:
## Features

1. User Authentication:
    - Implemented signup and login functionality using email and password
    - Ensured secure password storage and user session management like after two hour user will logout automatically
2. Task Board:
    - Upon logging in, users can see their personal task board
    - The board have four columns: "To-Do", "In Progress", “Under Review” and "Completed"
    - If user do not have task so message will be there. please create a task
3. Task Management:
    - Users can create new tasks in any column
    - Each task have
        - A title (mandatory)
        - A description (not mandatory to fill)
        - Status (mandatory)
            - Automatically fill if card created from buttons in specific section
        - Priority (not mandatory)
            - Values for priority - Low, Medium, Urgent
        - Deadline (not mandatory
    - Users can edit and delete tasks after creation. you need click on the task which you just created
4. Drag and Drop Functionality:
    - Implement drag and drop feature to move tasks between columns
    - The task's status should update automatically when moved to a different column


## Tech Stack

**Client:** Nextjs, Redux, TailwindCSS, axios ,react-beautiful-dnd

**Server:** Node, Express


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`

`JWT_SECRET`

`PORT`

`JWT_EXPIRES_IN`

`CORE_ORIGIN`


## Installation

Clone the repositary, once it is done then you need to go to server folder and do Installation. In same way you need to do for client side

```bash
  cd server
  npm Install

  cd client 
  npm Install
```
    
## Demo


<iframe src="https://player.vimeo.com/video/991755972?h=7cf3858b74" width="640" height="360" frameborder="0" allowfullscreen></iframe>

follow for more
