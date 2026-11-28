$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$evidenceDir = Join-Path $HOME "Downloads\Reversi-D5-Evidence\$stamp"

New-Item -ItemType Directory -Force $evidenceDir | Out-Null

$commit = git rev-parse HEAD
$branch = git branch --show-current

$checks = @(
    "test",
    "test:coverage",
    "lint",
    "build"
)

$results = @()

foreach ($check in $checks) {

    Write-Host "Running $check ..." -ForegroundColor Cyan

    $logFile = Join-Path $evidenceDir "$($check.Replace(':','-')).txt"

    $command = 'npm run ' + $check +
        ' > "' + $logFile + '" 2>&1'

    cmd.exe /d /s /c $command

    $exitCode = $LASTEXITCODE

    $status = if ($exitCode -eq 0) { "PASS" } else { "FAIL" }

    $results += [PSCustomObject]@{
        Check = $check
        Status = $status
        ExitCode = $exitCode
        Log = $logFile
    }

    Write-Host "$check : $status"
}

$results | Format-Table -AutoSize

$summaryFile = Join-Path $evidenceDir "SUMMARY.txt"

@(
    "Digital Reversi D5 Verification"
    "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    "Branch: $branch"
    "Commit: $commit"
    ""
    ($results | Format-Table -AutoSize | Out-String)
) | Set-Content -Encoding UTF8 $summaryFile

Write-Host "Evidence saved to: $evidenceDir"

if ($results.Status -contains "FAIL") {
    Write-Warning "One or more checks failed. Review the logs."
    exit 1
}
