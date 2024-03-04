/*
 * Inputs: the measured discharge for each trial with the percent difference.
 * Outputs: the average of the two trials, or the average of three trials if the percent_diff is 
 *	greater than 10%.
 */

function get_discharge_avg(discharge_1, discharge_2, discharge_3, percent_diff) {
	if (percent_diff > 10) {
		const trial_3_avg = (discharge_1 + discharge_2 + discharge_3) / 3;
		return trial_3_avg.toFixed(4);
	} else {
		const trial_2_avg = (discharge_1 + discharge_2) / 2;
		return trial_2_avg.toFixed(4);
	}
}

