
// Imports
import {homePageGiphy} from '../../pageObjects/Home/homePage';
import {searchPageGiphy} from '../../pageObjects/Search/searchPage';
import {gifsPageGiphy} from '../../pageObjects/Gifs Page/gifsPage';



// TestData
const pageUrl = 'https://giphy.com/';
const giphyUrl = 'https://giphy.com/';
const trendingLabel = 'Trending';
const placeholderSearchLabel = '@username + tag to search within a verified channel';
const anotherDynamicPlaceholder = 'Search all the GIFs and Stickers';
const searchField = 'Funny cats {enter}';
const searchUrl = '/search/Funny-cats';
const searchLabel = 'Funny cats';
const gifsLabel = 'GIFs';
const stickersLabel = 'Stickers';
const trendingGifUrl = '/gifs/';
const sourceLabel = 'Source'
const createGifsLabel = 'GIF Maker'




// Tests

describe(' Tests TeamFlow', function (){
    it('Step 1 - Make sure a trending section exists', function (){
        homePageGiphy.loadPage(pageUrl, giphyUrl);
        homePageGiphy.loadTrending(trendingLabel);
    })

    it('Step 2 - Make sure search works', function (){
        homePageGiphy.searchANewGif(placeholderSearchLabel, anotherDynamicPlaceholder, searchField, searchUrl);
        searchPageGiphy.searchResults(searchLabel, gifsLabel, stickersLabel);
    })
    
    it('Step 3 - Click on a gif in trending section', function (){
        homePageGiphy.loadPage(pageUrl, giphyUrl);
        homePageGiphy.loadTrending(trendingLabel);
        homePageGiphy.clickOnAGif(trendingGifUrl);
        gifsPageGiphy.gifsResults(sourceLabel, createGifsLabel);
        
    })

})

