<?php
// Enter your database connection here
$hostname = "localhost";
$username = "root";
$password = "root";

// Connection to the database
$dbhandle = mysqli_connect($hostname, $username, $password) 
	or die("Unable to connect to MySQL");

// Select a database to work with
$selected = mysqli_select_db($dbhandle, "quick_timeline")
	or die("Could not select database");

// Select timelines table
$result = mysqli_query($dbhandle, "SELECT * FROM timelines");

// Fetch tha data from the database 
$timelines = array();
while ($row = mysqli_fetch_array($result)) {
	$timeline = new stdClass();
	
	$timeline->title 	= $row{'title'};
	$timeline->image 	= $row{'image'};
	$timeline->day 		= date('d', strtotime($row{'date'}));
	$timeline->month 	= date('m', strtotime($row{'date'}));
	$timeline->year 	= date('Y', strtotime($row{'date'}));
	$timeline->time 	= $row{'time'};
	$timeline->icon 	= $row{'icon'};
	$timeline->content 	= $row{'content'};

	array_push($timelines, $timeline);
}

echo json_encode($timelines);

// Close the connection
mysqli_close($dbhandle);
?>