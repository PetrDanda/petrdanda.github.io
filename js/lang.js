var langs = ['en', 'cz', 'de', 'es', 'tw'];
var langCode = '';
var langJS = null;


var translate = function (jsdata)
{	console.log(jsdata);
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
    if (langCode == 'tw') {
        $('body').addClass('lang_' + langCode);
    } else {
        $('body').removeClass('lang_tw');
    }

    setCookie("langSel",langCode, 30);
}

$(document).ready(function(){

    langCode = getCookie("langSel") || navigator.language.substr (0, 2);
    console.log(langCode);

    if (langs.indexOf(langCode) !== -1)
        $.getJSON('/Languages/'+langCode+'.json', translate);
    else
        $.getJSON('/Languages/en.json', translate);

    $('[langSel]').on('click',function(){
        langCode = $(this).attr('langSel')
        $.getJSON('/Languages/'+langCode+'.json', translate);

    })

});
