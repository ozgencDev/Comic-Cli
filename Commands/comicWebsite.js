const lodash = require("lodash");

const comicWebsite = [
  "existentialcomics.com",
  "xkcd.com",
  "smbc-comics.com",
  "explosm.net",
  "phdcomics.com",
  "geek-and-poke.com",
  "thedoghousediaries.com",
  "abstrusegoose.com",
  "dilbert.com",
  "userfriendly.org",
  " nuklearpower.com",
  "penny-arcade.com",
  "sluggy.com",
  "vgcats.com",
  "dieselsweeties.com",
  "qwantz.com",
  "questionablecontent.net",
];

const comicWebsiteRandom = [
  "existentialcomics.com/comic/random",
  "c.xkcd.com/random/comic/",
  "smbc-comics.com",
  "explosm.net/comics/random",
  `phdcomics.comcomics/archive.php?comicid=${lodash.random(1, 2049)}`,
  "geek-and-poke.com",
  `thedoghousediaries.com/${lodash.random(1, 6029)}`,
  "abstrusegoose.com/pseudorandom.php",
  "dilbert.com",
  "userfriendly.org/cgi-bin/randomcart.cgi",
  "nuklearpower.com",
  "penny-arcade.com",
  "dieselsweeties.com",
  "qwantz.com",
  `questionablecontent.net/view.php?comic=${lodash.random(1, 4677)}`,
];

exports.comicWebsite = comicWebsite;
exports.comicWebsiteRandom = comicWebsiteRandom;
