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
    export interface IOauthOptions {
        scope?: string,
        accessType?: string,
    }
    export interface IAccessTokenResponse {
        access_token: string
        expires_in: number,
        refresh_token: string
        token_type: string,
    }
    export interface IOauth {
        getAccessToken: (opts?: IOauthOptions) => Promise<IAccessTokenResponse>;
    }
}
