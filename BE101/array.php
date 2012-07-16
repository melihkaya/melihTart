<?php
$customers = array(
                    "data" => array(

                        array(
                            "name" => "Tart",
                            "surname" => "New Media"
                          ),

                        array(
                            "name" => "Techinox"
                         ),

                        array(
                            "surname" => "PHP",
                            "age" => 13
                         )
                    )
                  );



$html ="<table border='1'>";

$customerTable = array_shift($customers);
$customerTableKeys = array();

	foreach ($customerTable as $customer){
		$customerTableKeys = array_merge($customerTableKeys, array_keys($customer));
	}

    $customerTableKeys = array_unique($customerTableKeys);
    $html .= "<tr><th>".implode("</th><th>",$customerTableKeys)."</th></tr>";

   foreach ($customerTable as $customer){

       $html .= " <tr>";

       foreach ($customerTableKeys as $key){

            if (isset($customer[$key])){

                $html .= "<td>".$customer[$key]."</td>";

            } else {
                $html .= "<td>&nbsp;</td>";
            }
        }

        $html .= "</tr>";
    }


$html .= "</table>";

echo $html;