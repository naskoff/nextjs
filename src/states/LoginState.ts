export interface LoginState {
    fields?: {
        [key: string]: string;
    }
    errors?: {
        fields?: {
            [key: string]: string;
        };
        message?: string;
        code?: string;
    }
}