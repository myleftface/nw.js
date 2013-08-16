var spawn = require('child_process').spawn;
var os = require('os');
describe('app_path_escaping',function(){
  it('app should start normally with directory named xdk',function(done){
    this.timeout(0);
    if(os.platform() == "win32"){
      var app = spawn(process.execPath, [path.join(global.tests_dir, 'app_path_escape/xdk')]);
      setTimeout(function() {
        app.kill();
        done('the app is not executed');
      }, 5000);
    }
    else
      done();
  })
})
