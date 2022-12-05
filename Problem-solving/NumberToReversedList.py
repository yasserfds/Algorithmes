""" def convert(n):
    # Create Empty List
    result = []

    #Loop On String
    for num in str(n):
        result.insert(0, int(num))

    # [3, 2, 1]
    # [1, 2, 3, 4, 5]

    return result """

def convert(n):
    return [int(num) for num in str(n)[::-1]]

# int(num)
# str(n)
# [::-1]

# Testing Output
print(convert(564987654)) # [4, 5, 6, 7, 8, 9, 4, 6, 5]
print(convert(529132)) # [2, 3, 1, 9, 2, 5]