import React from 'react';
import { FarmerStackList } from "features/farmerstack";
import Tw from "shared/ui/dynamic/Tailwind/Tw";

const FarmerStackPage = () => {
    return <Tw cn="container">
    <FarmerStackList />
</Tw>
};

export default FarmerStackPage;