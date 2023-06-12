//import cy from "cypress"
import HomePage from "./pageObjects/HomePage"

describe('Home Page Validation', function(){

    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then(function(data){
            this.data=data
        })
      })

    it('LogIn Page', function(){

        homePage.getGitHubRepoHeader().contains(this.data.name_of_repo)
        homePage.getGitHubUsernameLabel().contains(this.data.github_user_label)
        homePage.getSubmitButton().contains(this.data.button_label_go)
        homePage.getDataLabelNoRepos().contains(this.data.label_no_repos)
    })

    it('Enter John and Search', function(){

        homePage.getUserNamefield().type(this.data.user_entered)
        homePage.getSubmitButton().click()
        cy.wait(2000)
        homePage.getTotalOfRepositoriesFound().contains(this.data.repos_founds)
        homePage.getContainerOfRepositories().should('have.length',1)
        cy.wait(2000)
        homePage.getTotalOfRepositories().should('have.length',30)

    })

    it('Open the first row', function(){

        homePage.getUserNamefield().type(this.data.user_entered)
        homePage.getSubmitButton().click()
        cy.wait(2000)
    
        homePage.getFirstRowReporsitory().then(function(el){

            const url=el.prop('href')
            cy.visit(url)
            cy.origin(url, () =>{
                cy.get(".Label.Label--secondary").contains("Public")
            })

        })

        cy.visit("http://localhost:3000/")    

    })

})