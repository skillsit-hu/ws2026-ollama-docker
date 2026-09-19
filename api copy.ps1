$prompt = @"
Készíts egy egyszerű PHP-oldalt.

Követelmények:
- Legyen fejléc és navigáció.
- Használjon szemantikus HTML-elemeket.
- Mobilon is megfelelően jelenjen meg.
- JavaScriptet ne használjon.

Csak a teljes forráskódot add vissza.
"@
$body = @{
    model   = "gemma4:e4b-it-qat"
    prompt  = $prompt
    stream  = $false
    think   = $false
    options = @{
        num_ctx = 4096
    }
} | ConvertTo-Json

$response = Invoke-RestMethod `
    -Method Post `
    -Uri "http://127.0.0.1:11434/api/generate" `
    -ContentType "application/json" `
    -Body $body

$response.response