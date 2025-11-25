# PowerShell script to replace all teal/cyan colors with #35C4DD (custom-blue)
# RGB values: 53, 196, 221

Write-Host "Starting color replacement..." -ForegroundColor Green

# Get all TypeScript, TSX, and CSS files (excluding node_modules)
$files = Get-ChildItem -Path . -Recurse -Include *.tsx,*.ts,*.css -Exclude node_modules | Where-Object { $_.FullName -notmatch 'node_modules' }

$totalFiles = $files.Count
$updatedFiles = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content
    
    # Replace Tailwind teal classes with custom-blue (preserving opacity modifiers)
    $content = $content -replace 'bg-teal-(\d+)', 'bg-custom-blue'
    $content = $content -replace 'text-teal-(\d+)', 'text-custom-blue'
    $content = $content -replace 'border-teal-(\d+)', 'border-custom-blue'
    $content = $content -replace 'shadow-teal-(\d+)', 'shadow-custom-blue'
    $content = $content -replace 'from-teal-(\d+)', 'from-custom-blue'
    $content = $content -replace 'to-teal-(\d+)', 'to-custom-blue'
    $content = $content -replace 'via-teal-(\d+)', 'via-custom-blue'
    $content = $content -replace 'hover:bg-teal-(\d+)', 'hover:bg-custom-blue'
    $content = $content -replace 'hover:text-teal-(\d+)', 'hover:text-custom-blue'
    $content = $content -replace 'hover:border-teal-(\d+)', 'hover:border-custom-blue'
    $content = $content -replace 'hover:shadow-teal-(\d+)', 'hover:shadow-custom-blue'
    $content = $content -replace 'group-hover:bg-teal-(\d+)', 'group-hover:bg-custom-blue'
    $content = $content -replace 'group-hover:text-teal-(\d+)', 'group-hover:text-custom-blue'
    $content = $content -replace 'group-hover:border-teal-(\d+)', 'group-hover:border-custom-blue'
    $content = $content -replace 'focus:bg-teal-(\d+)', 'focus:bg-custom-blue'
    $content = $content -replace 'focus:text-teal-(\d+)', 'focus:text-custom-blue'
    $content = $content -replace 'focus:border-teal-(\d+)', 'focus:border-custom-blue'
    $content = $content -replace 'active:bg-teal-(\d+)', 'active:bg-custom-blue'
    $content = $content -replace 'active:text-teal-(\d+)', 'active:text-custom-blue'
    $content = $content -replace 'active:border-teal-(\d+)', 'active:border-custom-blue'
    
    # Replace rgba(20, 184, 166, ...) with rgba(53, 196, 221, ...)
    # Match rgba with various spacing options
    $content = $content -replace 'rgba\(20,\s*184,\s*166,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgba\(20,184,166,', 'rgba(53, 196, 221,'
    
    # Update comments from Teal to Blue
    $content = $content -replace 'Teal Glow', 'Blue Glow'
    $content = $content -replace 'teal glow', 'blue glow'
    $content = $content -replace 'Teal glow', 'Blue glow'
    
    # Also handle any remaining teal-400, teal-500, teal-600, teal-900 patterns
    $content = $content -replace '\bteal-400\b', 'custom-blue'
    $content = $content -replace '\bteal-500\b', 'custom-blue'
    $content = $content -replace '\bteal-600\b', 'custom-blue'
    $content = $content -replace '\bteal-900\b', 'custom-blue'
    $content = $content -replace '\bteal-300\b', 'custom-blue'
    $content = $content -replace '\bteal-700\b', 'custom-blue'
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $updatedFiles++
        Write-Host "Updated: $($file.Name)" -ForegroundColor Yellow
    }
}

Write-Host "`nReplacement complete!" -ForegroundColor Green
Write-Host "Total files processed: $totalFiles" -ForegroundColor Cyan
Write-Host "Files updated: $updatedFiles" -ForegroundColor Cyan

