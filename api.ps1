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
    model   = "qwen3:4b-q4_K_M"
    prompt  = $prompt
    stream  = $false
    think   = $false
    options = @{
        num_ctx = 64000
    }
} | ConvertTo-Json

$response = Invoke-RestMethod `
    -Method Post `
    -Uri "http://donat.fork.hu:11435/api/generate" `
    -ContentType "application/json" `
    -Body $body

$response.response