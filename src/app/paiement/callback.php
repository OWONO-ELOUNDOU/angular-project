
<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');


/************************************************************************************ 
				STEP 1 - CONFIGURATION : START
Find your merchant UID, Public Key and secret code on the 
	  home page of your merchant dashboard
*************************************************************************************/


$merchant_uid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx';            // Replace with your merchant_uid
$merchant_public_key = 'xxxxxxxxxxxxxxxxxxxxxx'; // Replace by your merchant_public_key !!! 
$merchant_secret = 'xxxxxxxxxxxxxxxxxxxxx';                       // Replace by your merchant_private_key !!! 


/************************************************************************************* 
				STEP 1 - CONFIGURATION : END
**************************************************************************************/

/*************************************************************************************
STEP 2 - CREATING AND GETTING THE POST REQUEST VARIABLES : START 
Create and initialize variables to be sent to confirm that 
the ongoing transaction is associated with the current merchant
**************************************************************************************/

$transaction_uid = '';//create an empty transaction_uid 
$transaction_token  = '';//create an empty transaction_token
$transaction_provider_name  = ''; //create an empty transaction_provider_name
$transaction_confirmation_code  = ''; //create an empty confirmation code

//extracting data from the post
if(isset($_POST['transaction_uid'])){
	$transaction_uid = $_POST['transaction_uid']; //Get the transaction_uid posted by the payment box
}

if(isset($_POST['transaction_token'])){
	$transaction_token  = $_POST['transaction_token']; //Get the transaction_token posted by the payment box
}

if(isset($_POST['transaction_provider_name'])){
	$transaction_provider_name  = $_POST['transaction_provider_name']; //Get the transaction_provider_name posted by the payment box
}

if(isset($_POST['transaction_confirmation_code'])){
	$transaction_confirmation_code  = $_POST['transaction_confirmation_code']; //Get the transaction_confirmation_code posted by the payment box
}

/*****************************************************************************************
STEP 2 - CREATING AND GETTING THE POST REQUEST VARIABLES : END
******************************************************************************************/

/*****************************************************************************************
STEP 3 - SAVING THE POST REQUEST VARIABLES IN YOUR DATABASE : START 
Before doing anything, save the 4 variables that we just got from the POST request in your database.
This will be useful for further operations to authenticate the requests sent to the default webhook url
Save the transaction in your database with | $transaction_uid | $transaction_token | $transaction_provider_name | $transaction_confirmation_code
*******************************************************************************************/

//Write a script here to save a transaction with the 4 variables above


/******************************************************************************************
STEP 3 - SAVING THE POST REQUEST VARIABLES IN YOUR DATABASE : END 
*******************************************************************************************/


/******************************************************************************************
STEP 4 - BUILDING THE WECASHUP URL WHERE TO POST THE TRANSACTION CONFIRMATION DATA : START 
The endpoint is https://www.wecashup.com/api/v1.0/
build your URL by adding /merchants/{YOUR-MERCHANT-UID}/transactions/{THE-TRANSACTION-UID-GOTTEN-IN-THE-RECEIVED-POST-REQUEST}/?merchant_public_key={YOUR-PUBLIC-KEY}
*******************************************************************************************/

//Building the url where to send the transaction confirmation data
$url = 'https://www.wecashup.com/api/v1.0/merchants/'.$merchant_uid.'/transactions/'.$transaction_uid.'/?merchant_public_key='.$merchant_public_key;

echo $url;

/******************************************************************************************
STEP 4 - BUILDING THE WECASHUP URL WHERE TO POST THE TRANSACTION CONFIRMATION DATA : END 
*******************************************************************************************/


/******************************************************************************************
STEP 5 - SETTING UP THE VARIABLES ARRAY TO BE POSTED TO WECASHUP TO CONFIRM THE TRANSACTION : START 
The endpoint is https://www.wecashup.com/api/v1.0/
build your URL by adding /merchants/{YOUR-MERCHANT-UID}/transactions/{THE-TRANSACTION-UID-GOTTEN-IN-THE-RECEIVED-POST-REQUEST}/?merchant_public_key={YOUR-PUBLIC-KEY}
*******************************************************************************************/

