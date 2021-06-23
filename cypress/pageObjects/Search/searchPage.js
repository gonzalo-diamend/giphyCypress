// Locators
const titleSearch = '.sc-bYwzba'
const gifsTable = '[class="giphy-grid"]'
const gifsButton = '.hqZxkv > .Text-sc-7jo0jp'
const stickersButton = '.gfhosj > .Text-sc-7jo0jp'
const recommendationButton = ':nth-child(1) > .Pill-sc-hctge2'
const recomendationButton2 = ':nth-child(2) > .Pill-sc-hctge2'


//Methods
export class searchPageGiphy{
    static searchResults(searchLabel, gifsLabel, stickersLabel){
        cy.get(titleSearch)
            .should('be.visible').and ('contain', searchLabel);
        cy.get(gifsTable)
            .should('be.visible');
        cy.get(gifsButton)
            .should('be.visible').and('contain', gifsLabel);
        cy.get(stickersButton)
            .should('be.visible').and('contain', stickersLabel);
        cy.get(recommendationButton)
            .should('be.visible').and('exist');
        cy.get(recomendationButton2)
            .should('be.visible').and('exist');
    }
}