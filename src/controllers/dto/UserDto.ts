import { User } from '../../entities/User';
import {IsEmail,IsNotEmpty, Min, Max, Length, IsOptional} from "class-validator"

export class UserRequest {
    @IsNotEmpty()
    @Length(5,50)
    name: string
    
    @IsNotEmpty()
    @Length(5,60)
    @IsEmail()
    email:string
    
    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    user_type_id: string
}

export class UserUpdateRequest {
    id:string
    
    @IsOptional()
    @IsNotEmpty()
    @Length(5,50)
    name: string
    
    @IsOptional()
    @IsNotEmpty()
    @Length(5,60)
    @IsEmail()
    email:string

    @IsOptional()
    @IsNotEmpty()
    user_type_id:string

    @IsOptional()
    @IsNotEmpty()
    @Length(6,16)
    password: string
}
