export declare abstract class Session {
    static setToken: (token: string) => Promise<void>;
    static clear: () => Promise<void>;
}
