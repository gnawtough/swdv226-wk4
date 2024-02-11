class ProjectDisplay {
  constructor() {
      this.displayedList = []; // Holds project objects
      this.filterStatus = false;
      this.sortOrder = 1; // 1 for ascending, -1 for descending
  }

  updateDisplay(projects) {
      console.log('Updating project display...');
      this.displayedList = projects;
      displayProjects(projects); 
  }

  showProjectDetails(projectID) {
      let project = this.displayedList.find(project => project.projectID === projectID);
      if (project) {
          const detailsElement = document.getElementById('projectDetails');
          detailsElement.innerHTML = `
              <h2>${project.title}</h2>
              <p>${project.description}</p>
              <p>Category: ${project.category}</p>
              <p>Tags: ${project.tags.join(', ')}</p>
          `;
          detailsElement.style.display = 'block';
      }
  }

  sortProjects(order = 'asc') {
    console.log("Before sorting:", this.displayedList);
    this.displayedList.sort((a, b) => {
      let comparison = a.title.localeCompare(b.title);
      return order === 'asc' ? comparison : -comparison;
    });
    console.log("After sorting:", this.displayedList);
    displayProjects(this.displayedList); 
  }
}