$fields = array(
	'merchant_secret' => urlencode($merchant_secret),
	'transaction_token' => urlencode($transaction_token),
	'transaction_uid' => urlencode($transaction_uid),
	'transaction_confirmation_code' => urlencode($transaction_confirmation_code),
	'transaction_provider_name' => urlencode($transaction_provider_name),
	'_method' => urlencode('PATCH')/* Very important : TO PATCH an entity on WeCashUp, make an HTTP POST request and add an input
		                            * with the name "_method" and value "PATCH" to specify that you are patching an existing entity 
								    * (here you are confirming an existing INCOMPLETE transaction)
								    */
);

//url-ify the data for the POST
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');

/******************************************************************************************
STEP 5 - SETTING UP THE VARIABLES ARRAY TO BE POSTED TO WECASHUP TO CONFIRM THE TRANSACTION : END
*******************************************************************************************/

/******************************************************************************************
STEP 6 - PREPARE THE POST REQUEST, EXECUTE IT AND GET THE RESPONSE : START 
Initialize PHP curl to execute an HTTP POST request to send the received data to WeCashUp
Receive server response and parse it to JSON 
*******************************************************************************************/


//Initialize PHP curl to execute an HTTP POST request to send the received data to WeCashUp
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string); 

// receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec ($ch);

echo $server_output;

curl_close ($ch);

//Parse the response to JSON and save the JSON string in the variable "$data"

echo "<br><br> data : ".$data;

$data = json_decode($server_output, true);
	
echo '<br><br> data : '.$data;

echo '<br><br> transaction_token : '.$transaction_token;
echo '<br><br> transaction_uid : '.$transaction_uid;
echo '<br><br> transaction_confirmation_code : '.$transaction_confirmation_code;
echo '<br><br> transaction_provider_name : '.$transaction_provider_name;
	
echo '<br><br> response_status : '.$data['response_status'];

/******************************************************************************************
STEP 6 - PREPARE THE POST REQUEST, EXECUTE IT AND GET THE RESPONSE : END
*******************************************************************************************/

/******************************************************************************************
STEP 7 - PROCESS THE RESPONSE AND TAKE ACTION : START 
a) Extract the useful data from the response and save them.
b) Processing : If the response state the transaction as successful, do whatever you want to let the 
customer know that his transaction was successful and take action (like launching the delivery 
process or whatever is relevant for you)
If it is not successfull, do wathever you want 
*******************************************************************************************/

//a) Extract the relevant data like the transaction_uid and transaction_status and save them n your database or just update the previously saved data.

//b) Process the response.

$location = 'https://www.wecashup.cloud/cdn/tests/websites/PHP/responses_pages/failure.html';

echo '<br><br> DATA : '.$data;
echo '<br><br> $data["response_status"] : '.$data['response_status'];
echo '<br><br> $data["response_code"] : '.$data['response_code'];
echo '<br><br> $data["response_content"] : '.$data['response_content'];
echo '<br><br> $data["response_errors"] : '.$data['response_errors'];
echo '<br><br> $data["response_details"] : '.$data['response_details'];

if($data['response_status'] =="success"){
	
	//Do wathever you want to tell the user that it's transaction succeed or redirect him/her to a success page
	
	echo '<br><br> response_code : '.$data['response_code'];
	
	$location = 'https://www.wecashup.cloud/cdn/tests/websites/PHP/responses_pages/success.html';
	
	///
}else{
	
	//Do wathever you want to tell the user that it's transaction failed or redirect him/her to a failure page
	echo '<br><br> response_code : '.$data['response_code'];
	
	$location = 'https://www.wecashup.cloud/cdn/tests/websites/PHP/responses_pages/failure.html';
}

//redirect to your feedback page
echo '<script>top.window.location = "'.$location.'"</script>';

/******************************************************************************************
STEP 7 - PROCESS THE RESPONSE AND TAKE ACTION : END 
*******************************************************************************************/

/*
	NOTE : 	You can access the json response to process further operations like this :
			$data['response_status'], 
			$data['response_code'], 
			$data['response_content'], 
			$data['response_errors'], 
			$data['response_details'] .
*/         


?>
