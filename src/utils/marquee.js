const lerp = (current, target, factor) =>
    current * (1 - factor) + target * factor;

var checkScrollSpeed = (function (settings) {
    settings = settings || {};

    var lastPos,
        newPos,
        timer,
        delta,
        delay = settings.delay || 50;

    function clear() {
        lastPos = null;
        delta = 0;
    }

    clear();

    return function () {
        newPos = window.scrollY;
        if (lastPos != null) {
            delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return Math.abs(delta);
    };
})();

class LoopingText {
    constructor(el, direction, speed) {
        this.el = el;
        this.lerp = { current: 0, target: 0 };
        this.interpolationFactor = 0.1;
        this.speed = Number(speed) / 10;
        this.direction = direction;

        this.el.style.cssText = `position: relative; display: inline-flex; white-space: nowrap;`;
        this.el.children[1].style.cssText = `position: absolute; left: ${
            100 * -this.direction
        }%;`;
        this.events()
        this.render();
        
    }
    
    events() {
        window.onscroll = () => {
            this.lerp.target += this.speed * checkScrollSpeed() / 6
        };
    }

    animate() {
        this.lerp.target += this.speed;
        this.lerp.current = lerp(
            this.lerp.current,
            this.lerp.target,
            this.interpolationFactor
        );

        if (this.lerp.target > 100) {
            this.lerp.current -= this.lerp.target;
            this.lerp.target = 0;
        }
        const x = this.lerp.current * this.direction;
        this.el.style.transform = `translateX(${x}%)`;
    }

    render() {
        this.animate();
        window.requestAnimationFrame(() => this.render());
    }
}

export default LoopingText