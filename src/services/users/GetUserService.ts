import { getRepository } from "typeorm";
import { User } from "../../entities/User";

export class GetUserService{

    async execute(id){
        try{ 
            const repo = getRepository(User)   
            const user = await repo.findOne(id)
            delete user.password
            
            return {
                status: 200, 
                data: user
            }
        }catch{
            return {
                status: 400,
                message: 'External Error Server'
            }
        }
   }
}