'use strict';
class Options{
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    addDiv(text) {
        let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `height: ${parseInt(this.height,10)}px; width: ${parseInt(this.width,10)}px; background: ${this.bg}; 
                            font-size: ${parseInt(this.fontSize,10)}pt; text-align: ${this.textAlign}`;
        document.body.appendChild(div);
    }
}

let newDiv = new Options('150px',300,'yellow',20,'center');
newDiv.addDiv(new Date());