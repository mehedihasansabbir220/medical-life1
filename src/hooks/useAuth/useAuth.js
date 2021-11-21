import React, { useContext } from 'react';
import { authContext } from '../ProvideAuth/ProvideAuth';

const useAuth = () => {
    return useContext(authContext);
};

export default useAuth;