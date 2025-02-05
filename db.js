const { prisma } = require("./common");

const createNewUser = async (email, firstName, lastName, password) => {
  const response = await prisma.User.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });
  return response;
};

const getUser = async (email) => {
  const response = prisma.user.findFirstOrThrow({
    where: {
      email,
    },
  });
  return response;
};

module.exports = { createNewUser, getUser };
