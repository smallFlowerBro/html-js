/*通用模块*/
"use strict"
const isEmpty=function(obj){
	if(obj==undefined||obj==null||obj==""){
		return true
	}else{
		return false;
	}
}
export {
	isEmpty
};