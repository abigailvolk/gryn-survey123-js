/*
 * Calculated the percent difference for two dicharge measurement trials. Used in the Survey123 
 * 	to determine if a 3rd Trial is required.
 */

function get_percent_diff(discharge_1, discharge_2) {
	const dis_avg = ((discharge_1 + discharge_2) / 2);
	const abs_diff = Math.abs(discharge_1 - discharge_2);
	const percent_diff = (abs_diff / dis_avg) * 100;
    return percent_diff.toFixed(3);
}

