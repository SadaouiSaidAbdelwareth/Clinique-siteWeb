const ButtonUi = (name: string, link: string) => {  
    return (
        <div className="hidden md:flex ">
            <a
                href={link}
                className="px-5 py-2 rounded text-white font-semibold shadow hover:opacity-90 transition"
                style={{ backgroundColor: "var(--color-bg-secondary)" }}        
            >
                {name}
            </a>
        </div>
    );
};

export default ButtonUi;