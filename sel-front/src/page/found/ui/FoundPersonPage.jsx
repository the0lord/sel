import React from 'react';
import Tw from 'shared/ui/dynamic/Tailwind/Tw';
import FoundPerson from 'features/found/FoundPerson';

const FoundPersonPage = () => {
    return (
        <Tw cn="container">
            <h2>Люди</h2>
            <Tw cn="mt-6 py-2 inline-block min-w-full overflow-x-auto sm:mx-0.5 lg:mx-0.5 sm:px-6 lg:px-8">
                <FoundPerson />
            </Tw>
        </Tw>
    );
};

export default FoundPersonPage;
