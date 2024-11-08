import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProductThunk } from "shared/store/reducer/products.reducer";
// import { createProductThunk } from "shared/store/reducer/products.reducer";

const CreateProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(createProductThunk(data));
    };
    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate("/products")
        
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
             <button
                onClick={handleBackClick}
                className="mb-4 px-4 py-2 bg-blue-800 text-white  rounded-lg hover:bg-blue-600"
            >
                Back to Products
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        {...register("name", { required: "Product name is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="text"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Unit of Measure</label>
                    <input
                        {...register("measurement_unit", { required: "Unit of measure is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="text"
                    />
                    {errors.measurement_unit && <span className="text-red-500 text-sm">{errors.measurement_unit.message}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
