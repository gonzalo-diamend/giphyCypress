// Locators

const header = '#header';
const trendingContainer = ':nth-child(2) > .Container-sc-swtq0n';
const leftSlider = ':nth-child(2) > .fade-next-previous__Container-sc-1okudgt-0 > .fade-next-previous__Previous-sc-1okudgt-2';
const rightSlider = ':nth-child(2) > .fade-next-previous__Container-sc-1okudgt-0 > .fade-next-previous__Next-sc-1okudgt-3';
const shareButtons = '[style="width: 311px; height: 140px; position: relative;"] > .Container-sc-3mbxb4 > .HoverComponents-sc-kjax0f > .ButtonDiv-sc-5phvj6';
const searchBar = '#searchbar';
const searchPlaceHolder = '#searchbar > div > div > form > div > div'
const trendingGif = ' div.ListWrapper-sc-1mxkd1t.djoQGB > ul > li:nth-child(6)';

//Methods

export class homePageGiphy{
    static loadPage(pageUrl, gyphyLabel){
        cy.visit(pageUrl);
        cy.url().should('include', gyphyLabel);
    }

    static loadTrending(trendingLabel){
        cy.get(header)
            .should('be.visible');
        cy.get(trendingContainer)
            .should('be.visible').and('contain', trendingLabel);
        cy.get(leftSlider)
            .should('not.be.visible')
                .click();
        cy.get(rightSlider)
            .should('be.visible')
                .click();
        cy.get(shareButtons)
            .should('not.be.visible');
    }

    static searchANewGif(placeholderSearch, anotherDynamicPlaceholder, searchField, searchUrl){
        cy.get(searchPlaceHolder)
            .should('contain', placeholderSearch).and('contain',anotherDynamicPlaceholder)
        cy.get(searchBar)
            .should('be.visible').and('exist')
                .type(searchField);
        cy.url().should('include', searchUrl);

    }

    static clickOnAGif(trendingGifsUrl){
        cy.get(trendingGif)
            .should('be.visible')
                .click();
        cy.url().should('include', trendingGifsUrl);
    }

} 