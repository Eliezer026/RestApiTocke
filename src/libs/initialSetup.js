import Role from "../models/Roles";

export const createroles = async () => {
  try {
    const foundRoles = await Role.find({ name: { $in: "admin" } });
    const roles = foundRoles.map((role) => role._id);

    if (roles) {
      console.log(roles);
      return;
    } else {
      const values = await Promise.all([
        new Role({ name: "user" }).save(),
        new Role({ name: "moderator" }).save(),
        new Role({ name: "admin" }).save(),
      ]);
      console.log(values);
    }
  } catch (error) {
    console.error(error);
  }
};
