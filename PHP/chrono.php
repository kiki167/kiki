
<?php
	if(!isset($_SESSION)){
		session_start();
	}
?>
<!doctype html>
<html>

	<head>
		<meta charset="UTF-8"/>
  		<title>Chrono</title>
		<!-- Inclusion du chemin du fichier "accueil.css". -->
  		<link href="../CSS/index.css" rel="stylesheet" type="text/css"/>
  		<script type="text/javascript" src="../JS/chrono.js"> </script>
	<head>

	<body onload="decompte();">
			<header> 
			<h1>Il vous reste:</h1>
			</header>
			<main>
				<?php 
					if(isset($_POST["tache"]))
					{
						$r=$_POST["tache"];
						echo "<fieldset>pour faire la tâche suivante:</fieldset>";
						echo "<fieldset>".$r."</fieldset>";
					}
				?>
				<div id=chrono></div>
				<div id=pause></div>
				<div id=continue></div>
			</main>
	</body>

</html>