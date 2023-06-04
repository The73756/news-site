import { tw } from 'typewind'
import { cls } from '.'

describe('class-names', () => {
  test('with only first param', () => {
    expect(cls('some-class')).toBe('some-class')
  })

  test('with additional class', () => {
    expect(cls('some-class', {}, ['class-1', 'class-2'])).toBe('some-class class-1 class-2')
  })

  test('with mods class', () => {
    const expected = 'some-class some-class--mod'
    expect(cls('some-class', { 'some-class--mod': true, 'some-class--hide': false })).toBe(expected)
  })

  test('with all params', () => {
    const expected = 'some-class class-1 class-2 some-class--mod'
    expect(
      cls('some-class', { 'some-class--mod': true, 'some-class--hide': false }, [
        'class-1',
        'class-2',
      ])
    ).toBe(expected)
  })

  test('with typewind', () => {
    const expected = 'bg-base-300 text-2xl font-bold text-red-500 flex some-class--mod'
    expect(
      cls(
        tw.bg_base_300.text_2xl.font_bold,
        { 'some-class--mod': true, 'some-class--hide': false },
        [tw.text_red_500, tw.flex]
      )
    ).toBe(expected)
  })
})
