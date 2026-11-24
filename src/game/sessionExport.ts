import type { MatchState, PlayerId } from './match'

function csvCell(value: string | number): string {
  const text = String(value)
  return /[",\r\n]/.test(text)
    ? `"${text.replace(/"/g, '""')}"`
    : text
}

export function exportSessionCsv(match: MatchState): string {
  const rows: Array<Array<string | number>> = [
    [
      'Game',
      'Black Player',
      'White Player',
      'Black Score',
      'White Score',
      'Winner',
    ],
  ]

  for (const game of match.history) {
    const blackId: PlayerId = game.blackPlayer
    const whiteId: PlayerId = blackId === 'p1' ? 'p2' : 'p1'

    const winner = game.winner === null
      ? 'Draw'
      : match.players[game.winner].name

    rows.push([
      game.gameNumber,
      match.players[blackId].name,
      match.players[whiteId].name,
      game.score.black,
      game.score.white,
      winner,
    ])
  }

  return rows
    .map((row) => row.map(csvCell).join(','))
    .join('\r\n') + '\r\n'
}
