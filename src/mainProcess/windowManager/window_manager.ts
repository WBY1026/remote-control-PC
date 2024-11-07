

const winDict:WindowDict = {};

import { WindowDict, EWindow } from "@/mainProcess/windowManager/window_manager.types";

const WindowDictProxy = new Proxy(winDict, {
  // 当访问 WindowDictProxy 中的属性时，触发该方法。
  // 返回原始对象 obj 中对应属性的值。这是对获取操作的简单转发
  get: function(obj:WindowDict, prop:string){
    return obj[prop]
  },
  // 当试图设置 WindowDictProxy 中的属性时，触发该方法。
  // 检查 obj 中是否已经存在该属性。如果存在，记录错误日志并返回 false。
  // 如果该属性不存在，将其值设置为 value，并返回 true
  set: function(obj:WindowDict, prop:string, value:EWindow){
    if(obj[prop]){
      console.log(`Window id '${prop}' has already existed.`)
      return false
    }else{
      obj[prop] = value;
      return true;
    }
  },
  // 当使用 in 运算符检查属性是否存在时，触发该方法。
  // 返回 true 如果 target 中有指定的 key，否则返回 false。
  has(target:WindowDict, key:string) {
    if(Object.getOwnPropertyNames(target).includes(key)){
      return true
    }else{
      return false
    }
  },
  // 当使用 Object.keys()、Object.getOwnPropertyNames() 或 for...in 循环时，触发该方法。
  // 返回 target 中所有自有属性的名称，构成一个数组。
  ownKeys:function(target:WindowDict){
    return [...Object.getOwnPropertyNames(target)]
  },
  // 当尝试删除 WindowDictProxy 中的属性时，触发该方法。
  // 尝试删除 target 中的属性，如果成功返回 true。
  // 如果删除失败，捕获异常，记录警告日志并返回 false。
  deleteProperty: function(target:WindowDict, prop:string){
    try{
      delete target[prop]
      return true;
    }catch(e){
      console.log(e);
      return false;
    }
  }
})

/** 通过 id 托管窗口
 * 
 * 即将id作为键，将窗口对象存入字典
 */
function setWindowById(Window: EWindow){
  try{
    const id = Window.id.toString();
    WindowDictProxy[id] = Window;
    return id;
  }
  catch(e){
    console.log(`Can not set Window By ID '${Window.id}', as the following reasons:\n${e}`)
    return ;
  }
}

/**通过ID索引窗口
 * 
 * (获取窗口实例) 
 */
function getWindowById(id:string):EWindow{
  return WindowDictProxy[id]
}

/**通过 ID 隐藏窗口 */
function hideWindowById(id:string){
  try{
    getWindowById(id).hide()
    return true;
  }catch(e){
    console.log(`Can not hide Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/**通过 ID 显示窗口 */
function showWindowById(id:string){
  try{
    getWindowById(id).show()
    return true;
  }catch(e){
    console.log(`Can not show Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}
/**通过 ID 关闭窗口 */
function closeWindowById(id:string){
  try{
    getWindowById(id).close();
    delete WindowDictProxy[id];
    return true;
  }catch(e){
    console.log(`Can not close Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}
/**通过 ID 最大化窗口 */
function maximizeWindowById(id:string){
  try{
    getWindowById(id).maximize();
    return true;
  }catch(e){
    console.log(`Can not maximize Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}
/**通过 ID 最小化窗口 */
function minimizeWindowById(id:string){
  try{
    getWindowById(id).minimize();
    return true;
  }catch(e){
    console.log(`Can not minimize Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}
/**通过 ID 还原窗口 */
function restoreWindowById(id:string){
  try{
    getWindowById(id).restore();
    return true;
  }catch(e){
    console.log(`Can not restore Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/**关闭所有窗口 */
function closeAllWindows(){
  Object.getOwnPropertyNames(WindowDictProxy).forEach(
    (id:string)=>{
      WindowDictProxy[id].close();
      delete WindowDictProxy[id];
    }
  )
}

export default {
  setWindowById,
  getWindowById,
  hideWindowById,
  showWindowById,
  closeWindowById,
  maximizeWindowById,
  minimizeWindowById,
  restoreWindowById,
  closeAllWindows
}