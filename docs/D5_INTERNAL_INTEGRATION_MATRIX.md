# D5 - Internal Component Integration Matrix

## Project
Digital Reversi

## Development Model
All components are developed and integrated by our own team.

## Purpose
Document the component boundaries and the evidence needed
to verify the complete Reversi application.

## Component Integration

| ID | Source | Destination | Responsibility |
| --- | --- | --- | --- |
| INT-01 | Setup Screen | Session Manager | Validate game configuration |
| INT-02 | Board UI | Rules Engine | Submit player move for validation |
| INT-03 | Rules Engine | Game State | Apply legal captures and reject invalid moves |
| INT-04 | Game State | Session Manager | Update turns, passes and completed results |
| INT-05 | Session Manager | AI Adapter | Request computer move |
| INT-06 | AI Adapter | AI Worker | Send board snapshot and legal move information |
| INT-07 | AI Response Guard | Game State | Reject stale, malformed and illegal responses |
| INT-08 | Session Manager | Results Panel | Display completed game and session results |

## Integration Scenarios

- [ ] Valid human move updates the board
- [ ] Invalid move leaves the board unchanged
- [ ] Multiple captured lines flip correctly
- [ ] Forced pass is handled correctly
- [ ] AI returns a valid candidate move
- [ ] Invalid AI reply is rejected safely
- [ ] AI failure allows retry
- [ ] Session supports 1, 2 and 4 games
- [ ] Colours alternate between games
- [ ] Final results are recorded once

## Technical Verification

Run:

npm test
npm run test:coverage
npm run lint
npm run build

## Responsibilities

Zain - Integration review and technical implementation
Ahmad - Verification and quality assurance
Mohid - Planning, coordination and documentation

## Approval Status

Self-development approach: Instructor confirmation pending
Team review: Pending
Integration verification: Pending

## Notes

The existence of unit tests does not automatically prove that
all manual or performance requirements have been verified.
Statuses must be updated using actual evidence.
