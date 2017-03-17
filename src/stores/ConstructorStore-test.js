import ConstructorStore from './ConstructorStore'

describe('ConstructorStore', () => {
  it('retursn Section 1 correctly', () => {
    const actual = ConstructorStore.getState()
    expect(actual).toMatchSnapshot()
  })
})
