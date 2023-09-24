/**
 * Given a distance, n, count the total number of ways to cover n number of steps with one, two,
and three steps. For example, when n=3, there are four combinations (ways), shown here:
1 step, 1 step, 1 step, 1 step
1 step, 1 step, 2 steps
1 step, 3 steps
2 steps, 2 steps
 */

function waysToCoverSteps(step) {
    if (step < 0) return 0;
    if (step == 0) return 1;

    return (
        waysToCoverSteps(step - 1) +
        waysToCoverSteps(step - 2) +
        waysToCoverSteps(step - 3)
    );
}

var cache = {};

function waysToCoverStepsDP(step) {
    if (step < 0) return 0;
    if (step == 0) return 1;

    // check if exists in cache
    if (cache[step]) {
        return cache[step];
    } else {
        cache[step] = (
            waysToCoverStepsDP(step - 1) +
            waysToCoverStepsDP(step - 2) + waysToCoverStepsDP(step - 3)
        );
        return cache[step];
    }
}

waysToCoverSteps(12);