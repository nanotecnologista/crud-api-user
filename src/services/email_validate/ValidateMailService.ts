import {getRepository} from "typeorm"
import { User } from "../../entities/User"
import jwt from 'jsonwebtoken'
import { TokenPayloadEmail } from "../../middlewares/intefaces/TokenInterface"


export class ActivateMailService {
    
    async execute({email_token}): Promise<{}>{
        
        try{
        
            const data = jwt.verify(email_token, process.env.JWT_SECRET_KEY)
            
            const {email} = data as TokenPayloadEmail

            
            //verificando se o user existe
            const repo = getRepository(User)
            const user = await repo.findOne({email})
            
            if (!user.email){
                return {
                    status:404,
                    message: "Email not found"
                }
            }

            user.is_validated = true
            await repo.save(user)

            return{
                status:200,
                message: "Activate",
                data: user.is_validated
            }

        } catch{
            return {
                status: 400,
                message: "Error"
            }
        }
    }

}
