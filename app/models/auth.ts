export class Auth {
    private static readonly KEY_TOKEN = 'auth_token';
    private static readonly KEY_REFRESH_TOKEN = 'auth_refresh_token';
    private static readonly KEY_EXPIRES_AT = 'auth_expires_at';

    public static get token(): string {
        return localStorage.getItem(Auth.KEY_TOKEN);
    }

    public static get refreshToken(): string {
        return localStorage.getItem(Auth.KEY_REFRESH_TOKEN);
    }

    public static get expiresAt(): string {
        return localStorage.getItem(Auth.KEY_EXPIRES_AT);
    }

    public static set data(data: any) {
        localStorage.setItem(Auth.KEY_TOKEN, data.token);
        localStorage.setItem(Auth.KEY_REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem(Auth.KEY_EXPIRES_AT, data.expires_at);
    }
}