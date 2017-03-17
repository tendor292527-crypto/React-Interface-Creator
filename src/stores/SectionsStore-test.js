import SectionsStore from './SectionsStore'

describe('SectionsStore', () => {
  it('retursn Section 1 correctly', () => {
    const actual = SectionsStore.get('section1')
    expect(actual.type).toBe('1')
  })
})
