export const LOVE = (ref) => {

    let animations = []

    // =========================
    // FRAME 1 : LOVE POSE (Crossed Arms)
    // =========================

    // 1. LIFT ARMS FORWARD (Staggered to cross over each other)
    // Right arm is the lower "under" arm
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 5, "-"]);
    // Left arm is the higher "over" arm
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI / 3.5, "-"]);

    // 2. KEEP ELBOWS TUCKED IN 
    // We use a small number (8) to keep the arms close to the ribs so elbows point down
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 8, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI / 8, "-"]);

    // 3. DEEP ELBOW BEND
    // Now that elbows are pointing down, bending them sweeps the arms horizontally across the chest
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.4, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI / 1.4, "-"]);

    // 4. SOFT FIST CURL
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI / 1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI / 1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI / 1.5, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 1.5, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", Math.PI / 2.5, "-"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI / 1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI / 1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI / 1.5, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI / 1.5, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI / 2.5, "+"]);

    ref.animations.push(animations);

    // =========================
    // FRAME 2 : RESET
    // =========================
    animations = []

    // Reset Arms
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    
    // Reset Swing to Default Pose (Math.PI / 3)
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI / 3, "-"]);

    // Reset Elbows
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    // Reset Fingers
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}