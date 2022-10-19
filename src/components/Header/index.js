import { AiOutlineSearch, } from 'react-icons/ai'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { ReactComponent as Home } from '../Header/SVG/home.svg'
import { ReactComponent as Direct } from '../Header/SVG/direct.svg'
import { ReactComponent as Pub } from '../Header/SVG/pub.svg'
import { ReactComponent as Seta } from '../Header/SVG/seta.svg'



import './style.css'

export function Header() {

    return (
        <header className="header" >

            <div className="container" >

                <img className="logo" src="https://blackhillsballoons.com/wp-content/uploads/2021/01/Instagram-Logo.png"/>

                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#B8BDDB' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    
                    <input placeholder="Pesquisar" />
                </div>

                <div className="menu-icons" >
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                        <Home/>
                        </div>
                        <div>
                            <Direct/>
                        </div>
                             
                        <div>
                            <Pub/>
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <FiHeart />
                        </div>
                        

                    </IconContext.Provider>
                    <img className="img-user" src="https://avatars.githubusercontent.com/u/110691973?v=4" />
                </div>

            </div>

        </header>
    )

}