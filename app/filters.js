//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('findPrisonerByNumber', (prisoners, prisonNumber) => {
	if (!Array.isArray(prisoners) || !prisonNumber) return null
	return prisoners.find(prisoner => prisoner.prison_number === prisonNumber) || null
})

