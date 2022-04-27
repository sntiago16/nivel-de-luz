let luz: string;
while (true) {
    luz = "" + input.lightLevel()
    if (input.temperature() > 200) {
        basic.showIcon(IconNames.Duck)
        basic.showString(luz)
    } else if (input.temperature() >= 100 && input.temperature() <= 200) {
        basic.showIcon(IconNames.Rabbit)
        basic.showString(luz)
    } else {
        basic.showIcon(IconNames.Giraffe)
        basic.showString(luz)
    }
    
}
