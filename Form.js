class Form{
    constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./images/title.png");
    this.greeting = createElement("h2");
    }

    setElementsPosition(){
        this.titleImg.position(width/2 - 600 , 60);
        this.input.position(width/2 - 240, height/2 -30);
        this.playButton.position(width/2 - 240, height/2 + 40);
        this.greeting.position(width/2 - 300, height/2 - 100);
    }

    setElementsStyle(){
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
    }

    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }

    handleMousePressed(){
        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide();
            var message = `
            Hello ${this.input.value()}
            </br> Game starts now!! `;
            this.greeting.html(message)
        });
    }

    
    

    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}