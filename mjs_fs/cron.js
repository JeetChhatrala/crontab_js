let CronJob = {
    add: ffi('bool mgos_crontab_job_add(struct mg_str at, bool enable, struct mg_str action, struct mg_str payload, mgos_crontab_job_id_t *pid,char **perr)'),
    registerHandler: ffi('void mgos_crontab_register_handler(struct mg_str action, mgos_crontab_cb cb, void *userdata)'),
    edit: ffi('bool mgos_crontab_job_edit(mgos_crontab_job_id_t id, struct mg_str at,bool enable, struct mg_str action,struct mg_str payload, char **perr)'),
    remove: ffi('bool mgos_crontab_job_remove(mgos_crontab_job_id_t id, char **perr)'),
    
}