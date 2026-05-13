export const BOY = (ref) => {
    let animations = []
    const fingers = ["Middle", "Ring", "Pinky"];

    // FRAME 1: Prepare (Untwist and lift arm slightly)
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "-"]); 
    ref.animations.push(animations);

    // FRAME 2: Form hand shape and bring to Cheek
    animations = []
    // Lift arm to cheek level
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 1.8, "-"]); 
    // Swing arm inward but stop at the cheek (less swing than THANKYOU)
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 8, "+"]); 
    // Bend elbow hinge
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.6, "+"]); 
    
    // FORM HAND SHAPE: Close other fingers into a fist
    fingers.forEach(f => {
        animations.push([`mixamorigRightHand${f}1`, "rotation", "z", Math.PI/2, "+"]);
        animations.push([`mixamorigRightHand${f}2`, "rotation", "z", Math.PI/2, "+"]);
    });
    // Keep Index finger slightly hooked and Thumb out
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    ref.animations.push(animations);

    // FRAME 3: Move outward (The release)
    animations = []
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 4, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 6, "-"]);
    ref.animations.push(animations);

    // FRAME 4: Reset part 1 (Open hand and straighten)
    animations = []
    fingers.forEach(f => {
        animations.push([`mixamorigRightHand${f}1`, "rotation", "z", 0, "-"]);
        animations.push([`mixamorigRightHand${f}2`, "rotation", "z", 0, "-"]);
    });
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    ref.animations.push(animations);

    // FRAME 5: Re-twist to original Default Pose
    animations = []
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}