<?php header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once('../classes/DB.php'); 
require_once('../classes/MyMethods.php');
$db = new DB(); $method = new MyMethods();
$sql = "SELECT c.sno,c.dateOfHearing, c.stageOfProceedings,live_screen_txt 
            FROM chronologicallists c 
            ORDER BY sno DESC 
            LIMIT 100";
    $lst = $db->getRecordSet($sql);
    if(isset($lst) && is_array($lst) && count($lst) > 0){
        echo(json_encode(array('list'=>$lst)));
    }else{
    	echo(json_encode(array('error'=>'No Record Found')));
    	}
    
