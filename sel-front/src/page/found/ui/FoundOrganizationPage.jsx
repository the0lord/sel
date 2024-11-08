import React from 'react';
import Tw from 'shared/ui/dynamic/Tailwind/Tw';
import FoundOrganization from 'features/found/FoundOrganization';

const FoundOrganizationPage = () => {
    return (
        <Tw cn="container">
            <h2>Организации</h2>
            <Tw cn="mt-6 py-2 inline-block min-w-full overflow-x-auto sm:mx-0.5 lg:mx-0.5 sm:px-6 lg:px-8">
                <FoundOrganization />
            </Tw>
        </Tw>
    );
};

export default FoundOrganizationPage;
