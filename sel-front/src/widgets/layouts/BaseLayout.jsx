import Header from "widgets/header/Header";
import Sidebar from "widgets/sidebar/Sidebar";

const BaseLayout = ({
    children
}) => {
    return <>
        <Sidebar >
            <Header >
                {children}
            </Header>
        </Sidebar>
    </>
}

export default BaseLayout;