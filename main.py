while True:

    luz= str(input.light_level())

    if input.temperature() > 200:
        basic.show_icon(IconNames.DUCK)
        basic.show_string(luz)
    
    elif input.temperature() >= 100 and input.temperature() <= 200:
        basic.show_icon(IconNames.RABBIT)
        basic.show_string(luz)

    else:
        basic.show_icon(IconNames.GIRAFFE)
        basic.show_string(luz)

