<?php

/*
// Exo 3
 $retour[0] = rand(0,100);
 echo json_encode($retour);
*/

/*
// Exo 4
$retour[0] = rand(0,100);
echo json_encode($retour);
*/

// Exo 5
header('Content-Type: application/json');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$name[0] = $data['name'];
echo json_encode($name);
?>
