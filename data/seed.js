const axios = require('axios');
const keys = require('../config/keys');
const SERVER = 'http://localhost:1337';

const products = [
  {
    "description": "Standard Law Student Membership",
    "category": "Membership",
    "amount": 0
  },
  {
    "description": "Premier Law Student Membership",
    "category": "Membership",
    "amount": 15
  },
  {
    "description": "Membership with Income Up to $30K",
    "category": "Membership",
    "amount": 40
  },
  {
    "description": "Membership with Income Up to $50K",
    "category": "Membership",
    "amount": 55
  },
  {
    "description": "Membership with Income Up to $75K",
    "category": "Membership",
    "amount": 80
  },
  {
    "description": "Membership with Income Up to $100K",
    "category": "Membership",
    "amount": 120
  },
  {
    "description": "Membership with Income Up to $150K",
    "category": "Membership",
    "amount": 150
  },
  {
    "description": "Membership with Income Over $150K",
    "category": "Membership",
    "amount": 175
  },
  {
    "description": "1-Year Sustaining Membership",
    "category": "Membership",
    "amount": 200
  },
  {
    "description": "2-Year Sustaining Membership",
    "category": "Membership",
    "amount": 300
  },
  {
    "description": "Career Fair Sponsorship",
    "category": "",
    "amount": 0
  },
  {
    "description": "CLE Archives Access",
    "category": "",
    "amount": 0
  },
  {
    "description": "Early-bird Ticket for Dinner Gala",
    "category": "Dinner Gala",
    "amount": 0
  },
  {
    "description": "Patron Ticket for Dinner Gala",
    "category": "Dinner Gala",
    "amount": 0
  },
  {
    "description": "Donation",
    "category": "",
    "amount": 0
  },
  {
    "description": "Law Notes Subscription",
    "category": "",
    "amount": 0
  },
  {
    "description": "Referral Service",
    "category": "",
    "amount": 0
  },
]

axios.post(`${SERVER}/auth/local`, {
  "identifier": keys.adminUser,
  "password": keys.adminPass
})
  .then(res => res.data)
  .then(({ jwt }) => {
    return axios({
      url: `${SERVER}/products/seed`,
      method: 'post',
      headers: {
        'Authorization': `Bearer ${jwt}`
      },
      data: products,
    })
  })
  .catch(err => console.log('ERR:', err));
