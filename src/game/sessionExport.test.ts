import { describe, expect, it } from 'vitest'
import { createMatch } from './match'
import { exportSessionCsv } from './sessionExport'

const players = {
  p1: { name: 'Zain', kind: 'human' as const },
  p2: { name: 'Ahmad', kind: 'human' as const },
}

describe('session CSV export', () => {
  it('exports a header for a session with no finished games', () => {
    const match = createMatch(players)

    expect(exportSessionCsv(match)).toBe(
      'Game,Black Player,White Player,Black Score,White Score,Winner\r\n',
    )
  })

  it('exports a finished game with the correct winner', () => {
    const match = {
      ...createMatch(players),
      history: [{
        gameNumber: 1,
        blackPlayer: 'p1' as const,
        outcome: 'black' as const,
        score: { black: 38, white: 26 },
        winner: 'p1' as const,
      }],
    }

    expect(exportSessionCsv(match)).toContain(
      '1,Zain,Ahmad,38,26,Zain',
    )
  })

  it('handles draws and swapped player colours', () => {
    const match = {
      ...createMatch(players, 2),
      history: [{
        gameNumber: 2,
        blackPlayer: 'p2' as const,
        outcome: 'draw' as const,
        score: { black: 32, white: 32 },
        winner: null,
      }],
    }

    expect(exportSessionCsv(match)).toContain(
      '2,Ahmad,Zain,32,32,Draw',
    )
  })

  it('escapes commas and quotation marks in player names', () => {
    const match = {
      ...createMatch({
        p1: { name: 'Zain, Jr.', kind: 'human' as const },
        p2: { name: 'Ahmad "A"', kind: 'human' as const },
      }),
      history: [{
        gameNumber: 1,
        blackPlayer: 'p1' as const,
        outcome: 'black' as const,
        score: { black: 40, white: 24 },
        winner: 'p1' as const,
      }],
    }

    expect(exportSessionCsv(match)).toContain(
      '1,"Zain, Jr.","Ahmad ""A""",40,24,"Zain, Jr."',
    )
  })
})
