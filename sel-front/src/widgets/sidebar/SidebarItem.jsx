import { Link } from "react-router-dom";

const SidebarItem = ({ item, location , open}) => {
    return (
        <Link to={item.link} role="button" tabIndex="0" className={`text-gray-800 flex items-center ${!open && 'max-w-min'}  p-3 rounded-lg text-start leading-tight transition-all ${location === item.link ? 'bg-blue-50 text-blue-900' : 'hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900'} outline-none`}>
            <div className="grid place-items-center mr-4">
                 {item.icon}
            </div>
            {open && item.label}
            {item.badge && (
                <div className="grid place-items-center ml-auto justify-self-end">
                    <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full" style={{ opacity: 1 }}>
                        <span className="">{item.badge}</span>
                    </div>
                </div>
            )}
        </Link>
    )
}

export default SidebarItem;


