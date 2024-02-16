/*
 * JavaScript functions for Survey123
 */

function get_sample_comment(sampler_type, cross_section, discrete_locations,
    verticals, relative_humidity, wind_speed) {
	const sampler_type_split = sampler_type.split('_').join(' ');
    const comment_start = 'We sampled approximately ';
    const sample_comment = comment_start.concat(cross_section, 
        ` of the cross-section at the monitoring location using a `,
        sampler_type_split, ` depth integrating sampler. We collected water from `,
        discrete_locations, ` discrete instream locations using `, verticals,
        ` verticals at each location. Relative humidity and wind speed were also documented at the time of sampling. Relative humidity = `,
        relative_humidity, `% and wind speed = `, wind_speed, 
        ` m/s. Photos documenting conditions were also collected looking upstream and downstream from the sampling location.`)
	return sample_comment;
}
