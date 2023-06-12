class HomePage {

    getGitHubRepoHeader(){
        return cy.get('h1')
    }

    getGitHubUsernameLabel(){
        return cy.get('label')
    }

    getSubmitButton(){
        return cy.get('.submit')
    }

    getDataLabelNoRepos(){
        return cy.get('.output-status-text')
    }

    getUserNamefield(){
        return cy.get('#username')
    }

    getTotalOfRepositoriesFound(){
        return cy.get('.repo-amount')
    }

    getContainerOfRepositories(){
        return cy.get('.repo-list-container:visible')
    }

    getTotalOfRepositories(){
        return cy.get('li')
    }

    getFirstRowReporsitory(){
        return cy.get(':nth-child(1) > :nth-child(1) > a')
    }

}

export default HomePage;