# Script to remove Header imports and custom CSS overrides from all service pages
$servicePages = @(
    "app\our-services\creative-services\creative-design\page.tsx",
    "app\our-services\digital-services\app-development\page.tsx",
    "app\our-services\digital-services\performance-marketing\page.tsx",
    "app\our-services\digital-services\seo\page.tsx",
    "app\our-services\digital-services\social-media\page.tsx",
    "app\our-services\digital-services\web-development\page.tsx",
    "app\our-services\emerging-technologies\ar\page.tsx",
    "app\our-services\emerging-technologies\blockchain\page.tsx",
    "app\our-services\emerging-technologies\nfts\page.tsx",
    "app\our-services\emerging-technologies\vr\page.tsx",
    "app\our-services\emerging-technologies\web3\page.tsx",
    "app\our-services\industry-plans\cleaning\page.tsx",
    "app\our-services\industry-plans\digital-agency\page.tsx",
    "app\our-services\industry-plans\ecommerce\page.tsx",
    "app\our-services\industry-plans\financial\page.tsx",
    "app\our-services\industry-plans\healthcare\page.tsx",
    "app\our-services\industry-plans\law-firms\page.tsx",
    "app\our-services\industry-plans\professional\page.tsx",
    "app\our-services\industry-plans\real-estate\page.tsx",
    "app\our-services\industry-plans\restaurants\page.tsx",
    "app\our-services\industry-plans\vehicle-rental\page.tsx",
    "app\our-services\outsourcing-partnership\agency-plan\page.tsx",
    "app\our-services\outsourcing-partnership\outsourcing\page.tsx",
    "app\our-services\virtual-resources\designer-resources\page.tsx",
    "app\our-services\virtual-resources\developer-resources\page.tsx",
    "app\our-services\virtual-resources\marketing-resources\page.tsx",
    "app\our-services\virtual-resources\virtual-assistant\page.tsx"
)

foreach ($file in $servicePages) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Remove Header import
        $content = $content -replace "import Header from [\""']@/components/Header[\""'];\s*\r?\n", ""
        $content = $content -replace "import Header from [\""']\.\.\/\.\.\/components\/Header[\""'];\s*\r?\n", ""
        
        # Remove Header usage
        $content = $content -replace "<div className=[\""']header-wrapper-creative-design[\""']>\s*<Header />\s*</div>", ""
        $content = $content -replace "<Header />\s*\r?\n", ""
        
        # Remove headerRef and parallax logic
        $content = $content -replace "const headerRef = useRef\(null\);\s*\r?\n", ""
        $content = $content -replace "// Parallax for header\s*\r?\n\s*if \(headerRef\.current\) \{[^}]*\}", ""
        
        # Remove headerRef from JSX
        $content = $content -replace "ref=\{headerRef\}", ""
        
        # Remove custom CSS for header-wrapper
        $content = $content -replace "\.header-wrapper-creative-design nav \{[^}]*\}", ""
        
        Set-Content $file -Value $content -NoNewline
        Write-Host "Fixed: $file"
    }
}

Write-Host "All service pages fixed!"

