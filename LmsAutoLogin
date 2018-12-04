// ==UserScript==
// @name         [HSE] LmsAutoLogin
// @namespace    https://hse.devredowl.ru/customs
// @version      2.0
// @description  enter something useful
// @author       Daniel Varentsov
// @match        https://lms.hse.ru/index.php
// @require      https://code.jquery.com/jquery-3.3.0.min.js
// @grant        none
// ==/UserScript==

window.jQuery330 = $.noConflict(true); // Безопасный JQ
jQuery(document).ready(function getlms(){
    var login = 'ЛОГИН_ОТ_LMS'
    var password = 'ПАРОЛЬ_ОТ_LMS'
    jQuery("input[name$='user_login']").val(login);
    jQuery("input[name$='user_password']").val(password);
    jQuery("input[name$='userLogin']").click();
    console.log('LMS AutoLogin by #RedOWL');
});
