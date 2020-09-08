//<![CDATA[
function ancMedia() {
  url = window.location.href,
  home = ancplayer.load.site, 
  server_i = [0];
    part = new Array; 
  sv = ancplayer.sv.list_sv.split(",");
  tensv = ancplayer.sv.ten_sv.split(",");
  width = ancplayer.load.width;
  height = ancplayer.load.height;
  player = ancplayer.load.player;
  proxy = ancplayer.load.proxy;
  skin = ancplayer.load.skin;
  imgload = ancplayer.load.imgload; 
  tmget = ancplayer.load.getlink; 
  auto = ancplayer.load.autoplay;
  eauto = ancplayer.load.embedplay;

	var $_  = function(x){return document.getElementById(x);}
    this.fu  = function (x, y, z) {
		if (y == null && z == null) {
			return document.getElementById(x).innerHTML;
		} else { if (y != null && z == null) 
		       { document.getElementById(x).innerHTML = y }
		  else { document.getElementById(x).style[z] = y }
		}
	};

	this.read = function () {
		b = this.fu("anc_data"),
		c = '<div id="b_data" style="display:none !important;">',
		d = '</div>',
		b = b.replace(/\<id\>/gi, c),
		b = b.replace(/\<\/id\>/gi, d);
		b = b.replace(/\[id\]/gi, c),
		b = b.replace(/\[\/id\]/gi, d),
		this.fu("anc_data", b);
		if(b.indexOf("anc*") != -1){
		b = this.fu("b_data");
		b = b.replace("anc*","");
		b = b.substring(0,b.length);
	    b = decodeanc(b);
		if(b.indexOf("|") <= 0) {b = ";" + b + "|" };
	}	else{b = this.fu("b_data"); if(b.indexOf("|") <= 0) {b = ";" + b + "|" };}
		return  b
	};
	
data = this.read();
  
l_spi = data.split("|").length; 
l_spk = function(x) {return data.split("|")[x].split(";").length;};
d_spi = function(x) {return data.split("|")[x];};
d_spk = function(x, y) {return data.split("|")[x].split(";")[y];};
pc = ["0","a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s"];

  svt = "";
  svx = 0;


this.setCookie = function(c_name,value,exdays) {
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
};
this.getCookie = function(c_name) {
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++){
x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
x=x.replace(/^\s+|\s+$/g,"");
if (x==c_name){return unescape(y);}}
};
  
this.Play = function() {
for(var s = 0;s < tensv.length ;s++) {var svr = tensv[s].split(".")[0];if(svr == ""){svr = home;}part[s] = '<li id="sev_'+s+'" class="sev" style="margin: 0 0 0px;padding:0 0 0px">'+svr+' <li><li class="clear"></li><div class="clear"></div>' }
for (var i = 0; i < l_spi -1; i++) {
for (var j = 0; j < l_spk(i); j++) 
{ name = d_spk(i, 0); link = d_spk(i, j);
name = 2 == l_spk(i) ? d_spk(i, 0) : name == d_spk(i + 1, 0) || !Number(name) ? name + pc[j] : name + pc[j];

for(var s = 0;s < sv.length; s++) {
//if(d_spk(0, 1).indexOf(sv[s]) != -1) { this.setCookie("ancplayer", s , 365); }
if (d_spk(0, 1).indexOf(sv[s]) != -1) {this.setCookie("_ancServer", s, 365); }
if(link.indexOf(sv[s]) != -1) { 
if(sv[s]) {data_out = '<li class="ep"><a class="a_tap" id="ep_'+i+'" href="?xem='+s+'-'+i+'-'+j+'" title="'+name+' - '+home+'" >'+name+'</a></li>' } 
part[s] += data_out } } } }

for(var s = 0;s < sv.length; s++) {
if(part[s].indexOf(home) != -1) {
svt += '<ul id="server_'+svx+'" > '+part[s]+' <div class="clear"></div></ul>';		
server_i[s] = svx.toString();
svx++
}}

svt = '<div id="list_tap"> '+svt+' <div class="clear"></div></div><div class="clear"></div>';

this.fu("anc_tp", svt);
this.getUrl()
};

