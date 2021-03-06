<?php 
include("header.php"); 
include("auth.php");
error_reporting(1); //fixing the query issue breaks comment sections.
$chanfetch = mysqli_query($connect, "SELECT * FROM users WHERE username='". $_SESSION['username'] ."'"); // calls for channel info
$cdf = mysqli_fetch_assoc($chanfetch);
$LastestVideo = htmlspecialchars($cdf['recent_vid']);
$Username = htmlspecialchars($cdf['username']);
$AboutMe = htmlspecialchars($cdf['aboutme']);
$VidsWatched = $cdf['videos_watched'];
$Name = htmlspecialchars($cdf['prof_name']);
$Age = htmlspecialchars($cdf['prof_age']);
$City = htmlspecialchars($cdf['prof_city']);
$Hometown = htmlspecialchars($cdf['prof_hometown']);
$Country = htmlspecialchars($cdf['prof_country']);
$Occupation = htmlspecialchars($cdf['prof_occupation']);
$Interests = htmlspecialchars($cdf['prof_interests']);
$Music = htmlspecialchars($cdf['prof_music']);
$Books = htmlspecialchars($cdf['prof_books']);
$Movies = htmlspecialchars($cdf['prof_movies']);
$PlayerToggle = htmlspecialchars($cdf['player']);
if($cdf['channel_color']) {
	$Foreground = htmlspecialchars($cdf['channel_color']);
} else {
	$Foreground = "#3399cc";
}
if($cdf['channel_bg']) {
	$Background = htmlspecialchars($cdf['channel_bg']);
} else {
	$Background = "#ffffff";
}
if($cdf['channel_inside']) {
	$Inside = htmlspecialchars($cdf['channel_inside']);
} else {
	$Inside = "#ecf4fb";
}
if($cdf['channel_inside']) {
	$Text = htmlspecialchars($cdf['channel_text']);
} else {
	$Text = "#000000";
}

function resizeImageAndKeepAspectRatio ($image, $filename, $width, $height) {
	// Get new dimensions
	list($width_orig, $height_orig) = getimagesize($filename);

	$ratio_orig = $width_orig/$height_orig;

	if ($width/$height > $ratio_orig) {
	   $width = $height*$ratio_orig;
	} else {
	   $height = $width/$ratio_orig;
	}
	return imagescale(imagecreatefromstring($image), $width, $height);
}

?>
<title>My Profile</title>
<?php
// Check if image file is a actual image or fake image
if(isset($_POST["upload"])) {
  $target_dir = "content/profpic/";
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  $uploadOk = 1;
  //$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
  $name       = $_FILES['fileToUpload']['name']; 
  $temp_name  = $_FILES['fileToUpload']['tmp_name'];
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
  // Check if file already exists
  //if (file_exists($target_file)) {
  //  echo "Sorry, file already exists.";
  //  $uploadOk = 0;
  //}

  // Check file size
  if ($_FILES["fileToUpload"]["size"] > 500000) {
    //echo "Sorry, your file is too large.";
    $uploadOk = 0;
  }
  imagepng(resizeImageAndKeepAspectRatio(file_get_contents($_FILES["fileToUpload"]["tmp_name"]),$_FILES['fileToUpload']['tmp_name'],512,512), $target_dir . $_SESSION['username'] . ".png");
  echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
}

?>
            <style>
    .panel1 { 
	float: left;
margin-top: 10px;
	}
	
	    .panel2 { 
	float: right;
margin-top: 10px;
	}
</style>
<h1>Settings</h1>
<div class="panel1">
<div class="headerRCBox">
	<b class="rch">
	<b class="rch1"><b></b></b>
	<b class="rch2"><b></b></b>
	<b class="rch3"></b>
	<b class="rch4"></b>
	<b class="rch5"></b>
	</b> <div class="content"><span class="headerTitle">Profile Picture</span></div>
	</div>
	<div class="contentBox">
