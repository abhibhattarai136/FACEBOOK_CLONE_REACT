/*import {useSession} from "next-auth/client"; */
import {
    ChevronDownIcon,
    ShoppinggBagIcon,
    UserGroupIcon,
    }from "@heroicons/react/outline";
    import{
        CalenderIcon,
        ClockIcon,
        DesktopComputerIcon,
        UsersIcon,
    }   from "@heroicons/react/solid";

function Sidebar() {
    /*const [session, loading] = useSession(); */

    return <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">

        <SidebarRow Icon={UsersIcon} title="Friends" />
        <SidebarRow Icon={UsersIcon} title="Grups" />
        <SidebarRow Icon={UsersIcon} title="Marketplace" />
        <SidebarRow Icon={UsersIcon} title="Watch" />
        <SidebarRow Icon={UsersIcon} title="Events" />
        <SidebarRow Icon={UsersIcon} title="Memories" />
        <SidebarRow Icon={UsersIcon} title="See More" />
    </div>
}

export default Sidebar