import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    register(dto: AuthDto): Promise<AuthDto>;
    login(dto: AuthDto): Promise<AuthDto>;
}
