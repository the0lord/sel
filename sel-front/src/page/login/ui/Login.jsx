import { LoginForm } from "features/auth/login";
import Tw from "shared/ui/dynamic/Tailwind/Tw";

const LoginPage = () => {
    return <Tw cn="container">
        <Tw cn="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <Tw cn="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-full md:max-w-sm">
                <Tw component={<p></p>} cn="text-2xl font-bold text-center mb-4 dark:text-gray-200">Login</Tw>
                <LoginForm />
            </Tw>
        </Tw>
    </Tw>
}

export default LoginPage;