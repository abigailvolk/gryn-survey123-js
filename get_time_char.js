/*
 * JavaScript function for getting the time as a string.
 * Input: a time object saved within survey123 
 * 		(times are saved internally as Unix time, the number of milliseconds since 1970)
 * Output: a string of the time (colon removed) ex: 1452.
 */

function get_time_char(input_time) {
	const as_time = new Date(input_time);
	const time_string = as_time.toTimeString();
	const time_substr = time_string.substr(0, 5);
	const time_char = time_substr.replace(':', '');
    return time_char;
}

