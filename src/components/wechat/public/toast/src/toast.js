import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));
//Vue.extend( options )  使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

// 复用 vue toast  实例    1 为什么只用一次  2 为什么复用实例，会直接被删除dom
let toastPool = [];
let getAnInstance = () => {
 
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

let removeDom = event => {
  // console.log('x销毁dom')
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastConstructor.prototype.close = function() {
  // console.log(toastPool)
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);

  // transitionend 事件在 CSS 完成过渡后触发。(Toast 消失 触发这个 函数)
  this.closed = true;

  returnAnInstance(this);
  // 实例   拿出来的   用完再放进去     ， 
};

let Toast = (options = {}) => {
  let duration = options.duration || 3000;
  let instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'bottom';
  // instance.className = options.className || '';
  // instance.iconClass = options.iconClass || '';

  document.body.appendChild(instance.$el);

  // nextTick里面的代码会在DOM更新后执行
  Vue.nextTick(function() {

    instance.visible = true;

    instance.$el.removeEventListener('transitionend', removeDom);  //不用这个  dom   用以前的 实例  dom会直接给删了   ????????
   
    ~duration && (instance.timer = setTimeout(function() {
      if (instance.closed) return;
     // console.log('进入延迟函数')
      instance.close();
    }, duration));
  });
  return instance;
};

export default Toast;
