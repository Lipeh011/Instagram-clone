import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://avatars.githubusercontent.com/u/4248081?v=4" />

                    <p>filipedeschamps</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://miro.medium.com/max/1400/1*mK0JCEC90hGkt4VI_so_EA.jpeg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>3456 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>filipedeschamps</span> Depois de passar o dia inteiro estudando trigonometria aplicada a programação. 
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <a className = "cor">Publicar</a>

                </div>
                
            </div>   
        </>
       
    )
    
}

export function Post2() {
    return (
        <>
            <header className="header-post">

                <div className="infos-post" >
                    <img className="img-header-post" src="https://t.ctcdn.com.br/n7eZ74KAcU3iYwnQ89-ul9txVxc=/400x400/smart/filters:format(webp)/i490769.jpeg" />

                    <p>elonmusk</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://t2.tudocdn.net/601886?w=1920"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>2,615,957 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>elonmusk</span> In progress.. 🚀
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 9 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <a className= "cor">Publicar</a>

                </div>
                
            </div>   
        </>
       
    )
    
}
export function Post3() {
    return (
        <>
            <header className="header-post">

                <div className="infos-post" >
                    <img className="img-header-post" src="data:image/jpeg;base64,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" />

                    <p>corinthians</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://pbs.twimg.com/media/FfNuL52WYAYa2IT.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>203.454 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>corinthians</span> O Corinthians enfrenta o Flamengo pelo jogo de volta da Copa do Brasil 2022 na quarta-feira, às 21h45 no Maracanã.

PRA CIMA, TIMÃO! <br></br>
<br></br>
#VaiCorinthians
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 13 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <a className = "cor">Publicar</a>

                </div>
                
            </div>   
        </>
       
    )
    
}

export function Post4() {
    return (
        <>
            <header className="header-post">

                <div className="infos-post" >
                    <img className="img-header-post" src="data:image/jpeg;base64,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" />

                    <p>rafaballerini</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://i.ibb.co/rfLYT4Z/Sem-t-tulo-1.png"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>9,118 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>rafaballerini</span> E já tem vídeo novo no canal fazendo unboxing de tudo o que recebi! 🖤link na bio
                        <br></br>
                        <br></br>
#programador #programadora #git #github #desenvolvedor #programação #desenvolvedora #ciênciadacomputação #githubstar
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 16 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <a className = "cor">Publicar</a>

                </div>
                
            </div>   
        </>
       
    )
    
}

export function Post5() {
    return (
        <>
            <header className="header-post">

                <div className="infos-post" >
                    <img className="img-header-post" src="https://futbol.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA4MzA1ODk5/cristiano-ronaldo-family-photo.png" />

                    <p>cristiano</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://pbs.twimg.com/media/FQFNigYXIBERaw1?format=jpg&name=4096x4096"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>5,615,957 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>cristiano</span> Starting the week with a good feeling!😉💪🏽
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 20 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <a className= "cor">Publicar</a>

                </div>
                
            </div>   
        </>
       
    )
    
}


export function Post6() {
    return (
        <>
            <header className="header-post">

                <div className="infos-post" >
                

                 
                </div>

            </header>

            <div className="img-post" >
                <img src="https://i.ibb.co/PFYS78K/Instagram-1.png"/>
            </div>


            
           
        </>
       
    )
    
}