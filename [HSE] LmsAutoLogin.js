// ==UserScript==
// @name         [HSE] LmsAutoLogin
// @namespace    https://hse.devredowl.ru/customs
// @version      2.0
// @description  enter something useful
// @author       Daniel Varentsov
// @match        *://lms.hse.ru/*
// @require      http://devredowl.ru/PublicJS/jq330.js
// @grant        none
// ==/UserScript==

window.jQuery330 = $.noConflict(true); // Безопасный JQ
jQuery(document).ready(function getlms(){
    var login = 'ЛОГИН_ОТ_LMS'
    var password = 'ПАРОЛЬ_ОТ_LMS'
    jQuery("input[name$='user_login']").val(login);
    jQuery("input[name$='user_password']").val(password);
    jQuery("input[name$='group1[userLogin]']").click();
    console.log('LMS AutoLogin by #RedOWL');
});
