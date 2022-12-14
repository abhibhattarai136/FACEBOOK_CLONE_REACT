import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
  } from "@heroicons/react/solid";
  import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline";   

import HeaderIcon from "./Headericon";
/*import {signout, useSession} from "next-auth/client" */

function Header() {
    /*const {session} = useSession(); */
    
    return (
        <div className="sticky top-0 z-50 bg-white flex
        items-center p-2 lg:px-5 shadow-md"> {/* makes the header icons align with the left header component and all the lines */ }
            {/* Left */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" /> 
                    <input 
                        className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none
                        placeholder-gray-500 flex-shrink" 
                        type="text" 
                        placeholder="Search Facebook" />

                        {/* hidden md:inline-flex---- makes the left side search bar responsive after we minimize the page to half */}
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">   
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} /> {/* making only home icon active */}
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>


            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/*Profile pic
                <Image
                    onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"    
                />
                */}

                <p className="whitespace-nowrap font-semibold pr-3">Abhi Bhattarai</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
        
            </div>
        </div>
    );
}

export default Header;
