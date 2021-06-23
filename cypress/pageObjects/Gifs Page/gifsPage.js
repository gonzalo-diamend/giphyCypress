
// Locators
const sourceResult = '#react-target > div > div:nth-child(5) > div > div._2iyyI26wU2KSCOyckTl0fY > div:nth-child(1) > div:nth-child(1) > span';
const createAGif = '#react-target > div > div:nth-child(5) > div > div._2iyyI26wU2KSCOyckTl0fY > div:nth-child(1) > div:nth-child(2)'
const gifCreator = '#react-target > div > div:nth-child(5) > div > div._2iyyI26wU2KSCOyckTl0fY > div:nth-child(1) > div:nth-child(2) > a'
const gifImage = '#react-target > div > div:nth-child(5) > div > div._3lHuNOPnvckvR4CcUUV0gB > div._3GqNJoK78iEyK73CecBC8p > div.Z49nRFfT4LBxinbLNRSZl > div > div > div._1M8xq1jPOAHRc0OSZxxS8_';
const rightCommands = '._3QdblofxPqtzAdaMHVvGnV'
const relatedHashtags = '.Container-sc-1nroqns'

//Methods

export class gifsPageGiphy{
    static gifsResults(sourceLabel){
        cy.get(sourceResult)
            .should('be.visible').and('contain', sourceLabel);
        cy.get(createAGif)
            .should('be.visible')
        cy.get(gifCreator)   
            .should('have.attr', 'href')
        cy.get(gifImage)
            .should('be.visible').and('exist');
        cy.get(rightCommands)
            .should('be.visible')
        cy.get(relatedHashtags)
            .should('be.visible')
    }
}