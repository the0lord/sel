import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "shared/store/reducer/auth.reducer";
import PasswordField from "shared/ui/dynamic/Fields/PasswordField";
import TextField from "shared/ui/dynamic/Fields/TextField";

const LoginForm = () => {
    const methods = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector(({ auth }) => auth);

    const submit = (data) => {
        dispatch(loginThunk(data)).then(() => {
            navigate("/");
        });
    }
    return <form className="w-full" onSubmit={methods.handleSubmit(submit)}>
        <FormProvider {...methods}>
            <div className="mb-10 space-y-3">
                <TextField label="логин:" name="username" />
                <PasswordField label="пароль:" name="password" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </FormProvider>
    </form >
}

export default LoginForm;