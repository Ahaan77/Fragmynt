import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

const KEY ='gushfuhfhehfiheieh'

export default function(req: NextApiRequest, res: NextApiResponse){

  if(!req.body){
    res.statusCode= 404
    res.end('Error')
    return

  }
  
  const {email_id, username, password} = req.body
  res.json({
    token : jwt.sign({
      email_id,
      username,
      password
    },KEY)
    
  })
}