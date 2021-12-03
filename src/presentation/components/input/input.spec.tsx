import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import faker from 'faker'

import Input from './input'
import Context from '@/presentation/contexts/form/form-context'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
}

describe('Input Component', () => {
  it('Should begin witdh readOnly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  it('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement

    fireEvent.focus(input)

    expect(input.readOnly).toBe(false)
  })
})
