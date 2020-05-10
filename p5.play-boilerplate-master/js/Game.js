class Game
{
    constructor(){}

    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data)
            {
                gameState = data.val();
            }
        );
    }

    update(state)
    {
        database.ref('/').update(
            {
                gameState: state
            }
        );
    }

    async start()
    {
        if(gameState === 0)
        {
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");

            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
        player_1 = createSprite(300, windowHeight/4 , 20, 20);
        player_1.addImage("player1", player_1_img);
        player_2 = createSprite(300, windowHeight * 3/4, 20, 20);
        player_2.addImage("player2", player_2_img);
        
    }

    play()
    {
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined)
        {
            background(0, 255, 0);
            for(var x = 0; x < windowWidth + 800; x = x + 50)
            {
                line(x, windowHeight/2, windowWidth, windowHeight/2);

                if(frameCount % 70 === 0)
                {
                    var x1 = windowWidth;
                    x1 -= 10;
                    hurdle1 = createSprite(x1, windowHeight/4, 50, 70);
                    hurdle1.addImage("hurdle1", hurdleImg);
                    hurdle2 = createSprite(x1, windowHeight * 3/4, 50, 70);
                    hurdle2.addImage("hurdle1", hurdleImg);
                }

                if(keyDown("SPACE"))
                {
                    player.y -= 8;
                    player.update();
                }
            }

            drawSprites();
        }
    }
}