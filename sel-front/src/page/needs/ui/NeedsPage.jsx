import { NeedsList } from "features/needs";
import Tw from "shared/ui/dynamic/Tailwind/Tw";

const NeedsPage = () => {
    return <Tw cn="container">
        <NeedsList />
    </Tw>
}

export default NeedsPage;