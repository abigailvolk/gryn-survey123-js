/*
 * JavaScript function to take the average of the Sonde readings.
 * Inputs: the sonde_parameters_repeat question you are averaging (ex: ${water_temp})
 * 		decimal places you want to round to (default is 2)
 * 		and whether you are taking the average of ph (ph = 1) or not (ph = 0, default). 
 * Returns: the mean of the array. 
 */

function get_average(repeat_params, decimals = 2, ph = 0) {
	if (repeat_params.length < 1) {
		return;
	} else if (ph == 0){
		const average = repeat_params.reduce((prev, current) => prev + current) /
			repeat_params.length;
		return average.toFixed(decimals);
	} else {
		let params_antilog = [];
		for (let i = 0, len = repeat_params.length; i < len; i++) {
			params_antilog[i] = Math.pow(10, -repeat_params[i]);
		}
		const ph_average = params_antilog.reduce((prev, current) => prev + current) /
			params_antilog.length;
		const log_ph_average = -Math.log10(ph_average)
		return log_ph_average.toFixed(decimals);
	}	
}