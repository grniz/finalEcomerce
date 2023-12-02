import { ticketsModel } from "../models/ticket.model.js"

export class Tickets{
    async getTickets(){
        return await ticketsModel.find({})
    }

   async getTicketById(tid){
        return ticketsModel.findById(tid)
    }

   async saveTicket(ticket){
       return await ticketsModel.create(ticket)
   }
}