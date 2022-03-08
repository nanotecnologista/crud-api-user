import { GetUserService } from './../../services/users/GetUserService';
import { Request, Response } from "express";

export class GetUserController{
    async handle(request: Request, response: Response){
        const service = new GetUserService()
        const id = request.userId
        const result = await service.execute(id)

        return response.status(result.status).json(result)
    }
}