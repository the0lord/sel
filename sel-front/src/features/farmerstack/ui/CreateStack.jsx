import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { createStackThunk } from "shared/store/reducer/stacks.reducer";

const CreateStack = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        // dispatch(createStackThunk(data));
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Stack Name</label>
                    <input
                        {...register("name", { required: "Stack name is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="text"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Unit of Measure</label>
                    <input
                        {...register("unitOfMeasure", { required: "Unit of measure is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="text"
                    />
                    {errors.unitOfMeasure && <span className="text-red-500 text-sm">{errors.unitOfMeasure.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        {...register("amount", { required: "Amount is required", min: { value: 1, message: "Amount must be at least 1" } })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="number"
                    />
                    {errors.amount && <span className="text-red-500 text-sm">{errors.amount.message}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create Stack
                </button>
            </form>
        </div>
    );
};

export default CreateStack;
