import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
  it('should have four input fields', () => {
    render (<Form />)

    const nameField = screen.getByText('Name:')
    const dateField = screen.getByText('Date:')
    const timeField = screen.getByText('Time:')
    const numberField = screen.getByText('Number of Guests:')

    expect(nameField).toBeInTheDocument();
    expect(dateField).toBeInTheDocument();
    expect(timeField).toBeInTheDocument();
    expect(numberField).toBeInTheDocument();

  })
})
