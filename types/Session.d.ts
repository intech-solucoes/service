export declare abstract class Session {
    static setToken: (token: string, setAdmin?: boolean) => Promise<void>;
    static clear: () => Promise<void>;
}
