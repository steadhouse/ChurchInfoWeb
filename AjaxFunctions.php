<?php
/*******************************************************************************
 *
 *  filename    : AjaxFunctions.php
 *  last change : 2013-07-07
 *  description : Library for ajax requests of family info
 *
 ******************************************************************************/

// Include the function library
require "Include/Config.php";
require "Include/Functions.php";


// Handle URL via _GET first
$sSearchTerm = FilterInput($_GET["term"],'string');

$familyArray = getFamilyList($sDirRoleHead, $sDirRoleSpouse, null, $sSearchTerm);
	foreach ($familyArray as $fam_ID => $fam_Data) {
		$return[] = array("value"=> $fam_Data, "id" => $fam_ID);
	}

echo json_encode($return);

?>
