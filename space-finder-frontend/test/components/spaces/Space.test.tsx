import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'
import Space from '../../../src/components/spaces/Space'

describe('Space test suite', () => {
  let container: HTMLDivElement
  const reserverSpaceMock = jest.fn()
  const baseUrl = 'http://localhost'

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
    jest.clearAllMocks()
  })

  describe('tests with photo URL', () => {
    beforeEach(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
      ReactDOM.render(
        <Space
          location={'someLocation'}
          name={'someName'}
          reserveSpace={reserverSpaceMock}
          spaceId={'123'}
          imageUrl={'some.url'}
        />,
        container,
      )
    })

    it('renders image correctly', () => {
      const image = container.querySelector('img')
      expect(image!).toBeInTheDocument()
      expect(image!.src).toBe(`${baseUrl}/some.url`)
    })

    it('renders labels correctly', () => {
      const labels = container.querySelectorAll('label')
      expect(labels[0]).toHaveTextContent('someName')
      expect(labels[1]).toHaveTextContent('123')
      expect(labels[2]).toHaveTextContent('someLocation')
    })

    it('reserve spaces', () => {
      const button = container.querySelector('button')
      fireEvent.click(button!)
      expect(reserverSpaceMock).toBeCalledWith('123')
    })
  })

  describe('tests without photo URL', () => {
    beforeEach(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
      ReactDOM.render(
        <Space
          location={'someLocation'}
          name={'someName'}
          reserveSpace={reserverSpaceMock}
          spaceId={'123'}
        />,
        container,
      )
    })

    it('renders image correctly', () => {
      const image = container.querySelector('img')
      expect(image!).toBeInTheDocument()
      expect(image!.src).toBeFalsy()
    })
  })
})
