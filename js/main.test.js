document.getElementById = jest.fn(id => {
    return {
      innerHTML: '',
      appendChild: jest.fn(),
    };
  });

  // Example test for displayProjects function
  describe('displayProjects', () => {
    test('it correctly adds project elements to the DOM', () => {
      // Mock projects array
      const projects = [
        { projectID: 1, title: "Project 1", description: "This is a programming project that uses c++.", category: "programming", tags: "c++", author: "Andrew" },
        { projectID: 2, title: "Project 2", description: "This is a programming project that uses java.", category: "programming", tags: "java", author: "President" },
        { projectID: 3, title: "Project 3", description: "This is a crafts project that uses gllue to hold things together.", category: "crafts", tags: "glue", author: "President" }
    ];
  
      
      displayProjects(projects);
  
      // Check if document.getElementById was called correctly
      expect(document.getElementById).toHaveBeenCalledWith('projectList');
  
    });
  });
  