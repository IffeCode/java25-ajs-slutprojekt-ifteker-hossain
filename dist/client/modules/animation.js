"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animatedTitle = animatedTitle;
const animejs_1 = require("animejs");
function animatedTitle() {
    (0, animejs_1.animate)("#scrumboard", {
        translateX: [-100, 100],
        duration: 1000,
        ease: "inOutSine",
        loop: true,
        alternate: true
    });
}
