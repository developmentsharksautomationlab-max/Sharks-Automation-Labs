# Script to add active state to pricing sections on all service pages
$servicePages = Get-ChildItem -Path "app\our-services" -Recurse -Filter "page.tsx" | Where-Object {
    (Get-Content $_.FullName -Raw) -match "PricingSection"
}

foreach ($file in $servicePages) {
    $content = Get-Content $_.FullName -Raw
    
    # Add useState if not already present
    if ($content -notmatch "const \[activePlanIndex") {
        $content = $content -replace "(const PricingSection = \{ data, index \} => \{[^}]*const sectionRef = useRef\(null\);[^}]*const contentRef = useRef\(null\);)", "`$1`n    const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);"
    }
    
    # Update the map function
    $content = $content -replace "(\{data\.plans\.map\(\(plan, i\) =>) \(", "`$1 {`n                    const isActive = activePlanIndex === i || plan.highlight;`n                    return ("
    
    # Add onClick, onMouseEnter, onMouseLeave
    $content = $content -replace "(<div\s+key=\{i\}[^>]*className=\{[^`"]*pricing-card[^`"]*[^>]*>)", "`$1`n                        onClick={() => setActivePlanIndex(i)}`n                        onMouseEnter={() => setActivePlanIndex(i)}`n                        onMouseLeave={() => setActivePlanIndex(null)}`n                        className={`"pricing-card group relative w-full h-full min-h-[550px] transition-all duration-500 ease-out cursor-pointer`"}"
    
    # Replace plan.highlight with isActive in className conditions
    $content = $content -replace "plan\.highlight \? 'from-\[#00ff88\]", "isActive ? 'from-[#00ff88]"
    $content = $content -replace "plan\.highlight \? 'border-\[#00ff88\]", "isActive ? 'border-[#00ff88]"
    $content = $content -replace "plan\.highlight \? 'text-\[#00ff88\]", "isActive ? 'text-[#00ff88]"
    $content = $content -replace "plan\.highlight \? 'bg-\[#00ff88\]", "isActive ? 'bg-[#00ff88]"
    
    # Update badge condition
    $content = $content -replace "(\{plan\.highlight &&)", "{(isActive || plan.highlight) &&"
    $content = $content -replace "Recommended", "{plan.highlight ? 'Recommended' : 'Selected'}"
    
    # Update closing bracket
    $content = $content -replace "(\s+</div>\s+\)\s*\)\s*\)}", "`$1`n                    );`n                })}"
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.FullName)"
}

Write-Host "`nAll pricing sections updated!"

