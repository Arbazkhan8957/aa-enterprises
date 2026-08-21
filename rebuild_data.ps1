$scripts = @(
  "scripts/restore_data.cjs",
  "update_data.js",
  "update_data_phase2.js",
  "update_big_details.js",
  #"remove_sibass_pb.js",
  #"remove_categories.js",
  "process_images.js",
  "update_nc_contactors.js",
  "update_no_contactors.js",
  "update_nc_images.js",
  "update_led_images.js",
  "update_white_led.js",
  "update_led_ext.js",
  "fix_leds.js",
  "update_5_images.js",
  "update_3_images.js",
  "add_ammeters.js",
  "add_va.js",
  #"remove_duplicates.js",
  "fix_va.js",
  "fix_oval_fans.cjs",
  "generateDescriptions.cjs"
)

foreach ($script in $scripts) {
  Write-Host "Running $script ..."
  node $script
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Error running $script"
    exit $LASTEXITCODE
  }
  $lines = (Get-Content d:\aa-enterprises\src\data.js | Measure-Object -Line).Lines
  Write-Host "Lines after $script : $lines"
}
Write-Host "All scripts ran successfully!"
