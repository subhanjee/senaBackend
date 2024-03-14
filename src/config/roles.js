const allRoles = {
  user: ['manageUsers', 'contactUs', 'blog', 'payment', 'course', 'accommodation'],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
