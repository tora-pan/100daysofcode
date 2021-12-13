import random

rabbit_location = random.randint(0,100)


def move_rabbit(hole_list):
    
    random_seed = random.random()
       
    global rabbit_location

    if random_seed < .5 and rabbit_location >= 0:
        rabbit_location -= 1
    if random_seed > .5 and rabbit_location < len(hole_list) - 1:
        rabbit_location += 1

def find_rabbit(hole_list):
    hole = 0
    while hole < len(hole_list):
    
        if hole == get_rabbit_location():
            print('you found the rabbit in hole: ' + str(hole))
            break
        else:
            print('rabbit was not in hole: ' + str(hole) + ' rabbit was in hole: ' + str(rabbit_location))
            move_rabbit(hole_list)
            hole += 1
        if hole == len(hole_list):
            hole = 1

def foo(hole_list):
    print(rabbit_location)


def get_rabbit_location():
    return rabbit_location

    

def generate_list(list_length):
    list_of_holes = []
    for i in range(list_length):
        list_of_holes.append(i)
    return list_of_holes

def main():
    print(rabbit_location)
    list_of_holes = generate_list(100)
    find_rabbit(list_of_holes)

if __name__ == '__main__':
    main()
    