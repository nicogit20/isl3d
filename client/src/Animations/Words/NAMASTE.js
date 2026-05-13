export const NAMASTE = (ref) => {

    let animations = []

    // =========================
    // FRAME 1 : NAMASTE POSE
    // =========================

    // Lift Arms (This gives the smooth, horizontal sweep to the chest!)
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 2.1, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI / 2.1, "-"]);

    // Swing to Center
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 2.6, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI / 2.6, "-"]);

    // Deep Elbow Bend (Joins the hands perfectly in the center)
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.35, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI / 1.35, "-"]);

    // Wrists: Fingers pointing UP (Z) and Palms FLAT against each other (X)
    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI / 2, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI / 2, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 6, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI / 6, "-"]);

    // Keep fingers completely straight
    animations.push(["mixamorigRightHandIndex1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "x", 0, "+"]);

    ref.animations.push(animations);

    // =========================
    // FRAME 2 : RESET
    // =========================

    animations = []

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);

    // Reset swing using your EXACT default pose values to ensure smooth exit
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI / 3, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}