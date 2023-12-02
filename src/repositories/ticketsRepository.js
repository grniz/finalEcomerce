export default class ticketsRepository{
    constructor(dao) {
        this.dao = dao;
    };
    getTickets = () => {
        return this.dao.getTickets();
    };
    getTicketById = (tid) => {
        return this.dao.getTicketById(tid);
    };
    saveTicket = (ticket) => {
        return this.dao.saveTicket(ticket);
    };
}