<?php
include("header.php");
include("auth.php");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
if($_POST['title'] == null || $_POST['desc'] == null) {
	echo "<script>window.location = '".$link."/my_videos_upload.php'</script>";
}
$username = $_SESSION["username"]; 
$upload_msg = "";
$donotcontinue = 0;
function randstr($len, $charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"){
    return substr(str_shuffle($charset),0,$len);
}
function delete_directory($dirname) {
         if (is_dir($dirname))
           $dir_handle = opendir($dirname);
     if (!$dir_handle)
          return false;
     while($file = readdir($dir_handle)) {
           if ($file != "." && $file != "..") {
                if (!is_dir($dirname."/".$file))
                     unlink($dirname."/".$file);
                else
                     delete_directory($dirname.'/'.$file);
           }
     }
     closedir($dir_handle);
     rmdir($dirname);
     return true;
}

function resizeSizeAndKeepAspectRatio ($oldwidth, $oldheight, $width, $height) {
	$ratio_orig = $oldwidth/$oldheight;

	if ($width/$height > $ratio_orig) {
	   $width = $height*$ratio_orig;
	} else {
	   $height = $width/$ratio_orig;
	}
	$width = round(($width / 2)) * 2;
	$height = round(($height / 2)) * 2;
	return $width.":".$height;
}

function check_for_partner($sql, $user) {
	$userfetch = mysqli_query($sql, "SELECT * FROM users WHERE username='". $user ."'");
	$userinf = mysqli_fetch_assoc($userfetch);
	if (isset($userinf['is_partner'])) {
		if ($userinf['is_partner'] == true) {
			return true;
		} else {
			return false;
		}
	}
}

function check_mime($mime) {
	$mimes = array("video/3gpp2", "video/3gpp", "video/x-ms-asf", "video/x-msvideo", "video/mpeg", "video/x-flv", "video/x-h261", "video/x-h263", "video/x-m4v","video/x-matroska", "video/webm", "video/x-mjpeg", "video/mp4", "video/mpeg", "video/MP2T", "video/x-nut", "video/ogg", "video/quicktime", "video/avi");
	if(!in_array($mime, $mimes)) {
		return false;
	} else {
		return true;
	}
}

$url_id = randstr(11);
$folder_id = randstr(26);
$vid_id = randstr(26);

