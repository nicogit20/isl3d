export const WATER = (ref) => {
    let animations = []

    // Right hand W-shape: index, middle, ring extended, others closed
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/18, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/18, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/18, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/18, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/18, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/18, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/8, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/12, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);

    ref.animations.push(animations);

    // Wave motion - tilt wrist down
    animations = []
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/8, "-"]);
    ref.animations.push(animations);

    // Wave motion - tilt wrist back up
    animations = []
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);
    ref.animations.push(animations);

    // Reset
    animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}