export const HOW = (ref) => {

    let animations = []

    // =========================
    // FRAME 1 : "HOW" POSE
    // =========================

    // 1. LIFT ARMS (Slightly lower than Namaste for a relaxed look)
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 4, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI / 4, "-"]);

    // 2. OPEN THE STANCE
    // We use Math.PI / 2.5 (a higher number than the default 3) to push the elbows OUT
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 2.5, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI / 2.5, "-"]);

    // 3. GENTLE ELBOW BEND
    // Points the forearms forward toward the camera
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 6, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI / 6, "-"]);

    // 4. PALMS FACING CEILING
    // Twist the wrists outward (Y-axis) to flip the palms up
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI / 2, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI / 2, "+"]);

    // Tilt the hands back slightly so the fingers point up/forward
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 6, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI / 6, "-"]);

    // 5. RELAXED FINGERS
    const fingers = ["Index1", "Middle1", "Ring1", "Pinky1"];
    fingers.forEach(f => {
        animations.push([`mixamorigRightHand${f}`, "rotation", "z", Math.PI / 12, "+"]);
        animations.push([`mixamorigLeftHand${f}`, "rotation", "z", -Math.PI / 12, "-"]);
    });

    ref.animations.push(animations);

    // =========================
    // FRAME 2 : CLEAN RESET
    // =========================
    animations = []

    // Return to the EXACT values from your defaultPose code
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI / 3, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);

    fingers.forEach(f => {
        animations.push([`mixamorigRightHand${f}`, "rotation", "z", 0, "-"]);
        animations.push([`mixamorigLeftHand${f}`, "rotation", "z", 0, "+"]);
    });

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}