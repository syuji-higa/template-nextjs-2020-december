import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import Home from 'pages/index'

afterEach(cleanup)

it('Home ページコンポーネントが存在している', () => {
  expect(Home).toBeTruthy()
})

it('「Next.js!」のリンクが Next.js の公式サイトのトップページである', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!').getAttribute('href')).toBe(
    'https://nextjs.org'
  )
})
