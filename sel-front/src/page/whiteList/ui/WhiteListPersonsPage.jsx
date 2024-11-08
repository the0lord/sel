import React from 'react';
import Tw from 'shared/ui/dynamic/Tailwind/Tw';
import WhiteListPersons from 'features/whiteList/ui/WhiteListPersons';

const WhiteListPersonsPage = () => {
    return (
        <Tw cn="container">
            <h2>Белый лист санкционированные лица</h2>
            <Tw cn="mt-6 py-2 inline-block min-w-full overflow-x-auto sm:mx-0.5 lg:mx-0.5 sm:px-6 lg:px-8">
                <WhiteListPersons />
            </Tw>
        </Tw>
    );
};

export default WhiteListPersonsPage;
