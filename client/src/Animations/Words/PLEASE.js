export const PLEASE = (ref) => {
    let animations = [];

    // FRAME 1: Prepare (Untwist Forearm and lift Shoulder slightly)
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 6, "-"]); 
    ref.animations.push(animations);

    // FRAME 2: Flat palm to Center Chest
    animations = [];
    // Negative X lifts the arm UP from the side
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 2.5, "-"]); 
    // Positive Z swings the arm ACROSS the chest
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 4, "+"]); 
    // Bend the elbow hinge (Z) to bring hand to body
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.8, "+"]); 
    // Flatten wrist against chest
    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI / 4, "-"]); 
    ref.animations.push(animations);

    // FRAME 3: Reset part 1 (Drop and Straighten)
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(animations);

    // FRAME 4: Reset part 2 (Re-twist to your defaultPose)
    animations = [];
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
}