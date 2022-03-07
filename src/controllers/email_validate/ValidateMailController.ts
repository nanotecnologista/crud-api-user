import { Request, Response } from 'express'
import { ActivateMailService } from '../../services/email_validate/ValidateMailService'

export class ActivateMailController{
    async handle(request: Request, response: Response){
        const {email_token} = request.params
        
        const service = new ActivateMailService()

        const result = await service.execute({email_token})

        return response.status(result.status).json(result)
    }
}