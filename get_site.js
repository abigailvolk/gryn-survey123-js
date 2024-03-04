/*
 * Determines what site abbreviation to use. The result is the input to creating the ActivityID.
 */

function get_activity_id_input(site, site_other, sbc_sites) {
   if (site == "Other") {
		return site_other;
	} else if (site == "SBC") {
    	return sbc_sites;
	} else {
		return site;
	}
}

