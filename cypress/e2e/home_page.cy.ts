import { developmentBaseUrl } from '@/utils/constants/development'

describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit(developmentBaseUrl)
    })
})