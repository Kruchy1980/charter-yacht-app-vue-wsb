
<template>
  <transition name="modal-fade">
    <div class="modal--backdrop">
      <div class="loading__animation---line_dots"><div></div><div></div><div></div><div></div></div>
    </div>
  </transition>
</template> 

<script>
export default { }
</script>

<style scoped>
.modal--backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
/* wbudowane klasy Vue */
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
/* animacja */
.loading__animation---line_dots {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  opacity: 1;
}
.loading__animation---line_dots div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgb(60, 84, 180);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loading__animation---line_dots div:nth-child(1) {
  left: 8px;
  animation: line_dots1 0.6s infinite;
}
.loading__animation---line_dots div:nth-child(2) {
  left: 8px;
  animation: line_dots2 0.6s infinite;
}
.loading__animation---line_dots div:nth-child(3) {
  left: 32px;
  animation: line_dots2 0.6s infinite;
}
.loading__animation---line_dots div:nth-child(4) {
  left: 56px;
  animation: line_dots3 0.6s infinite;
}
@keyframes line_dots1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes line_dots3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes line_dots2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>