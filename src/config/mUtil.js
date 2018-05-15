/**
* 储存localStorage
* */
export conset setStore = (name, content) => {
  if(!name){
    return;
  }
  if(typeof  content !== "string"){
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
/**
* 获取localStorage
* */

export const getStorage = (name) => {
  if(!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 * */
export const removeStore = name => {
  if(!name) return;
  window.localStorage.removeItem(name);
};
