class Project {
    constructor(projectID, title, description, category, tags, author) {
      this.projectID = projectID;
      this.title = title;
      this.description = description;
      this.category = category;
      this.tags = tags.split(',');
      this.author = author;
    }
  
    getProjectDetails() {
      return {
        projectID: this.projectID,
        title: this.title,
        description: this.description,
        category: this.category,
        tags: this.tags,
        author: this.author,
      };
    }
  
    filterByCategory(category) {
      // Check if project's category matches the given category
      return this.category === category;
    }
  
    filterByTag(tag) {
      // Check if project's tags include the given tag
      return this.tags.includes(tag);
    }
  }
  module.exports = Project;