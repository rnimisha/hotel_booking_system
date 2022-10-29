import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const createToken = (userID) => {
  return jwt.sign({ _id: userID }, `${process.env.TOKEN_SECRET}`)
}
