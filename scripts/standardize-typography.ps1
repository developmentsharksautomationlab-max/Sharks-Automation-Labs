# Script to standardize typography across all service pages
$servicePages = Get-ChildItem -Path "app\our-services" -Recurse -Filter "page.tsx"

foreach ($file in $servicePages) {
    $content = Get-Content $file.FullName -Raw
    
    # Standardize H2 headings (Section titles)
    $content = $content -replace 'text-5xl md:text-7xl', 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
    $content = $content -replace 'text-6xl md:text-8xl lg:text-9xl', 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
    $content = $content -replace 'text-5xl md:text-8xl', 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
    $content = $content -replace 'text-6xl md:text-9xl', 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
    
    # Standardize H3 headings (Subsection titles)
    $content = $content -replace 'text-3xl md:text-4xl', 'text-xl sm:text-2xl md:text-3xl'
    $content = $content -replace 'text-2xl font-bold', 'text-lg sm:text-xl md:text-2xl font-bold'
    $content = $content -replace 'text-4xl md:text-5xl', 'text-2xl sm:text-3xl md:text-4xl'
    
    # Standardize body text (Descriptions)
    $content = $content -replace 'text-lg md:text-xl', 'text-sm sm:text-base md:text-lg'
    $content = $content -replace 'text-xl md:text-2xl', 'text-base sm:text-lg md:text-xl'
    $content = $content -replace 'text-white text-lg', 'text-white text-sm sm:text-base md:text-lg'
    $content = $content -replace 'text-gray-400 text-lg', 'text-gray-400 text-sm sm:text-base md:text-lg'
    $content = $content -replace 'text-gray-200.*text-xl md:text-2xl', 'text-gray-200 text-base sm:text-lg md:text-xl'
    
    # Standardize small text
    $content = $content -replace 'text-sm md:text-base', 'text-xs sm:text-sm'
    $content = $content -replace 'text-white/50.*text-sm md:text-base', 'text-white/50 text-xs sm:text-sm md:text-base'
    
    # Standardize button text (keep existing button sizes)
    # Buttons are already standardized
    
    # Fix font-black to font-bold for consistency (except where needed for design)
    # Keep font-black for large display text only
    
    Set-Content $file.FullName -Value $content -NoNewline
    Write-Host "Standardized: $($file.FullName)"
}

Write-Host "All service pages standardized!"

