import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";



export const queryClient = new QueryClient({

    queryCache: new QueryCache({
        onError: (error) => {
            // Show Notification
        }
    }),

    mutationCache:new MutationCache({
        onError:(error)=>{
            // Show Notification
        }
    }),

    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            throwOnError: false,
            gcTime: 1000 * 60 * 60 * 24
        }
    }
})