import { SanctionsKyrgyzOrganization } from 'features/santions';
import React from 'react';
import Tw from 'shared/ui/dynamic/Tailwind/Tw';

const SanctionsKyrgyzOrganizationPage = () => {
    return <Tw cn="container">
        <h2>Санкционированные организации Кыргызстана</h2>
        <Tw cn="mt-6 py-2 inline-block min-w-full overflow-x-auto sm:mx-0.5 lg:mx-0.5 sm:px-6 lg:px-8">
            <SanctionsKyrgyzOrganization />
        </Tw>
    </Tw >;
};

export default SanctionsKyrgyzOrganizationPage;
