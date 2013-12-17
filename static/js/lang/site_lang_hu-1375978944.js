LANG =  { 
user_name:  'Név',
user_email:  'E-mail cím',
user_phone:  'Telefonszám',
user_zip:  'Irányítószám',
user_city:  'Település',
user_street:  'Utca, házszám',
user_old_password:  'Régi jelszó',
user_password:  'Jelszó',
user_password2:  'Jelszó megerősítése',
user_new_password:  'Új jelszó',
user_new_password2:  'Új jelszó megerősítése',
user_over_agelimit:  'Elmúltam 16 éves',
user_accept_terms:  'Elfogadom a <a href=\"{url}\" target=\"_blank\">Játékszabályzatot.<\/a>',
user_user_agent:  'Böngésző',
user_last_login:  'Utolsó bejelentkezés',
user_activation_code:  'Aktivált regisztráció',
date_month_01:  'január',
date_month_short_01:  'JAN',
date_month_02:  'február',
date_month_short_02:  'FEB',
date_month_03:  'március',
date_month_short_03:  'MÁRC',
date_month_04:  'április',
date_month_short_04:  'ÁPR',
date_month_05:  'május',
date_month_short_05:  'MÁJ',
date_month_06:  'június',
date_month_short_06:  'JÚN',
date_month_07:  'július',
date_month_short_07:  'JÚL',
date_month_08:  'augusztus',
date_month_short_08:  'AUG',
date_month_09:  'szeptember',
date_month_short_09:  'SZEPT',
date_month_10:  'október',
date_month_short_10:  'OKT',
date_month_11:  'november',
date_month_short_11:  'NOV',
date_month_12:  'december',
date_month_short_12:  'DEC',
upload_error_no_files:  'Hiba: nem lett file kiválasztva!',
upload_error_file_is_empty:  'Hiba: üres file lett feltöltve!',
upload_error_file_too_big:  'Hiba: a feltöltött file túl nagy!',
upload_error_file_extension:  'Hiba: a feltöltött file kiterjesztése nem megfelelő!',
upload_error_server_error:  'Hiba: rendszerhiba, kérjük próbálja meg késöbb!',
line: function(key, placeholders) {
placeholders = placeholders || {};
if (!LANG[key]) {
return '';
}
var re = LANG[key];
$.each(placeholders, function(k, v){
re = re.replace('{'+k+'}', v);
});
return String(re);
}
};