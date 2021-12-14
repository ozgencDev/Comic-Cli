const { comicWebsiteRandom } = require("./comicWebsite.js");
const open = require("open");

async function randomComic() {
  await open(
    "https://" +
      comicWebsiteRandom[Math.floor(Math.random() * comicWebsiteRandom.length)]
  );
}

module.exports = randomComic;
