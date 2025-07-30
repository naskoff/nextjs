"use server";

import {signIn} from "@/auth";
import {LoginState} from "@/states/LoginState";
import {LoginSchema} from "@/schemas/LoginSchema";
import {isRedirectError} from "next/dist/client/components/redirect-error";

export async function SignInAction(prevState: LoginState, formData: FormData) {
    const credentials = {
        username: formData.get('username'),
        password: formData.get('password'),
    };

    try {
        const {username, password} = await LoginSchema.parseAsync(credentials);
        const res = await signIn('credentials', {username, password, redirect: false, redirectTo: '/dashboard'});
    } catch (e) {
        return {
            ...prevState,
            errors: {
                fields: {
                    // @ts-expect-error catch has many exception
                    username: e.message,
                },
                // @ts-expect-error catch has many exception
                message: e.message,
                // @ts-expect-error catch has many exception
                code: e.code,
            }
        }
    }

    return prevState;
}