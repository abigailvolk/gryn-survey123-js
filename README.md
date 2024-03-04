# gryn-survey123-js
These are JavaScript functions I wrote to customize some aspects of a Survey123 form. Each function is in a separate file and has a description of inputs and outputs.

3/4/2024:

1. **get_activity_comment**: takes various survey inputs based on the measurements/samples being collected and returns the Activity comment for NPSTORET.
2. **get_activity_id**: Concatenates info about the sampling (park, site, year, julian, 24 hour clock) into an Activity ID.
3. **get_average**: average an array of 1 or more values. There is an option to take the average of pH (to compute average of the pH the antilog must first be taken, before computing the average and then re-performing the log).
4. **get_blanks_comment**: Creates an Activity comment if blank samples are being collected.
5. **get_discharge_avg**: Takes the average of discharge measurements, determining whether to average 2 or 3 trials based on the percent error of the first two trials.
6. **get_julian**: Returns the Julian day of the year as a string.
7. **get_percent_diff**: Calculates the percent difference of Trial 1 and Trial 2 for discharge.
8. **get_rep_comment**: Creates an Activity Comment for replicate samples and associates it with the date and Activity ID of the regular sample.
9. **get_site**: Returns the appropriate site abbreviation.
10. **get_time_char**: for a time saved in Survey123, returns the time as character (ex: "1352").
11. **get_year**: returns the year as a string (ex: "24")
