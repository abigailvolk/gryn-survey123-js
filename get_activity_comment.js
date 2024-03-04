/*
 * Inputs: discharge = "discharge" if discharge is measured, sample_collection = "sample_collection"
 * 	if samples are collected, the sampler_type, cross_section, discrete_locations, verticals,
 * 	relative_humidity, and wind_speed. These are all options in the Survey123.
 * Output: a long string (>300 characters) that can be used for the activity comment on NPSTORET.
 */

function get_sample_comment(discharge, sample_collection, sampler_type, cross_section, discrete_locations,
    verticals, relative_humidity, wind_speed) {
    let discharge_comment = ``;
    let sample_comment = ``;
    if (discharge == "discharge") {
        discharge_comment = `We measured core parameters and estimated discharge with a flow meter at the monitoring location. `;
    } 
	if (sample_collection == "sample_collection") {
        const sampler_type_split = sampler_type.split('_').join(' ');
        const comment_start = 'We sampled approximately ';
        sample_comment = comment_start.concat(cross_section, 
            ` of the cross-section at the monitoring location using a `,
            sampler_type_split, ` depth integrating sampler. We collected water from `,
            discrete_locations, ` discrete instream locations using `, verticals,
            ` verticals at each location.`);
    }
	const weather_start = ` Relative humidity and wind speed were also documented at the time of sampling. Relative humidity = `;
    const weather_comment = weather_start.concat(relative_humidity, `% and wind speed = `, wind_speed, 
        ` m/s. Photos documenting conditions were also collected looking upstream and downstream from the sampling location.`);
    const activity_comment = discharge_comment.concat(sample_comment, weather_comment);
	return activity_comment;
}

