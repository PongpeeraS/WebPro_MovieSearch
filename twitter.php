<?php

require "vendor/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;
$consumer_key = "key1";
$consumer_secret = "key2";
$access_token = "token1";
$access_token_secret = "token2";
$twitter = new TwitterOAuth($consumer_key,$consumer_secret,$access_token,$access_token_secret);

$query = $_GET["query"];
$tweets = $twitter->get("search/tweets", ["q" => $query]);
foreach ($tweets->statuses as $key => $tweet) {
    echo "Tweet : <img src='".$tweet->user->profile_image_url."' />".$tweet->text."<br>";
}
//var_dump($statuses);
?>