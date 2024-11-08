import SanctionsUnIndividuals from 'features/santions/ui/SanctionsUnIndividuals';
import React from 'react';
import Tw from 'shared/ui/dynamic/Tailwind/Tw';

const SanctionsUnIndividualsPage = () => {
    return <Tw cn="container">
        <h2>Санкционированные лица ООН</h2>
        <Tw cn="mt-6 py-2 inline-block min-w-full overflow-x-auto sm:mx-0.5 lg:mx-0.5 sm:px-6 lg:px-8">
            <SanctionsUnIndividuals />
        </Tw>
    </Tw >;
};

export default SanctionsUnIndividualsPage;
