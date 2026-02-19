const prisma = require('../config/prisma');

exports.getAllUsers = async () => {
  return prisma.user.findMany();
};

exports.createUser = async (data) => {
  return prisma.user.create({ data });
};