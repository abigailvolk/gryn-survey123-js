/*
 * Created the comment for replicates and associates it with the activityID and date.
 */

function get_rep_comment(activity_id, date_string){
    const comment_start = 'A field replicate was completed during our sample visit and represents a quality control sample associated with Activity ID ';
    const rep_comment = comment_start.concat(activity_id,
        ` collected on `, date_string);
    return rep_comment;
}

