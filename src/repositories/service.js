import Users from "../dao/dbmanagers/users.js";
import Products from "../dao/dbmanagers/products.js";
import Carts from "../dao/dbmanagers/carts.js";
import Ticket from "../dao/dbmanagers/tickets.js";
import Message from "../dao/dbmanagers/messages.js";

import UserRepository from "./usersRepository";
import ProductsRepository from "./productsRepository.js";
import CartsRepository from "./cartsRepository.js";
import TicketsRepository from "./ticketsRepository.js";
import MessageRepository from "./messagesRepository.js";


const usersDao = new Users();
const productDao = new Products();
const cartDao = new Carts();
const ticketDao = new Ticket();
const messageDao = new Message();

export const userService = new UserRepository(usersDao);
export const productService = new ProductsRepository(productDao);
export const cartService = new CartsRepository(cartDao);
export const ticketService = new TicketsRepository(ticketDao);
export const messageService = new MessageRepository(messageDao);
