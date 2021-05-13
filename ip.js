// Link URL
var url = "http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"

// AJAX
var http = new XMLHttpRequest();
http.open("GET", url);
http.send();
http.addEventListener("load", () => {
    var respond = JSON.parse(http.responseText);

    var isp = respond.isp;
    var nas = respond.asname;
    var as = respond.as;
    var ip = respond.query;
    var proxy = respond.proxy;
    var kota = respond.city;
    var wilayah = respond.regionName;
    var lat = respond.lat;
    var lon = respond.lon;
    var benua = respond.continent;
    var negara = respond.country;
    var matauang = respond.currency;
    var zonawaktu = respond.timezone;
    
    document.getElementById("isp").innerHTML += isp;
    document.getElementById("nas").innerHTML += nas;
    document.getElementById("as").innerHTML += as;
    document.getElementById("IP").innerHTML += ip;
    document.getElementById("proxy").innerHTML += proxy;
    document.getElementById("kota").innerHTML += kota;
    document.getElementById("region").innerHTML += wilayah;
    document.getElementById("lat").innerHTML += lat;
    document.getElementById("lon").innerHTML += lon;
    document.getElementById("benua").innerHTML += benua;
    document.getElementById("negara").innerHTML += negara;
    document.getElementById("matauang").innerHTML += matauang;
    document.getElementById("zonawaktu").innerHTML += zonawaktu;
});