if(isset($_POST["upload"])){
$vextension  = pathinfo( $_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION );
$target_file = "uploads/preload/".$folder_id."/".$vid_id.".".$vextension;
$hq_target_file = "uploads/preload/".$folder_id."/".$vid_id.".hq.".$vextension;
$target_folder = "video/".$url_id;
$preload_folder = "uploads/preload/".$folder_id;
$target_thumb = "content/thumbs/".$url_id.".png";
$none = 0;
$category = "Gaming";
$thumbcmd = "ffmpeg -v error -i ".$target_file." -vframes 1 -an -s 260x194 -ss 1 ".$target_thumb;

//if (!file_exists($target_folder)) {
//	mkdir($target_folder);
//}
if (!file_exists($preload_folder)) {
	mkdir($preload_folder);
}
    if(isset($_POST['upload']) AND isset($_SESSION["username"])){
        $name       = $_FILES['fileToUpload']['name'];  
        $temp_name  = $_FILES['fileToUpload']['tmp_name'];  // gets video info and thumbnail info
				if(move_uploaded_file($temp_name, $target_file) && $donotcontinue == 0){
					if($connect === false){
						die("ERROR: Could not connect. " . mysqli_connect_error()); // cannot connect to database therefore it stops uploading
						}
						if(!check_mime($_FILES['fileToUpload']['type'])) {
							echo "<center><h1>Your video is an incompatible format.<br>To continue uploading this video, convert it to a supported format.<br>If it is a video, we might not support it. Here is the information for the developers<pre>MIME_TYPE:".$_FILES['fileToUpload']['type']."\n FILE_EXTENSION:".pathinfo($_FILES['fileToUpload']['name'], PATHINFO_EXTENSION)."</pre></h1></center>";
							die();
						}
						$width = exec("ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=nw=1:nk=1 ".$target_file);
						$height = exec("ffprobe -v error -select_streams v:0 -show_entries stream=height -of default=nw=1:nk=1 ".$target_file);
						$checkerror = exec("ffmpeg -v error -i ".$target_file." -f null - >error.log 2>&1");
						if ( '' == file_get_contents("error.log") )
						{
							// good file, continues with process of uploading
							unlink("error.log");
						} else {
							echo "<center><h1>Your video is invalid or corrupt. Please choose a different file.<br>DEBUG INFO:<br><pre>".file_get_contents("error.log")."</pre></h1></center>";
							delete_directory($preload_folder);
							die();
						}
						$length = round(exec("ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ".$target_file));
						if($width && $height < 2160) {
							// continues with upload
						} else {
							echo "<center><h1>Your video is too large. The limit is up to 2160x2160.</h1></center>";
							delete_directory($preload_folder);
							die();
						}
						$id = mysqli_real_escape_string($connect, $url_id);
						$title = $_POST['title'];
						$desc = $_POST['desc'];
						$uploader = mysqli_real_escape_string($connect, $username);
						echo check_for_partner($connect, $username);
						if (check_for_partner($connect, $username) && $width && $height > 240) {
							exec("ffmpeg -i ".$target_file." -vf scale=-". resizeSizeAndKeepAspectRatio($width, $height, 854, 480) ."  -c:v libx264 -b:v 700K -b:a 160k    -strict experimental video/".$url_id.".hq.mp4 2>&1", $output_hq);
						} else {
							$hq_target_file = "";
						}
						exec("ffmpeg -i ".$target_file." -vf scale=-". resizeSizeAndKeepAspectRatio($width, $height, 426, 240) ."  -c:v libx264 -b:v 450K -b:a 100k    -strict experimental video/".$url_id.".mp4 2>&1", $output); 
						$failcount = 0;
						
						clearstatcache();
						if ( 0 == filesize("video/".$url_id.".mp4")) {
							unlink("video/".$url_id.".mp4");
							delete_directory($preload_folder);
							$failcount++;
						}
						if ( check_for_partner($connect, $username) && $width && $height > 240 && 0 == filesize("video/".$url_id.".hq.mp4") ) {
							unlink("video/".$url_id.".hq.mp4");
							delete_directory($preload_folder);
							$failcount++;
						}
						if($failcount >= 1) {
							echo "<center><h1>Your video was unable to be uploaded.<br>If you see this screen, report it to staff/admin.<br>DEBUG INFO:<br><pre>"; print_r($output); if (isset($output_hq)) { print_r($output_hq); } echo "</pre></h1></center>";
							die();
						}
						exec($thumbcmd);
						$datenow = date('Y-m-d H:i:s');
						mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
						$stmt = $connect->prepare("INSERT INTO videodb (VideoID, VideoName, VideoDesc, Uploader, UploadDate, isApproved, ViewCount, VideoCategory, VideoFile, HQVideoFile, VideoLength, CustomThumbnail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"); // add title, desc, through prepared statements
						$stmt->bind_param("ssssssssssss", $url_id, $title, $desc, $uploader, $datenow, $none, $none, $category, $target_file, $hq_target_file, $length, $none);
						// set params
						$target_file = "video/" . $url_id . ".mp4";
						if (check_for_partner($connect, $username) && $width && $height > 240) {
							$hq_target_file = "video/" . $url_id . ".hq.mp4";
						} else {
							$hq_target_file = "";
						}
						$stmt->execute();
						$stmt = $connect->prepare("UPDATE users SET recent_vid = ? WHERE username = '".$uploader."'"); // add title, desc, through prepared statements
						$stmt->bind_param("s", $url_id);
						$stmt->execute();
						delete_directory($preload_folder);
						echo "<script>window.location.replace('watch.php?v=".$url_id."');</script>";
			} else {
				$upload_msg = 'You should select a file to upload!';
			}
		}
	} else {
		
	}
?>
<div class="ui container">
	<div class="ui center aligned container">
		<h2 class="ui icon header">
		  <i class="upload icon"></i>
		  <div class="content">
			Upload Video
		  </div>
		</h2>
	</div>
	<div class="ui center aligned text container">
		<div class="ui steps">
		  <div class="completed step">
			<i class="info icon"></i>
			<div class="content">
			  <div class="title">Video Info</div>
			  <div class="description">Enter the name and description of your video.</div>
			</div>
		  </div>
		  <div class="active step">
			<i class="upload icon"></i>
			<div class="content">
			  <div class="title">Upload Video File</div>
			  <div class="description">Choose the video you want to upload</div>
			</div>
		  </div>
		</div>
	<div class="ui secondary segment container">
		<form name="uploadForm" id="uploadForm" method="post" action="my_videos_upload_2.php" enctype="multipart/form-data">
			<input type="text" name="title" value="<?php echo $_POST["title"]; ?>" hidden>
			<textarea name="desc" maxlength="500" form="uploadForm" style="width:295px;overflow:hidden;resize:none" rows="3" hidden><?php echo $_POST["desc"]; ?></textarea>
            <div class="ui yellow segment">
				<div class="ui input">
					<input type="file" name="fileToUpload" id="fileToUpload" style="color:black" accept="video/mp4" required=""><br>
				</div>
				<p><b>Max file size: <?php echo ((int) filter_var(ini_get('upload_max_filesize'), FILTER_SANITIZE_NUMBER_INT) / 8).substr(ini_get('upload_max_filesize'), -1)."B"?>. No copyrighted, obscene, children's media and anything considered by Chaziz to be "cringe".</b><br>After uploading, you can edit or remove this video at anytime under the "My Videos" link on the top of the page.</p>
			</div>
			<div class="ui message">
  <div class="header">
    Notice
  </div>
  <p>The site might go down while in the uploading process. The uploader will be later rewritten.</p>
</div>
			<input class="ui primary button" type="submit" id="upload" name="upload" value="Upload Video">
		</form>
	</div>
	</div>
</div>
<?php include("footer.php"); ?>
