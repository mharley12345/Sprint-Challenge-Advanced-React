import React from 'react'
import App from './App'
import { render} from '@testing-library/react'
test('loads', async ()=>{
  const { getByText } = render(<App/>)
  getByText('Players')

  getByText((content, element) => content.startsWith('Player'))
})