<img src="content/profpic/<?php echo $_SESSION['username']?>.png" width="128" height="128"">
<br>
<form action="my_profile.php" method="post" enctype="multipart/form-data">
  Select profile picture to upload:<br><br>
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="upload">
</form></div><br>
<div class="headerRCBox">
	<b class="rch">
	<b class="rch1"><b></b></b>
	<b class="rch2"><b></b></b>
	<b class="rch3"></b>
	<b class="rch4"></b>
	<b class="rch5"></b>
	</b> <div class="content"><span class="headerTitle">Player</span></div>
	</div>
	<div class="contentBox">
	Toggling this will make the old player be used instead.
<form action="setinfo.php" method="post" enctype="multipart/form-data">
<input name="player" value="0" type="hidden">
<input type="checkbox" id="vehicle1" name="player" value="1">
<label for="player"> Use old player</label><br>
<input type="submit" value="Submit" name="sumbit-player">
</form>
</div></div>
<div class="panel2">
<div class="headerRCBox">
	<b class="rch">
	<b class="rch1"><b></b></b>
	<b class="rch2"><b></b></b>
	<b class="rch3"></b>
	<b class="rch4"></b>
	<b class="rch5"></b>
	</b> <div class="content"><span class="headerTitle">Profile Infomation</span></div>
	</div>
	<div class="contentBox">
  <form action='setdesc.php' method='POST' name='setdesc' id='setdesc'>
  <textarea rows="4" cols="50" maxlength="500" name="desc" form="setdesc" placeholder="Input your About Me here..." style="margin: 0px; height: 67px; width: 352px; resize: none;" required="">
  <?php echo stripslashes($AboutMe);?></textarea>
  <p>500 character limit.</p>
  <input type='submit' name="submit">
 </form>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Name       :
  <input type='text' value="<?php echo stripslashes($Name);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_name">
  </form>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Age       :
  <input type='text' value="<?php echo stripslashes($Age);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_age">
  </form>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  City       :
  <input type='text' value="<?php echo stripslashes($City);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_city">
  </form>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Hometown       :
  <input type='text' value="<?php echo stripslashes($Hometown);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_hometown">
  </form>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Country       :
  <input type='text' value="<?php echo stripslashes($Country);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_country">
  </form>
  </div><br>
 <div class="headerRCBox">
	<b class="rch">
	<b class="rch1"><b></b></b>
	<b class="rch2"><b></b></b>
	<b class="rch3"></b>
	<b class="rch4"></b>
	<b class="rch5"></b>
	</b> <div class="content"><span class="headerTitle">Profile Color</span></div>
	</div><div class="contentBox">
  <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Profile Foreground       :
  <input type='color' value="<?php echo stripslashes($Foreground);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="channel_color">
  </form>
  <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Profile Background       :
  <input type='color' value="<?php echo stripslashes($Background);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="channel_bg">
  </form>
  <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Profile Text       :
  <input type='color' value="<?php echo stripslashes($Text);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="channel_text">
  </form>
  <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Profile Interior       :
  <input type='color' value="<?php echo stripslashes($Inside);?>" id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="channel_inside">
  </form></div>
   <br>
 <br>
  <!--
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Occupation       :
  <input type='text' id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_occupation">
  </form>
   <br>
 <br>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Interests and Hobbies       :
  <input type='text' id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_interests">
  </form>
   <br>
 <br>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Music       :
  <input type='text' id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_music">
  </form>
   <br>
 <br>
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Books       :
  <input type='text' id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_books">
  </form>
   <br>
 <br>
 -->
 <!--
 <form action="setinfo.php" method="post" enctype="multipart/form-data">
  Movies and Shows       :
  <input type='text' id='textbox' style="width: 250px;" name='textbox'>
  <input type="submit" value="Submit" name="prof_movies">
  </form>
   <br>
   -->
<br></div>
<?php include("footer.php"); ?>
