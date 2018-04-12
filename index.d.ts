import { BrowserWindowConstructorOptions } from 'electron';
// This is the factory function which is exported via the assignment approach
declare function oauth2(oauthConfig: oauth2.IOauthConfig, windowParams: BrowserWindowConstructorOptions): oauth2.IOauth;
export = oauth2;
// This defines other type definitons
declare namespace oauth2 {
    export interface IOauthConfig {
        authorizationUrl: string,
        clientId: string,
        clientSecret: string,
        redirectUri?: string,
        tokenUrl: string,
        useBasicAuthorizationHeader: boolean,
    }
    export interface IAuthorizationCodeOptions {
        scope?: string,
        accessType?: string,
    }
    export interface IGetAccessTokenOptions extends IAuthorizationCodeOptions {
        additionalTokenRequestData?: any
    }
    export interface IAccessToken {
        access_token: string,
        expires_in: number,
        token_type: string,
    }
    export interface IAccessTokenWithRefreshToken extends IAccessToken {
        refresh_token: string,
    }
    export interface IOauth {
        getAccessToken: (opts?: IGetAccessTokenOptions) => Promise<IAccessTokenWithRefreshToken>;
        getAuthorizationCode: (opts?: IAuthorizationCodeOptions) => Promise<string>;
        refreshToken: (refreshToken: string) => Promise<IAccessToken>;
    }
}
