import supertest from "supertest";
const request = supertest('https://gorest.co.in/public/v2/');

const TOKEN = '8fa2097b1ddaf3870c61a0e1e2f52498eec94e992ef807031eab05db7a490b17';
describe('Users',()=>{
          it('GET/users',()=>{
                    request.get(`users?access-token=${TOKEN}`).end((err,res) => {
                              console.log(res.body);
                              console.log(err);

                    })
                    }
          )
});