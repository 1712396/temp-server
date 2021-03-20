var express = require('express');
var bodyParser = require('body-parser');
let request = require('request');
var app = express();

let arrMasterCallManager = [];
// parse application/x-www-form-urlencoded

// parse application/json

app.set('view engine', 'ejs');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.get('/', (req, res) => res.send('api temp-master'));

app.listen(process.env.PORT || 8080, () => {
  setTimeout(() => {
    process.exit();
  }, 25 * 60 * 1000)
  console.log('server dang nghe');
  var d = new Date();
  var n = parseInt(d.getMinutes());
  if (n <= 20) {
    let arrManager = ["manager-heroku-0-0",
      "manager-heroku-0-1",
      "manager-heroku-0-2",
      "manager-heroku-0-3",
      "manager-heroku-0-4",
      "manager-heroku-0-5",
      "manager-heroku-0-6",
      "manager-heroku-0-7",
      "manager-heroku-0-8",
      "manager-heroku-0-9",
      "manager-heroku-0-10",
      "manager-heroku-0-11",
      "manager-heroku-1-0",
      "manager-heroku-1-1",
      "manager-heroku-1-2",
      "manager-heroku-1-3",
      "manager-heroku-1-4",
      "manager-heroku-1-5",
      "manager-heroku-1-6",
      "manager-heroku-1-7",
      "manager-heroku-1-8",
      "manager-heroku-1-9",
      "manager-heroku-1-10",
      "manager-heroku-1-11"]
    let arrManagerJobLinks = [
      "https://www.dropbox.com/s/g3ys0ehji7360tk/manager-heroku-0-0.txt?dl=1",
      "https://www.dropbox.com/s/w67rzsvqpes0bwz/manager-heroku-0-1.txt?dl=1",
      "https://www.dropbox.com/s/vfqbqokhs9bao42/manager-heroku-0-2.txt?dl=1",
      "https://www.dropbox.com/s/84cxhkpyn6hl5yl/manager-heroku-0-3.txt?dl=1",
      "https://www.dropbox.com/s/v5vp14knkxv8evu/manager-heroku-0-4.txt?dl=1",
      "https://www.dropbox.com/s/cba9gro2pr9ew3y/manager-heroku-0-5.txt?dl=1",
      "https://www.dropbox.com/s/8wpmrh7nz8kq9jk/manager-heroku-0-6.txt?dl=1",
      "https://www.dropbox.com/s/66kcjtm97duok3v/manager-heroku-0-7.txt?dl=1",
      "https://www.dropbox.com/s/phk0862iljggnxr/manager-heroku-0-8.txt?dl=1",
      "https://www.dropbox.com/s/bknzm4w3ok11raf/manager-heroku-0-9.txt?dl=1",
      "https://www.dropbox.com/s/6ya1g75aqa4letc/manager-heroku-0-10.txt?dl=1",
      "https://www.dropbox.com/s/zy84n0iujajdo64/manager-heroku-0-11.txt?dl=1",
      "https://www.dropbox.com/s/v2mqh6tb876kn97/manager-heroku-1-0.txt?dl=1",
      "https://www.dropbox.com/s/pi88siu39cnuhnu/manager-heroku-1-1.txt?dl=1",
      "https://www.dropbox.com/s/8r8sbu9pdhxn3ie/manager-heroku-1-2.txt?dl=1",
      "https://www.dropbox.com/s/75vf314yabyqquo/manager-heroku-1-3.txt?dl=1",
      "https://www.dropbox.com/s/bjsjfa13veb3npf/manager-heroku-1-4.txt?dl=1",
      "https://www.dropbox.com/s/m1y8l0ji9n8jcyj/manager-heroku-1-5.txt?dl=1",
      "https://www.dropbox.com/s/tanmxy0gxtp0au5/manager-heroku-1-6.txt?dl=1",
      "https://www.dropbox.com/s/7sxsx69cvhi9tal/manager-heroku-1-7.txt?dl=1",
      "https://www.dropbox.com/s/gc1jzdduv7oav4g/manager-heroku-1-8.txt?dl=1",
      "https://www.dropbox.com/s/5zb7bsxf6izye68/manager-heroku-1-9.txt?dl=1",
      "https://www.dropbox.com/s/aus0m58xpjfzvwm/manager-heroku-1-10.txt?dl=1",
      "https://www.dropbox.com/s/72g8vvni5iivuxm/manager-heroku-1-11.txt?dl=1"
    ];
    let delay = function (time) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, time)
      })
    }
    function callManager(i) {
      console.log('call manager ' + i);
      if (i >= arrManager.length) {
        return;
      }
      request(
        {
          followAllRedirects: true,
          url: 'https://' + arrManager[i] + '.herokuapp.com/run?link=' + arrManagerJobLinks[i]
        },
        function (error, response, body) {
          arrMasterCallManager.push({ manager: body, time: new Date() })
        }
      );
      callManager(i + 1)
    }
    let k = 0;
    callManager(k);
  }
})
