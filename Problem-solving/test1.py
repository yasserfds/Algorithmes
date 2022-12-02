import string

# print(dir(string))
# print(string.ascii_letters)

def find_missing_letter_in(givenLetters):
    alpha = string.ascii_letters
    start = alpha.index(givenLetters[0])
    for letter in alpha[start:] :
        if letter not in givenLetters :
            return letter
    return f"No Missing Letter In Sequence"



# Testing Output
print(find_missing_letter_in("abcdeghi")) #f
print(find_missing_letter_in("defgi")) #h
print(find_missing_letter_in("xyz")) # No Missing Letter In Sequence