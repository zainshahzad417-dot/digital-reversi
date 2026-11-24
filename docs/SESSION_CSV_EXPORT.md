# Session Results CSV Export

## Purpose

This utility converts completed Digital Reversi session
records into CSV format for reporting and analysis.

## Location

src/game/sessionExport.ts

## Function

exportSessionCsv(match)

## Exported fields

- Game number
- Black player
- White player
- Black disc score
- White disc score
- Winner or Draw

## Supported cases

- Empty session history
- Completed game
- Draw
- Swapped player colours
- Player names with commas or quotation marks

## Automated testing

Run:

npx vitest run src/game/sessionExport.test.ts

## Current limitation

The CSV formatter is implemented and tested.
A Download CSV button has not yet been connected
to the user interface.

## Contributor

Zain Shahzad
