export const SORRY = (ref) => {
    let animations = [];
    const fingers = ["Index", "Middle", "Ring", "Pinky"];

    // FRAME 1: Untwist and Form Fist
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    fingers.forEach(f => {
        animations.push([`mixamorigRightHand${f}1`, "rotation", "z", Math.PI/2, "+"]);
        animations.push([`mixamorigRightHand${f}2`, "rotation", "z", Math.PI/2, "+"]);
    });
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(animations);

    // FRAME 2: Fist to Center Chest
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 2.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 4, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.8, "+"]); 
    ref.animations.push(animations);

    // FRAME 3: Reset part 1 (Open fist and Straighten)
    animations = [];
    fingers.forEach(f => {
        animations.push([`mixamorigRightHand${f}1`, "rotation", "z", 0, "-"]);
        animations.push([`mixamorigRightHand${f}2`, "rotation", "z", 0, "-"]);
    });
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    ref.animations.push(animations);

    // FRAME 4: Reset part 2 (Re-twist to defaultPose)
    animations = [];
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
}