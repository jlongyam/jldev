import FS_Android from './FS_Android.js';

const fs = new FS_Android();
const select_path = document.querySelector('#select_path');
const input_path = document.querySelector('#input_path');
const pre_log = document.querySelector('#pre_log');

function fs_dir_list() {  
  let fs_path = select_path.selectedOptions[0].textContent;
  let fs_dir_list = fs.listDir(cordova.file[fs_path]);
  fs_dir_list.then(function(data) {
     pre_log.textContent = '\ndata:\n'+JSON.stringify(data,0,2)
  })
}
function select_path_change() {
  input_path.value = select_path.selectedOptions[0].value;
  fs_dir_list();
}
function select_path_init() {
  for(let i in cordova.file) {
    let option = document.createElement('option');
    option.textContent = i;
    option.value = cordova.file[i];
    if(cordova.file[i] === null) option.disabled = 'disabled';
    if(i === 'externalRootDirectory') option.selected = 'selected';
    select_path.appendChild(option);
  }
  input_path.value = select_path.selectedOptions[0].value;
  select_path.addEventListener('change', select_path_change, false)
}
function onDeviceReady() {
  select_path_init();
  fs_dir_list();
}

document.addEventListener("deviceready", onDeviceReady, false );
