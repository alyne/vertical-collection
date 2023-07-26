import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

function numberToOpacity(number) {
  let r = number % 255;

  if (r === 0) {
    return 1;
  }
  if (r === 254) {
    return 0;
  }

  return (255 / r).toFixed(3);
}

export default class NumberSlideComponent extends Component {
  get prefixed() {
    return this.args.prefixed ?? false;
  }

  get itemIndex() {
    return this.args.itemIndex ?? 0;
  }

  get number() {
    return this.args.item?.number;
  }

  get style() {
    const { item = null, isDynamic = false } = this.args;

    const { height, number } = item;

    const opacity = numberToOpacity(number);
    let styleStr = `background: rgba(0,125,255,${opacity});`;

    if (isDynamic) {
      styleStr += `height: ${Math.round(height)}px; box-sizing: content-box;`;
    }

    return htmlSafe(styleStr);
  }
}
