/*
 * Returns: the year as a two digit string. Ex: "24" for 2024.
 */

function get_year(input_date) {
	const date = new Date(input_date);
	const year = date.getFullYear();
	const year_str = year.toString();
	const year_two_dig = year_str.substr(2, 4);
    return year_two_dig;
}

