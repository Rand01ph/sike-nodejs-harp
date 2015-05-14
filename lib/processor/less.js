module.exports = makeLess;

var less = require('less');
var fs = require('fs');
var path = require('path');

function makeLess(root) {
  return function (req, res, next) {
    if (path.extname(req.url) == '.css') {
      var basename = path.basename(req.url).split('.')[0];
      var lessfile = root + '/' + basename + '.less';
      console.log(lessfile);
      fs.readFile(lessfile, { encoding: "utf8" }, function (err, data) {
        if (err) {
          next();
        }
        less.render(data, function (e, output) {
          res.writeHead(200, {
            'Content-Length': output.length,
            'Content-Type': 'text/html; charset=UTF-8'
          });
          res.end(output);
        });
      });
    }
    else {
      next();
    }
  };
}