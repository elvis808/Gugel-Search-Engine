import React from 'react';
import "./Home.css"
import { Link } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Search from "../components/Search";

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <AccountBoxIcon />
                </div>
            </div>

            <div className="home__body">
                <img 
                    src="https://www.pinclipart.com/picdir/big/134-1347779_new-images-2018-google-clip-art-transparent-backgrounds.png"
                    alt=""
                />
                <div className='home__inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home