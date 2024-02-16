/*
 * JavaScript functions for Survey123
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

