import UsersPage from "./ui/UsersPage";

const UsersRouter = () => {
    return <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/create" element={<CreateUserPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
};


export default UsersRouter;