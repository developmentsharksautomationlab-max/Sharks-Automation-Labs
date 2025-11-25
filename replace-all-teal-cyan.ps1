# Comprehensive PowerShell script to replace all teal/cyan colors with #35C4DD (custom-blue)
# RGB values: 53, 196, 221
# Hex: #35C4DD or #35c4dd

Write-Host "Starting comprehensive color replacement..." -ForegroundColor Green
Write-Host "Target color: #35C4DD (Blue)" -ForegroundColor Cyan
Write-Host "RGB: 53, 196, 221" -ForegroundColor Cyan
Write-Host ""

# Get all relevant files (excluding node_modules and build directories)
$files = Get-ChildItem -Path . -Recurse -Include *.tsx,*.ts,*.css,*.jsx,*.js,*.json,*.mdx -Exclude node_modules | Where-Object { 
    $_.FullName -notmatch 'node_modules|\.next|\.git|dist|build|replace.*\.ps1' 
}

$totalFiles = $files.Count
$updatedFiles = 0
$totalReplacements = 0

Write-Host "Found $totalFiles files to process..." -ForegroundColor Yellow
Write-Host ""

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }
    
    $original = $content
    $fileReplacements = 0
    
    # ===== TAILWIND CLASS REPLACEMENTS =====
    # Replace all Tailwind teal classes with custom-blue (handles opacity modifiers)
    
    # Background colors (all variants)
    $content = $content -replace 'bg-teal-(\d+)(/[\d.]+)?', 'bg-custom-blue$2'
    
    # Text colors (all variants)
    $content = $content -replace 'text-teal-(\d+)(/[\d.]+)?', 'text-custom-blue$2'
    
    # Border colors (all variants)
    $content = $content -replace 'border-teal-(\d+)(/[\d.]+)?', 'border-custom-blue$2'
    
    # Shadow colors (all variants)
    $content = $content -replace 'shadow-teal-(\d+)(/[\d.]+)?', 'shadow-custom-blue$2'
    
    # Gradient colors (all variants)
    $content = $content -replace 'from-teal-(\d+)(/[\d.]+)?', 'from-custom-blue$2'
    $content = $content -replace 'to-teal-(\d+)(/[\d.]+)?', 'to-custom-blue$2'
    $content = $content -replace 'via-teal-(\d+)(/[\d.]+)?', 'via-custom-blue$2'
    
    # Hover states (all variants)
    $content = $content -replace 'hover:bg-teal-(\d+)(/[\d.]+)?', 'hover:bg-custom-blue$2'
    $content = $content -replace 'hover:text-teal-(\d+)(/[\d.]+)?', 'hover:text-custom-blue$2'
    $content = $content -replace 'hover:border-teal-(\d+)(/[\d.]+)?', 'hover:border-custom-blue$2'
    $content = $content -replace 'hover:shadow-teal-(\d+)(/[\d.]+)?', 'hover:shadow-custom-blue$2'
    
    # Group hover states (all variants)
    $content = $content -replace 'group-hover:bg-teal-(\d+)(/[\d.]+)?', 'group-hover:bg-custom-blue$2'
    $content = $content -replace 'group-hover:text-teal-(\d+)(/[\d.]+)?', 'group-hover:text-custom-blue$2'
    $content = $content -replace 'group-hover:border-teal-(\d+)(/[\d.]+)?', 'group-hover:border-custom-blue$2'
    
    # Focus states (all variants)
    $content = $content -replace 'focus:bg-teal-(\d+)(/[\d.]+)?', 'focus:bg-custom-blue$2'
    $content = $content -replace 'focus:text-teal-(\d+)(/[\d.]+)?', 'focus:text-custom-blue$2'
    $content = $content -replace 'focus:border-teal-(\d+)(/[\d.]+)?', 'focus:border-custom-blue$2'
    $content = $content -replace 'focus:ring-teal-(\d+)(/[\d.]+)?', 'focus:ring-custom-blue$2'
    
    # Active states (all variants)
    $content = $content -replace 'active:bg-teal-(\d+)(/[\d.]+)?', 'active:bg-custom-blue$2'
    $content = $content -replace 'active:text-teal-(\d+)(/[\d.]+)?', 'active:text-custom-blue$2'
    $content = $content -replace 'active:border-teal-(\d+)(/[\d.]+)?', 'active:border-custom-blue$2'
    
    # Ring colors (all variants)
    $content = $content -replace 'ring-teal-(\d+)(/[\d.]+)?', 'ring-custom-blue$2'
    
    # Divide colors (all variants)
    $content = $content -replace 'divide-teal-(\d+)(/[\d.]+)?', 'divide-custom-blue$2'
    
    # Placeholder colors (all variants)
    $content = $content -replace 'placeholder-teal-(\d+)(/[\d.]+)?', 'placeholder-custom-blue$2'
    
    # Outline colors (all variants)
    $content = $content -replace 'outline-teal-(\d+)(/[\d.]+)?', 'outline-custom-blue$2'
    
    # ===== RGBA/RGB REPLACEMENTS =====
    # Replace rgba(20, 184, 166, ...) with rgba(53, 196, 221, ...) - Teal 500 RGB
    $content = $content -replace 'rgba\(\s*20\s*,\s*184\s*,\s*166\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgba\(20,184,166,', 'rgba(53, 196, 221,'
    
    # Replace rgb(20, 184, 166) with rgb(53, 196, 221)
    $content = $content -replace 'rgb\(\s*20\s*,\s*184\s*,\s*166\s*\)', 'rgb(53, 196, 221)'
    $content = $content -replace 'rgb\(20,184,166\)', 'rgb(53, 196, 221)'
    
    # Common teal RGB variations
    # Teal 400: rgb(45, 212, 191) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*45\s*,\s*212\s*,\s*191\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgb\(\s*45\s*,\s*212\s*,\s*191\s*\)', 'rgb(53, 196, 221)'
    
    # Teal 600: rgb(13, 148, 136) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*13\s*,\s*148\s*,\s*136\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgb\(\s*13\s*,\s*148\s*,\s*136\s*\)', 'rgb(53, 196, 221)'
    
    # Teal 300: rgb(94, 234, 212) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*94\s*,\s*234\s*,\s*212\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgb\(\s*94\s*,\s*234\s*,\s*212\s*\)', 'rgb(53, 196, 221)'
    
    # Teal 700: rgb(15, 118, 110) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*15\s*,\s*118\s*,\s*110\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgb\(\s*15\s*,\s*118\s*,\s*110\s*\)', 'rgb(53, 196, 221)'
    
    # Teal 800: rgb(17, 94, 89) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*17\s*,\s*94\s*,\s*89\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgb\(\s*17\s*,\s*94\s*,\s*89\s*\)', 'rgb(53, 196, 221)'
    
    # Teal 900: rgb(19, 78, 74) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*19\s*,\s*78\s*,\s*74\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgb\(\s*19\s*,\s*78\s*,\s*74\s*\)', 'rgb(53, 196, 221)'
    
    # Teal 200: rgb(153, 246, 228) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*153\s*,\s*246\s*,\s*228\s*,', 'rgba(53, 196, 221,'
    
    # Teal 100: rgb(204, 251, 241) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*204\s*,\s*251\s*,\s*241\s*,', 'rgba(53, 196, 221,'
    
    # Cyan RGB values
    # Cyan 500: rgb(6, 182, 212) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*6\s*,\s*182\s*,\s*212\s*,', 'rgba(53, 196, 221,'
    $content = $content -replace 'rgb\(\s*6\s*,\s*182\s*,\s*212\s*\)', 'rgb(53, 196, 221)'
    
    # Cyan 600: rgb(8, 145, 178) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*8\s*,\s*145\s*,\s*178\s*,', 'rgba(53, 196, 221,'
    
    # Cyan 400: rgb(34, 211, 238) -> rgb(53, 196, 221)
    $content = $content -replace 'rgba\(\s*34\s*,\s*211\s*,\s*238\s*,', 'rgba(53, 196, 221,'
    
    # ===== HEX CODE REPLACEMENTS =====
    # Common teal/cyan hex codes (case-insensitive)
    $content = $content -replace '(?i)#0d9488', '#35c4dd'  # Teal 600
    $content = $content -replace '(?i)#14b8a6', '#35c4dd'  # Teal 500
    $content = $content -replace '(?i)#2dd4bf', '#35c4dd'  # Teal 400
    $content = $content -replace '(?i)#5eead4', '#35c4dd'  # Teal 300
    $content = $content -replace '(?i)#99f6e4', '#35c4dd'  # Teal 200
    $content = $content -replace '(?i)#ccfbf1', '#35c4dd'  # Teal 100
    $content = $content -replace '(?i)#f0fdfa', '#35c4dd'  # Teal 50
    $content = $content -replace '(?i)#0f766e', '#35c4dd'  # Teal 700
    $content = $content -replace '(?i)#115e59', '#35c4dd'  # Teal 800
    $content = $content -replace '(?i)#134e4a', '#35c4dd'  # Teal 900
    
    # Cyan hex codes
    $content = $content -replace '(?i)#06b6d4', '#35c4dd'  # Cyan 500
    $content = $content -replace '(?i)#0891b2', '#35c4dd'  # Cyan 600
    $content = $content -replace '(?i)#0e7490', '#35c4dd'  # Cyan 700
    $content = $content -replace '(?i)#22d3ee', '#35c4dd'  # Cyan 400
    $content = $content -replace '(?i)#67e8f9', '#35c4dd'  # Cyan 300
    $content = $content -replace '(?i)#a5f3fc', '#35c4dd'  # Cyan 200
    $content = $content -replace '(?i)#cffafe', '#35c4dd'  # Cyan 100
    $content = $content -replace '(?i)#ecfeff', '#35c4dd'  # Cyan 50
    
    # ===== HSL COLOR REPLACEMENTS =====
    # Replace hsl colors (teal/cyan hue range: 170-200)
    # Converting #35C4DD to HSL: hsl(189, 68%, 54%)
    $content = $content -replace 'hsl\(\s*18[0-9]\s*,\s*[^)]+\)', 'hsl(189, 68%, 54%)'
    $content = $content -replace 'hsla\(\s*18[0-9]\s*,\s*[^)]+\)', 'hsla(189, 68%, 54%, '
    
    # ===== COMMENTS =====
    # Update comments from Teal/Cyan to Blue
    $content = $content -replace '(?i)Teal Glow', 'Blue Glow'
    $content = $content -replace '(?i)teal glow', 'blue glow'
    $content = $content -replace '(?i)Cyan Glow', 'Blue Glow'
    $content = $content -replace '(?i)cyan glow', 'blue glow'
    $content = $content -replace '#\s*Teal', '# Blue'
    $content = $content -replace '#\s*Cyan', '# Blue'
    
    # ===== HANDLE REMAINING STANDALONE TEAL REFERENCES =====
    # Match standalone teal-XXX patterns (as fallback)
    $content = $content -replace '\bteal-(\d+)\b', 'custom-blue'
    $content = $content -replace '\bcyan-(\d+)\b', 'custom-blue'
    
    # ===== CSS/CUSTOM PROPERTIES =====
    # Handle CSS custom properties if any
    $content = $content -replace '--teal-', '--custom-blue-'
    $content = $content -replace '--cyan-', '--custom-blue-'
    
    # ===== INLINE STYLES IN SHADOW VARIATIONS =====
    # Handle shadow variations with rgba in Tailwind arbitrary values
    # Example: shadow-[0_0_30px_rgba(20,184,166,0.4)]
    $content = $content -replace 'shadow-\[([^\]]*?)rgba\(20,184,166,([^\]]*?)\]', 'shadow-[$1rgba(53,196,221,$2]'
    $content = $content -replace 'shadow-\[([^\]]*?)rgba\(\s*20\s*,\s*184\s*,\s*166\s*,([^\]]*?)\]', 'shadow-[$1rgba(53, 196, 221, $2]'
    
    # Count replacements
    if ($content -ne $original) {
        $diff = ([regex]::Matches($original, 'teal|cyan|rgba\(20|rgb\(20|#14b8a6|#2dd4bf|#0d9488|#06b6d4|#22d3ee', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        $fileReplacements = $diff
        $totalReplacements += $fileReplacements
        
        try {
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline -ErrorAction Stop
            $updatedFiles++
            Write-Host "✓ Updated: $($file.Name) ($fileReplacements replacements)" -ForegroundColor Green
        } catch {
            Write-Host "✗ Error updating: $($file.Name) - $_" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Replacement Complete!" -ForegroundColor Green
Write-Host "Total files processed: $totalFiles" -ForegroundColor Yellow
Write-Host "Files updated: $updatedFiles" -ForegroundColor Green
Write-Host "Total replacements made: $totalReplacements" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($updatedFiles -gt 0) {
    Write-Host "All teal/cyan colors have been replaced with #35C4DD (Blue)" -ForegroundColor Green
    Write-Host "Target color: #35C4DD | RGB: 53, 196, 221 | HSL: 189, 68%, 54%" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Please review the changes and test your application." -ForegroundColor Yellow
} else {
    Write-Host "No teal/cyan colors found to replace." -ForegroundColor Yellow
}
