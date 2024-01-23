import { createData } from '@/core/http-service/http-service';
import { SignIn } from '../_types/signin.types';
import { useMutation } from '@tanstack/react-query';

const signIn = (model: SignIn): Promise<void> => createData<SignIn, void>("/signin", model);

type useSignInOptions = {
    onSuccess?: () => void;
}

export const useSignIn = ({ onSuccess }: useSignInOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: signIn,
        onSuccess: onSuccess
    })

    return {
        submit,
        isPending
    }
}