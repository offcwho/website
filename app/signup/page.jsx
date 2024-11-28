'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormSignUp from "./components/FormSignUp";
const queryClient = new QueryClient()

export default function SignUp(){
    return(
        <QueryClientProvider client={queryClient}>
            <FormSignUp />
        </QueryClientProvider>
        
    )
}