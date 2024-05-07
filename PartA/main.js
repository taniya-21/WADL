// Function to display the registration form
function displayRegistrationForm() {
  document.getElementById("registrationForm").innerHTML = `
    <h2>Registration Form</h2>
    <form id="registrationForm">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" required>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" required>
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" class="form-control" id="phone" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}

// Display the registration form initially
displayRegistrationForm();

// Event listener for the registration form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Extracting form values
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const phone = document.getElementById("phone").value;

  // Data object to be stored
  const newUser = {
    email,
    username,
    password,
    name,
    city,
    phone
  };

  // Store data in local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Display the user list section
  document.getElementById("userListSection").style.display = "block";
  // Hide the registration form
  document.getElementById("registrationForm").innerHTML = "";
});

// Event listener for the "Show User List" button to toggle user list visibility
document.getElementById("showUserListBtn").addEventListener("click", function() {
  // Retrieve users from local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userListTable = document.getElementById("userListTable");
  userListTable.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Sr No</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">City</th>
      </tr>
    </thead>
    <tbody>
      ${users.map((user, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.city}</td>
        </tr>
      `).join("")}
    </tbody>
  `;
});
