/*
 * Gets the Julian day from the input_date (visit date)
 * Input: a time object saved within survey123 
 * 		(times are saved internally as Unix time, the number of milliseconds since 1970)
 * Output: a string of the Julian date (day number of the year) ex: "46" for February 15.
 */

function get_julian(input_date) {
    const now = new Date(input_date);
	const start = new Date(now.getFullYear(), 0, 0);
	var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
	var oneDay = 1000 * 60 * 60 * 24;
	var day = Math.floor(diff / oneDay);
    return day;
}

