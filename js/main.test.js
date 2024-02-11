document.getElementById = jest.fn(id => {
    return {
      innerHTML: '',
      appendChild: jest.fn(),
    };
  });

  const Project = require('./Project.js')
  // Example test for displayProjects function
  describe('displayProjects', () => {
    test('it correctly adds project elements to the DOM', () => {
      // Mock projects array
      const projects = [
        new Project(1, "Project 1", "This is a programming project that uses c++.", "programming", "c++", "Andrew"),
        new Project(2, "Project 2", "This is a programming project that uses java.", "programming", "java", "Pressident"),
        new Project(3, "Project 3", "This is a crafts project that uses gllue to hold things together.", "Crafts", "glue", "President"),
        new Project(4, "Project 4", "This is a crafts project that uses tape to hold things together.", "Crafts", "tape", "Andrew"),
    ];
  
      
      displayProjects(projects);
  
      // Check if document.getElementById was called correctly
      expect(document.getElementById).toHaveBeenCalledWith('projectList');
  
    });
  });
  