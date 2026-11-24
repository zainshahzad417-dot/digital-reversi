# Digital Reversi - Release and Demo Verification Checklist

## Purpose
Prepare the application for the final Software Engineering demo.

## 1. Environment
- [ ] Verify supported Node.js version
- [ ] Install dependencies using npm ci
- [ ] Verify Git branch

## 2. Automated Tests
- [ ] Run npm test
- [ ] Run npm run test:coverage
- [ ] Run npm run lint
- [ ] Run npm run build
- [ ] Record actual results

## 3. Game Verification
- [ ] Open https://digital-reversi.vercel.app/
- [ ] Start Human vs Human
- [ ] Check legal moves and disc flipping
- [ ] Check invalid move rejection
- [ ] Start Human vs AI
- [ ] Check AI response
- [ ] Verify results and session progression
- [ ] Verify keyboard controls

## 4. Browsers and Accessibility
- [ ] Test Chrome or Edge
- [ ] Test Firefox
- [ ] Test Safari or an iPhone
- [ ] Perform screen-reader checks

## 5. GitHub and Deployment
- [ ] Verify CI checks
- [ ] Check main branch protection
- [ ] Identify intended release commit
- [ ] Verify production deployment
- [ ] Confirm backup deployment access

## 6. Contingency
If the live game fails:
1. Check the deployed URL.
2. Restore a known-good Vercel deployment.
3. Use a previously tested local production build.
4. Use a prepared recording if required.
5. Log the issue and recovery in Jira.

## 7. Evidence

| Check | Result | Evidence |
| --- | --- | --- |
| Unit tests | Pending | - |
| Coverage | Pending | - |
| Build | Pending | - |
| Browser test | Pending | - |
| Backup demo | Pending | - |

## Note
Mark items complete only after performing them.
This document does not claim verification is complete.

Prepared by Zain Shahzad.
