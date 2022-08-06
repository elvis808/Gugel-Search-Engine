import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons }) {
        const [{}, dispatch] = useStateValue();
    
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        navigate('/search');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
    };


    return (
    <form className="search">
        <div className="search__input">
            <SearchIcon className="search__inputIcon" />
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicIcon />
        </div>

        {!hideButtons ? (
            <div className="search__buttons">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Funny</Button>
        </div>
        ): (
            <div className="search__buttons">
            <Button className='search__buttonsHidden' type="submit" onClick={search} variant="outlined">
                Google Search</Button>
            <Button className='search__buttonsHidden' variant="outlined">I'm Feeling Funny</Button>
        </div>
        )}
    </form>
    );
};

export default Search