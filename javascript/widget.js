
// snipet for popout SRF
$("[data-toggle=popover]").popover({
    html: true, 
	content: function() {
          return $('#popover-content').html();
        }
});

// Facebook widget snipet

$(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=238957949482864";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// map for widget
/*! Landcarte (c) AT MMXII, attimes.org | http://attimes.org/license | version: 2015/04/24 */
;at=(function(t){var e={log:function(){try{var t=Array.prototype.slice.call(arguments);if(typeof(t[0])==="string"){if(/[\{\}]/.test(t[0])&&t.length>1){var n=t.length>2?t.slice(1):t[1];return console.log(this.text(t[0],n))}};return console.log.apply(console,t)}catch(e){}},escape:function(t){return t?t.replace(/([\.\*\+\?\|\(\)\[\]\{\}\\\/\:])/g,"\\$1"):t},text:function(t,e,n){var o=t,s=this.text;if(t&&e!=null){switch(e.constructor){case Array:var l={};for(var r=0;r<e.length;r++)l[r]=e[r];o=s(t,l,n);break;case Object:var a,i;for(var r in e){if(typeof(e[r])=="function"){i=e[r];a=null}else{i=n&&n.constructor==Object?n[r]:n;a=e[r]};if(i!=null){switch(typeof(i)){case"string":a=s(i,e);break;case"function":a=i(r,e);break}};o=o.replace(new RegExp("\\{"+this.escape(r)+"\\}","g"),a)};break;default:o=s(t,{0:e},n)}};return o},extend:function(t,n,i){var f=e.extend;switch(typeof(t)){case"function":var u=function(){};var s=Array.prototype.slice.call(arguments,2);u.prototype=n.prototype;for(var r=0;r<s.length;r++){if(typeof(s[r])=="function")s[r]=s[r].prototype};s.unshift(t.prototype=new u());f.apply(this,s);t.prototype.constructor=t;t.superclass=n;break;case"object":if(t==null)t={};var a=Array.prototype.slice.call(arguments,1),h=0,l=function(t,e,n){var i=n?n.constructor:null;if(!i)t[e]=n;else if(i==Array){if(!t[e]||typeof(t[e])!="object")t[e]=new Array(n.length);for(var r=0;r<n.length;r++)l(t[e],r,n[r])}else if(i==Object){t[e]=f({},t[e],n)}else t[e]=n};for(var r=0;r<a.length;r++){if(a[r]!=null){var c=a[r].constructor;if(c==Array){for(var o=0;o<a[r].length;o++)l(t,o,a[r][o])}else if(c==Object||c.superclass!=null){for(var o in a[r]){if(a[r].hasOwnProperty(o))l(t,o,a[r][o])}}}};break};return t},map:function(t,e,n){if(!t)return;if(arguments.length==2){n=arguments[1];e=t};if(!n){n={};for(var r in e){if(e.hasOwnProperty(r)&&typeof(e[r])=="function")n[r]=e[r]}};for(var r in n){if(n.hasOwnProperty(r)){if(typeof(n[r])=="function"){t[r]=(function(t,e){return function(){return t.apply(e,arguments)}})(n[r],e)}else t[r]=n[r]}}},template:function(t,n,r){if(!e.dom||!e.dom.factory)return null;var i=e.dom.factory.getTemplate(t);return arguments.length>1?i.render(n,r):i},alert:function(t,e){if(!t&&e)t=e.content;window.alert(t);if(e){if(e.confirmed)e.confirmed();if(e.resolved)e.resolved("confirmed")}},flash:function(t,e){return this.alert(t,e)},confirm:function(t,e){if(!t&&e)t=e.content;var n=window.confirm(t);if(e){if(n&&e.confirmed)e.confirmed();if(!n&&e.rejected)e.rejected();if(e.resolved)e.resolved(n?"confirmed":"rejected")}}};if(t.at&&t.at.log)e=e.extend(t.at,e);return e})(window);at.geo=(function(){var t={getDistance:function(t,e){var a=6371.0,n=Math.PI/180.0,l=180.0/Math.PI;t=this.toCoordinates(t);e=this.toCoordinates(e);var i=(e.lat-t.lat)*n,o=(e.lon-t.lon)*n,r=Math.sin(i/2.0)*Math.sin(i/2.0)+Math.cos(t.lat*n)*Math.cos(e.lat*n)*Math.sin(o/2.0)*Math.sin(o/2.0),s=2.0*Math.atan2(Math.sqrt(r),Math.sqrt(1.0-r));return a*s},getCurrentLocation:function(e){if(!e)e={};else if(typeof(e)==="function")e={success:e};var n={success:e.success||function(e){at.log("current location: {0}",t.toString(e.coords))},error:e.error||function(t){at.log("failed to retrieve current position; error: {0}",t.code==null?t:t.code)},unsupported:e.unsupported||function(){at.log("geolocation is not supported")}};if(navigator.geolocation){try{navigator.geolocation.getCurrentPosition(n.success,n.error,{enableHighAccuracy:!0})}catch(r){n.error(r.toString())}}else n.unsupported()},toCoordinates:function(t){if(!t)return null;var e=null;switch(t.constructor){case String:var r=t.split(/\s*,\s*/),o=!0;if(!r||r.length<2)return null;for(var n in r){r[n]=parseFloat(r[n]);o&=!isNaN(r[n])};if(o)e={lat:parseFloat(r[0]),lon:parseFloat(r[1])};break;case Array:if(t.length>1&&typeof(t[0])==="number"&&typeof(t[1])==="number")e={lat:t[0],lon:t[1]};break;default:e={lat:t.lat,lon:t.lon};if(e.lat==null){var i="latitude|Latitude|Lat|LAT|phi".split("|");for(var n in i)if(t[i[n]]!=null){e.lat=t[i[n]];break}};if(e.lon==null){var i="longitude|Longitude|Lon|LON|Long|LONG|lambda|lng|Lng|LNG".split("|");for(var n in i)if(t[i[n]]!=null){e.lon=t[i[n]];break}};if(e.lat!=null&&e.lon!=null){for(var n in e)if(e[n].constructor!=Number)e[n]=parseFloat(e[n])}else e=null};return e},toBoundingBox:function(t){if(!t)return null;var n=null;switch(t.constructor){case Array:if(t.length<2)return null;var e=[this.toCoordinates(t[0]),this.toCoordinates(t[1])];if(e[0]==null||e[1]==null)return null;n={sw:e[0],ne:e[1]};break;default:if(t.sw==null||t.ne==null)return null;var e=[this.toCoordinates(t.sw),this.toCoordinates(t.ne)];n={sw:e[0],ne:e[1]}};return n},setLayer:function(t){if(typeof(t)==="string")t=this[t];if(t){var n=["Map","Object","Collection"];for(var e=0;e<n.length;e++)this[n[e]]=t[n[e]]};return this},toString:function(t){if(t==null)return Object.prototype.toString.call(this);var e=this.toCoordinates(t);if(e!=null){var n="{0}, {1}",r=[e.lat,e.lon];if(at.util){n="{0}, {1} ({2}, {3})";r=[e.lat,e.lon,at.util.text(e.lat,"lat"),at.util.text(e.lon,"lon")]};return at.text(n,r)};return t.toString()}};return t})();at.geo.ggl=(function(t){var e={getCurrentLocation:function(e){if(!e)e={};else if(typeof(e)==="function")e={success:e};var n={success:function(){var n,r;if(t&&t.loader&&(r=t.loader.ClientLocation)){n={coords:{latitude:r.latitude,longitude:r.longitude},timestamp:(new Date()).getTime(),source:"google.loader"};if(e.success)e.success(n);else at.log("current location: {0}",at.geo.toString(n.coords))};return!!n},error:e.error||function(){at.log("failed to retrieve current position")}};if(!n.success()){$.getScript("https://www.google.com/jsapi").done(function(){if(!n.success())n.error()}).fail(function(){n.error()})}},geocode:function(t){this.geocoding.run.apply(this.geocoding,arguments)},getRoute:function(t){this.route.run.apply(this.route,arguments)},internalize:function(t,e,n){return this.transformation.run("forward",t,e,n)},externalize:function(t,e,n){return this.transformation.run("backward",t,e,n)},getInternalType:function(t){return this.transformation.forward.getType(t)},getExternalType:function(t){return this.transformation.backward.getType(t)},getInternalEvent:function(t){return this.transformation.forward.getEventType(t)},getStaticMapURL:function(t,e){var a="//maps.googleapis.com/maps/api/staticmap",n=t||{},o=!0;var r=[],i;if(!e)e={};if(n.center){i=at.geo.toCoordinates(n.center);r.push("center="+i.lat+","+i.lon)}else o=!1;if(n.zoom)r.push("zoom="+n.zoom);if(n.width&&n.height)e={width:n.width,height:n.height};if(n.size)e=n.size;if(e&&e.length==2)r.push("size="+e[0]+"x"+e[1]);else if(e&&e.width&&e.height)r.push("size="+e.width+"x"+e.height);else o=!1;if(n.mapTypeId)r.push("maptype="+n.mapTypeId);if(n.key)r.push("key="+n.key);var s=a+(r.length?"?"+r.join("&"):"");return o?s:null},ready:function(){return this.engine("maps")!=null},engine:function(e){return e?(t?t[e]:null):t}};return e})(window.google);if(!at.geo.gglx)at.geo.gglx={};at.geo.gglx.Marker=(function(t,e){var r=function(t){for(var e in t)this.set(e,t[e])},n={onAdd:function(){var r=this,t=this.component={};t.container=document.createElement("div");t.container.className="geo-marker";t.container.style.position="absolute";if(this.caption){t.caption=document.createElement("div");t.caption.className="geo-marker-caption";t.caption.innerHTML=this.caption;t.container.appendChild(t.caption)};if(this.width!=null&&this.height!=null)this.l$(this.width,this.height);if(this.label)this.n$(this.label.content||this.label);this.setIcon();var n=this.getPanes();n.overlayMouseTarget.appendChild(t.container);for(var e in this.listeners)this.r$(this.listeners[e].event,this.listeners[e].handler)},setIcon:function(t){if(t)this.component.container.style.backgroundImage=t.url||t;this.draw()},getContainer:function(){return this.component?this.component.container:null},n$:function(t){var n=this,e=this.component;if(!e||typeof(t)==="undefined")return;if(e.label)e.label.innerHTML=t;else{setTimeout(function(){e.label=document.createElement("div");e.label.className="geo-marker-label";e.label.innerHTML=t;e.container.appendChild(e.label)},10)};if(this.label&&this.label.constructor!=String)this.label.content=t;else this.label={content:t}},o$:function(){if(this.component&&this.component.label)return this.component.label.innerHTML||"";return""},l$:function(t){if(t==null)return;if(arguments.length>1&&t.w==null)t={w:arguments[0],h:arguments[1]};this.component.container.style.width=t.w+"px";this.component.container.style.height=t.h+"px"},draw:function(){var n=this.getProjection(),t=this.component.container,e=n.fromLatLngToDivPixel(this.position);if(t&&t.style&&e){t.style.left=e.x-t.offsetWidth/2+"px";t.style.top=e.y-t.offsetHeight/2+"px"}},onRemove:function(){var t=this.component&&this.component.container;if(t&&t.parentNode){t.parentNode.removeChild(t);t=null}},getPosition:function(){return this.position},r$:function(t,n){var r=t.split(/\s+/),a=/^label\./,s,o;if(this.component){if(!this.handlers)this.handlers=[];for(var i in r){s=this.component[a.test(r[i])?"label":"container"];o=r[i].replace(a,"");this.handlers.push({id:e.event.addDomListener(s,o,n),event:r[i],handler:n})}}else{if(!this.listeners)this.listeners=[];for(var i in r)this.listeners.push({event:r[i],handler:n})}},a$:function(t,n){var i=t.split(/\s+/);if(this.component){for(var o in i){for(var r in this.handlers){if((n&&this.handlers[r].handler==n)||this.handlers[r].event==i[o])e.event.removeListener(this.handlers[r].id)}}}else{for(var o in i){for(var r in this.listeners){if((n&&this.listeners[r].handler==n)||this.listeners[r].event==i[o])this.listeners.splice(r,1)}}}}};return e&&e.OverlayView?at.extend(r,e.OverlayView,n):null})(at.geo.ggl,at.geo.ggl.engine("maps"));at.geo.ggl.Object=(function(t,e){var n=function(e,r){if(e instanceof n){this.core=e.core;this.type=e.type;this.container=r||e.container||null}else{this.core=e;this.type=this.type||t.getExternalType(this.core);this.container=r||null}},r={attr:function(e,n,r){var i=this;if(typeof(n)==="undefined"){if(typeof(e)!=="string"){for(var o in e)arguments.callee.call(this,o,e[o],r);return this};var n=this.value("get",e);return r===!0?t.externalize(e,n):n};t.internalize(e,n,function(t,n){i.value("set",e,t);i.revise(e,n)});return this},prop:function(t,e){return this.attr(t,e,!0)},value:function(t,e,n){if(!e||!this.core)return t=="set"?this:null;var r=t+e.charAt(0).toUpperCase()+e.substring(1);if(this.core[r])return this.core[r](n);return this.core[t](e,n)},revise:function(e,n){if(e=="position"&&this.type==="marker"&&n){if(n.address)this.value("set","address",n.address);if(n.geoobjects&&n.geoobjects[0])this.value("set","geoobject",n.geoobjects[0])}else if(e=="strokeStyle"&&this.is("shape"))t.graphics.setStyle(this.core)},show:function(t){return this.toggle(!0,t)},hide:function(){return this.toggle(!1)},visible:function(){if(!this.core)return!1;var e=!1;if(this.container instanceof t.Map){if(this.type=="panorama")e=this.core.get("visible");else e=this.core.getMap()!=null}else e=this.core.get("visible");return e},toggle:function(e,r){if(!this.core)return this;if(typeof(e)==="string"){var a=this.prop(e),o=typeof(a);if(o==="boolean"||o==="undefined")return this.prop(e,!a)}else{var i=e==null?!this.visible():!!e;if(this.container instanceof t.Map){switch(this.type){case"balloon":if(r instanceof n)r=r.core;if(r)this.anchor=r;if(!this.prop("position"))r=this.anchor;if(i)this.core.open(this.container.core,r);else this.core.close();break;case"panorama":this.core.set("visible",i);break;default:this.core.set("visible",i);this.core.setMap(i?this.container.core:null)}}else this.core.set("visible",i)};return this},on:function(t,e){return this.handle("on",t,e)},off:function(t,e){return this.handle("off",t,e)},trigger:function(n){if(!n||!this.core||!e)return this;e.event.trigger(this.core,t.getInternalEvent(n))},handle:function(n,r,i){if(!r||!this.core||!e)return this;var l=this,s=r.split(/\s+/);if(s.length>1){for(var o in s)arguments.callee.call(this,n,s[o],i);return this};var c=t.getInternalEvent(r);if(n==="off"){for(var o in this.handlers){if(this.handlers[o].event==r&&(!i||this.handlers[o].original==i)){if(this.core.a$)this.core.a$(r,this.handlers[o].extended);else e.event.removeListener(this.handlers[o].id)}}}else if(i){var a={event:r,original:i};a.extended=function(e){var o={type:r,target:l,originalEvent:e};if(e){var n;if((n=e["latLng"])!=null)o.location=t.externalize(n);if((n=e["pixel"])!=null)o.point={x:n.x,y:n.y};if((n=e["featureData"])!=null){var s={"infoWindowHtml":"html"};o.data={};for(var a in n)o.data[s[a]||a]=n[a]}};i.call(l.core,o)};if(this.core.r$)this.core.r$(r,a.extended);else a.id=e.event.addListener(this.core,c,a.extended);if(!this.handlers)this.handlers=[];this.handlers.push(a)};return this},bounds:function(){return t.externalize(this.t$())},t$:function(){if(!this.core)return null;var r=[],i,n,o;if(this.core.getBounds)i=this.core.getBounds();else if(n=this.attr("position"))r.push(n);else if(this.core.getPaths){n=this.core.getPaths();for(var t=0;t<n.getLength();t++){o=n.getAt(t);for(var a=0;a<o.getLength();a++)r.push(o.getAt(a))}}else if(this.core.getPath){n=this.core.getPath();for(var t=0;t<n.getLength();t++)r.push(n.getAt(t))};if(r.length&&!i&&e){var i=new e.LatLngBounds();for(var t in r)i.extend(r[t])};return i||null},fit:function(){if(this.container instanceof t.Map)this.container.fit(this.t$());return this},html:function(t){if(!this.core)return this;if(typeof(t)==="undefined"&&this.core.o$)return this.core.o$();else if(this.core.n$)this.core.n$(t);return this},remove:function(){this.hide();if(this.container instanceof t.Map)this.container.remove(this)},is:function(t){if(!t||!this.core)return!1;if(t==this.type||t==this.type+"s")return!0;if(/^layers?$/.test(t)&&/^layer\./.test(this.type))return!0;if(/^shapes?$/.test(t)){var e=["polyline","polygon","circle","rectangle"];for(var n in e){if(this.type==e[n])return!0}};return!1},getId:function(){if(!this.id){var t=Math.floor(899*Math.random()+100);this.id=this.type+"-"+(new Date()).getTime()+"-"+t};return this.id}};return at.extend(n,Object,r)})(at.geo.ggl,at.geo.ggl.engine("maps"));at.geo.ggl.Collection=(function(t,e){var n=function(t){this.items=t instanceof n?t.items:(t||[])},i={attr:function(t,e,n){var o=this;if(typeof(e)==="undefined"&&typeof(t)==="string"){var i=[];for(var r in this.items)i.push(this.items[r].attr.apply(this.items[r],arguments));return i}else{for(var r in this.items)this.items[r].attr.apply(this.items[r],arguments)};return this},prop:function(t,e){return this.attr(t,e,!0)},eq:function(e){return this.items[e]||new t.Object(null)},first:function(){return this.eq(0)},last:function(){return this.eq(this.items.length-1)},gt:function(t){return new n(this.items.splice(t+1))},lt:function(t){return new n(this.items.splice(0,t))},get:function(t){return this.items[t]?this.items[t].core:null},each:function(t){for(var e in this.items)t.call(this.items[e].core,e,this.items[e]);return this},bounds:function(){var e=this.t$();for(var n in e)e[n].geometry=t.externalize(e[n].geometry);return e.length==0?null:(e.length==1?e[0].geometry:e)},t$:function(){if(!e)return[];var n=[],i,r;for(var a in this.items){i=this.items[a].t$();r=this.items[a].container;if(i&&(r instanceof t.Map)){if(!n.length)n.push({container:r,geometry:new e.LatLngBounds()});for(var o in n){if(r==n[o].container)n[o].geometry.union(i)}}};return n},fit:function(){var t=this.t$();for(var e in t)t[e].container.fit(t[e].geometry);return this},filter:function(t){if(!t)return this;var o=[],i;switch(typeof(t)){case"function":for(var e in this.items){if(t.call(this.items[e].core,e,this.items[e]))o.push(this.items[e])};break;case"object":for(var e in this.items){i=!0;for(var a in t)i&=this.items[e].prop(a)==t[a];if(i)o.push(this.items[e])};break;case"string":var r=t.replace(/^:/,"");switch(r){case"first":return this.first();case"last":return this.last()};var s={odd:function(t,e){return t%2!=0},even:function(t,e){return t%2==0},visible:function(t,e){return this.getMap()!=null&&this.get("visible")},invisible:function(t,e){return this.getMap()==null||!this.get("visible")}};if(s[r])return arguments.callee.call(this,s[r]);break};return new n(o)},remove:function(){for(var t in this.items)this.items[t].remove()},toArray:function(){return this.items},size:function(){return this.items.length},empty:function(){return!this.items.length}};var r=["show","hide","toggle","on","off","trigger","html"];for(var o in r){i[r[o]]=(function(t){return function(){for(var e in this.items)this.items[e][t].apply(this.items[e],arguments);return this}})(r[o])};return at.extend(n,Object,i)})(at.geo.ggl,at.geo.ggl.engine("maps"));at.geo.ggl.Map=(function(t,e,n){var r=function(t,e){this.container=t instanceof r?t.container:t;this.render(e)},i={render:function(e){var r=at.extend({},this.storage.preferredOptions,e);this.markers=[];this.overlays=[];this.buffer={};this.engine=null;if(!this.container){at.log("map container not found");this.container=document.createElement("div")};this.buffer.initialStyle=this.container.getAttribute("style");if(!n||r.staticMap){var a=r.staticMap||(!n&&(r.staticMapFallback||typeof(r.staticMapFallback)=="undefined")),s=[this.container.offsetWidth,this.container.offsetHeight],o=t.getStaticMapURL(r,s);if(o&&a){this.container.style.background="url("+o+") 50% 50% no-repeat";this.type="static-map"}else this.type="failed-map"}else{this.engine=new n.Map(this.container,{backgroundColor:r.backgroundColor})};t.Object.call(this,this.engine,this.container);var i=this.getId();if(!at.geo.storage)at.geo.storage={};at.geo.storage[i]=this;this.container.setAttribute("data-geomap",i);this.attr(r)},addMarkers:function(e,n){if(!e)return;if(e.constructor==Array){var i=t.internalize("location",e.slice());if(i!=null)e=[e]}else e=[e];if(n&&n.constructor==Array)n={position:n};var o,r;for(var a in e){i=t.internalize("location",r=e[a]);if(i||typeof(r)==="string")r={position:i||r};o=at.extend({},n,r);this.addMarker(o,e.length-1)}},addMarker:function(r,i){var o=n?n.Marker:null,a=r.custom||r.extended||r.caption||r.label;if(a&&e&&e.Marker)o=e.Marker;if(o){var s=new t.Object(new o(),this);this.markers.push(s.attr(r).show());if(!i&&this.clusterized())this.clusterize()}},add:function(e,n){if(!e)return this;if(/^markers?$/.test(e))this.addMarkers.apply(this,Array.prototype.slice.call(arguments,1));else if(/\.(kml|kmz)$/.test(e)&&e!="layer.kml")arguments.callee.call(this,"layer.kml",e);else{var o=t.getInternalType(e);if(o){var r={},i;var s=this.storage.style[e];for(var a in s)r[a]=s[a];if(n){if(n.constructor==Array){switch(e){case"polyline":n={path:n};break;case"polygon":n={paths:n};break;default:n={position:n};break}};if(n.constructor!=String)at.extend(r,n);else i=n};if(e=="panorama")i=r.container||this.container;var l=new t.Object(new o(i),this);this.overlays.push(l.attr(r).show(r.anchor))}};return this},find:function(e){var n=[],i;if(typeof(e)==="string"){var r=e.split(":"),a=r[0];i=r[1]&&(":"+r[1]);if(/^markers?$/.test(a))n=this.markers;else{for(var o in this.overlays){if(this.overlays[o].is(a))n.push(this.overlays[o])}}};return(new t.Collection(n.slice())).filter(i)},has:function(t){return this.find(t).size()},remove:function(e){var i=typeof(e);if(e instanceof t.Object)i="geoobject";switch(i){case"undefined":if(this.container){this.container.innerHTML="";this.container.setAttribute("style",this.buffer.initialStyle);this.engine=null;this.type=null};break;case"string":var n=this.find(e).toArray();for(var r in n)arguments.callee.call(this,n[r]);break;case"geoobject":var n=this[e.type==="marker"?"markers":"overlays"];for(var r in n){if(n[r]==e){n[r].hide();n[r]=null;n.splice(r,1)}};break};if(i!=="undefined")return this},fit:function(e,n){var r=this;t.internalize("bounds",e,function(t){if(r.engine&&t!=null&&!t.isEmpty())r.engine.fitBounds(t);if(n)n()});return this},view:function(t,e){this.fit.apply(this,arguments)},animate:function(e){if(!this.engine||!e)return this;if(e&&e.constructor==String){var a=e;e={};e[a]=arguments[1]};var o=this,s=this.engine,i={},r;for(var n in e){switch(n){case"center":if(e[n].x!=null||e[n].y!=null)s.panBy(e[n].x||0,e[n].y||0);else r=function(t){o.engine.panTo(t)};break;case"bounds":r=function(t){o.engine.panToBounds(t)};break;default:i[n]=e[n]};t.internalize(n,e[n],r)};return this.attr(i)},balloon:function(t){this.add("balloon",t);return this.find("balloon").last()},panorama:function(t){this.add("panorama",t);return this.find("panorama").last()},search:function(){t.geocoding.run.apply(t.geocoding,arguments);return this},e$:function(e,n){var r=Array.prototype.slice.call(e),i=this;if(r.length===1&&typeof(r[0])==="object")r=r[0];for(var o in r){if(typeof(r[o])==="function")i=null};t.route.run(r,i,n);return this},route:function(){return this.e$(arguments,"driving")},drive:function(){return this.e$(arguments,"driving")},walk:function(){return this.e$(arguments,"walking")},transit:function(){return this.e$(arguments,"transit")},cycle:function(){return this.e$(arguments,"bicycling")},clusterize:function(t,e){if(!this.engine||!this.markers.length)return this;if(this.clusterer)this.clusterer.clearMarkers();var r=[];for(var n in this.markers){if(e!=null&&!e.call(this.markers[n].core,n,this.markers[n]))this.markers[n].core.setMap(this.engine);else r.push(this.markers[n].core)};this.clusterer=new MarkerClusterer(this.engine,r,t);return this},declusterize:function(){if(!this.engine||!this.markers.length)return this;if(this.clusterer){this.clusterer.clearMarkers();this.clusterer=null};for(var t in this.markers)this.markers[t].core.setMap(this.engine);return this},clusterized:function(){if(!this.clusterer)return!1;var t=this.clusterer.getMarkers();return!!(t&&t.length)},storage:{preferredOptions:{center:[50,15],zoom:3,mapTypeId:"roadmap",scrollwheel:!1,panControl:!1,streetViewControl:!1},style:{polyline:{strokeColor:"#00f",strokeOpacity:.75,strokeWeight:3},polygon:{strokeColor:"#00f",strokeOpacity:.35,strokeWeight:3,fillColor:"#00f",fillOpacity:.2},panorama:{enableCloseButton:!0,clickToGo:!0}}}};return at.extend(r,t.Object,i)})(at.geo.ggl,at.geo.gglx,at.geo.ggl.engine("maps"));at.geo.ggl.geocoding=(function(t,e){var n={storage:{types:{country:["country"],region:["administrative_area_level_1","administrative_area_level_2","administrative_area_level_3"],locality:["locality"],sublocality:["sublocality","point_of_interest","establishment"],street:["street_address","point_of_interest","establishment"],route:["route"]}},run:function(n){if(!e||!e.Geocoder)return at.log("geocoding service unavailable");if(!this.service)this.service=new e.Geocoder();var s=this,i=this.getNormalizedOptions.apply(this,arguments),o=this.getRequestOrigin(i),r={origin:o};var a={"latLng":t.internalize("location",o.location),"address":o.address,"bounds":o.bounds,"region":o.region};this.service.geocode(a,function(t,e){if(t){r.results=t;r.geoobjects=s.getNormalizedData(t);if(a=r.geoobjects[0]){var n=["location","geometry","sublocality","locality","region","country","countryCode"];r.address=a.name;for(var o in n)r[n[o]]=a[n[o]]||null};if(typeof(i.success)==="function")i.success(r)}else if(typeof(i.error)==="function")i.error(e);r.status=e;if(typeof(i.complete)==="function")i.complete(r)})},getNormalizedOptions:function(e){if(e==null)e={};var n={success:function(t){at.log(t)},error:function(t){at.log("geocoding failed; status: {0}",t)}};var i=typeof(e),r=t.internalize("location",e);switch(typeof(e)){case"function":n.success=e;break;case"string":n.query=r||e;break;default:if(r){n.location=r;n.query=e}else at.extend(n,e);if(n.bounds)n.bounds=t.getBoundingBox(n.bounds)};if(typeof(arguments[1])==="function")n.success=arguments[1];return n},getRequestOrigin:function(e){var n={};var i=t.internalize("location",e.location||e.query);for(var r in e){if(typeof(e[r])!=="function")n[r]=e[r]};if(i)n.location=i;else n.address=e.address||e.query;return n},getNormalizedData:function(t){var e=[],n;for(var r in t){if(n=this.getDataEntry(t[r]))e.push(n)};return e},getDataEntry:function(t){var s=t["types"]||[],e,r,i=["locality","sublocality","street","region","country","route"];for(var o=0;o<s.length&&!e;o++){for(var n=0;n<i.length&&!e;n++){for(var a=0;a<this.storage.types[i[n]].length&&!e;a++)if(s[o]==this.storage.types[i[n]][a])e=i[n]}};if(e){r={type:e,name:t["formatted_address"]};this.getAddressComponents(t,r);this.getGeometry(t,r)};return r},getAddressComponents:function(t,e){if(!e)e={};var i=t["address_components"]||[],n,o={"route":["street"],"street_number":["streetNumber"],"sublocality":["sublocality"],"locality":["locality"],"postal_code":["postalCode"],"administrative_area_level_2":["province","provinceCode"],"administrative_area_level_1":["region","regionCode"],"country":["country","countryCode"]};for(var r=0;r<i.length;r++){for(var a in i[r]["types"]){n=o[i[r]["types"][a]];if(n){if(n[0])e[n[0]]=i[r]["long_name"];if(n[1])e[n[1]]=i[r]["short_name"]}}};return e},getGeometry:function(e,n){if(!n)n={};var r=e["geometry"]||{};n.location=t.externalize(r["location"]);n.geometry=t.externalize(r["viewport"]||r["bounds"]||null);n.precision=(r["location_type"]||"").toLowerCase().replace(/_/g," ");return n}};return n})(at.geo.ggl,at.geo.ggl.engine("maps"));at.geo.ggl.route=(function(t,e){var n={run:function(t,n){if(!e||!e.DirectionsService)return at.log("route service unavailable");if(!this.service)this.service=new e.DirectionsService();var o=this,r=this.getNormalizedOptions.apply(this,arguments),i=this.getRenderer(r);if(r.map)i.setMap(null);if(r.panel)i.setPanel(null);if(!r.valid)return;this.service.route(r.query,function(t,n){var o={status:n};if(n===e.DirectionsStatus.OK){if(i){i.setDirections(t);i.setMap(r.map||null);i.setPanel(r.panel||null)};o.routes=t.routes;if(r.success)r.success(o)}else{at.log("route service failed; status: {0}",n);if(r.error)r.error(o)};if(r.complete)r.complete(o)})},getRenderer:function(t){if(!e||!e.DirectionsRenderer)return null;if(!this.renderer)this.renderer=[];var n;for(var r=0;r<this.renderer.length&&!n;r++){if(this.renderer[r].map==t.map&&this.renderer[r].panel==t.panel)n=this.renderer[r].engine};if(!n)this.renderer.push({engine:(n=new e.DirectionsRenderer()),map:t.map||null,panel:t.panel||null});return n},getNormalizedOptions:function(n){var l=this,i={},a,s;var r=i.query={travelMode:"driving"};if(n){if(n.constructor==Array){if(n[0])r.waypoints=arguments[0]}else{for(var o in n){switch(o){case"container":a=n[o];break;case"panel":i.panel=n[o];break;case"map":i.map=n[o];break;case"callback":case"complete":i.complete=n[o];break;case"success":i.success=n[o];break;case"error":i.error=n[o];break;default:r[o]=n[o]}}}};if(arguments.length>1){a=arguments[1];if(arguments[2])r.travelMode=arguments[2]};if(r.waypoints&&(s=r.waypoints.length)>1){if(!r.destination){r.destination=r.waypoints[s-1];r.waypoints=r.waypoints.slice(0,s-1)};if(!r.origin){r.origin=r.waypoints[0];r.waypoints=r.waypoints.slice(1)}};for(var o in r)r[o]=t.internalize(o,r[o]);if(t.Map&&(i.map instanceof t.Map))i.map=i.map.engine;if(a){if(e&&e.Map&&(a instanceof e.Map))i.map=a;else if(t.Map&&(a instanceof t.Map))i.map=a.engine;else i.panel=a};i.valid=r.origin!=null&&r.destination!=null;return i},remove:function(t){for(var e in this.renderer){if(!t||this.renderer[e].map==t)this.renderer.setMap(null);if(!t||this.renderer[e].panel==t)this.renderer.setPanel(null)}}};return n})(at.geo.ggl,at.geo.ggl.engine("maps"));at.geo.ggl.transformation=(function(t,n,r){var i={run:function(e,n,i,l){if(typeof(n)!=="string"){l=i;i=n;n=i&&i.constructor};var o=i,u=!1,c,a=this[e];if(!r)return o;switch(n){case"coordinates":case"location":case"center":case"position":case r.LatLng:o=a.toCoordinates(i);if(u=(o==null&&!!l)){t.geocode(i,function(t){l(a.toCoordinates(t.location),t)})};break;case"bounds":case r.LatLngBounds:o=a.toBoundingBox(i);if(u=(o==null&&!!l)){t.geocode(i,function(t){l(a.toBoundingBox(t.geometry),t)})};break;case"path":case"paths":o=a.toPolyline(i);break;case r.Polyline:o=a.toPolyline(i.getPath());break;case r.Polygon:o=a.toBoundingBox(i.getPaths());break;case"origin":case"destination":c=a.toCoordinates(i);o=c==null?i:c;break;case"waypoints":o=i.slice();for(var s in o){if(typeof(o[s])==="string")o[s]={location:o[s]};else if(o[s]&&o[s].location){c=a.toCoordinates(o[s].location);if(c!=null)o[s].location=c}};break;case"data":o=r.visualization==null?i:a.getWeightedData(i);break;case"travelMode":o=a.toConstant(r.TravelMode,i);break;case"unitSystem":o=a.toConstant(r.UnitSystem,i);break;case"temperatureUnits":o=r.weather==null?i:a.toConstant(r.weather.TemperatureUnit,i);break;case"windSpeedUnits":o=r.weather==null?i:a.toConstant(r.weather.WindSpeedUnit,i);break;case"labelColor":o=r.weather==null?i:a.toConstant(r.weather.LabelColor,i);break};if(l&&!u)l(o);return o}};i.forward={storage:{events:["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","heading_changed","idle","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","resize","rightclick","tilesloaded","tilt_changed","zoom_changed","animation_changed","click","clickable_changed","cursor_changed","dblclick","drag","dragend","draggable_changed","dragstart","flat_changed","icon_changed","mousedown","mouseout","mouseover","mouseup","position_changed","rightclick","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed","bounds_changed","center_changed","radius_changed","closeclick","content_changed","domready","position_changed","zindex_changed","closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],types:{"location":"LatLng","bounds":"LatLngBounds","balloon":"InfoWindow","panorama":"StreetViewPanorama","layer.clouds":"CloudLayer","layer.temperature":"WeatherLayer","layer.temperatures":"WeatherLayer"}},toCoordinates:function(t){if(!t||!r)return null;else if(t.constructor==r.LatLng)return t;var n=null,e=at.geo.toCoordinates(t);if(e)n=new r.LatLng(e.lat,e.lon);return n},toBoundingBox:function(t){if(!t||!r)return null;else if(t.constructor==r.LatLngBounds)return t;var n=null,e=at.geo.toBoundingBox(t);if(e){n=new r.LatLngBounds(this.toCoordinates(e.sw),this.toCoordinates(e.ne))};return n},toPolyline:function(t){if(!t||!r)return null;else if(t.constructor==r.MVCArray)return t;var o=[],e,n;for(var i in t){e=this.toCoordinates(t[i]);if(e)o.push(e);else{n=[];for(var a in t[i]){e=this.toCoordinates(t[i][a]);if(e)n.push(e)};if(n.length)o.push(n)}};return new r.MVCArray(o)},getWeightedData:function(t){if(!t||!r)return null;else if(t.constructor==r.MVCArray)return t;var o=[],i,n;for(var e in t){i=this.toCoordinates(t[e].location||t[e]);if(i!=null){n={location:i};if(t[e].weight!=null)n.weight=t[e].weight;else if(t[e][2]!=null)n.weight=t[e][2];o.push(n)}};return new r.MVCArray(o)},toArray:function(t){if(!t||!r)return null;else if(t.constructor==r.MVCArray)return t;return new r.MVCArray(t)},toConstant:function(t,e){var n=e;if(n&&n.constructor==String)n=t[n.replace(/\s+/g,"_").toUpperCase()];return n},getType:function(t,e){if(t==null)return null;var i=null;if(arguments.length>1){if(e==null)return null;var o=(this.storage.types[t]||t).toLowerCase();if(/^layer\./.test(o))o=o.replace(/^layer\./,"")+"layer";for(var n in e){if(n.toLowerCase()==o)i=e[n]};return i}else if(r){var s=t,a=[r,r.panoramio,r.visualization,r.weather];for(var n=0;n<a.length&&!i;n++)i=arguments.callee.call(this,s,a[n]);if(!i)at.log("appropriate class for \"{0}\" not found",t)};return i},getEventType:function(t){var n=t;for(var r in this.storage.events){e=this.storage.events[r].replace(/[_\-]/g,"").toLowerCase();if(e==t)n=e};return n}};i.backward={storage:{types:{"LatLng":"location","LatLngBounds":"bounds","InfoWindow":"balloon","StreetViewPanorama":"panorama","CloudLayer":"clouds"}},toCoordinates:function(t){if(!t)return null;var e={lat:t.lat(),lon:t.lng()};return e},toBoundingBox:function(t){if(!t)return null;var e={sw:this.toCoordinates(t.getSouthWest()),ne:this.toCoordinates(t.getNorthEast())};return e},toPolyline:function(t){var i=[],e,r;t=this.toArray(t);for(var n in t){e=this.toCoordinates(t[n]);if(e)i.push(this.toArray(e));else{r=[];t[n]=this.toArray(t[n]);for(var o in t[n]){e=this.toCoordinates(t[n][o]);if(e)r.push(this.toArray(e))};if(r.length)i.push(r)}};return i},getWeightedData:function(t){var o=[],e,i;if(!t)return null;else if(r&&t.constructor==r.MVCArray)e=t.getArray();for(var n in e){i=this.toCoordinates(e[n].location||e[n]);if(i!=null){if(e[n].weight!=null)i.weight=e[n].weight;o.push(i)}};return o},toArray:function(t){var e=t&&t.constructor==Array?t:null;if(t){if(t.constructor==Object)e=[t.lat,t.lon];else if(r){switch(t.constructor){case r.MVCArray:e=t.getArray();break;case r.LatLng:e=[t.lat(),t.lng()];break}}};return e},toConstant:function(t,e){var n=e;if(n&&n.constructor==String)n=n.replace(/_+/g," ").toLowerCase();return n},getType:function(t,e){if(t==null)return null;var o=null;if(arguments.length>1){if(e==null)return null;for(var i in e){if(t.constructor==e[i]){o=this.storage.types[i]||i.replace(/Layer$/g,"").toLowerCase();if(/Layer$/.test(i))o="layer."+o}};return o}else if(r){var s=t,a=[n,r,r.panoramio,r.visualization,r.weather];for(var i=0;i<a.length&&!o;i++)o=arguments.callee.call(this,s,a[i])};return o}};return i})(at.geo.ggl,at.geo.gglx,at.geo.ggl.engine("maps"));at.geo.ggl.graphics=(function(t,e){var n={parseStyle:function(t){var r={},e=t.split(/\s+/);for(var n in e){if(/^#[\d\w]+$/.test(e[n]))r.strokeColor=e[n];else if(/^\d+\w+$/.test(e[n]))r.strokeWeight=parseInt(e[n]);else if(/^\w+$/.test(e[n]))r.strokeStyle=e[n]};return r},getStylingSupport:function(e){var n=t.getExternalType(e);return n==="polyline"},setStyle:function(t){if(!t)return;var e={strokeStyle:t.get("strokeStyle"),strokeOpacity:t.get("strokeOpacity")};var n={},r=1;if(e.strokeStyle!=null){var a=this.parseStyle(e.strokeStyle);for(var i in a)e[i]=a[i];if(!this.getStylingSupport(t))e.strokeStyle="solid";t.s$=e.strokeStyle};var o=e.strokeWeight||t.get("strokeWeight")||4;if(e.strokeOpacity!=null)r=e.strokeOpacity;else if(t.i$!=null)r=t.i$;switch(t.s$){case"solid":n.icons=null;n.strokeOpacity=r;break;case"dashed":n.icons=[{icon:{path:"M 0,-.8 0,.8",scale:o,strokeOpacity:r},offset:"0",repeat:Math.max(o*4,5)+"px"}];n.strokeOpacity=0;break;case"dotted":n.icons=[{icon:{path:"M 0,-.05 0,.05",scale:o,strokeOpacity:r},offset:"0",repeat:Math.max(o*1.75,3)+"px"}];n.strokeOpacity=0;break};t.i$=r;for(var i in n)e[i]=n[i];t.setOptions(e)}};return n})(at.geo.ggl,at.geo.ggl.engine("maps"));(function(t,e){t.setLayer(e);if(typeof(jQuery)!="undefined"){var n={geoMap:function(n){var i=jQuery(this).eq(0),o=i.data("geomap"),r=o&&at.geo.storage?at.geo.storage[o]:null;if(r&&(!n||r.type=="map"))r.attr(n);else r=new(t.setLayer(e).Map)(i.get(0)||null,n);return r||null}};var r={distance:function(e,n){return t.getDistance.apply(t,arguments)},locate:function(e){return t.getCurrentLocation.apply(t,arguments)}};jQuery.fn.extend(n);jQuery.geoMap=r}})(at.geo,at.geo.ggl);
$("#map").geoMap();





// var plumberA = plumber1;
// var plumberB = plumber2;
// var plumberC = plumber3;
// var plumberD = plumber4;
// var plumberE = plumber5;
// var plumberF = plumber6;
// var plumberG = plumber7;
// var plumberH = plumber8;
// var plumberI = plumber9;
// var plumberJ = plumber10;

// var loop = "loop" + i;

function randomLocationGen() {
    var randomLocation = Math.floor(Math.random() *66) + 1;
    return randomLocation;
    
    
}


//     for (i = 1; i == plumber.length; i++) { 
    
        
//     }



//  var i = plumber;

    
//     for (i = 1; i == plumber.length; i++) { 
//         randomLocationGen();
//         i == plumber;
        
//         console.log("plumber " + i);
// }


    // console.log(randomLocationGen());
    
    
    
(function (exports) {
  'use strict';

  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  exports.knuthShuffle = shuffle;
}('undefined' !== typeof exports && exports || 'undefined' !== typeof window && window || global));

(function () {
  'use strict';

  var zipCode = [40201, 40202, 40203, 40204, 40205, 40206, 40207, 40208, 40209, 40210, 40211, 40212, 40213, 40214, 40215, 40216, 40217, 40218, 40219,40220, 40221, 40222, 40223, 40224, 40225, 40228, 40229, 40231, 40232, 40233, 40241, 40242, 40243, 40245, 40250, 40251, 40252, 40253, 40255, 40256, 40257, 40258, 40259, 40261, 40266, 40268, 40269, 40270, 40272, 40280, 40281, 40282, 40283, 40285, 40287, 40289, 40290, 40291, 40292, 40293, 40294, 40295, 40296, 40297, 40298, 40299], 
  plumber = ["plumberA", "plumberB", "plumberC", "plumberD", "plumberE", "plumberF", "plumberG", "plumberH", "plumberI", "plumberJ"],
   combinedArrys,
  location;

  // The shuffle modifies the original array
  // calling a.slice(0) creates a copy, which is assigned to b
  location = window.knuthShuffle(zipCode.slice(0, 1));
  combinedArrys = window.knuthShuffle(plumber.slice(0, 1));
  
  
  
  console.log(combinedArrys + " is at " + location);
}());


// snipet for customer review window

// Easy Ticker plugin
	
(function ( $, window, document, undefined ) {
	
    var name = "easyTicker",
        defaults = {
			direction: 'down',
			easing: 'swing',
			speed: 'slow',
			interval: 4000,
			height: 'auto',
			visible: 3,
			mousePause: 1,
			controls: {
				up: '',
				down: '',
				toggle: '',
				playText: 'Play',
				stopText: 'Stop'
			}
        };

    // Constructor
    function EasyTicker( el, options ) {
		
		var s = this;
		
        s.opts = $.extend( {}, defaults, options );
        s.elem = $(el);
		s.targ = $(el).children(':first-child');
		s.timer = 0;
		s.mHover = 0;
		s.winFocus = 1;
		
		init();
		start();
		
		$([window, document]).off('focus.jqet').on('focus.jqet', function(){
			s.winFocus = 1;
		}).off('blur.jqet').on('blur.jqet', function(){
			s.winFocus = 0;
		});
		
		if( s.opts.mousePause == 1 ){
			s.elem.mouseenter(function(){
				s.timerTemp = s.timer;
				stop();
			}).mouseleave(function(){
				if( s.timerTemp !== 0 )
					start();
			});
		}
		
		$(s.opts.controls.up).on('click', function(e){
			e.preventDefault();
			moveDir('up');
		});
		
		$(s.opts.controls.down).on('click', function(e){
			e.preventDefault();
			moveDir('down');
		});
		
		$(s.opts.controls.toggle).on('click', function(e){
			e.preventDefault();
			if( s.timer == 0 ) start();
			else stop();
		});
		
		function init(){
			
			s.elem.children().css('margin', 0).children().css('margin', 0);
			
			s.elem.css({
				position : 'relative',
				height: s.opts.height,
				overflow : 'hidden'
			});
			
			s.targ.css({
				'position' : 'absolute',
				'margin' : 0
			});
			
			setInterval( function(){
				adjHeight();
			}, 100);
			
		} // Init Method
		
		function start(){
			s.timer = setInterval(function(){
				if( s.winFocus == 1 ){
					move( s.opts.direction );
				}
			}, s.opts.interval);

			$(s.opts.controls.toggle).addClass('et-run').html(s.opts.controls.stopText);
			
		} // Start method
		
		
		function stop(){
			clearInterval( s.timer );
			s.timer = 0;
			$(s.opts.controls.toggle).removeClass('et-run').html(s.opts.controls.playText);
		}// Stop
		
		
		function move( dir ){
			var sel, eq, appType;
			
			if( !s.elem.is(':visible') ) return;

			if( dir == 'up' ){
				sel = ':first-child';
				eq = '-=';
				appType = 'appendTo';
			}else{
				sel = ':last-child';
				eq = '+=';
				appType = 'prependTo';
			}
		
			var selChild = s.targ.children(sel);
			var height = selChild.outerHeight();
			
			s.targ.stop(true, true).animate({
				'top': eq + height + "px"
			}, s.opts.speed, s.opts.easing, function(){
				
				selChild.hide()[appType]( s.targ ).fadeIn();
				s.targ.css('top', 0);
				
				adjHeight();
				
			});
		}// Move
		
		function moveDir( dir ){
			stop();
			if( dir == 'up' ) move('up'); else move('down'); 
			// start();
		}
		
		function fullHeight(){
			var height = 0;
			var tempDisp = s.elem.css('display'); // Get the current el display value
			
			s.elem.css('display', 'block');
					
			s.targ.children().each(function(){
				height += $(this).outerHeight();
			});
		
			s.elem.css({
				'display' : tempDisp,
				'height' : height
			});
		}
		
		function visHeight( anim ){
			var wrapHeight = 0;
			s.targ.children(':lt(' + s.opts.visible + ')').each(function(){
				wrapHeight += $(this).outerHeight();
			});
			
			if( anim == 1 ){
				s.elem.stop(true, true).animate({height: wrapHeight}, s.opts.speed);
			}else{
				s.elem.css( 'height', wrapHeight);
			}
		}
		
		function adjHeight(){
			if( s.opts.height == 'auto' && s.opts.visible != 0 ){
				anim = arguments.callee.caller.name == 'init' ? 0 : 1;
				visHeight( anim );
			}else if( s.opts.height == 'auto' ){
				fullHeight();
			}
		}
		
		return {
			up: function(){ moveDir('up'); },
			down: function(){ moveDir('down'); },
			start: start,
			stop: stop,
			options: s.opts
		};
		
    }

    // Attach the object to the DOM
    $.fn[name] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, name)) {
                $.data(this, name, new EasyTicker( this, options ));
            }
        });
    };

})( jQuery, window, document );

$('.ticker1, .ticker2').easyTicker({
	direction: 'down',
	easing: 'swing',
	speed: 'slow',
	interval: 4000,
	height: 'auto',
	visible: 3,
	mousePause: 1,
	controls: {
		up: '',
		down: '',
		toggle: '',
		playText: 'Play',
		stopText: 'Stop'
	}
});