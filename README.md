# giphyCypress
Repository in order to create Automated tests with Cypress on Giphy webpage

We create a structure to validate all the scenarios that were requested. I used page object model and I didn't want to hardcode any validation of the code so i create parametrs that were run it from the tests.

Steps of the test

1)Make sure a trending section exists

2)Make sure search works
    - a search field exists
    - can type text into search field
    - results are displayed after a search
3) click on a gif in trending section
    - it goes to a page that shows the clicked on gif


1) I validate the redirect to the correct page checking correct URL. Then we check that some of the objects of the page are visible and exist. Also the whole idea is to check existing and naming of the trending section and some of the functionaly as the sliders
2) I check that search field is correctly working making several validation on the home page, search field and results page
3 In this test i tried to test some of the existing methods for redirect and check status of trending section. Then i choose one of the gifs and make some assertions related to the gifs page.


How to run it

1- Open a new terminal
2- Write "Npx cypress open"
3- Select browser that you want to run it
4- Click on giphyE2E test
5- See results on the Cypress Console
