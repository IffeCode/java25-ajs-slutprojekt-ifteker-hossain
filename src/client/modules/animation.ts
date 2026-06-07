import {animate} from "animejs";

export function animatedTitle(){

    animate("#scrumboard", { 
        translateX: [-100, 100],
        duration: 1000,
        ease: "inOutSine",
        loop: true,
        alternate: true
    });

}