export class ClickBuffer{
    
    constructor(computerSpeed, overheating){
        this.clicks = [];
        this.computerSpeed = computerSpeed;
       this.handleOverheat(overheating);
    
    }
    handleOverheat = (overheating) => {
        if(this.isOverheating(5)){
            overheating();
        }    
        this.removeFirst();

        setTimeout(() => {this.handleOverheat(overheating)},5000 / this.computerSpeed);
    }
    

    isOverheating = (max) => {
        return this.clicks.length > max;
    }

    addClick(color){
        this.clicks.push(color);
    }

    removeFirst = () =>
    {
        this.clicks.pop(0);
    }    

}