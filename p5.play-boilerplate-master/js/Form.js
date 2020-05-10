class Form
{
    constructor()
    {
        this.title = createElement("h1");
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greetings = createElement("h1");
        this.reset = createButton('reset');
    }

    hide()
    {
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }

    display()
    {
        this.title.html("Welcome to hurdle race game. Please enter your details to start!");
        this.title.position(displayWidth/2, 50);
        this.input.position(displayWidth/2, displayHeight/2);
        this.button.position(displayWidth/2, displayHeight/2 + 100);

        this.button.mousePressed(() =>
        {
            this.title.hide();
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greetings.html("Hello " + player.name + "!");
            this.greetings.position(displayWidth/2, displayHeight/2);
        });

        this.reset.mousePressed(() =>
        {
            game.update(0);
            player.updateCount(0);
        })
    }
}