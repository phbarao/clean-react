import React from 'react'
import { render } from '@testing-library/react'

import Login from './login'

describe('Login Component', () => {
  it('Should not render spinner and eror on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')

    expect(errorWrap.childElementCount).toBe(0)
  })
})
