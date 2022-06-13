import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

describe('util/capitalizeFirstLetter', () => {
  test('should capitalize the first letter for a string like "morty"', () => {
    const text = 'morty'
    expect(capitalizeFirstLetter(text)).toEqual('Morty')
  })

  test('should capitalize the first letter for a string like "eye_color"', () => {
    const text = 'eye_color'
    expect(capitalizeFirstLetter(text)).toEqual('Eye Color')
  })

  test('should capitalize the first letter for a string like "example_example_example"', () => {
    const text = 'example_example_example'
    expect(capitalizeFirstLetter(text)).toEqual('Example Example Example')
  })
})
