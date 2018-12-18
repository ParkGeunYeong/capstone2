import axios from 'axios';

export const getUsers = () => axios.get('http://211.222.233.157:3000/api/Concert');

export const createReservation = ({ticket, newOwner}) => axios.post('http://211.222.233.157:3000/api/tradeTicket', {
    "$class": "org.example.ticket.tradeTicket",
    "ticket": ticket,
    "newOwner": newOwner
  }
).then( response => {console.log(response)}).catch(response => {console.log(response)});

export const getToken = ({id, pw}) => axios.post('https://18rxkurawi.execute-api.us-east-1.amazonaws.com/dev/login', {
    "UserId": id,
    "password": pw
}).catch(response => {console.log(response)});
