export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_API_KEY: string;
        }
    }
}
