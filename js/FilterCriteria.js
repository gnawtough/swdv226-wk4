class FilterCriteria {
    constructor(criteriaID, name, type) {
      this.criteriaID = criteriaID;
      this.name = name;
      this.type = type;
    }
  
    addCriteria() {
      this.criteria.push(criteria);
      console.log(`Added criteria: ${criteria.name}`);
    }
  
    removeCriteria() {
      this.criteria = this.criteria.filter(c => c.criteriaID !== criteriaID);
      console.log(`Removed criteria with ID: ${criteriaID}`);
    }
  
    validateCriteria() {
      console.log(`Validating criteria: ${criteria.name}`);
      return true;
    }
  }
  