﻿(function(a){function n(b,a){a=a?a:"";return b?n(--b,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60*Math.random()))+a):a}function p(b,a){var f=b.apiendpoint,e="",g,f=f+(0>=f.indexOf("?")?"?":"&"),f=f.replace("#","%23");if(null!==b.maxWidth&&("undefined"===typeof b.params.maxwidth||null===b.params.maxwidth))b.params.maxwidth=b.maxWidth;if(null!==b.maxHeight&&("undefined"===typeof b.params.maxheight||null===b.params.maxheight))b.params.maxheight=b.maxHeight;for(g in b.params)g!=
b.callbackparameter&&null!==b.params[g]&&(e+="&"+escape(g)+"="+b.params[g]);f+="format="+b.format+"&url="+escape(a)+e;"json"!=b.dataType&&(f+="&"+b.callbackparameter+"=?");return f}function m(b,k,f){a("#jqoembeddata").data(k,b.code);l.beforeEmbed.call(f,b);l.onEmbed.call(f,b);l.afterEmbed.call(f,b)}function o(b,k,f){if(void 0!=a("#jqoembeddata").data(k)&&"iframe"!=f.embedtag.tag){var e={code:a("#jqoembeddata").data(k)};m(e,k,b)}else if(f.yql){var e=f.yql.from||"htmlstring",g=f.yql.url?f.yql.url(k):
k,d="SELECT * FROM "+e+' WHERE url="'+g+'" and '+(/html/.test(e)?"xpath":"itemPath")+"='"+(f.yql.xpath||"/")+"'";"html"==e&&(d+=" and compat='html5'");e=a.extend({url:"http://query.yahooapis.com/v1/public/yql",dataType:"jsonp",data:{q:d,format:"json",env:"store://datatables.org/alltableswithkeys",callback:"?"},success:function(c){if(f.yql.xpath&&"//meta|//title|//link"==f.yql.xpath){var e={};null==c.query.results&&(c.query.results={meta:[]});for(var d=0,h=c.query.results.meta.length;d<h;d++){var j=
c.query.results.meta[d].name||c.query.results.meta[d].property||null;null!=j&&(e[j.toLowerCase()]=c.query.results.meta[d].content)}if((!e.hasOwnProperty("title")||!e.hasOwnProperty("og:title"))&&null!=c.query.results.title)e.title=c.query.results.title;if(!e.hasOwnProperty("og:image")&&c.query.results.hasOwnProperty("link")){d=0;for(h=c.query.results.link.length;d<h;d++)c.query.results.link[d].hasOwnProperty("rel")&&"apple-touch-icon"==c.query.results.link[d].rel&&(e["og:image"]="/"==c.query.results.link[d].href.charAt(0)?
g.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/)[1]+c.query.results.link[d].href:c.query.results.link[d].href)}c=f.yql.datareturn(e)}else c=f.yql.datareturn?f.yql.datareturn(c.query.results):c.query.results.result;!1!==c&&(e=a.extend({},c),e.code=c,m(e,k,b))},error:l.onError.call(b,k,f)},l.ajaxOptions||{});a.ajax(e)}else if(f.templateRegex)if(""!==f.embedtag.tag){var e=f.embedtag.flashvars||"",d=f.embedtag.tag||"embed",c=f.embedtag.width||"auto",h=f.embedtag.height||"auto",j=k.replace(f.templateRegex,f.apiendpoint);
f.nocache||(j+="&jqoemcache="+n(5));f.apikey&&(j=j.replace("_APIKEY_",l.apikeys[f.name]));c=a("<"+d+"/>").attr("src",j).attr("width",c).attr("height",h).attr("allowfullscreen",f.embedtag.allowfullscreen||"true").attr("allowscriptaccess",f.embedtag.allowfullscreen||"always").css("max-height",l.maxHeight||"auto").css("max-width",l.maxWidth||"auto");"embed"==d&&c.attr("type",f.embedtag.type||"application/x-shockwave-flash").attr("flashvars",k.replace(f.templateRegex,e));"iframe"==d&&c.attr("scrolling",
f.embedtag.scrolling||"no").attr("frameborder",f.embedtag.frameborder||"0");e={code:c};m(e,k,b)}else f.apiendpoint?(f.apikey&&(f.apiendpoint=f.apiendpoint.replace("_APIKEY_",l.apikeys[f.name])),e=a.extend({url:k.replace(f.templateRegex,f.apiendpoint),dataType:"jsonp",success:function(c){var d=a.extend({},c);d.code=f.templateData(c);m(d,k,b)},error:l.onError.call(b,k,f)},l.ajaxOptions||{}),a.ajax(e)):(e={code:k.replace(f.templateRegex,f.template)},m(e,k,b));else e=p(f,k),e=a.extend({url:e,dataType:f.dataType||
"jsonp",success:function(c){c=a.extend({},c);switch(c.type){case "file":case "photo":c.code=a.fn.oembed.getPhotoCode(k,c);break;case "video":case "rich":c.code=a.fn.oembed.getRichCode(k,c);break;default:c.code=a.fn.oembed.getGenericCode(k,c)}m(c,k,b)},error:l.onError.call(b,k,f)},l.ajaxOptions||{}),a.ajax(e)}function g(b){if(null===b)return null;var a,f={};for(a in b)null!==a&&(f[a.toLowerCase()]=b[a]);return f}a.fn.oembed=function(b,k,f){l=a.extend(!0,a.fn.oembed.defaults,k);var e="0rz.tw 1link.in 1url.com 2.gp 2big.at 2tu.us 3.ly 307.to 4ms.me 4sq.com 4url.cc 6url.com 7.ly a.gg a.nf aa.cx abcurl.net ad.vu adf.ly adjix.com afx.cc all.fuseurl.com alturl.com amzn.to ar.gy arst.ch atu.ca azc.cc b23.ru b2l.me bacn.me bcool.bz binged.it bit.ly bizj.us bloat.me bravo.ly bsa.ly budurl.com canurl.com chilp.it chzb.gr cl.lk cl.ly clck.ru cli.gs cliccami.info clickthru.ca clop.in conta.cc cort.as cot.ag crks.me ctvr.us cutt.us dai.ly decenturl.com dfl8.me digbig.com http://digg.com/[^/]+$ disq.us dld.bz dlvr.it do.my doiop.com dopen.us easyuri.com easyurl.net eepurl.com eweri.com fa.by fav.me fb.me fbshare.me ff.im fff.to fire.to firsturl.de firsturl.net flic.kr flq.us fly2.ws fon.gs freak.to fuseurl.com fuzzy.to fwd4.me fwib.net g.ro.lt gizmo.do gl.am go.9nl.com go.ign.com go.usa.gov goo.gl goshrink.com gurl.es hex.io hiderefer.com hmm.ph href.in hsblinks.com htxt.it huff.to hulu.com hurl.me hurl.ws icanhaz.com idek.net ilix.in is.gd its.my ix.lt j.mp jijr.com kl.am klck.me korta.nu krunchd.com l9k.net lat.ms liip.to liltext.com linkbee.com linkbun.ch liurl.cn ln-s.net ln-s.ru lnk.gd lnk.ms lnkd.in lnkurl.com lru.jp lt.tl lurl.no macte.ch mash.to merky.de migre.me miniurl.com minurl.fr mke.me moby.to moourl.com mrte.ch myloc.me myurl.in n.pr nbc.co nblo.gs nn.nf not.my notlong.com nsfw.in nutshellurl.com nxy.in nyti.ms o-x.fr oc1.us om.ly omf.gd omoikane.net on.cnn.com on.mktw.net onforb.es orz.se ow.ly ping.fm pli.gs pnt.me politi.co post.ly pp.gg profile.to ptiturl.com pub.vitrue.com qlnk.net qte.me qu.tc qy.fi r.im rb6.me read.bi readthis.ca reallytinyurl.com redir.ec redirects.ca redirx.com retwt.me ri.ms rickroll.it riz.gd rt.nu ru.ly rubyurl.com rurl.org rww.tw s4c.in s7y.us safe.mn sameurl.com sdut.us shar.es shink.de shorl.com short.ie short.to shortlinks.co.uk shorturl.com shout.to show.my shrinkify.com shrinkr.com shrt.fr shrt.st shrten.com shrunkin.com simurl.com slate.me smallr.com smsh.me smurl.name sn.im snipr.com snipurl.com snurl.com sp2.ro spedr.com srnk.net srs.li starturl.com su.pr surl.co.uk surl.hu t.cn t.co t.lh.com ta.gd tbd.ly tcrn.ch tgr.me tgr.ph tighturl.com tiniuri.com tiny.cc tiny.ly tiny.pl tinylink.in tinyuri.ca tinyurl.com tk. tl.gd tmi.me tnij.org tnw.to tny.com to.ly togoto.us totc.us toysr.us tpm.ly tr.im tra.kz trunc.it twhub.com twirl.at twitclicks.com twitterurl.net twitterurl.org twiturl.de twurl.cc twurl.nl u.mavrev.com u.nu u76.org ub0.cc ulu.lu updating.me ur1.ca url.az url.co.uk url.ie url360.me url4.eu urlborg.com urlbrief.com urlcover.com urlcut.com urlenco.de urli.nl urls.im urlshorteningservicefortwitter.com urlx.ie urlzen.com usat.ly use.my vb.ly vgn.am vl.am vm.lc w55.de wapo.st wapurl.co.uk wipi.es wp.me x.vu xr.com xrl.in xrl.us xurl.es xurl.jp y.ahoo.it yatuc.com ye.pe yep.it yfrog.com yhoo.it yiyd.com youtu.be yuarel.com z0p.de zi.ma zi.mu zipmyurl.com zud.me zurl.ws zz.gd zzang.kr ›.ws ✩.ws ✿.ws ❥.ws ➔.ws ➞.ws ➡.ws ➨.ws ➯.ws ➹.ws ➽.ws".split(" ");
0===a("#jqoembeddata").length&&a('<span id="jqoembeddata"></span>').appendTo("body");return this.each(function(){var k=a(this),d=b&&(!b.indexOf("http://")||!b.indexOf("https://"))?b:k.attr("href"),c;f?l.onEmbed=f:l.onEmbed||(l.onEmbed=function(b){a.fn.oembed.insertCode(this,l.embedMethod,b)});if(null!==d){for(var h=0,j=e.length;h<j;h++)if(null!==d.match(RegExp("://"+e[h]+"/","i")))return h=a.extend({url:"http://api.longurl.org/v2/expand",dataType:"jsonp",data:{url:d,format:"json"},success:function(b){d=
b["long-url"];c=a.fn.oembed.getOEmbedProvider(b["long-url"]);if(c!==null){c.params=g(l[c.name])||{};c.maxWidth=l.maxWidth;c.maxHeight=l.maxHeight;o(k,d,c)}else l.onProviderNotFound.call(k,d)}},l.ajaxOptions||{}),a.ajax(h),k;c=a.fn.oembed.getOEmbedProvider(d);null!==c?(c.params=g(l[c.name])||{},c.maxWidth=l.maxWidth,c.maxHeight=l.maxHeight,o(k,d,c)):l.onProviderNotFound.call(k,d)}return k})};var l;a.fn.oembed.defaults={maxWidth:null,maxHeight:null,includeHandle:!0,embedMethod:"auto",onProviderNotFound:function(){},
beforeEmbed:function(){},afterEmbed:function(){},onEmbed:!1,onError:function(){},ajaxOptions:{}};a.fn.oembed.insertCode=function(b,k,f){if(null!==f)switch("auto"==k&&null!==b.attr("href")?k="append":"auto"==k&&(k="replace"),k){case "replace":b.replaceWith(f.code);break;case "fill":b.html(f.code);break;case "append":b.wrap('<div class="oembedall-container"></div>');k=b.parent();l.includeHandle&&a('<span class="oembedall-closehide">&darr;</span>').insertBefore(b).click(function(){var b=encodeURIComponent(a(this).text());
a(this).html("%E2%86%91"==b?"&darr;":"&uarr;");a(this).parent().children().last().toggle()});k.append("<br/>");try{f.code.clone().appendTo(k)}catch(e){k.append(f.code)}if(l.maxWidth){var g=k.parent().width();g<l.maxWidth?(b=a("iframe",k).width(),f=a("iframe",k).height(),g=b/g,a("iframe",k).width(b/g),a("iframe",k).height(f/g)):(l.maxWidth&&a("iframe",k).width(l.maxWidth),l.maxHeight&&a("iframe",k).height(l.maxHeight))}}};a.fn.oembed.getPhotoCode=function(b,a){var f;f=a.title?a.title:"";f+=a.author_name?
" - "+a.author_name:"";f+=a.provider_name?" - "+a.provider_name:"";f='<div><a href="'+b+"\" target='_blank'><img src=\""+a.url+'" alt="'+f+'"/></a></div>';a.html&&(f+="<div>"+a.html+"</div>");return f};a.fn.oembed.getRichCode=function(b,a){return a.html};a.fn.oembed.getGenericCode=function(b,a){var f='<a href="'+b+'">'+(null!==a.title?a.title:b)+"</a>";a.html&&(f+="<div>"+a.html+"</div>");return f};a.fn.oembed.getOEmbedProvider=function(b){for(var k=0;k<a.fn.oembed.providers.length;k++)for(var f=
0,e=a.fn.oembed.providers[k].urlschemes.length;f<e;f++)if(null!==b.match(RegExp(a.fn.oembed.providers[k].urlschemes[f],"i")))return a.fn.oembed.providers[k];return null};a.fn.oembed.OEmbedProvider=function(b,a,f,e,g){this.name=b;this.type=a;this.urlschemes=f;this.apiendpoint=e;this.maxWidth=500;this.maxHeight=400;g=g||{};g.useYQL&&(g.yql="xml"==g.useYQL?{xpath:"//oembed/html",from:"xml",apiendpoint:this.apiendpoint,url:function(b){return this.apiendpoint+"?format=xml&url="+b},datareturn:function(b){return b.html.replace(/.*\[CDATA\[(.*)\]\]>$/,
"$1")||""}}:{from:"json",apiendpoint:this.apiendpoint,url:function(b){return this.apiendpoint+"?format=json&url="+b},datareturn:function(b){return"video"!=b.json.type&&(b.json.url||b.json.thumbnail_url)?'<img src="'+(b.json.url||b.json.thumbnail_url)+'" />':b.json.html||""}},this.apiendpoint=null);for(var d in g)this[d]=g[d];this.format=this.format||"json";this.callbackparameter=this.callbackparameter||"callback";this.embedtag=this.embedtag||{tag:""}};a.fn.oembed.providers=[new a.fn.oembed.OEmbedProvider("youtube",
"video",["youtube\\.com/watch.+v=[\\w-]+&?","youtu\\.be/[\\w-]+"],"http://www.youtube.com/oembed",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("youtubeiframe","video",["youtube.com/embed"],"$1?wmode=transparent",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"425",height:"349"}}),new a.fn.oembed.OEmbedProvider("wistia","video",["wistia.com/m/.+","wistia.com/embed/.+","wi.st/m/.+","wi.st/embed/.+"],"http://fast.wistia.com/oembed",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("xtranormal",
"video",["xtranormal\\.com/watch/.+"],"http://www.xtranormal.com/xtraplayr/$1/$2",{templateRegex:/.*com\/watch\/([\w\-]+)\/([\w\-]+).*/,embedtag:{tag:"iframe",width:"320",height:"269"}}),new a.fn.oembed.OEmbedProvider("scivee","video",["scivee.tv/node/.+"],"http://www.scivee.tv/flash/embedCast.swf?",{templateRegex:/.*tv\/node\/(.+)/,embedtag:{width:"480",height:"400",flashvars:"id=$1&type=3"}}),new a.fn.oembed.OEmbedProvider("veoh","video",["veoh.com/watch/.+"],"http://www.veoh.com/swf/webplayer/WebPlayer.swf?version=AFrontend.5.7.0.1337&permalinkId=$1&player=videodetailsembedded&videoAutoPlay=0&id=anonymous",
{templateRegex:/.*watch\/([^\?]+).*/,embedtag:{width:"410",height:"341"}}),new a.fn.oembed.OEmbedProvider("gametrailers","video",["gametrailers\\.com/video/.+"],"http://media.mtvnservices.com/mgid:moses:video:gametrailers.com:$2",{templateRegex:/.*com\/video\/([\w\-]+)\/([\w\-]+).*/,embedtag:{width:"512",height:"288"}}),new a.fn.oembed.OEmbedProvider("funnyordie","video",["funnyordie\\.com/videos/.+"],"http://player.ordienetworks.com/flash/fodplayer.swf?",{templateRegex:/.*videos\/([^\/]+)\/([^\/]+)?/,
embedtag:{width:512,height:328,flashvars:"key=$1"}}),new a.fn.oembed.OEmbedProvider("colledgehumour","video",["collegehumor\\.com/video/.+"],"http://www.collegehumor.com/moogaloop/moogaloop.swf?clip_id=$1&use_node_id=true&fullscreen=1",{templateRegex:/.*video\/([^\/]+).*/,embedtag:{width:600,height:338}}),new a.fn.oembed.OEmbedProvider("metacafe","video",["metacafe\\.com/watch/.+"],"http://www.metacafe.com/fplayer/$1/$2.swf",{templateRegex:/.*watch\/(\d+)\/(\w+)\/.*/,embedtag:{width:400,height:345}}),
new a.fn.oembed.OEmbedProvider("bambuser","video",["bambuser\\.com/channel/.*/broadcast/.*"],"http://static.bambuser.com/r/player.swf?vid=$1",{templateRegex:/.*bambuser\.com\/channel\/.*\/broadcast\/(\w+).*/,embedtag:{width:512,height:339}}),new a.fn.oembed.OEmbedProvider("twitvid","video",["twitvid\\.com/.+"],"http://www.twitvid.com/embed.php?guid=$1&autoplay=0",{templateRegex:/.*twitvid\.com\/(\w+).*/,embedtag:{tag:"iframe",width:480,height:360}}),new a.fn.oembed.OEmbedProvider("aniboom","video",
["aniboom\\.com/animation-video/.+"],"http://api.aniboom.com/e/$1",{templateRegex:/.*animation-video\/(\d+).*/,embedtag:{width:594,height:334}}),new a.fn.oembed.OEmbedProvider("vzaar","video",["vzaar\\.com/videos/.+","vzaar.tv/.+"],"http://view.vzaar.com/$1/player?",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:576,height:324}}),new a.fn.oembed.OEmbedProvider("snotr","video",["snotr\\.com/video/.+"],"http://www.snotr.com/embed/$1",{templateRegex:/.*\/(\d+).*/,embedtag:{tag:"iframe",width:400,
height:330,nocache:1}}),new a.fn.oembed.OEmbedProvider("youku","video",["v.youku.com/v_show/id_.+"],"http://player.youku.com/player.php/sid/$1/v.swf",{templateRegex:/.*id_(.+)\.html.*/,embedtag:{width:480,height:400,nocache:1}}),new a.fn.oembed.OEmbedProvider("embedr","video",["embedr\\.com/playlist/.+"],"http://embedr.com/swf/slider/$1/425/520/default/false/std?",{templateRegex:/.*playlist\/([^\/]+).*/,embedtag:{width:425,height:520}}),new a.fn.oembed.OEmbedProvider("blip","video",["blip\\.tv/.+"],
"http://blip.tv/oembed/"),new a.fn.oembed.OEmbedProvider("minoto-video","video",["http://api.minoto-video.com/publishers/.+/videos/.+","http://dashboard.minoto-video.com/main/video/details/.+","http://embed.minoto-video.com/.+"],"http://api.minoto-video.com/services/oembed.json",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("animoto","video",["animoto.com/play/.+"],"http://animoto.com/services/oembed"),new a.fn.oembed.OEmbedProvider("hulu","video",["hulu\\.com/watch/.*"],"http://www.hulu.com/api/oembed.json"),
new a.fn.oembed.OEmbedProvider("ustream","video",["ustream\\.tv/recorded/.*"],"http://www.ustream.tv/oembed",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("vodpod","video",["vodpod.com/watch/.*"],"http://vodpod.com/oembed.js",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("vimeo","video",["http://www.vimeo.com/groups/.*/videos/.*","http://www.vimeo.com/.*","http://vimeo.com/groups/.*/videos/.*","http://vimeo.com/.*"],"http://vimeo.com/api/oembed.json"),new a.fn.oembed.OEmbedProvider("dailymotion",
"video",["dailymotion\\.com/.+"],"http://www.dailymotion.com/services/oembed"),new a.fn.oembed.OEmbedProvider("5min","video",["www\\.5min\\.com/.+"],"http://api.5min.com/oembed.xml",{useYQL:"xml"}),new a.fn.oembed.OEmbedProvider("National Film Board of Canada","video",["nfb\\.ca/film/.+"],"http://www.nfb.ca/remote/services/oembed/",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("qik","video",["qik\\.com/\\w+"],"http://qik.com/api/oembed.json",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("revision3",
"video",["revision3\\.com"],"http://revision3.com/api/oembed/"),new a.fn.oembed.OEmbedProvider("dotsub","video",["dotsub\\.com/view/.+"],"http://dotsub.com/services/oembed",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("clikthrough","video",["clikthrough\\.com/theater/video/\\d+"],"http://clikthrough.com/services/oembed"),new a.fn.oembed.OEmbedProvider("Kinomap","video",["kinomap\\.com/.+"],"http://www.kinomap.com/oembed"),new a.fn.oembed.OEmbedProvider("VHX","video",["vhx.tv/.+"],"http://vhx.tv/services/oembed.json"),
new a.fn.oembed.OEmbedProvider("bambuser","video",["bambuser.com/.+"],"http://api.bambuser.com/oembed/iframe.json"),new a.fn.oembed.OEmbedProvider("justin.tv","video",["justin.tv/.+"],"http://api.justin.tv/api/embed/from_url.json",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("official.fm","rich",["official.fm/.+"],"http://official.fm/services/oembed",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("chirbit","rich",["chirb.it/.+"],"http://chirb.it/oembed.json",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("Huffduffer",
"rich",["huffduffer.com/[-.\\w@]+/\\d+"],"http://huffduffer.com/oembed"),new a.fn.oembed.OEmbedProvider("shoudio","rich",["shoudio.com/.+","shoud.io/.+"],"http://shoudio.com/api/oembed"),new a.fn.oembed.OEmbedProvider("mixcloud","rich",["mixcloud.com/.+"],"http://www.mixcloud.com/oembed/",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("rdio.com","rich",["rd.io/.+","rdio.com"],"http://www.rdio.com/api/oembed/"),new a.fn.oembed.OEmbedProvider("Soundcloud","rich",["soundcloud.com/.+","snd.sc/.+"],"http://soundcloud.com/oembed",
{format:"js"}),new a.fn.oembed.OEmbedProvider("bandcamp","rich",["bandcamp\\.com/album/.+"],null,{yql:{xpath:"//meta[contains(@content, \\'EmbeddedPlayer\\')]",from:"html",datareturn:function(b){return b.meta?'<iframe width="400" height="100" src="'+b.meta.content+'" allowtransparency="true" frameborder="0"></iframe>':!1}}}),new a.fn.oembed.OEmbedProvider("deviantart","photo",["deviantart.com/.+","fav.me/.+","deviantart.com/.+"],"http://backend.deviantart.com/oembed",{format:"jsonp"}),new a.fn.oembed.OEmbedProvider("skitch",
"photo",["skitch.com/.+"],null,{yql:{xpath:"json",from:"json",url:function(b){return"http://skitch.com/oembed/?format=json&url="+b},datareturn:function(b){return a.fn.oembed.getPhotoCode(b.json.url,b.json)}}}),new a.fn.oembed.OEmbedProvider("mobypicture","photo",["mobypicture.com/user/.+/view/.+","moby.to/.+"],"http://api.mobypicture.com/oEmbed"),new a.fn.oembed.OEmbedProvider("flickr","photo",["flickr\\.com/photos/.+"],"http://flickr.com/services/oembed",{callbackparameter:"jsoncallback"}),new a.fn.oembed.OEmbedProvider("photobucket",
"photo",["photobucket\\.com/(albums|groups)/.+"],"http://photobucket.com/oembed/"),new a.fn.oembed.OEmbedProvider("instagram","photo",["instagr\\.?am(\\.com)?/.+"],"http://api.instagram.com/oembed"),new a.fn.oembed.OEmbedProvider("SmugMug","photo",["smugmug.com/[-.\\w@]+/.+"],"http://api.smugmug.com/services/oembed/"),new a.fn.oembed.OEmbedProvider("dribbble","photo",["dribbble.com/shots/.+"],"http://api.dribbble.com/shots/$1?callback=?",{templateRegex:/.*shots\/([\d]+).*/,templateData:function(b){return!b.image_teaser_url?
!1:'<img src="'+b.image_teaser_url+'"/>'}}),new a.fn.oembed.OEmbedProvider("chart.ly","photo",["chart\\.ly/[a-z0-9]{6,8}"],"http://chart.ly/uploads/large_$1.png",{templateRegex:/.*ly\/([^\/]+).*/,embedtag:{tag:"img"},nocache:1}),new a.fn.oembed.OEmbedProvider("circuitlab","photo",["circuitlab.com/circuit/.+"],"https://www.circuitlab.com/circuit/$1/screenshot/540x405/",{templateRegex:/.*circuit\/([^\/]+).*/,embedtag:{tag:"img"},nocache:1}),new a.fn.oembed.OEmbedProvider("23hq","photo",["23hq.com/[-.\\w@]+/photo/.+"],
"http://www.23hq.com/23/oembed",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("img.ly","photo",["img\\.ly/.+"],"http://img.ly/show/thumb/$1",{templateRegex:/.*ly\/([^\/]+).*/,embedtag:{tag:"img"},nocache:1}),new a.fn.oembed.OEmbedProvider("twitgoo.com","photo",["twitgoo\\.com/.+"],"http://twitgoo.com/show/thumb/$1",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"img"},nocache:1}),new a.fn.oembed.OEmbedProvider("imgur.com","photo",["imgur\\.com/gallery/.+"],"http://imgur.com/$1l.jpg",{templateRegex:/.*gallery\/([^\/]+).*/,
embedtag:{tag:"img"},nocache:1}),new a.fn.oembed.OEmbedProvider("visual.ly","rich",["visual\\.ly/.+"],null,{yql:{xpath:"//a[@id=\\'gc_article_graphic_image\\']/img",from:"htmlstring"}}),new a.fn.oembed.OEmbedProvider("gravtar","photo",["mailto:.+"],null,{templateRegex:/mailto:([^\/]+).*/,template:function(b,a){return'<img src="http://gravatar.com/avatar/'+a.md5()+'.jpg" alt="on Gravtar" class="jqoaImg">'}}),new a.fn.oembed.OEmbedProvider("twitter","rich",["twitter.com/.+"],"https://api.twitter.com/1/statuses/oembed.json"),
new a.fn.oembed.OEmbedProvider("urtak","rich",["urtak.com/(u|clr)/.+"],"http://oembed.urtak.com/1/oembed"),new a.fn.oembed.OEmbedProvider("cacoo","rich",["cacoo.com/.+"],"http://cacoo.com/oembed.json"),new a.fn.oembed.OEmbedProvider("dailymile","rich",["dailymile.com/people/.*/entries/.*"],"http://api.dailymile.com/oembed"),new a.fn.oembed.OEmbedProvider("dipity","rich",["dipity.com/timeline/.+"],"http://www.dipity.com/oembed/timeline/",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("speakerdeck",
"rich",["speakerdeck.com/.+"],"http://speakerdeck.com/oembed.json",{useYQL:"json"}),new a.fn.oembed.OEmbedProvider("popplet","rich",["popplet.com/app/.*"],"http://popplet.com/app/Popplet_Alpha.swf?page_id=$1&em=1",{templateRegex:/.*#\/([^\/]+).*/,embedtag:{width:460,height:460}}),new a.fn.oembed.OEmbedProvider("pearltrees","rich",["pearltrees.com/.*"],"http://cdn.pearltrees.com/s/embed/getApp?",{templateRegex:/.*N-f=1_(\d+).*N-p=(\d+).*/,embedtag:{width:460,height:460,flashvars:"lang=en_US&amp;embedId=pt-embed-$1-693&amp;treeId=$1&amp;pearlId=$2&amp;treeTitle=Diagrams%2FVisualization&amp;site=www.pearltrees.com%2FF"}}),
new a.fn.oembed.OEmbedProvider("prezi","rich",["prezi.com/.*"],"http://prezi.com/bin/preziloader.swf?",{templateRegex:/.*com\/([^\/]+)\/.*/,embedtag:{width:550,height:400,flashvars:"prezi_id=$1&amp;lock_to_path=0&amp;color=ffffff&amp;autoplay=no&amp;autohide_ctrls=0"}}),new a.fn.oembed.OEmbedProvider("tourwrist","rich",["tourwrist.com/tours/.+"],null,{templateRegex:/.*tours.([\d]+).*/,template:function(b,a){setTimeout(function(){loadEmbeds&&loadEmbeds()},2E3);return"<div id='"+a+"' class='tourwrist-tour-embed direct'></div> <script type='text/javascript' src='http://tourwrist.com/tour_embed.js'><\/script>"}}),
new a.fn.oembed.OEmbedProvider("meetup","rich",["meetup\\.(com|ps)/.+"],"http://api.meetup.com/oembed"),new a.fn.oembed.OEmbedProvider("ebay","rich",["ebay\\.*"],"http://togo.ebay.com/togo/togo.swf?2008013100",{templateRegex:/.*\/([^\/]+)\/(\d{10,13}).*/,embedtag:{width:355,height:300,flashvars:"base=http://togo.ebay.com/togo/&lang=en-us&mode=normal&itemid=$2&query=$1"}}),new a.fn.oembed.OEmbedProvider("wikipedia","rich",["wikipedia.org/wiki/.+"],"http://$1.wikipedia.org/w/api.php?action=parse&page=$2&format=json&section=0&callback=?",
{templateRegex:/.*\/\/([\w]+).*\/wiki\/([^\/]+).*/,templateData:function(b){if(!b.parse)return!1;var a=b.parse.text["*"].replace('href="/wiki','href="http://en.wikipedia.org/wiki');return'<div id="content"><h3><a class="nav-link" href="http://en.wikipedia.org/wiki/'+b.parse.displaytitle+'">'+b.parse.displaytitle+"</a></h3>"+a+"</div>"}}),new a.fn.oembed.OEmbedProvider("imdb","rich",["imdb.com/title/.+"],"http://www.imdbapi.com/?i=$1&callback=?",{templateRegex:/.*\/title\/([^\/]+).*/,templateData:function(b){return!b.Title?
!1:'<div id="content"><h3><a class="nav-link" href="http://imdb.com/title/'+b.ID+'/">'+b.Title+"</a> ("+b.Year+")</h3><p>Starring: "+b.Actors+'</p><div id="photo-wrap" style="margin: auto;width:600px;height:450px;"><img class="photo" id="photo-display" src="'+b.Poster+'" alt="'+b.Title+'"></div>  <div id="view-photo-caption">'+b.Plot+"</div></div>"}}),new a.fn.oembed.OEmbedProvider("livejournal","rich",["livejournal.com/"],"http://ljpic.seacrow.com/json/$2$4?jsonp=?",{templateRegex:/(http:\/\/(((?!users).)+)\.livejournal\.com|.*users\.livejournal\.com\/([^\/]+)).*/,
templateData:function(b){return!b.username?!1:'<div><img src="'+b.image+'" align="left" style="margin-right: 1em;" /><span class="oembedall-ljuser"><a href="http://'+b.username+'.livejournal.com/profile"><img src="http://www.livejournal.com/img/userinfo.gif" alt="[info]" width="17" height="17" /></a><a href="http://'+b.username+'.livejournal.com/">'+b.username+"</a></span><br />"+b.name+"</div>"}}),new a.fn.oembed.OEmbedProvider("circuitbee","rich",["circuitbee\\.com/circuit/view/.+"],"http://c.circuitbee.com/build/r/schematic-embed.html?id=$1",
{templateRegex:/.*circuit\/view\/(\d+).*/,embedtag:{tag:"iframe",width:"500",height:"350"}}),new a.fn.oembed.OEmbedProvider("googlecalendar","rich",["www.google.com/calendar/embed?.+"],"$1",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"800",height:"600"}}),new a.fn.oembed.OEmbedProvider("jsfiddle","rich",["jsfiddle.net/[^/]+/?"],"http://jsfiddle.net/$1/embedded/result,js,resources,html,css/?",{templateRegex:/.*net\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new a.fn.oembed.OEmbedProvider("jsbin",
"rich",["jsbin.com/.+"],"http://jsbin.com/$1/?",{templateRegex:/.*com\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:"300"}}),new a.fn.oembed.OEmbedProvider("jotform","rich",["form.jotform.co/form/.+"],"$1?",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"100%",height:"507"}}),new a.fn.oembed.OEmbedProvider("reelapp","rich",["reelapp\\.com/.+"],"http://www.reelapp.com/$1/embed",{templateRegex:/.*com\/(\S{6}).*/,embedtag:{tag:"iframe",width:"400",height:"338"}}),new a.fn.oembed.OEmbedProvider("linkedin",
"rich",["linkedin.com/pub/.+"],"https://www.linkedin.com/cws/member/public_profile?public_profile_url=$1&format=inline&isFramed=true",{templateRegex:/(.*)/,embedtag:{tag:"iframe",width:"368px",height:"auto"}}),new a.fn.oembed.OEmbedProvider("timetoast","rich",["timetoast.com/timelines/[0-9]+"],"http://www.timetoast.com/flash/TimelineViewer.swf?passedTimelines=$1",{templateRegex:/.*timelines\/([0-9]*)/,embedtag:{width:550,height:400,nocache:1}}),new a.fn.oembed.OEmbedProvider("pastebin","rich",["pastebin\\.com/[\\S]{8}"],
"http://pastebin.com/embed_iframe.php?i=$1",{templateRegex:/.*\/(\S{8}).*/,embedtag:{tag:"iframe",width:"100%",height:"auto"}}),new a.fn.oembed.OEmbedProvider("pastie","rich",["pastie\\.org/pastes/.+"],null,{yql:{xpath:'//pre[@class="textmate-source"]'}}),new a.fn.oembed.OEmbedProvider("github","rich",["gist.github.com/.+"],"https://github.com/api/oembed"),new a.fn.oembed.OEmbedProvider("github","rich",["github.com/[-.\\w@]+/[-.\\w@]+"],"https://api.github.com/repos/$1/$2?callback=?",{templateRegex:/.*\/([^\/]+)\/([^\/]+).*/,
templateData:function(b){return!b.data.html_url?!1:'<div class="oembedall-githubrepos"><ul class="oembedall-repo-stats"><li>'+b.data.language+'</li><li class="oembedall-watchers"><a title="Watchers" href="'+b.data.html_url+'/watchers">&#x25c9; '+b.data.watchers+'</a></li><li class="oembedall-forks"><a title="Forks" href="'+b.data.html_url+'/network">&#x0265; '+b.data.forks+'</a></li></ul><h3><a href="'+b.data.html_url+'">'+b.data.name+'</a></h3><div class="oembedall-body"><p class="oembedall-description">'+
b.data.description+'</p><p class="oembedall-updated-at">Last updated: '+b.data.pushed_at+"</p></div></div>"}}),new a.fn.oembed.OEmbedProvider("facebook","rich",["facebook.com/(people/[^\\/]+/\\d+|[^\\/]+$)"],"https://graph.facebook.com/$2$3/?callback=?",{templateRegex:/.*facebook.com\/(people\/[^\/]+\/(\d+).*|([^\/]+$))/,templateData:function(b){if(!b.id)return!1;var a='<div class="oembedall-facebook1"><div class="oembedall-facebook2"><a href="http://www.facebook.com/">facebook</a> <a href="'+b.link+
'">'+b.name+'</a></div><div class="oembedall-facebookBody"><div>';b.picture&&(a+='<img src="'+b.picture+'" align="left"></div><div>');b.category&&(a+="Category  <strong>"+b.category+"</strong><br/>");b.website&&(a+="Website  <strong>"+b.website+"</strong><br/>");b.gender&&(a+="Gender  <strong>"+b.gender+"</strong><br/>");return a+"</div></div></div>"}}),new a.fn.oembed.OEmbedProvider("stackoverflow","rich",["stackoverflow.com/questions/[\\d]+"],"http://api.stackoverflow.com/1.1/questions/$1?body=true&jsonp=?",
{templateRegex:/.*questions\/([\d]+).*/,templateData:function(b){if(!b.questions)return!1;var b=b.questions[0],g=a(b.body).text(),g='<div class="oembedall-stoqembed"><div class="oembedall-statscontainer"><div class="oembedall-statsarrow"></div><div class="oembedall-stats"><div class="oembedall-vote"><div class="oembedall-votes"><span class="oembedall-vote-count-post"><strong>'+(b.up_vote_count-b.down_vote_count)+'</strong></span><div class="oembedall-viewcount">vote(s)</div></div></div><div class="oembedall-status"><strong>'+
b.answer_count+'</strong>answer</div></div><div class="oembedall-views">'+b.view_count+' view(s)</div></div><div class="oembedall-summary"><h3><a class="oembedall-question-hyperlink" href="http://stackoverflow.com/questions/'+b.question_id+'/">'+b.title+'</a></h3><div class="oembedall-excerpt">'+g.substring(0,100)+'...</div><div class="oembedall-tags">';for(i in b.tags)g+='<a title="" class="oembedall-post-tag" href="http://stackoverflow.com/questions/tagged/'+b.tags[i]+'">'+b.tags[i]+"</a>";return g+=
'</div><div class="oembedall-fr"><div class="oembedall-user-info"><div class="oembedall-user-gravatar32"><a href="http://stackoverflow.com/users/'+b.owner.user_id+"/"+b.owner.display_name+'"><img width="32" height="32" alt="" src="http://www.gravatar.com/avatar/'+b.owner.email_hash+'?s=32&amp;d=identicon&amp;r=PG"></a></div><div class="oembedall-user-details"><a href="http://stackoverflow.com/users/'+b.owner.user_id+"/"+b.owner.display_name+'">'+b.owner.display_name+'</a><br><span title="reputation score" class="oembedall-reputation-score">'+
b.owner.reputation+"</span></div></div></div></div></div>"}}),new a.fn.oembed.OEmbedProvider("wordpress","rich",["wordpress\\.com/.+","blogs\\.cnn\\.com/.+","techcrunch\\.com/.+","wp\\.me/.+"],"http://public-api.wordpress.com/oembed/1.0/?for=jquery-oembed-all"),new a.fn.oembed.OEmbedProvider("screenr","rich",["screenr.com"],"http://www.screenr.com/embed/$1",{templateRegex:/.*\/([^\/]+).*/,embedtag:{tag:"iframe",width:"650",height:396}}),new a.fn.oembed.OEmbedProvider("gigpans","rich",["gigapan\\.org/[-.\\w@]+/\\d+"],
"http://gigapan.org/gigapans/$1/options/nosnapshots/iframe/flash.html",{templateRegex:/.*\/(\d+)\/?.*/,embedtag:{tag:"iframe",width:"100%",height:400}}),new a.fn.oembed.OEmbedProvider("scribd","rich",["scribd\\.com/.+"],"http://www.scribd.com/embeds/$1/content?start_page=1&view_mode=list",{templateRegex:/.*doc\/([^\/]+).*/,embedtag:{tag:"iframe",width:"100%",height:600}}),new a.fn.oembed.OEmbedProvider("kickstarter","rich",["kickstarter\\.com/projects/.+"],"$1/widget/card.html",{templateRegex:/([^\?]+).*/,
embedtag:{tag:"iframe",width:"220",height:380}}),new a.fn.oembed.OEmbedProvider("amazon","rich",["amzn.com/B+","amazon.com.*/(B\\S+)($|\\/.*)"],"http://rcm.amazon.com/e/cm?t=_APIKEY_&o=1&p=8&l=as1&asins=$1&ref=qf_br_asin_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr",{apikey:!0,templateRegex:/.*\/(B[0-9A-Z]+)($|\/.*)/,embedtag:{tag:"iframe",width:"120px",height:"240px"}}),new a.fn.oembed.OEmbedProvider("slideshare","rich",["slideshare.net"],"http://www.slideshare.net/api/oembed/2",
{format:"jsonp"}),new a.fn.oembed.OEmbedProvider("roomsharejp","rich",["roomshare\\.jp/(en/)?post/.*"],"http://roomshare.jp/oembed.json"),new a.fn.oembed.OEmbedProvider("lanyard","rich",["lanyrd.com/\\d+/.+"],null,{yql:{xpath:'(//div[@class="primary"])[1]',from:"htmlstring",datareturn:function(b){return!b.result?!1:'<div class="oembedall-lanyard">'+b.result+"</div>"}}}),new a.fn.oembed.OEmbedProvider("asciiartfarts","rich",["asciiartfarts.com/\\d+.html"],null,{yql:{xpath:"//pre/font",from:"htmlstring",
datareturn:function(b){return!b.result?!1:'<pre style="background-color:000;">'+b.result+"</div>"}}}),new a.fn.oembed.OEmbedProvider("opengraph","rich",[".*"],null,{yql:{xpath:"//meta|//title|//link",from:"html",datareturn:function(b){!b["og:title"]&&(b.title&&b.description)&&(b["og:title"]=b.title);if(!b["og:title"]&&!b.title)return!1;var g=a("<p/>");if(b["og:video"]){var f=a('<embed src="'+b["og:video"]+'"/>');f.attr("type",b["og:video:type"]||"application/x-shockwave-flash").css("max-height",l.maxHeight||
"auto").css("max-width",l.maxWidth||"auto");b["og:video:width"]&&f.attr("width",b["og:video:width"]);b["og:video:height"]&&f.attr("height",b["og:video:height"]);g.append(f)}else b["og:image"]&&(f=a('<img src="'+b["og:image"]+'">'),f.css("max-height",l.maxHeight||"auto").css("max-width",l.maxWidth||"auto"),b["og:image:width"]&&f.attr("width",b["og:image:width"]),b["og:image:height"]&&f.attr("height",b["og:image:height"]),g.append(f));b["og:title"]&&g.append("<b>"+b["og:title"]+"</b><br/>");b["og:description"]?
g.append(b["og:description"]+"<br/>"):b.description&&g.append(b.description+"<br/>");return g}}})]})(jQuery);
String.prototype.md5=function(){var a=function(a,l){var b=(a&65535)+(l&65535);return(a>>16)+(l>>16)+(b>>16)<<16|b&65535},n=function(g,l,b,k,f,e){g=a(a(l,g),a(k,e));return a(g<<f|g>>>32-f,b)},p=function(a,l,b,k,f,e,m){return n(l&b|~l&k,a,l,f,e,m)},m=function(a,l,b,k,f,e,m){return n(l&k|b&~k,a,l,f,e,m)},o=function(a,l,b,k,f,e,m){return n(b^(l|~k),a,l,f,e,m)};return function(a){var l="",b,k=4*a.length;for(b=0;b<k;b++)l+="0123456789abcdef".charAt(a[b>>2]>>8*(b%4)+4&15)+"0123456789abcdef".charAt(a[b>>
2]>>8*(b%4)&15);return l}(function(g){var l,b,k,f,e,q=g.length,d=1732584193,c=-271733879,h=-1732584194,j=271733878;for(e=0;e<q;e+=16)l=d,b=c,k=h,f=j,d=p(d,c,h,j,g[e+0],7,-680876936),j=p(j,d,c,h,g[e+1],12,-389564586),h=p(h,j,d,c,g[e+2],17,606105819),c=p(c,h,j,d,g[e+3],22,-1044525330),d=p(d,c,h,j,g[e+4],7,-176418897),j=p(j,d,c,h,g[e+5],12,1200080426),h=p(h,j,d,c,g[e+6],17,-1473231341),c=p(c,h,j,d,g[e+7],22,-45705983),d=p(d,c,h,j,g[e+8],7,1770035416),j=p(j,d,c,h,g[e+9],12,-1958414417),h=p(h,j,d,c,g[e+
10],17,-42063),c=p(c,h,j,d,g[e+11],22,-1990404162),d=p(d,c,h,j,g[e+12],7,1804603682),j=p(j,d,c,h,g[e+13],12,-40341101),h=p(h,j,d,c,g[e+14],17,-1502002290),c=p(c,h,j,d,g[e+15],22,1236535329),d=m(d,c,h,j,g[e+1],5,-165796510),j=m(j,d,c,h,g[e+6],9,-1069501632),h=m(h,j,d,c,g[e+11],14,643717713),c=m(c,h,j,d,g[e+0],20,-373897302),d=m(d,c,h,j,g[e+5],5,-701558691),j=m(j,d,c,h,g[e+10],9,38016083),h=m(h,j,d,c,g[e+15],14,-660478335),c=m(c,h,j,d,g[e+4],20,-405537848),d=m(d,c,h,j,g[e+9],5,568446438),j=m(j,d,c,
h,g[e+14],9,-1019803690),h=m(h,j,d,c,g[e+3],14,-187363961),c=m(c,h,j,d,g[e+8],20,1163531501),d=m(d,c,h,j,g[e+13],5,-1444681467),j=m(j,d,c,h,g[e+2],9,-51403784),h=m(h,j,d,c,g[e+7],14,1735328473),c=m(c,h,j,d,g[e+12],20,-1926607734),d=n(c^h^j,d,c,g[e+5],4,-378558),j=n(d^c^h,j,d,g[e+8],11,-2022574463),h=n(j^d^c,h,j,g[e+11],16,1839030562),c=n(h^j^d,c,h,g[e+14],23,-35309556),d=n(c^h^j,d,c,g[e+1],4,-1530992060),j=n(d^c^h,j,d,g[e+4],11,1272893353),h=n(j^d^c,h,j,g[e+7],16,-155497632),c=n(h^j^d,c,h,g[e+10],
23,-1094730640),d=n(c^h^j,d,c,g[e+13],4,681279174),j=n(d^c^h,j,d,g[e+0],11,-358537222),h=n(j^d^c,h,j,g[e+3],16,-722521979),c=n(h^j^d,c,h,g[e+6],23,76029189),d=n(c^h^j,d,c,g[e+9],4,-640364487),j=n(d^c^h,j,d,g[e+12],11,-421815835),h=n(j^d^c,h,j,g[e+15],16,530742520),c=n(h^j^d,c,h,g[e+2],23,-995338651),d=o(d,c,h,j,g[e+0],6,-198630844),j=o(j,d,c,h,g[e+7],10,1126891415),h=o(h,j,d,c,g[e+14],15,-1416354905),c=o(c,h,j,d,g[e+5],21,-57434055),d=o(d,c,h,j,g[e+12],6,1700485571),j=o(j,d,c,h,g[e+3],10,-1894986606),
h=o(h,j,d,c,g[e+10],15,-1051523),c=o(c,h,j,d,g[e+1],21,-2054922799),d=o(d,c,h,j,g[e+8],6,1873313359),j=o(j,d,c,h,g[e+15],10,-30611744),h=o(h,j,d,c,g[e+6],15,-1560198380),c=o(c,h,j,d,g[e+13],21,1309151649),d=o(d,c,h,j,g[e+4],6,-145523070),j=o(j,d,c,h,g[e+11],10,-1120210379),h=o(h,j,d,c,g[e+2],15,718787259),c=o(c,h,j,d,g[e+9],21,-343485551),d=a(d,l),c=a(c,b),h=a(h,k),j=a(j,f);return[d,c,h,j]}(function(a){var l=(a.length+8>>6)+1,b=[],k,f=16*l,e=a.length;for(k=0;k<f;k++)b.push(0);for(k=0;k<e;k++)b[k>>
2]|=(a.charCodeAt(k)&255)<<8*(k%4);b[k>>2]|=128<<8*(k%4);b[16*l-2]=8*e;return b}(this)))};