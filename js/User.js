class User {
    constructor(userID, username, email, password) {
      this.userID = userID;
      this.username = username;
      this.email = email;
      this.password = password;
      this.loggedInStatus = false;
    }

    getUsername() {
      return this.username;
    }
  
    login() {
      this.loggedInStatus = true;
      console.log(`${this.username} has logged in.`);
    }
  
    logout() {
      this.loggedInStatus = false;
      console.log(`${this.username} has logged out.`);
    }
  
    selectFilteredCriteria() {
      console.log(`${this.username} selected criteria: ${criteria}`);
    }
  
    viewFilteredCriteria() {
      console.log(`${this.username} is viewing their selected filter criteria.`);
    }
  }
  