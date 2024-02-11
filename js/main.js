let projectDisplay; // Declaring display globally so it can be used globally

// Function to display projects on the webpage
function displayProjects(projects) {
    const projectListElement = document.getElementById('projectList');
    projectListElement.innerHTML = ''; // Clear the list
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML =
        `<h2>${project.title}</h2>
        <h4>Author: ${project.author}<h4>
        <em>Category: ${project.category}</em> 
        <p>Tags: ${project.tags}</p>
        <p>Description: ${project.description}</p>
        <hr />
        `;
        projectElement.addEventListener('click', () => projectDisplay.showProjectDetails(project.projectID));
        projectListElement.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    projectDisplay = new ProjectDisplay();
    
    const projects = [
        new Project(1, "Project 1", "This is a programming project that uses c++.", "programming", "c++", "Andrew"),
        new Project(2, "Project 2", "This is a programming project that uses java.", "programming", "java", "Pressident"),
        new Project(3, "Project 3", "This is a crafts project that uses gllue to hold things together.", "Crafts", "glue", "President"),
        new Project(4, "Project 4", "This is a crafts project that uses tape to hold things together.", "Crafts", "tape", "Andrew"),
    ];
    
    const users = [
        new User(1, "Andrew", "Andrew@example.com", "secret"),
        new User(2, "President", "president@example.com", "secret2"),
    ];

    projectDisplay.displayedList = projects;

    // Initially display all projects
    displayProjects(projects);

    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');

    loginButton.addEventListener('click', () => {
        var userInfo = loginLogout();
        loginName = userInfo[0];
        loginPassword = userInfo[1];
        console.log(`Username: ${loginName} Password: ${loginPassword}.`);

    });

    logoutButton.addEventListener('click', () => {
        var userInfo = loginLogout();
        loginName = userInfo[0];
        loginPassword = userInfo[1];
        console.log(`Username: ${loginName} Password: ${loginPassword}.`);

    });

    filterButton.addEventListener('click', () => {
        const filterCategoryValue = filterCategory.value.toLowerCase(); // Consider case-insensitive matching
        const filteredProjects = projects.filter(project => project.category.toLowerCase().includes(filterCategoryValue));
        displayProjects(filteredProjects);
    });

    // Sort by event listeners
    document.getElementById('sortAsc').addEventListener('click', () => projectDisplay.sortProjects('asc'));
    document.getElementById('sortDesc').addEventListener('click', () => projectDisplay.sortProjects('desc'));


    function loginLogout() {
        const userNameValue = document.getElementById("username").value; // variable holding the username field
        const passwordValue = document.getElementById("password").value; // holds password
        const user = users.find(user => user.username === userNameValue); // find user in list of users
        if (user) {
            if(user.loggedInStatus === false && user.username === userNameValue && user.password === passwordValue) {
                user.login();
                loginButton.style.display = 'none';
                logoutButton.style.display = 'inline';
                loggedInUser.innerHTML = userNameValue;
                return [userNameValue, passwordValue];
            } else if (user.loggedInStatus === true) {
                user.logout();
                logoutButton.style.display = 'none';
                loginButton.style.display = 'inline';
                loggedInUser.innerHTML = "Not Logged in";
                return [userNameValue, passwordValue];
            } else {
                console.log('Incorrect login info');
                return['null', 'null'];
            }
        } else {
            console.log('user not found');
            return ['null', 'null'];
        }
    }
});
module.exports = { displayProjects }; // Export for testing