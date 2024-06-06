export function Xcard ({children,userName, infoName, isFollowing, formatUserName}){
    console.log(isFollowing)
    const fotmattedUsername = formatUserName(infoName)
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar '
                alt="img avatar"
                src="https://i.etsystatic.com/35488746/r/il/0a125b/6016815799/il_794xN.6016815799_1cp5.jpg"/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>{fotmattedUsername}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Follow
                    
                </button>
            </aside>
        </article>        
    )

}