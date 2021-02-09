<?php
include("db.php");
//first method, pick your video via URL
if(isset($_GET["video_id"])) {
$vid = htmlspecialchars($_GET["video_id"]); // this entire if statement is not required if you are using second method
}
$hqvid = "";

// second method, hardcode it in
// $vid = "Insert video file name here";


if ($vid == null) {
die();
}

$name = "Insert video name here";
$author = "Insert author name here";

$vidfetch = mysqli_query($connect, "SELECT * FROM videodb WHERE VideoID='". $vid ."'");
$vdf = mysqli_fetch_assoc($vidfetch);
//do not show anything if the video-stream dosent exist
if (isset($vdf['VideoName']) && isset($vdf['Uploader'])) {
$name = $vdf['VideoName'];
$author = $vdf['Uploader'];
} else {
$name = $vid;
$author = "IT IS NOT WORKING";
}
if (isset($vdf['VideoFile'])) {
$vid = $vdf['VideoFile'];
} else {
die(); //die because there is no video file
}
if (isset($vdf['HQVideoFile'])) {
if (0 == strlen($vdf['HQVideoFile'])) {
$hqvid = $vid;
} else {
$hqvid = $vdf['HQVideoFile'];
}
else {
$hqvid = $vid;
}
}


// 2012 fixed player, get_video_info.php, crazy frog#8833
?>
hl=en_US&cc_module=http%3A%2F%2Fs.ytimg.com%2Fyts%2Fswfbin%2Fsubtitle_module-vflanTIik.swf&track_embed=0&video_verticals=%5B933%2C+8%2C+930%5D&vq=auto&title=<?php echo $name; ?>&sendtmp=1&avg_rating=5.0&ttsurl=http%3A%2F%2Fwww.youtube.com%2Fapi%2Ftimedtext%3Fsignature%3DE949556D4478C57B95F0E4268F8D85D460D27DF6.1EC1679B0E1466625B2A029D836BE9C135A0B300%26hl%3Den_US%26caps%3Dasr%26expire%3D1361228889%26sparams%3Dasr_langs%252Ccaps%252Cv%252Cexpire%26v%3Da3a7f8vgU98%26key%3Dyttt1%26asr_langs%3Dko%252Cde%252Cpt%252Cen%252Cnl%252Cja%252Cru%252Ces%252Cfr%252Cit&url_encoded_fmt_stream_map=itag%3D45%26url%3D./<?php echo $hqvid; // 480p quality ?>%26url%3D%3DPENIZ%26sig%3D47BC0D857DCAE401D5E29B8F9721C1D4D6032D75.8119BADF08F8DF5AECD3AD4BAF7C2C61A25B9172%26fallback_host%3Dtc.v3.cache2.c.youtube.com%26quality%3Dlarge%26type%3Dvideo%252Fwebm%253B%2Bcodecs%253D%2522vp8.0%252C%2Bvorbis%2522%2Citag%3D35%26url%3DPezn%26sig%3D90E3D32F6139104F5F19307B0C0A8431ED3B6209.3065A8903F69E6202CC5C1C4C27EE91CC973AD4B%26fallback_host%3Dtc.v6.cache5.c.youtube.com%26quality%3Dlarge%26type%3Dvideo%252Fx-flv%2Citag%3D43%26url%3D./<?php echo $vid; // 360p quality ?>%26sig%3D21EDBD12A97AC6CFE5B49224A5AD622895FFADEB.913D0D8ADC3EB8203CA6E08F616AC4B63156EC64%26fallback_host%3Dtc.v14.cache3.c.youtube.com%26quality%3Dmedium%26type%3Dvideo%252Fwebm%253B%2Bcodecs%253D%2522vp8.0%252C%2Bvorbis%2522%2Citag%3D34%26url%3Dhttp%253A%252F%252Fr16---sn-nwj7knle.c.youtube.com%252Fvideoplayback%253Fms%253Dau%2526itag%253D34%2526mv%253Dm%2526source%253Dyoutube%2526algorithm%253Dthrottle-factor%2526burst%253D40%2526id%253D6b76bb7fcbe053df%2526sparams%253Dalgorithm%25252Cburst%25252Ccp%25252Cfactor%25252Cid%25252Cip%25252Cipbits%25252Citag%25252Csource%25252Cupn%25252Cexpire%2526cp%253DU0hVRlJNVF9KUENONV9KR1hIOjZQREZqMzZvMkcy%2526upn%253DCe3gMoqraRg%2526expire%253D1361226756%2526newshard%253Dyes%2526key%253Dyt1%2526sver%253D3%2526fexp%253D907063%25252C913565%25252C920704%25252C912806%25252C902000%25252C922403%25252C922405%25252C929901%25252C913605%25252C925006%25252C908529%25252C920201%25252C930101%25252C911116%25252C926403%25252C910221%25252C901451%25252C919114%2526mt%253D1361203634%2526factor%253D1.25%2526ip%253D207.241.229.207%2526ipbits%253D8%26sig%3D1D9AD61B54DFEF5DC3F67DDF14462AEC856CAB9A.4453F98DAAD16A96BD75234F477C9A3AFD5567B5%26fallback_host%3Dtc.v15.cache7.c.youtube.com%26quality%3Dmedium%26type%3Dvideo%252Fx-flv%2Citag%3D18%26url%3Dhttp%253A%252F%252Fr16---sn-nwj7knle.c.youtube.com%252Fvideoplayback%253Fms%253Dau%2526itag%253D18%2526mv%253Dm%2526ratebypass%253Dyes%2526source%253Dyoutube%2526key%253Dyt1%2526id%253D6b76bb7fcbe053df%2526sparams%253Dcp%25252Cid%25252Cip%25252Cipbits%25252Citag%25252Cratebypass%25252Csource%25252Cupn%25252Cexpire%2526cp%253DU0hVRlJNVF9KUENONV9KR1hIOjZQREZqMzZvMkcy%2526upn%253DCe3gMoqraRg%2526expire%253D1361226756%2526newshard%253Dyes%2526sver%253D3%2526fexp%253D907063%25252C913565%25252C920704%25252C912806%25252C902000%25252C922403%25252C922405%25252C929901%25252C913605%25252C925006%25252C908529%25252C920201%25252C930101%25252C911116%25252C926403%25252C910221%25252C901451%25252C919114%2526mt%253D1361203634%2526ip%253D207.241.229.207%2526ipbits%253D8%26sig%3D74EFC4B8822180DC4B754A9BF9DBE6EA94296111.0E8E18F534269C4D5214A123638CAEB186DA3D3E%26fallback_host%3Dtc.v17.cache5.c.youtube.com%26quality%3Dmedium%26type%3Dvideo%252Fmp4%253B%2Bcodecs%253D%2522avc1.42001E%252C%2Bmp4a.40.2%2522%2Citag%3D5%26url%3Dhttp%253A%252F%252Fr16---sn-nwj7knle.c.youtube.com%252Fvideoplayback%253Fms%253Dau%2526itag%253D5%2526mv%253Dm%2526source%253Dyoutube%2526algorithm%253Dthrottle-factor%2526burst%253D40%2526id%253D6b76bb7fcbe053df%2526sparams%253Dalgorithm%25252Cburst%25252Ccp%25252Cfactor%25252Cid%25252Cip%25252Cipbits%25252Citag%25252Csource%25252Cupn%25252Cexpire%2526cp%253DU0hVRlJNVF9KUENONV9KR1hIOjZQREZqMzZvMkcy%2526upn%253DCe3gMoqraRg%2526expire%253D1361226756%2526newshard%253Dyes%2526key%253Dyt1%2526sver%253D3%2526fexp%253D907063%25252C913565%25252C920704%25252C912806%25252C902000%25252C922403%25252C922405%25252C929901%25252C913605%25252C925006%25252C908529%25252C920201%25252C930101%25252C911116%25252C926403%25252C910221%25252C901451%25252C919114%2526mt%253D1361203634%2526factor%253D1.25%2526ip%253D207.241.229.207%2526ipbits%253D8%26sig%3D770EFFC8272FF5C2BEE510711BCBD3053D327602.86C560E1B06B335840141B73DEA01C7551624B59%26fallback_host%3Dtc.v4.cache4.c.youtube.com%26quality%3Dsmall%26type%3Dvideo%252Fx-flv%2Citag%3D36%26url%3Dhttp%253A%252F%252Fr16---sn-nwj7knle.c.youtube.com%252Fvideoplayback%253Fms%253Dau%2526itag%253D36%2526mv%253Dm%2526source%253Dyoutube%2526algorithm%253Dthrottle-factor%2526burst%253D40%2526id%253D6b76bb7fcbe053df%2526sparams%253Dalgorithm%25252Cburst%25252Ccp%25252Cfactor%25252Cid%25252Cip%25252Cipbits%25252Citag%25252Csource%25252Cupn%25252Cexpire%2526cp%253DU0hVRlJNVF9KUENONV9KR1hIOjZQREZqMzZvMkcy%2526upn%253DCe3gMoqraRg%2526expire%253D1361226756%2526newshard%253Dyes%2526key%253Dyt1%2526sver%253D3%2526fexp%253D907063%25252C913565%25252C920704%25252C912806%25252C902000%25252C922403%25252C922405%25252C929901%25252C913605%25252C925006%25252C908529%25252C920201%25252C930101%25252C911116%25252C926403%25252C910221%25252C901451%25252C919114%2526mt%253D1361203634%2526factor%253D1.25%2526ip%253D207.241.229.207%2526ipbits%253D8%26sig%3D0A42CCE143B5E84CB21F05006293C4D2E881CA4D.A55B82FBC9FC21C1A09313CA76015D9107172DD1%26fallback_host%3Dtc.v14.cache6.c.youtube.com%26quality%3Dsmall%26type%3Dvideo%252F3gpp%253B%2Bcodecs%253D%2522mp4v.20.3%252C%2Bmp4a.40.2%2522%2Citag%3D17%26url%3Dhttp%253A%252F%252Fr16---sn-nwj7knle.c.youtube.com%252Fvideoplayback%253Fms%253Dau%2526itag%253D17%2526mv%253Dm%2526source%253Dyoutube%2526algorithm%253Dthrottle-factor%2526burst%253D40%2526id%253D6b76bb7fcbe053df%2526sparams%253Dalgorithm%25252Cburst%25252Ccp%25252Cfactor%25252Cid%25252Cip%25252Cipbits%25252Citag%25252Csource%25252Cupn%25252Cexpire%2526cp%253DU0hVRlJNVF9KUENONV9KR1hIOjZQREZqMzZvMkcy%2526upn%253DCe3gMoqraRg%2526expire%253D1361226756%2526newshard%253Dyes%2526key%253Dyt1%2526sver%253D3%2526fexp%253D907063%25252C913565%25252C920704%25252C912806%25252C902000%25252C922403%25252C922405%25252C929901%25252C913605%25252C925006%25252C908529%25252C920201%25252C930101%25252C911116%25252C926403%25252C910221%25252C901451%25252C919114%2526mt%253D1361203634%2526factor%253D1.25%2526ip%253D207.241.229.207%2526ipbits%253D8%26sig%3D1C449E2222D140296F4FF343ADA314026A542E6C.CBA3502F86B06299CECAFC7201ABD74CD7438C21%26fallback_host%3Dtc.v15.cache8.c.youtube.com%26quality%3Dsmall%26type%3Dvideo%252F3gpp%253B%2Bcodecs%253D%2522mp4v.20.3%252C%2Bmp4a.40.2%2522&plid=AATWAe5iQ_FjAV-I&view_count=24465&cc_asr=1&token=vjVQa1PpcFPQw_h19VxFJZdJZbKkh5-obrhC9M93j-E%3D&no_get_video_log=1&muted=0&allow_ratings=1&keywords=renegade%2Cblack%2Cdawn%2Crelease%2CC%26C%2Ccnc%2Cut3%2Cunreal%2Ctournament%2Cmsuc%2Cudk%2Cdevelopment%2Ckit%2Cion%2Ccannon%2Cmod&account_playback_token=&video_id=a3a7f8vgU98&thumbnail_url=http%3A%2F%2Fi2.ytimg.com%2Fvi%2Fa3a7f8vgU98%2Fdefault.jpg&status=ok&has_cc=True&fexp=907063%2C919329%2C913565%2C920704%2C912806%2C902000%2C922403%2C922405%2C929901%2C913605%2C925006%2C908529%2C920201%2C930101%2C911116%2C926403%2C910221%2C901451%2C919114&ftoken=&iurlsd=http%3A%2F%2Fi2.ytimg.com%2Fvi%2Fa3a7f8vgU98%2Fsddefault.jpg&cc_font=Arial+Unicode+MS%2C+arial%2C+verdana%2C+_sans&pltype=contentugc&allow_embed=1&author=<?php echo $author; ?>&length_seconds=0&storyboard_spec=&abd=1&iurlmaxres=http%3A%2F%2Fi2.ytimg.com%2Fvi%2Fa3a7f8vgU98%2Fmaxresdefault.jpg&watermark=%2Chttp%3A%2F%2Fs.ytimg.com%2Fyts%2Fimg%2Fwatermark%2Fyoutube_watermark-vflHX6b6E.png%2Chttp%3A%2F%2Fs.ytimg.com%2Fyts%2Fimg%2Fwatermark%2Fyoutube_hd_watermark-vflAzLcD6.png&cc3_module=http%3A%2F%2Fs.ytimg.com%2Fyts%2Fswfbin%2Fsubtitles3_module-vflfzxB9O.swf&tmi=1&ptk=youtube_none&endscreen_module=http%3A%2F%2Fs.ytimg.com%2Fyts%2Fswfbin%2Fendscreen-vfl4_CAIR.swf&fmt_list=45%2F1280x720%2F99%2F0%2F0%2C22%2F1280x720%2F9%2F0%2F115%2C44%2F854x480%2F99%2F0%2F0%2C35%2F854x480%2F9%2F0%2F115%2C43%2F640x360%2F99%2F0%2F0%2C34%2F640x360%2F9%2F0%2F115%2C18%2F640x360%2F9%2F0%2F115%2C5%2F320x240%2F7%2F0%2F0%2C36%2F320x240%2F99%2F0%2F0%2C17%2F176x144%2F99%2F0%2F0&timestamp=1361203689