export type AuthResult = AuthStateModel;

export interface AuthStateModel {
    token?: {
        access_token: string;
        refresh_token: string;
    };
    expires_at?: string;
    username?: string;
}
