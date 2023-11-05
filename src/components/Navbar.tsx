import React, { useState, useEffect, useRef } from 'react';
import { IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import logo_dacompsi from "../assets/images/dacompsi_logo_branca.png";
import '../assets/css/menu.css';
import home_draw from "../assets/images/home_draw.svg";
import SessionDisplay from './SessionDisplay';
import { useAuth } from '../utils/useAuth';

const RAZAO_LOGO = 0.565;
const LOGO_HEIGHT = 150;

export const Navbar = () => {

		const auth = useAuth()

    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const updateSidePanelTop = () => {
            const sidePanel = document.querySelector('.side-panel-container');
            if (navbarRef.current && sidePanel) {
                const navbarBottomY = navbarRef.current.getBoundingClientRect().bottom;
                sidePanel.style.top = `${navbarBottomY}px`
            }
        };
    
        if (isSidePanelOpen) {
            updateSidePanelTop();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClosePanel = (e: any) => {
            if (e.target.closest('.side-panel') || e.target.closest('.hamburger')) {
                return;
            }
            setIsSidePanelOpen(false);
        };
    
        // Attach event listeners
        window.addEventListener('resize', updateSidePanelTop);
        document.addEventListener('click', handleClosePanel);
    
        // Clean up event listeners
        return () => {
            window.removeEventListener('resize', updateSidePanelTop);
            document.removeEventListener('click', handleClosePanel);
            document.body.style.overflow = '';
        };
    }, [isSidePanelOpen]); // Add other dependencies if necessary
    
    

    return (

        <nav ref={navbarRef} className="bg-red-dacompsi w-full flex items-center justify-between p-3 pb-3 pr-12 pl-12 h-full">

            <button className="border-none rounded-full bg-red-dacompsi py-1 px-1 self-center">
                <FaBars
                    size={24}
                    onClick={toggleSidePanel}
                    className="hamburger"
                />
            </button>

            <div className="flex items-center">
                <Link to="/home">
                    <img
                        src={logo_dacompsi}
                        alt="logo dacompsi"
                        width={RAZAO_LOGO * LOGO_HEIGHT}
                        height={LOGO_HEIGHT}
                        className="sm:ml-60"
                    />
                </Link>
            </div>

            <div className="flex gap-10 justify-end items-center h-full">
                
                <a href="/home#da" className="h-full hover:border-b hover:border-b-white flex items-center justify-center">
                    <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
                        Sobre o D.A.
                    </span>
                </a>
                
                <a href="#gestao" className="h-full hover:border-b hover:border-b-white flex items-center justify-center">
                    <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
                        Gestão
                    </span>
                </a>

                <a href="/home#ajuda" className="h-full hover:border-b hover:border-b-white flex items-center justify-center">
                    <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
                        Peça Ajuda
                    </span>
                </a>
                {auth.authenticated ? <SessionDisplay name={auth.user?.Name}/>:

									<Link
									to={"/login"}
									className="h-full flex items-center justify-center hover:scale-105">
                    <IconUserCircle color="black" size={"32px"} />
                </Link>
										}

            </div>

            {isSidePanelOpen && (
                <div className="side-panel-container">
                    <div className="side-panel">
                    <Link to="/home" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Home</div>
                    </Link>
                    <Link to="/eventos" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Eventos</div>
                    </Link>
                    <Link to="/quemsomos" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Quem Somos</div>
                    </Link>
                    <Link to="/gestao" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Gestão</div>
                    </Link>
                    <Link to="/tickets" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Meus Tickets</div>
                    </Link>
                    <Link to="/help" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Ajuda</div>
                    </Link>
                    <Link to="/loja" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Loja</div>
                        </Link>
                    <Link to="/meuspedidos" onClick={toggleSidePanel}>
                        <div className='flex'><img src={home_draw} width={30} height={30} className='pr-2'></img>Meus pedidos</div>
                        </Link>
                    </div>
                </div>
            )}

        </nav>

    );

};
