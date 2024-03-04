/*
 * Returns a comment for the blanks depending on type! Associates it with the ActivityID and date.
 */

function get_blanks_comment(blank_type, activity_id, date_string) {
    if (blank_type == "qc_field_blank") {
        const field_start = 'A field blank was completed during our sample visit and represents a quality control sample associated with Activity ID ';
        const field_blank_comment = field_start.concat(activity_id, ' collected on ',
            date_string);
        return field_blank_comment;
    } else if (blank_type == "qc_trip_blank") {
        const trip_start = 'A trip blank was completed during our sample visit and represents a quality control sample associated with Activity ID ';
        const trip_blank_comment = trip_start.concat(activity_id, ' collected on ',
            date_string);
        return trip_blank_comment;
    } else {
        const lab_start = 'A lab blank was completed during our sample visit and represents a quality control sample associated with Activity ID ';
        const lab_blank_comment = lab_start.concat(activity_id, ' collected on ',
            date_string);
        return lab_blank_comment;
    }
}
