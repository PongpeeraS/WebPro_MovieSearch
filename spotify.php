<?php 
if (isset($_GET["query"])){
    $client_id     = 'ID_GOES_HERE'; 
    $client_secret = 'SECRET_GOES_HERE'; 

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,            'https://accounts.spotify.com/api/token' );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
    curl_setopt($ch, CURLOPT_POST,           1 );
    curl_setopt($ch, CURLOPT_POSTFIELDS,     'grant_type=client_credentials' ); 
    curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret))); 

    $result=curl_exec($ch);
    $json = json_decode($result, true);
    curl_close($ch);
    $query = $_GET["query"].' soundtrack';
    $query = str_replace(' ','%20',$query);
    $spotifyURL = 'https://api.spotify.com/v1/search?q='.$query.'&limit=1&type=album';
    $auth[] = 'Authorization: Bearer '.$json['access_token'];
    $auth[] = 'Accept: application/json';
    $auth[] = 'Content-Type: application/json';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPGET, TRUE);
    curl_setopt($ch, CURLOPT_URL, $spotifyURL);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $auth);
    $json = curl_exec($ch);
    $json = json_decode($json, true);
    } ?>