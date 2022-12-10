# First solution

#def longest_word_in(sentence):
#    count = 0
#    word_list = sentence.split("  ")
#    for word in word_list:
#        if len (word) > count:
#            count = len(word)
#            longest = word

#    return longest 

# Second solution

def longest_word_in(sentence):
    longest = ""
    word_list = sentence.split("  ")
    for word in word_list:
        if len (word) > len(longest):
            count = len(word)
            longest = word

    return longest


# Testing Output
# Toooooo
print(longest_word_in("In Programming We Love Elzero Academy Tooooooo Much"))