let CronJob = {
    add: ffi('bool mgos_crontab_job_add_simple(struct mg_str at, bool enable, struct mg_str action, struct mg_str payload, long int *pid)'),    
}