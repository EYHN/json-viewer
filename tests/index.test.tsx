import { render } from '@testing-library/react'
import React from 'react'
import { describe, it } from 'vitest'

import { JsonViewer } from '../src'

describe('render <JsonViewer/>', () => {
  it('render undefined', () => {
    render(<JsonViewer value={undefined}/>)
  })

  it('render null', () => {
    render(<JsonViewer value={null}/>)
  })

  it('render null', () => {
    render(<JsonViewer value={null}/>)
  })

  it('render NaN', () => {
    render(<JsonViewer value={NaN}/>)
  })

  it('render number', () => {
    render(<JsonViewer value={1}/>)
    render(<JsonViewer value={-0}/>)
    render(<JsonViewer value={+0}/>)
    render(<JsonViewer value={114514}/>)
    render(<JsonViewer value={114.514}/>)
    render(<JsonViewer value={Infinity}/>)
  })

  it('render bigint', () => {
    render(<JsonViewer value={114514n}/>)
  })

  it('render array', () => {
    render(<JsonViewer value={[1, '2', 3.0, Infinity]}/>)
    render(<JsonViewer value={new Array(1e5).fill(1)}/>)
  })

  it('render Set', () => {
    render(<JsonViewer value={new Set([1, '2', 3.0, Infinity])}/>)
  })

  it('render Map', () => {
    render(
      <JsonViewer
        value={new Map<string, number>([['foo', 1], ['goo', 2]])}/>
    )
    render(
      <JsonViewer
        value={new Map<any, number>([[[], 1], [{}, 2]])}/>
    )
  })

  it('render object', () => {
    render(<JsonViewer value={{}}/>)
    render(<JsonViewer value={{
      foo: '1',
      goo: 2,
      hoo: {
        foo: [1, 2, 3]
      }
    }}/>)
  })

  it('render function', () => {
    render(<JsonViewer value={function aPlusB (a: number, b: number) {
      return a + b
    }}/>)
    render(<JsonViewer value={(a: number, b: number) => a + b}/>)
  })
})