/*
 * Inputs: strings for park ("YELL"), site ("MDR"), year ("24"), julian ("52"), clock ("1032"),
 * 	whether it is a rep or not (rep = 0 returns "-2" on the end of the activity ID).
 * Outputs: activityID string. 
 */

function get_activity_id(park, site, year, julian, clock, rep) {
    const activity_id = park.concat("_", site, "_", year, julian, clock);
	if (rep != 0) {
		const activity_id_rep = activity_id.concat("-2");
		return activity_id_rep;
	} else {
    	return activity_id;
	}
}

