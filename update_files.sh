#!/bin/bash

# Update header in all HTML files
for file in *.html; do
  # Skip if no files found
  [ -f "$file" ] || continue
  
  echo "Updating $file..."
  
  # Create a temporary file for the new content
  tmpfile=$(mktemp)
  
  # Process the file
  awk '
  # Before the header
  /<!-- Header -->/ {
    print "<!--#include virtual=\"/components/header.html\" -->";
    skip = 1;
    next;
  }
  # After the header
  /<\/header>/ {
    if (skip) {
      skip = 0;
      next;
    }
  }
  # Before the footer
  <!-- Footer --> {
    print "<!--#include virtual=\"/components/footer.html\" -->";
    skip = 1;
    next;
  }
  # After the footer
  /<\/footer>/ {
    if (skip) {
      skip = 0;
      next;
    }
  }
  # Skip lines between header and footer
  {
    if (!skip) print $0;
  }
  ' "$file" > "$tmpfile"
  
  # Replace Architect Studio with Archview Planners
  sed -i 's/Architect Studio/Archview Planners/g' "$tmpfile"
  sed -i 's/architectstudio.com/archviewplanners.com/g' "$tmpfile"
  
  # Copy the temporary file back to the original
  mv "$tmpfile" "$file"
  
  # Add SSI (Server Side Includes) directive if not present
  if ! grep -q "<!--#include" "$file"; then
    sed -i '1s|^|<!--#include virtual="/components/header.html" -->\n|' "$file"
    echo '<!--#include virtual="/components/footer.html" -->' >> "$file"
  fi
done

echo "All files have been updated successfully."
