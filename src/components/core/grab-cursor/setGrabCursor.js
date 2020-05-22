export default function (moving) {
  const swiper = this;
  if (
    swiper.support.touch ||
    !swiper.params.simulateTouch ||
    (swiper.params.watchOverflow && swiper.isLocked) ||
    swiper.params.cssMode
  )
    return;
  const el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}
