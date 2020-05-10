class Player
{
    constructor() 
    {
        this.index = null;
        this.name = null;
        //this.distance = 0;
        this.y = null;
        //this.rank = null;
    }

    static getPlayerInfo()
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) =>
        {
            allPlayers = data.val();
        });
    }

    getCount()
    {
        var PlayerCountRef = database.ref('playerCount');
        PlayerCountRef.on("value", (data) =>
            {
                playerCount = data.val();
            }
        );
    }

    updateCount(count)
    {
        database.ref('/').update(
            {
                playerCount: count
            }
        );
    }

    update()
    {
        var playerIndex1 = "players/player" + this.index;
        database.ref(playerIndex1).set(
            {
                name: this.name,
                distance: this.distance
            }
        );

        this.y += 0.8;
    }
}
