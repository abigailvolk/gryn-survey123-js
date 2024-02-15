# gryn-survey123-js
These are JavaScript functions I wrote to customize some aspects of a Survey123 form. Each function is in a separate file and has a description of inputs and outputs.

1. **sonde_average.js**: average an array of 1 or more values. There is an option to take the average of pH (to compute average of the pH the antilog must first be taken, before computing the average and then re-performing the log).
2. **time_char.js**: for a time saved in Survey123, returns the time as character (ex: "1352")