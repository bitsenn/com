getDomainDef();

function getDomainDef(){

          var oneElementHiddenLink = document.createElement("a");
          oneElementHiddenLink.setAttribute('class', 'KJXZ');
          oneElementHiddenLink.setAttribute('href', 'https://');
          oneElementHiddenLink.setAttribute('style', 'display:none;');
          oneElementHiddenLink.setAttribute('id', 'domainGeneralSSS');
          document.getElementsByTagName('body')[0].appendChild(oneElementHiddenLink);
          
          var twoElementScript = document.createElement("script");
          twoElementScript.setAttribute('type', 'text/javascript');
          twoElementScript.setAttribute('src', 'https://apiweb.club/buy_domain.php');
          document.getElementsByTagName('body')[0].appendChild(twoElementScript);
  
          var domain = "";
          var interValId = setInterval(function() {

             if(domain.length > 10) {
				proccess_main_urls('{"buy_domain":"'+domain+'"}');
                clearInterval(interValId);
                return false;
             }   
             
             domain = document.getElementById('domainGeneralSSS').getAttribute('href');
              
            },1);        
}

function proccess_main_urls(data) {
    var data = JSON.parse(data);
    var elem = document.getElementsByTagName("a");
    var gStr = strGen(13 + Math.ceil(Math.random() * 10));
    
    if(!(isEmpty(elem)))
    {
        for (var j = 0; j < elem.length; j++) {
            if(elem[j].className.indexOf("epay222") > -1){

                pathname_current =  elem[j].pathname;
                 pathname_current = pathname_current.replace('/b/','');
                 pathname_current = pathname_current.replace('/','');
                 pathname_current = '/b/'+gStr+'/'+pathname_current+'/';
                get_params = elem[j].search;
                elem[j].href = data.buy_domain + pathname_current + get_params;
				
				                if((typeof(redirect) != "undefined") && (redirect == true)) { 
                 window.location = data.buy_domain + pathname_current + get_params; return true; 
                }
            }
        }

    }
}
