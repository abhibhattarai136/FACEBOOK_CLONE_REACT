function SidebarRow({src, Icon, title }) {
    return (
        <div>
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed" 
                />
            )}
            {Icon && <Icon className="h-8 w-8 text-blue-500" />}
            <p className="hidden sm:inline-flx fontmedium"> 
            {title}</p>

        </div>

    )
}

export default SidebarRow