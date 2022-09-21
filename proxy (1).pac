function FindProxyForURL(url, host) {

var hostIP = "";
var ibsrcip = "164.104.199.201";
var ibcountry = "US"; // (40.5377,-105.0546)";

//Private-Access-Disabled-For-Zone

// Microsoft Tenant Restrictions Support
if (shExpMatch(host, "login.microsoftonline.com") ||
	shExpMatch(host, "login.microsoft.com") ||
	shExpMatch(host, "login.live.com") ||
	shExpMatch(host, "login.windows.net"))
{
	return "PROXY cn1759624420-vnsg12615.ibosscloud.com:8009; PROXY cn-1998271047-vnsg12293.ibosscloud.com:8009";
}

// Outlook Email Protection
if (shExpMatch(host, "*.protection.outlook.com"))
{
	return "PROXY cn1759624420-vnsg12615.ibosscloud.com:8009; PROXY cn-1998271047-vnsg12293.ibosscloud.com:8009";
}
/*  */
if ((shExpMatch(host, "jamf.com") || shExpMatch(host, "*.jamf.com")) ||
	(shExpMatch(host, "jamfcloud.com") || shExpMatch(host, "*.jamfcloud.com")) ||
	(shExpMatch(host, "seesaw.me") || shExpMatch(host, "*.seesaw.me")) ||
	(shExpMatch(host, "s3.amazonaws.com") || shExpMatch(host, "*.s3.amazonaws.com")) ||
	(shExpMatch(host, "riversidedatamanager.com") || shExpMatch(host, "*.riversidedatamanager.com")) ||
	(shExpMatch(host, "riversideonlinetest.com") || shExpMatch(host, "*.riversideonlinetest.com")) ||
	(shExpMatch(host, "starttest.com") || shExpMatch(host, "*.starttest.com")) ||
	(shExpMatch(host, "programworkshop.com") || shExpMatch(host, "*.programworkshop.com")) ||
	(shExpMatch(host, "soundtrap.com") || shExpMatch(host, "*.soundtrap.com")) ||
	(shExpMatch(host, "freesound.org") || shExpMatch(host, "*.freesound.org")) ||
	(shExpMatch(host, "edupoint.com") || shExpMatch(host, "*.edupoint.com")) ||
	(shExpMatch(host, "collegeboard.org") || shExpMatch(host, "*.collegeboard.org")) ||
	(shExpMatch(host, "54.172.52.254") || shExpMatch(host, "*.54.172.52.254")) ||
	(shExpMatch(host, "cambiumast.com") || shExpMatch(host, "*.cambiumast.com")) ||
	(shExpMatch(host, "cambiumassessment.com") || shExpMatch(host, "*.cambiumassessment.com")) ||
	(shExpMatch(host, "airast.org") || shExpMatch(host, "*.airast.org")) ||
	(shExpMatch(host, "pearson.com") || shExpMatch(host, "*.pearson.com")) ||
	(shExpMatch(host, "pearsonvue.com") || shExpMatch(host, "*.pearsonvue.com")) ||
	(shExpMatch(host, "proctorcam.com") || shExpMatch(host, "*.proctorcam.com")) ||
	(shExpMatch(host, "starttest.com") || shExpMatch(host, "*.starttest.com")) ||
	(shExpMatch(host, "starttest2.com") || shExpMatch(host, "*.starttest2.com")) ||
	(shExpMatch(host, "programworkshop.com") || shExpMatch(host, "*.programworkshop.com")) ||
	(shExpMatch(host, "twilio.com") || shExpMatch(host, "*.twilio.com")) ||
	(shExpMatch(host, "pvue2.com") || shExpMatch(host, "*.pvue2.com")) ||
	(shExpMatch(host, "ably.io") || shExpMatch(host, "*.ably.io")) ||
	(shExpMatch(host, "ably-realtime.com") || shExpMatch(host, "*.ably-realtime.com")) ||
	(shExpMatch(host, "wowza.com") || shExpMatch(host, "*.wowza.com")) ||
	(shExpMatch(host, "onvue.com") || shExpMatch(host, "*.onvue.com")) ||
	(shExpMatch(host, "transafe.com") || shExpMatch(host, "*.transafe.com")) ||
	(shExpMatch(host, "post.live.transafe.com") || shExpMatch(host, "*.post.live.transafe.com")) ||
	(shExpMatch(host, "analytics.monetra.com") || shExpMatch(host, "*.analytics.monetra.com")) ||
	(shExpMatch(host, "nwea.force.com") || shExpMatch(host, "*.nwea.force.com")) ||
	(shExpMatch(host, "surveygizmo.com") || shExpMatch(host, "*.surveygizmo.com")) ||
	(shExpMatch(host, "sophosxl.net") || shExpMatch(host, "*.sophosxl.net")) ||
	(shExpMatch(host, "sophos.com") || shExpMatch(host, "*.sophos.com")) ||
	(shExpMatch(host, "sophosudp.com") || shExpMatch(host, "*.sophosudp.com")) ||
	(shExpMatch(host, "sophosupd.net") || shExpMatch(host, "*.sophosupd.net")) ||
	(shExpMatch(host, "explorelearning.com") || shExpMatch(host, "*.explorelearning.com")) ||
	(shExpMatch(host, "lenovosoftware.com") || shExpMatch(host, "*.lenovosoftware.com")) ||
	(shExpMatch(host, "lsair.app") || shExpMatch(host, "*.lsair.app")) ||
	(shExpMatch(host, "svrs.net") || shExpMatch(host, "*.svrs.net")) ||
	(shExpMatch(host, "svrs.cc") || shExpMatch(host, "*.svrs.cc")) ||
	(shExpMatch(host, "sorenson.com") || shExpMatch(host, "*.sorenson.com")) ||
	(shExpMatch(host, "sorensonvrs.com") || shExpMatch(host, "*.sorensonvrs.com")) ||
	(shExpMatch(host, "sorensonaws.com") || shExpMatch(host, "*.sorensonaws.com")) ||
	(shExpMatch(host, "sorenson2.biz") || shExpMatch(host, "*.sorenson2.biz")) ||
	(shExpMatch(host, "sorensonprod.biz") || shExpMatch(host, "*.sorensonprod.biz")) ||
	(shExpMatch(host, "sorensonprod.com") || shExpMatch(host, "*.sorensonprod.com")) ||
	(shExpMatch(host, "pro.openweathermap.org") || shExpMatch(host, "*.pro.openweathermap.org")) ||
	(shExpMatch(host, "chime.aws") || shExpMatch(host, "*.chime.aws")) ||
	(shExpMatch(host, "boomlearning.com") || shExpMatch(host, "*.boomlearning.com")) ||
	(shExpMatch(host, "boom.cards") || shExpMatch(host, "*.boom.cards")) ||
	(shExpMatch(host, "162.159.128.232") || shExpMatch(host, "*.162.159.128.232")) ||
	(shExpMatch(host, "162.159.130.232") || shExpMatch(host, "*.162.159.130.232")) ||
	(shExpMatch(host, "162.159.130.235") || shExpMatch(host, "*.162.159.130.235")) ||
	(shExpMatch(host, "162.159.133.234") || shExpMatch(host, "*.162.159.133.234")) ||
	(shExpMatch(host, "162.159.134.233") || shExpMatch(host, "*.162.159.134.233")) ||
	(shExpMatch(host, "162.159.134.234") || shExpMatch(host, "*.162.159.134.234")) ||
	(shExpMatch(host, "162.159.138.232") || shExpMatch(host, "*.162.159.138.232")) ||
	(shExpMatch(host, "discord.com") || shExpMatch(host, "*.discord.com")) ||
	(shExpMatch(host, "discord.gg") || shExpMatch(host, "*.discord.gg")) ||
	(shExpMatch(host, "discord.media") || shExpMatch(host, "*.discord.media")) ||
	(shExpMatch(host, "discordapp.com") || shExpMatch(host, "*.discordapp.com")) ||
	(shExpMatch(host, "discordapp.net") || shExpMatch(host, "*.discordapp.net")) ||
	(shExpMatch(host, "oculus.com") || shExpMatch(host, "*.oculus.com")) ||
	(shExpMatch(host, "157.240.2.49") || shExpMatch(host, "*.157.240.2.49")) ||
	(shExpMatch(host, "157.240.28.52") || shExpMatch(host, "*.157.240.28.52")) ||
	(shExpMatch(host, "31.13.70.51") || shExpMatch(host, "*.31.13.70.51")) ||
	(shExpMatch(host, "nasuni.com") || shExpMatch(host, "*.nasuni.com")) ||
	(shExpMatch(host, "69.7.177.227") || shExpMatch(host, "*.69.7.177.227")) ||
	(shExpMatch(host, "69.7.177.229") || shExpMatch(host, "*.69.7.177.229")) ||
	(shExpMatch(host, "raptorware.com") || shExpMatch(host, "*.raptorware.com")) ||
	(shExpMatch(host, "raptortech.com") || shExpMatch(host, "*.raptortech.com")) ||
	(shExpMatch(host, "54.85.101.46") || shExpMatch(host, "*.54.85.101.46")) || 
	(shExpMatch(host, "forum.heartsupport.com") || shExpMatch(host, "*.heartsupport.com")))
{
	return "DIRECT";
}
/*  */
hostIP = dnsResolve(host)
  
/*  Bypass for local resources */
if (isPlainHostName(host)
    || shExpMatch(host, "*.local")
    || isInNet(hostIP, "10.0.0.0", "255.0.0.0")
    || isInNet(hostIP, "172.16.0.0", "255.240.0.0")
    || isInNet(hostIP, "192.168.0.0", "255.255.0.0")
    || isInNet(hostIP, "169.254.0.0", "255.255.0.0")
    || isInNet(hostIP, "224.0.0.0", "240.0.0.0")
    || isInNet(hostIP, "240.0.0.0", "240.0.0.0")
    || isInNet(hostIP, "0.0.0.0", "255.0.0.0")
    || isInNet(hostIP, "127.0.0.0", "255.0.0.0")
    || isInNet(hostIP, "164.104.0.0", "255.255.0.0")
){return "DIRECT"; }
  
else if (shExpMatch(host, "*.iboss.com")
    || shExpMatch(host, "*.ibosscloud.com")
    || isInNet(hostIP, "208.70.72.0", "255.255.248.0")
    || isInNet(hostIP, "206.125.40.0", "255.255.248.0")
){ return "DIRECT"; }

// Bypass Apple Domains
if (isInNet(host, "17.0.0.0", "255.0.0.0") ||
	(shExpMatch(host, "apple.com") || shExpMatch(host, "*.apple.com")) ||
	(shExpMatch(host, "itunes.com") || shExpMatch(host, "*.itunes.com")) ||
	(shExpMatch(host, "icloud.com") || shExpMatch(host, "*.icloud.com")) ||
	(shExpMatch(host, "omtrdc.net") || shExpMatch(host, "*.omtrdc.net")) ||
	(shExpMatch(host, "mzstatic.com") || shExpMatch(host, "*.mzstatic.com")))
{
	return "DIRECT";
}
 
/* Captive portals and local preferences */
 else if (shExpMatch(host, "*wayport.net")
    || shExpMatch(host, "*detectportal.firefox.com")
    || shExpMatch(host, "*connectivitycheck.gstatic.com")
    || shExpMatch(host, "captive.apple.com")
    || shExpMatch(host, "*.meraki.com")
){ return "DIRECT"; }
 
/* Apple Domains */
  
else if (shExpMatch(host, "*appleiphonecell.com")
    || shExpMatch(host, "*thinkdifferent.us")
    || shExpMatch(host, "*airport.us")
    || shExpMatch(host, "*ibook.info")
    || shExpMatch(url, "gsp1.apple.com/pep/gcc")
    || shExpMatch(host, "*itools.info")
    || shExpMatch(url, "www.apple.com/library/test/success.html")
    || shExpMatch(host, "*guzzoni.apple.com")
){ return "DIRECT"; }
 
/* Google Domains */
 
else if (shExpMatch(host, "*accounts.google.com")
    || shExpMatch(host, "*accounts.youtube.com")
    || shExpMatch(host, "*.gvt1.com")
    || shExpMatch(host, "*.gvt2.com")
    || shExpMatch(host, "*.gvt3.com")							 							 
    || shExpMatch(host, "*.gstatic.com")
    || shExpMatch(host, "*.googleapis.com")
    || shExpMatch(host, "*apis.google.com")
    || shExpMatch(host, "*.googleanalytics.com")									
    || shExpMatch(host, "*policies.google.com")
    || shExpMatch(host, "*tools.google.com")
    || shExpMatch(host, "*lh3.googleusercontent.com")												 
    || shExpMatch(host, "*clients1.google.com")
    || shExpMatch(host, "*clients2.google.com")
    || shExpMatch(host, "*clients3.google.com")
    || shExpMatch(host, "*clients4.google.com")
    || shExpMatch(host, "*clients5.google.com")
    || shExpMatch(host, "*clients6.google.com")
    || shExpMatch(host, "*.appspot.com")
    || shExpMatch(host, "*notifications.google.com")
    || shExpMatch(host, "*policies.google.com")
    || shExpMatch(host, "mtalk.google.com")
    || shExpMatch(host, "www.google-analytics.com")
    || shExpMatch(url, "www.google.com")
    || shExpMatch(url, "www.google.com/async/ddljson")
    || shExpMatch(url, "www.google.com/chromesuggestions")
    || shExpMatch(url, "pki-goog.1.google.com")										   
){ return "DIRECT"; }
  
/* Microsoft Domains */
  
else if (shExpMatch(host, "*download.microsoft.com")
    || shExpMatch(host, "*ntservicepack.microsoft.com")
    || shExpMatch(host, "*windowsupdate.microsoft.com")
    || shExpMatch(host, "*update.microsoft.com")
    || shExpMatch(host, "*cdm.microsoft.com")
    || shExpMatch(host, "*wustat.windows.com")
    || shExpMatch(host, "*windowsupdate.com")
    || shExpMatch(host, "*windowsupdate.microsoft.com")
){ return "DIRECT"; }

/* Bypass the proxy for Local Resources and Custom Domains: */
if (shExpMatch(host, "*psdschools.org") ||
     shExpMatch(host, "*.psdschools.org") ||
     shExpMatch(host, ".psdschools.org") ||
     shExpMatch(host, "*.testnav.com") || 
     shExpMatch(host, "*.thawte.com") || 
     shExpMatch(host, "*.usertrust.com") || 
     shExpMatch(host, "*.comodoca.com") || 
     shExpMatch(host, "*.pearsontestcontent.com") ||
     shExpMatch(host, "*webex.com") ||
     shExpMatch(host, "*.webex.com"))
{ return "DIRECT"; }
/*  */
/* Bypass the proxy for NWEA */
if (shExpMatch(host, "*mapnwea.org") ||
     shExpMatch(host, "mapnwea.org") ||
     shExpMatch(host, "newrelic.com") ||
	 shExpMatch(host, "*newrelic.com") ||
     shExpMatch(host, "*speechstream.net") ||
	 shExpMatch(host, "speechstream.net") ||
     shExpMatch(host, "school.nettrekker.com") || 
	 shExpMatch(host, "speechstreamtoolbar-webservices.texthelp.com") || 
	 shExpMatch(host, "nwea.org") || 
     shExpMatch(host, "*nwea.org"))
{ return "DIRECT"; }

// Bypass iboss Domains
if (shExpMatch(host, "iboss.com") ||
	shExpMatch(host, "ibosscloud.com") ||
	shExpMatch(host, "*.iboss.com") ||
	shExpMatch(host, "*.ibosscloud.com") ||
	shExpMatch(host, "msftncsi.com") ||
	shExpMatch(host, "*.msftncsi.com"))
{
	return "DIRECT";
}

// Bypass Meeting Apps
if ((shExpMatch(host, "webex.com") || shExpMatch(host, "*.webex.com")) ||
	(shExpMatch(host, "skype.com") || shExpMatch(host, "*.skype.com")) ||
	(shExpMatch(host, "gotomeeting.com") || shExpMatch(host, "*.gotomeeting.com")) ||
	(shExpMatch(host, "lync.com") || shExpMatch(host, "*.lync.com")) ||
	(shExpMatch(host, "teamviewer.com") || shExpMatch(host, "*.teamviewer.com")) ||
	(shExpMatch(host, "ringcentral.com") || shExpMatch(host, "*.ringcentral.com")) ||
	(shExpMatch(host, "zoom.com") || shExpMatch(host, "*.zoom.com")) ||
	(shExpMatch(host, "zoom.us") || shExpMatch(host, "*.zoom.us")))
{
	return "DIRECT";
}

// Bypass Office 365 Domains
if (shExpMatch(host, "account.activedirectory.windowsazure.com") ||
	shExpMatch(host, "*.svc.ms") ||
	shExpMatch(host, "*.msecnd.net") ||
	shExpMatch(host, "technet.microsoft.com") ||
	shExpMatch(host, "*.flow.microsoft.com") ||
	shExpMatch(host, "management.azure.com") ||
	shExpMatch(host, "informationprotection.hosting.portal.azure.net") ||
	shExpMatch(host, "smtp.office365.com") ||
	shExpMatch(host, "*.o365weve.com") ||
	shExpMatch(host, "ocsp.msocsp.com") ||
	shExpMatch(host, "prod.msocdn.com") ||
	shExpMatch(host, "policykeyservice.dc.ad.msft.net") ||
	shExpMatch(host, "becws.microsoftonline.com") ||
	shExpMatch(host, "myanalytics.microsoft.com") ||
	shExpMatch(host, "mlccdnprod.azureedge.net") ||
	shExpMatch(host, "*.azurerms.com") ||
	shExpMatch(host, "login.microsoftonline-p.com") ||
	shExpMatch(host, "officecdn.microsoft.com") ||
	shExpMatch(host, "*.msftidentity.com") ||
	shExpMatch(host, "mlccdn.blob.core.windows.net") ||
	shExpMatch(host, "*.verisign.net") ||
	shExpMatch(host, "ecn.dev.virtualearth.net") ||
	shExpMatch(host, "apps.identrust.com") ||
	shExpMatch(host, "ocsp.int-x3.letsencrypt.org") ||
	shExpMatch(host, "*.wns.windows.com") ||
	shExpMatch(host, "*.omniroot.com") ||
	shExpMatch(host, "crl.identrust.com") ||
	shExpMatch(host, "autodiscover.*.onmicrosoft.com") ||
	shExpMatch(host, "*.microsoftonline.com") ||
	shExpMatch(host, "*.portal.cloudappsecurity.com") ||
	shExpMatch(host, "compass-ssl.microsoft.com") ||
	shExpMatch(host, "*.mail.protection.outlook.com") ||
	shExpMatch(host, "cdnprod.myanalytics.microsoft.com") ||
	shExpMatch(host, "broadcast.skype.com") ||
	shExpMatch(host, "enterpriseregistration.windows.net") ||
	shExpMatch(host, "cert.int-x3.letsencrypt.org") ||
	shExpMatch(host, "amp.azure.net") ||
	shExpMatch(host, "crl.microsoft.com") ||
	shExpMatch(host, "officeapps.live.com") ||
	shExpMatch(host, "appsforoffice.microsoft.com") ||
	shExpMatch(host, "msdn.microsoft.com") ||
	shExpMatch(host, "clientconfig.microsoftonline-p.net") ||
	shExpMatch(host, "*.aria.microsoft.com") ||
	shExpMatch(host, "*.phonefactor.net") ||
	shExpMatch(host, "dgps.support.microsoft.com") ||
	shExpMatch(host, "support.microsoft.com") ||
	shExpMatch(host, "*.symcd.com") ||
	shExpMatch(host, "outlook.office.com") ||
	shExpMatch(host, "*.teams.microsoft.com") ||
	shExpMatch(host, "www.onedrive.com") ||
	shExpMatch(host, "assets.onestore.ms") ||
	shExpMatch(host, "graph.microsoft.com") ||
	shExpMatch(host, "*.aadrm.com") ||
	shExpMatch(host, "*.geotrust.com") ||
	shExpMatch(host, "passwordreset.microsoftonline.com") ||
	shExpMatch(host, "account.office.net") ||
	shExpMatch(host, "go.microsoft.com") ||
	shExpMatch(host, "*.officeapps.live.com") ||
	shExpMatch(host, "mscrl.microsoft.com") ||
	shExpMatch(host, "*.msauthimages.net") ||
	shExpMatch(host, "*.msidentity.com") ||
	shExpMatch(host, "protection.office.com") ||
	shExpMatch(host, "platform.linkedin.com") ||
	shExpMatch(host, "*.online.office.com") ||
	shExpMatch(host, "*.cortana.ai") ||
	shExpMatch(host, "*.events.data.microsoft.com") ||
	shExpMatch(host, "g.live.com") ||
	shExpMatch(host, "*.outlook.com") ||
	shExpMatch(host, "*.symcb.com") ||
	shExpMatch(host, "*.activity.windows.com") ||
	shExpMatch(host, "*.onenote.com") ||
	shExpMatch(host, "*.msftauthimages.net") ||
	shExpMatch(host, "shellprod.msocdn.com") ||
	shExpMatch(host, "*.msftauth.net") ||
	shExpMatch(host, "activation.sls.microsoft.com") ||
	shExpMatch(host, "logincert.microsoftonline.com") ||
	shExpMatch(host, "*.sfbassets.com") ||
	shExpMatch(host, "*.verisign.com") ||
	shExpMatch(host, "*.keydelivery.mediaservices.windows.net") ||
	shExpMatch(host, "security.microsoft.com") ||
	shExpMatch(host, "r.office.microsoft.com") ||
	shExpMatch(host, "office15client.microsoft.com") ||
	shExpMatch(host, "crl3.digicert.com") ||
	shExpMatch(host, "spoprod-a.akamaihd.net") ||
	shExpMatch(host, "docs.microsoft.com") ||
	shExpMatch(host, "*.hip.live.com") ||
	shExpMatch(host, "officeredir.microsoft.com") ||
	shExpMatch(host, "login-us.microsoftonline.com") ||
	shExpMatch(host, "*.office.com") ||
	shExpMatch(host, "crl.globalsign.net") ||
	shExpMatch(host, "*.skype.com") ||
	shExpMatch(host, "accounts.accesscontrol.windows.net") ||
	shExpMatch(host, "ocsp.digicert.com") ||
	shExpMatch(host, "officecdn.microsoft.com.edgesuite.net") ||
	shExpMatch(host, "mp.microsoft.com") ||
	shExpMatch(host, "officeclient.microsoft.com") ||
	shExpMatch(host, "companymanager.microsoftonline.com") ||
	shExpMatch(host, "activity.windows.com") ||
	shExpMatch(host, "api.passwordreset.microsoftonline.com") ||
	shExpMatch(host, "loginex.microsoftonline.com") ||
	shExpMatch(host, "*.informationprotection.azure.com") ||
	shExpMatch(host, "cacerts.digicert.com") ||
	shExpMatch(host, "graph.windows.net") ||
	shExpMatch(host, "*.azure-apim.net") ||
	shExpMatch(host, "autologon.microsoftazuread-sso.com") ||
	shExpMatch(host, "*.lync.com") ||
	shExpMatch(host, "apis.live.net") ||
	shExpMatch(host, "officepreviewredir.microsoft.com") ||
	shExpMatch(host, "ocspx.digicert.com") ||
	shExpMatch(host, "o15.officeredir.microsoft.com") ||
	shExpMatch(host, "*.office.net") ||
	shExpMatch(host, "*.compliance.microsoft.com") ||
	shExpMatch(host, "adminwebservice.microsoftonline.com") ||
	shExpMatch(host, "*.microsoftonline-p.com") ||
	shExpMatch(host, "oneclient.sfx.ms") ||
	shExpMatch(host, "*.broadcast.skype.com") ||
	shExpMatch(host, "provisioningapi.microsoftonline.com") ||
	shExpMatch(host, "*.security.microsoft.com") ||
	shExpMatch(host, "*.office365.com") ||
	shExpMatch(host, "*.protection.office.com") ||
	shExpMatch(host, "office.live.com") ||
	shExpMatch(host, "ocm.outlookapps.com") ||
	shExpMatch(host, "ajax.aspnetcdn.com") ||
	shExpMatch(host, "*.msauth.net") ||
	shExpMatch(host, "ocsp.globalsign.com") ||
	shExpMatch(host, "*.powerapps.com") ||
	shExpMatch(host, "secure.globalsign.com") ||
	shExpMatch(host, "*.sharepointonline.com") ||
	shExpMatch(host, "*.entrust.net") ||
	shExpMatch(host, "*cdn.onenote.net") ||
	shExpMatch(host, "isrg.trustid.ocsp.identrust.com") ||
	shExpMatch(host, "cdn.uci.officeapps.live.com") ||
	shExpMatch(host, "*.mp.microsoft.com") ||
	shExpMatch(host, "*.auth.microsoft.com") ||
	shExpMatch(host, "compliance.microsoft.com") ||
	shExpMatch(host, "defender.microsoft.com") ||
	shExpMatch(host, "*.sharepoint.com") ||
	shExpMatch(host, "*.public-trust.com") ||
	shExpMatch(host, "teams.microsoft.com") ||
	shExpMatch(host, "nexus.microsoftonline-p.com") ||
	shExpMatch(host, "settings-win.data.microsoft.com") ||
	shExpMatch(host, "auth.gfx.ms") ||
	shExpMatch(host, "aka.ms") ||
	shExpMatch(host, "admin.microsoft.com") ||
	shExpMatch(host, "outlook.office365.com") ||
	shExpMatch(host, "*.streaming.mediaservices.windows.net") ||
	shExpMatch(host, "crl.globalsign.com") ||
	shExpMatch(host, "*.secure.skypeassets.com") ||
	shExpMatch(host, "ocsp2.globalsign.com") ||
	shExpMatch(host, "*.manage.microsoft.com") ||
	shExpMatch(host, "cdn.odc.officeapps.live.com") ||
	shExpMatch(host, "crl4.digicert.com") ||
	shExpMatch(host, "*.mstea.ms") ||
	shExpMatch(host, "c1.microsoft.com") ||
	shExpMatch(host, "www.microsoft.com") ||
	shExpMatch(host, "myanalytics-gcc.microsoft.com") ||
	shExpMatch(host, "www.digicert.com") ||
	shExpMatch(host, "admin.onedrive.com"))
{
	return "DIRECT";
}

var resolve_ip = dnsResolve(host);

// Bypass Office 365 Domains
if (isInNet(resolve_ip, "132.245.0.0", "255.255.0.0") ||
	isInNet(resolve_ip, "52.244.203.72", "255.255.255.255") ||
	isInNet(resolve_ip, "52.100.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "104.47.0.0", "255.255.128.0") ||
	isInNet(resolve_ip, "52.120.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "52.96.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "13.107.18.15", "255.255.255.255") ||
	isInNet(resolve_ip, "52.238.119.141", "255.255.255.255") ||
	isInNet(resolve_ip, "131.253.33.215", "255.255.255.255") ||
	isInNet(resolve_ip, "13.107.64.0", "255.255.192.0") ||
	isInNet(resolve_ip, "52.108.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "52.244.160.207", "255.255.255.255") ||
	isInNet(resolve_ip, "13.107.6.152", "255.255.255.254") ||
	isInNet(resolve_ip, "40.96.0.0", "255.248.0.0") ||
	isInNet(resolve_ip, "104.146.128.0", "255.255.128.0") ||
	isInNet(resolve_ip, "13.107.6.171", "255.255.255.255") ||
	isInNet(resolve_ip, "52.238.106.116", "255.255.255.255") ||
	isInNet(resolve_ip, "52.104.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "52.244.207.172", "255.255.255.255") ||
	isInNet(resolve_ip, "52.112.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "40.92.0.0", "255.254.0.0") ||
	isInNet(resolve_ip, "150.171.40.0", "255.255.252.0") ||
	isInNet(resolve_ip, "13.107.18.10", "255.255.255.254") ||
	isInNet(resolve_ip, "40.107.0.0", "255.255.0.0") ||
	isInNet(resolve_ip, "40.104.0.0", "255.254.0.0") ||
	isInNet(resolve_ip, "20.190.128.0", "255.255.192.0") ||
	isInNet(resolve_ip, "204.79.197.215", "255.255.255.255") ||
	isInNet(resolve_ip, "13.107.140.6", "255.255.255.255") ||
	isInNet(resolve_ip, "23.103.160.0", "255.255.240.0") ||
	isInNet(resolve_ip, "13.107.136.0", "255.255.252.0") ||
	isInNet(resolve_ip, "40.108.128.0", "255.255.128.0") ||
	isInNet(resolve_ip, "52.244.37.168", "255.255.255.255") ||
	isInNet(resolve_ip, "13.107.128.0", "255.255.252.0") ||
	isInNet(resolve_ip, "40.126.0.0", "255.255.192.0") ||
	isInNet(resolve_ip, "52.238.78.88", "255.255.255.255") ||
	isInNet(resolve_ip, "150.171.32.0", "255.255.252.0") ||
	isInNet(resolve_ip, "52.244.223.198", "255.255.255.255") ||
	isInNet(resolve_ip, "52.247.150.191", "255.255.255.255"))
{
	return "DIRECT";
}

	return "PROXY cn1759624420-vnsg12615.ibosscloud.com:8009; PROXY cn-1998271047-vnsg12293.ibosscloud.com:8009";
}
