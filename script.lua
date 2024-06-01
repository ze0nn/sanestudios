print("Started, YIPPIE!")

local targetNumber = math.random(1, 100)
local guessInput = get("guessInput")
local submitBtn = get("submitBtn")
local result = get("result")

local inGame = false

local guessesLeft = 5

local targetNumber = nil

function startGame()
    targetNumber = math.random(1, 100)
    inGame = true
    guessesLeft = 5
end

submitBtn.on_click(function()
    if not inGame then
        startGame()
    end

    if(guessesLeft <= 0) then
        result.set_content("You ran out of guesses! The number was " .. targetNumber .. ".")
        inGame = false
        return
    end

    local guess = tonumber(guessInput.get_content())
    if not guess then
        result.set_content("Please enter a number.")
        return
    end

    if guess == targetNumber then
        result.set_content("You guessed it! The number was " .. targetNumber .. "." .. "You used " .. (4 - guessesLeft) .. " guesses.")
        inGame = false
    elseif guess < targetNumber then
        guessesLeft = guessesLeft - 1
        result.set_content("Too low! Guesses left: " .. guessesLeft .. ".")
    else
        guessesLeft = guessesLeft - 1
        result.set_content("Too high! Guesses left: " .. guessesLeft .. ".")
    end
    
    if(guessesLeft <= 0) then
        result.set_content("You ran out of guesses! The number was " .. targetNumber .. ".")
        inGame = false
        return
    end
end)
