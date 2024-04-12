export interface AuthenticatedRequest extends Request {
    user?: {
        id?: number;
        name: string;
        email: string;
        password: string;
        rol?: string;
    };
}