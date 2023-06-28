const { notificationTicket } = require("../models/index");
const { Op } = require("sequelize");
class TicketRepository {
  async getAll() {
    try {
      const tickets = await notificationTicket.findAll();
      return tickets;
    } catch (error) {
      throw { error };
    }
  }

  async create(data) {
    try {
      const ticket = await notificationTicket.create(data);
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async get(filter) {
    try {
      const ticket = await notificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: newData(),
          },
        },
      });
      return ticket;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketRepository;
