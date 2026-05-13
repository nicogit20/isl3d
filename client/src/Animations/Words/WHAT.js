export const WHAT = (ref) => {

    let animations = []

    // both hands open
    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);

    // shrug shoulders (arms up slightly)
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/8, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/8, "-"]);

    // palms rotate upward
    animations.push(["mixamorigLeftForeArm", "rotation", "z", Math.PI/8, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/8, "-"]);

    ref.animations.push(animations);

    animations = []

    // small repeat shrug motion
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}