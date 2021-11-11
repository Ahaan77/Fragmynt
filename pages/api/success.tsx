import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

const KEY ='hehfwhfehhefhef'

export default function(req: NextApiRequest, res: NextApiResponse){

  if(!req.body){
    res.statusCode= 404
    res.end('Error')
    return

  }
  
  const {email_id, password} = req.body
  res.json({
    token : jwt.sign({
      email_id,
      password
    },KEY)
    
  })
}