export const HELLO = (ref) => {

    let animations = []

    // Frame 1 — Raise right hand

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        -Math.PI / 3,
        "-"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "z",
        Math.PI / 2.2,
        "+"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "x",
        -Math.PI / 5,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        Math.PI / 10,
        "+"
    ]);

    ref.animations.push(animations);

    // Frame 2 — Wave right

    animations = []

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        Math.PI / 8,
        "+"
    ]);

    ref.animations.push(animations);

    // Frame 3 — Wave left

    animations = []

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        -Math.PI / 8,
        "-"
    ]);

    ref.animations.push(animations);

    // Frame 4 — Reset EXACTLY to your original pose

    animations = []

    // Right arm back to original
    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "z",
        Math.PI / 3,
        "-"
    ]);

    // Right forearm original
    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "x",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "y",
        Math.PI / 1.5,
        "+"
    ]);

    // Right hand original
    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        0,
        "-"
    ]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}