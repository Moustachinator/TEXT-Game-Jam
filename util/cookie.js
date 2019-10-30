class Cookie{

 constructor(){};

 static set(name, value, exdays, path="/"){

  if(!!exdays){

    var d = new Date();
    d = d.toUTCString(d.setTime(d.getTime() +(exdays *24 *60 *60 *1000)));
   } else var d = "Thu, 01 Jan 1970 00:00:00 UTC";

  document.cookie = `${name}=${value}; expires=${d}; path=${path}`;
 };

 static remove(name){
  Cookie.set(name, "", null);
 };

 static get(name){

  var name += "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for(var i=0; i<ca.length; i++){

   var c = ca[i];

   while(c.charAt(0) == ' ') c = c.substring(1);

   if(!c.indexOf(name)) return c.substring(name.length, c.length);
  };

  return "";
 };
};
