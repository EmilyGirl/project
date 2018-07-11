<template>
  <transition name="jicai-toast-pop">
    <div class="jicai-toast" v-show="visible" :class="customClass">
      <!-- <i class="jicai-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i> -->
      <span class="jicai-toast-text" >{{ message }}</span>
    </div>
  </transition>
</template>

<style>
.jicai-toast {
    position: fixed;
    max-width: 80%;
    /*width: 100%;*/
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    -webkit-transition: opacity .3s linear;
    transition: opacity .3s linear;
      padding:3px;
     border-radius: 40px;
     /*line-height: .7rem;*/
}
.jicai-toast.is-placebottom {
    bottom: 50px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0)
}
.jicai-toast.is-placemiddle {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%)
}
.jicai-toast.is-placetop {
    top: 50px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0)
}
.jicai-toast-icon {
    display: block;
    text-align: center;
    font-size: 56px
}
.jicai-toast-text {
    font-size: 1.4rem;
    /*line-height: 3rem;*/
    padding: 10px 10px;
    line-height: inherit;
    display: block;
    text-align: center
}
.jicai-toast-pop-enter, .jicai-toast-pop-leave-active {
    opacity: 0
}
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      position: {
        type: String,
        default: 'middle'
      },
      // className: {
      //   type: String,
      //   default: ''
      // },
      // iconClass: {
      //   type: String,
      //   default: ''
      // }
    
    },

    data() {
      return {
        visible: false
      };
    },

    computed: {
      customClass() {
        var classes = [];
        switch (this.position) {
          case 'top':
            classes.push('is-placetop');
            break;
          case 'bottom':
            classes.push('is-placebottom');
            break;
          default:
            classes.push('is-placemiddle');
        }
        classes.push(this.className);
        return classes.join(' ');
      }
    }
  };
</script>