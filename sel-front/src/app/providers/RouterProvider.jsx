import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from 'features/system/Loader';
import LoginPage from 'page/login/ui/Login';
import Router from 'page/router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'shared/store/reducer/auth.reducer';

function RouterProvider() {
    const { token } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setToken(localStorage.getItem("token")));
    }, [token])

    if (token || localStorage.getItem("token")) {
        return (
            <Suspense fallback={<Loader />}>
                <Router />
            </Suspense>
        );
    }

    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default RouterProvider;
