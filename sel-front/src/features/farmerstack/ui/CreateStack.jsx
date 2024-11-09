import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductsThunk } from "shared/store/reducer/products.reducer";
import { fetchRegionsThunk } from "shared/store/reducer/region.reducer";
import { createStackThunk } from "shared/store/reducer/stack.reducer";
// import { createStackThunk } from "shared/store/reducer/stacks.reducer";

const CreateStack = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { products } = useSelector(({ products }) => products);
    const { regions } = useSelector(({ regions }) => regions);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsThunk({ pageSize: 10 ** 6, page: 1 }));
        dispatch(fetchRegionsThunk({ pageSize: 10 ** 6, page: 1 }))
    }, [])
    const navigate = useNavigate(); // Hook to navigate between pages

    const onSubmit = (data) => {
        if (data.product_id)
            data.product_id = +data.product_id
        if (data.region_id)
            data.region_id = +data.region_id
        dispatch(createStackThunk(data));
    };

    const handleBackClick = () => {
        navigate("/stack");
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <button
                onClick={handleBackClick}
                className="mb-4 px-4 py-2 bg-blue-800 text-white  rounded-lg hover:bg-blue-600"
            >
                Back to Farmer Stack
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Region</label>
                    <select
                        {...register("region_id", { required: "Region is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Select a region</option>
                        {regions?.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.name}
                            </option>
                        ))}
                    </select>
                    {errors.regionId && <span className="text-red-500 text-sm">{errors.regionId.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Product</label>
                    <select
                        {...register("product_id", { required: "Product is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Select a product</option>
                        {products?.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                    {errors.product_id && <span className="text-red-500 text-sm">{errors.product_id.message}</span>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
                    <input
                        {...register("delivery_date", { required: "Start date is required" })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="date"
                    />
                    {errors.delivery_date && <span className="text-red-500 text-sm">{errors.delivery_date.message}</span>}
                </div>



                <div>
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        {...register("quantity", { required: "Amount is required", min: { value: 1, message: "Amount must be at least 1" } })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        type="number"
                    />
                    {errors.quantity && <span className="text-red-500 text-sm">{errors.quantity.message}</span>}
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
