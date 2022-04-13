import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import {sign} from "jsonwebtoken";
import { UserResponseInterface } from "./types/userResponse.interface";
import { LoginUserDto } from "./dto/loginUser.dto";
import {compare} from 'bcrypt';
import JWT_SECRET from "@app/JWT_SECRET";


@Injectable()

export class UserService{
    constructor(@InjectRepository(UserEntity)
    private readonly userRepository : Repository<UserEntity>){}

    async createUser(createUserDto : CreateUserDto) : Promise<UserEntity>{
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    return await this.userRepository.save(newUser);
    }

    generateJWT(user: UserEntity): string{
        return sign({
            id: user.id,
            username: user.username,
            email: user.email,
        }, JWT_SECRET);
    }

    buildUserResponse(user : UserEntity): UserResponseInterface {
        return {
            user: {
                ...user,
                token: this.generateJWT(user), 
            }
        }
    }

    findById(id : number) : Promise<UserEntity> {
        return this.userRepository.findOne(id);
    }

    async login(loginUserDto : LoginUserDto) : Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            email: loginUserDto.email
        }, {select: ['id', 'username', 'email', 'status', 'password', 'image' ]})

        if(!user){
            throw new HttpException('Credentials are not valid', HttpStatus.UNPROCESSABLE_ENTITY,);
        }

        const isPasswordCorrect = await compare(
            loginUserDto.password, user.password
        );

        if(!isPasswordCorrect){
            throw new HttpException('Credentials are not valid', HttpStatus.UNPROCESSABLE_ENTITY,);
        }

        delete(user.password);

        return user;

    }
};