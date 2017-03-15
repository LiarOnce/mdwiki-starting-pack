# mdwiki-starting-pack
Quickly build wiki site with MDwiki.

# How to use
```bash
# clone.
git clone https://github.com/LiarOnce/mdwiki-starting-pack
cd mdwiki-starting-pack

# set config.json.
cd main
nano config.json

# set navigation.md.
nano navigation.md

# edit index.html title
nano index.html

# install dependencies.
cd ..
sudo npm install -g nodejieba
sudo npm install -g remove-markdown

# generate search_index.json.
node search.js main main/search_index.json
```
Upload all files in the `main` folder and favicon.ico.

Have fun!.

# Thanks

@zohead Provided the search.js script.
