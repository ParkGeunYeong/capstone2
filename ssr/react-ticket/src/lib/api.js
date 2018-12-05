import axios from 'axios';
import { create } from 'domain';

export const getUsers = () => axios.get('http://211.222.233.157:3000/api/Concert');
export const createReservation = ({ticket, newOwner}) => axios.post('http://211.222.233.157:3000/api/tradeTicket', {
    "$class": "org.example.ticket.tradeTicket",
    "ticket": ticket,
    "newOwner": newOwner,
    "transactionId": "string",
    "timestamp": "2018-12-05T04:06:10.100Z"
  }
);