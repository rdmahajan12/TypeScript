// enums - It used when you want to represents a set of related values and choose one value from multiple option.
// enum provides a convenient way to define a set of name values and associate them specific meanings.

// When enum constant are not explicitly assigned numeric values,
// they are automatically assigned incremental numeric values starting from 0.

enum Roles {
  user = "user",
  admin = "admin",
}

type User = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user = {
  name: "ritesh",
  email: "rdm123@gmail.com",
  password: "ritesh",
  role: Roles.admin,
};

const user2 = {
  name: "pritesh",
  email: "pdm123@gmail.com",
  password: "ritesh",
  role: Roles.user,
};

const isAdmin = (user: User) => {
  const { name, role } = user;
  return role === "admin" ? `${name} is a admin` : `${name} is not admin`;
};

console.log(isAdmin(user));
console.log(isAdmin(user2));
