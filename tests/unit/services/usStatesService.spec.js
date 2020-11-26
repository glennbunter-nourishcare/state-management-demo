import usStatesService from '@/services/usStatesService.js'

describe('usStatesService', () => {
  const testCases = [
    ['Alab', ['Alabama']],
    ['xxx', []],
    ['', []],
    [undefined, []]
  ]

  test.each(testCases)('given %p as the state, should return %p', async (search, expectedResults) => {
    const actual = await usStatesService.find(search)

    expect(actual).toStrictEqual(expectedResults)
  })
})
