module.exports = makeJade;

var jade = require('jade');
var fs = require('fs');
var path = require('path');

function makeJade(root) {
  return function (req, res, next) {
    if (path.extname(req.url) == '.html') {
      var basename = path.basename(req.url).split('.')[0];
      var jadefile = root + '/' + basename + '.jade';
      console.log(jadefile);
      fs.readFile(jadefile, { encoding: "utf8" }, function (err, data) {
        if (err) {
          next();
        }
        var html = jade.render(data);
        res.writeHead(200, {
          'Content-Length': html.length,
          'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(html);
      });
    }
    else {
      next();
    }
  };
}