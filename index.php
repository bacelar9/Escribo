<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css" />

    <title>Jogo Indiano Cobras e Escadas</title>
</head>

<body>
    <div class="container">
        <h2>Jogo Indiano Cobras e Escadas</h2>
        <div class="panel panel-default">
            <div class="panel-heading">
                <p class="instrucao">Clique no botão Iniciar para começar o jogo</p>
                <button id="iniciar" type="button" class="btn btn-success">Iniciar</button>
                <button id="jogar" type="button" class="btn btn-info">Jogar</button>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-6" style="background-color:yellow;">
                        <p id="pontos">Jogador <span>pontos</span></p>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="js/script.js" type="text/javascript"></script>
</body>

</html>