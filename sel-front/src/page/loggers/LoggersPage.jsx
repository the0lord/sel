import React from 'react';
import PersonsList from 'features/whiteList/ui/WhiteListPersons';
import Tw from 'shared/ui/dynamic/Tailwind/Tw';

const LoggersPage = () => {
  return (
    <Tw cn="container">
      <h2>Persons List</h2>
      <Tw cn="mt-6 py-2 inline-block min-w-full overflow-x-auto sm:mx-0.5 lg:mx-0.5 sm:px-6 lg:px-8">
        <PersonsList/>
      </Tw>
    </Tw>
  );
};

export default LoggersPage;
