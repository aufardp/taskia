// File ini digunakan untuk mengurus business logic
// File ini digunakan untuk mengelola data seperti create, read, update, etc

class User {
  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };
    console.log(userData);
  }
}
