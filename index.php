<?php     
    function numberInt(int $numero) {
        for($n = 1; $n < $numero; $n++){
            if($n % 3 == 0){            
                $tres += $n; 
            }
            if($n % 5 == 0){            
                $cinco += $n; 
            }
            $soma = $tres + $cinco; 
        }

        return $soma;
    }
?>
</!DOCTYPE html>
	<html>
	<head>
		<title>Teste</title>
	</head>
	<body>
		<h2>Selecão de Desenvolvedor de Software - Escribo</h2>
		<p id="demo">Teste Técnico 1</p>            
           <form action="" method="get">
               <p> Digite um numero Inteiro <input type="text" name="number"> </p>
               <p><input type="submit" name=""></p>
           </form>
           <p>Resultado = <?=numberInt($_GET['number']);?></p>      	    
	</body>
	</html>

