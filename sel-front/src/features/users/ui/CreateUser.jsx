import { useDispatch } from "react-redux";
import { createUserThunk } from "shared/store/reducer/users.reduder";

const CreateUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(createUserThunk(data));
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        {...register("username", { required: "Username is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="text"
                    />
                    {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="password"
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select
                        {...register("role", { required: "Role is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="farmer">Farmer</option>
                        <option value="manager">Manager</option>
                    </select>
                    {errors.role && <span className="text-red-500 text-sm">{errors.role.message}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create User
                </button>
            </form>
        </div>
    )
}

export default CreateUser;