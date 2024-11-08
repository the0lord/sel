import GoBackBtn from "shared/ui/static/goBackBtn";

const ModuleLayout = ({ children }) => {

    return <div className="container">
        <div className="pb-2">
            <GoBackBtn />
        </div>
        {children}
    </div>
}

export default ModuleLayout;