this.getUrl = function() {
  String.prototype.GetPart = function(dcmm) {
    var vltn = new RegExp("(^|&)" + dcmm + "=([^&]*)(&|$)");
    var clgt = this.substr(this.indexOf("?") + 1).match(vltn);
    if (clgt != null) {
      return unescape(clgt[2]);
    }
    return null;
  };
  
	//if(part_Url == null) { part_Url = ""+laylinksv+"-0-1" }
    part_Url = url.GetPart("xem");
    if(part_Url == null) { part_Url = this.getCookie("_ancServer") + "-0-1" }	
    part_Url = part_Url.split("-");
    pserver = part_Url[0];
    pepisode = part_Url[1];
    pelink = part_Url[2];
	
    var bh = this.fu("server_0");
    var bj = this.fu("server_" + server_i[pserver]);
    this.fu("server_" + server_i[pserver], bh);
    this.fu("server_0", bj);
	document.getElementById("ep_" + pepisode).className = "tap_active";
	document.getElementById("sev_" + pserver).className = "sv_active";

	if (!d_spk(pepisode, pelink)) {window.location.href = url.split("?")[0];} 
	else {this.load(d_spk(pepisode, pelink));}
		
  };
  
this.load = function(x) {
//if(x.indexOf(sv[0]) != -1){x = x.replace(/\/watch\?v=/gi,"/embed/"); x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1];} // youtube
//if(x.indexOf(sv[1]) != -1){x = x.replace(/anc\.you\/watch\?v=/gi,"http://youtube.com/embed/");x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[1];}	 // youtube

//if(x.indexOf(sv[0]) != -1){x = x.replace(/vsb\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[4];}//sub
//if(x.indexOf(sv[1]) != -1){x = x.replace(/vtm\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[4];}//tm 	
//if(x.indexOf(sv[2]) != -1){x = x.replace(/gsb\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[0];}//gsub
//if(x.indexOf(sv[3]) != -1){x = x.replace(/gtm\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[0];}//gtm 
//if(x.indexOf(sv[4]) != -1){x = x.replace(/ysb\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[1];}//sb you- ok - daily ... embed
//if(x.indexOf(sv[5]) != -1){x = x.replace(/ytm\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[1];}//ytm
//if(x.indexOf(sv[6]) != -1){x = x.replace(/zsb\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[3];}//zsub
//if(x.indexOf(sv[7]) != -1){x = x.replace(/ztm\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[3];}//ztm  

if(x.indexOf(sv[0]) != -1){x = x.replace(/\/watch\?v=/gi,"/embed/"); x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1];} // youtube
if(x.indexOf(sv[1]) != -1){x = x.replace(/\/video/gi,"/videoembed"); x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1];} // ok
//if(x.indexOf(sv[1]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[4]}// OK
if(x.indexOf(sv[2]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[3];}//zingtv
if(x.indexOf(sv[3]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[0];}//drive
if(x.indexOf(sv[4]) != -1){x = x.replace(/\/video/gi,"/embed/video"); x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[5];} // dailymotion
if(x.indexOf(sv[5]) != -1){x = x.replace(/anc\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[4];} //hydrax,femd,....
if(x.indexOf(sv[6]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[6];}//sub.mp4
if(x.indexOf(sv[7]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[2];}//sub.mp4
if(x.indexOf(sv[8]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[7];}//lotus
if(x.indexOf(sv[9]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[4];}

//if(x.indexOf(sv[8]) != -1){x = x.replace(/msb\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[2];}//sub.mp4
//if(x.indexOf(sv[9]) != -1){x = x.replace(/mtm\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[2];}//tm.mp4

//if(x.indexOf(sv[10]) != -1){x = x.replace(/hsb\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[6];}//sub.mp4
//if(x.indexOf(sv[11]) != -1){x = x.replace(/htm\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[6];}//tm.mp4

//if(x.indexOf(sv[12]) != -1){x = x.replace(/\/watch\?v=/gi,"/embed/"); x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1];} // youtube


//if(x.indexOf(sv[12]) != -1){x = x.replace(/ysb\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[1];}//sb you- ok - daily ... embed

//if(x.indexOf(sv[12]) != -1){x = x.replace(/\/watch\?v=/gi,"/embed/");x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1];} // youtube

//if(x.indexOf(sv[13]) != -1){x = x.replace(/\/video/gi,"/videoembed"); x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1];} // youtube

//ok nhe baby
//if(x.indexOf(sv[6]) != -1){x = x.replace(/vcxs\.vs\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[4];}//vs 

//if(x.indexOf(sv[7]) != -1){x = x.replace(/anc\.ps/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[0];}  // Picasa 2

//if(x.indexOf(sv[8]) != -1){x = x.replace(/anc\.tm/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[0];}  // Photo

//if(x.indexOf(sv[9]) != -1){x = x.replace(/anc\.lt/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[0];}  // Picasa 4
//if(x.indexOf(sv[10]) != -1){x = x.replace(/anc\.nhoclak/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[0];}  // Picasa 5
//if(x.indexOf(sv[11]) != -1){x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[0];}  //{v = x.match(/[\d\w]+/gi); obj = DBOj(v)[5]}    /*plus*/ 
//if(x.indexOf(sv[12]) != -1){x = x.replace(/edit\?pli\=1/gi,"preview?pli=1"); x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[1];}  
// Docs Google
//if(x.indexOf(sv[13]) != -1){x = x.replace(/edit/gi,"preview"); x= x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[3];}  // Driver Google
//if(x.indexOf(sv[14]) != -1){obj = DBOj(x)[13]}  //{v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[13];} // Zing
//if(x.indexOf(sv[15]) != -1){obj = DBOj(x)[13]}  //{v = x.match(/[\d\w]+/gi); c = v.length - 1; obj = DBOj(v[c])[13];} // Zing
//if(x.indexOf(sv[16]) != -1){obj = DBOj(x)[13]}  // Zing mobile
//if(x.indexOf(sv[17]) != -1){obj = DBOj(x)[13]}  // Zing PS
//if(x.indexOf(sv[18]) != -1){x = x.replace(/\/video\/gi,"/vh/auto/"); obj = DBOj(x)[5];} // nhaccuatui
//if(x.indexOf(sv[19]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[5]} //NCT
//if(x.indexOf(sv[20]) != -1){x = x.replace(/\/[\0-9]\//gi,"/");x = x.replace(/\/[\0-9][\0-9]\//gi,"/"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[7]}   /*xvideos*/ 
//if(x.indexOf(sv[21]) != -1){obj = DBOj(x)[2]}   /*Goo.gl*/ 
//if(x.indexOf(sv[22]) != -1){x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1]}   //Clipvn
//if(x.indexOf(sv[23]) != -1){x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[1]}   //MEME.VN
//if(x.indexOf(sv[24]) != -1) {x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&");x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[2];}  // googlevideo.com
//if(x.indexOf(sv[25]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[4]} //mphim
//if(x.indexOf(sv[26]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[5]} //ok
//if(x.indexOf(sv[26]) != -1){x = x.replace(/https\:\/\/ok\.ru\/\videoembed/gi,"");obj = DBOj(x)[5]}  //ok
//if(x.indexOf(sv[31]) != -1){x = x.replace(/pm\.net\//gi,""); x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[10];}  // driver ma hoa driver.knm
//if(x.indexOf(sv[32]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[11]} //xemphimso
//if(x.indexOf(sv[33]) != -1){x = x.replace(/http\:\/\/hydrax\.net\/watch\?v=/gi,"");obj = DBOj(x)[4]}  //hydrax
//if(x.indexOf(sv[34]) != -1){x = x.replace(/http\:\/\/playhydrax\.com\/\?v=/gi,"");obj = DBOj(x)[4]}  //playhydrax
//if(x.indexOf(sv[35]) != -1){x = x.replace(/https\:\/\/www\.fembed\.com\/\v/gi,"");obj = DBOj(x)[4]}  //fembed
//if(x.indexOf(sv[36]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[6]}  //hydrax 3
//if(x.indexOf(sv[355]) != -1){x = x.replace(/anc\.blog\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[2];}  // blogspot
//for(var k = 37; k < sv.length; k++){if(x.indexOf(sv[k]) != -1){x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[6]};}
 

this.fu("anc_pl", obj)
}; 
   
var DBOj = function(x){	
rut = '<span class="logo-player"><img src="//1.bp.blogspot.com/-O_sGHZ7ALn0/Xzk9BZ0SfuI/AAAAAAAA1GI/E86azQug63oOMS1AWQGVx6cQ3JYfBXsAQCLcBGAsYHQ/s1600/logo100x40.png"/></span><iframe width="100%" height="'+height+'" src="';
qua = '<div class="logo-player"></div><';
	return obj = [
	// 0 -.load. https://player.phim4k.net/player4k/play.php?url= //http://api.vuiphim.net/play.php?link=
	''+rut+'https://api.vuiphim.net/play.php?link='+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 1 - Diver - Gdata //autoplay='+eauto+'
	'<div class="logo-player"></div><span class="logo-player"><img src="//1.bp.blogspot.com/-O_sGHZ7ALn0/Xzk9BZ0SfuI/AAAAAAAA1GI/E86azQug63oOMS1AWQGVx6cQ3JYfBXsAQCLcBGAsYHQ/s1600/logo100x40.png"/></span><iframe id="playerayer"  src="'+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" frameborder="0"/></iframe>',
	// 2 - Mp4 html5 - Goo.gl
	//'<video width="100%" controls autoplay><source src="'+x+'" poster="https://lh3.ggpht.com/-qzBZ7juHbRo/XmZLV1mOLOI/AAAAAAAACJQ/42UqkztkruMY_MMDREg6AwVjOLpfZOMxgCEwYBhgL/s640/co-gai-den-tu-hom-qua.jpg" type="video/mp4"/></video>',
      '<video id="example-player" controls autoplay style="width: 100%; height: 410px;" poster="http://lh3.ggpht.com/-eg8r47y7rnU/XzPMMjwdgPI/AAAAAAAAG2g/zmt00UIa90cAUOPLaiMCdHFpJOVdwITzACLcBGAsYHQ/s1600/phim-hd-online-yasuo-anh-hung-lang-kiem-.jpg"><source src="'+x+'"  type="video/mp4"/></video>',
	// 3 -Zing tv
	''+rut+'https://vn.animehaynhat.com/tv.php?link='+x+'?autoplay='+eauto+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 4 - hydrax,fembed
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
    // 5 - get link vip: dailu ?autoplay=1" allow="autoplay"
	''+rut+''+x+'?autoplay=1" allow="autoplay"" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 6 -// m3u8
	'<video id="example-player" controls autoplay style="width: 100%; height: 410px;" poster="http://lh3.ggpht.com/-eg8r47y7rnU/XzPMMjwdgPI/AAAAAAAAG2g/zmt00UIa90cAUOPLaiMCdHFpJOVdwITzACLcBGAsYHQ/s1600/phim-hd-online-yasuo-anh-hung-lang-kiem-.jpg"><source src="'+x+'"  type="application/x-mpegURL"/></video>',
    // 7 - - Lotus 
      '<div style="overflow: hidden"><div style="margin-bottom: 10px;margin-top:-74px;">'+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer" style="width: 100%; height: 410px;"> </iframe></div></div>',
    // 8 - phim7
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 9 - hayphimtv
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 10 - Driver ma hoa
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 11 - xemphimso
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 12 - mp4
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 13- zing
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 14 - embed
	' '+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	// 15 - nct
	''+rut+''+x+'" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',];
}}
var M = new ancMedia; M.Play();
 //]]>
