mkdir -p ./html/img

for file in ./**/*.md; do
    folders="$(dirname "$file")"
    mkdir -p ./html/"${folders:2}"
    pandoc --extract-media ./html/img -s "${file}" -o ./html/"${file:2:-3}".html
    # pandoc "${file}" -o ./html/"${file:2:-3}".html
done

pandoc -s ./CONTENTS.md -o ./html/index.html