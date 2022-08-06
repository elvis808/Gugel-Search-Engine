import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import Response from "../Response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    //live API call
    const { data } = useGoogleSearch(term);

    //Mock API call
    // const data = Response;

    console.log(data);
    return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <Link to="/">
                <img 
                    className="searchPage__logo"
                    src="https://www.pinclipart.com/picdir/big/134-1347779_new-images-2018-google-clip-art-transparent-backgrounds.png"
                    alt=""
                />
            </Link>

            <div className='searchPage__headerBody'>
                <Search hideButtons />

                <div className='searchPage__options'>
                    <div className='searchPage__optionsLeft'>
                        <div className='searchPage__option'>
                            <SearchIcon />
                            <Link to="/all">All</Link>
                        </div>
                        <div className='searchPage__option'>
                            <NewspaperIcon />
                            <Link to="/all">News</Link>
                        </div>
                        <div className='searchPage__option'>
                            <ImageSearchIcon />
                            <Link to="/all">Images</Link>
                        </div>
                        <div className='searchPage__option'>
                            <LocalOfferIcon />
                            <Link to="/all">Shopping</Link>
                        </div>
                        <div className='searchPage__option'>
                            <PlaceIcon />
                            <Link to="/all">Maps</Link>
                        </div>
                        <div className='searchPage__option'>
                            <MoreVertIcon />
                            <Link to="/all">More</Link>
                        </div>
                    </div>

                    <div className='searchPage__optionsRight'>
                        <div className='searchPage__option'>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className='searchPage__option'>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {term && (
            <div className='searchPage__results'>
                <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>

                {data?.items.map(item => (
                    <div 
                    className="searchPage__result">
                    <a href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src && (
                            <img 
                                src={
                                    item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src
                                }
                                alt=""
                                className="searchPage__resultImage"
                                />
                        )}

                        {item.displayLink} 
                    </a>
                    <a 
                    className="searchPage__resultTitle" href={item.link}>
                        <h2>{item.title}</h2>
                    </a>
                    <p className="searchPage__resultSnippet">{item.snippet}
                    </p>
                    </div>
                ))}
            </div>
        )}
    </div>
    )
}

export default SearchPage