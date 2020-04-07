import P5 from "p5";

const sk = (p5) => {
    p5.preload = () => {
        // load assets here
    }

    p5.setup = () => {
        p5.createCanvas(500, 500);
    }

    p5.draw = () => {
        p5.background("red");
    }
}

new P5(sk);