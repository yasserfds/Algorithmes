def daysCount(depth, height):
    if height >= depth:
        return 0
    else:
        if height + 7 >= depth:
            return 1 + daysCount(depth, height + 7)
        else:
            return 1 + daysCount(depth, height + 5)


def main():
    depth = parseInt(readLine(), 10)
    print(daysCount(depth, 0))