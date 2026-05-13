export const THANKYOU = (ref) => {

    let animations = []

    // FRAME 1: Prepare (Untwist and bring arm forward)
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    // Neutralize shoulder before the lift
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "-"]); 
    ref.animations.push(animations);

    // FRAME 2: Lift and Touch Chin
    animations = []
    
    // ADJUSTED: Slightly less lift (X) to stay at chin level instead of eyes
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 1.8, "-"]); 
    // INCREASED SWING: Bring hand further inward to hit the center
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3.5, "+"]); 
    // ELBOW HINGE: Standard bend
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 2, "+"]); 
    // WRIST TILT: Down toward the chin
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI / 12, "+"]); 

    ref.animations.push(animations);

    // FRAME 3: Move outward (The release)
    animations = []
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 4, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 6, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    ref.animations.push(animations);

    // FRAME 4: Drop and Straighten
    animations = []
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