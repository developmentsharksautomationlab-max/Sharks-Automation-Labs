# Fix broken useLayoutEffect syntax after headerRef removal
$servicePages = Get-ChildItem -Path "app\our-services" -Recurse -Filter "page.tsx"

foreach ($file in $servicePages) {
    $content = Get-Content $file.FullName -Raw
    
    # Fix broken useLayoutEffect pattern
    $pattern = 'useLayoutEffect\(\(\) => \{\s*\r?\n\s*\}\);\s*\r?\n\s*\}\s*\r?\n\s*// Calculate'
    $replacement = 'useLayoutEffect(() => {' + "`r`n        // Calculate"
    
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $replacement
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Fixed useLayoutEffect in: $($file.FullName)"
    }
}

Write-Host "Done!"

