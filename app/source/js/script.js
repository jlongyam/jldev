import FS_Android from './FS_Android.js'

document.addEventListener("deviceready", function() {
  let fs = new FS_Android()
  let fs_path = 'applicationStorageDirectory'
  let fs_dir_list = fs.listDir(cordova.file[fs_path])

  fs_dir_list.then(function(data) {
    log.textContent = JSON.stringify(data,0,2);
  });