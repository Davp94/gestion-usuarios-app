interface LinkProps {
    rutaLink?: string;
    rutaImg?: string;
}
export function Link ({rutaLink, rutaImg}: LinkProps) {
    //LOGICA 
    const alt = "LOGO";

    //RETURN VISTA
    return (
        <>
            <a href={rutaLink} target="_blank">
                  <img src={rutaImg} className="logo react" alt={alt} />
            </a>
        </>
    )
}