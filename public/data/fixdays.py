#! /bin/env python

def activityToBool(activity):
    if activity == "1":
        return "true"
    elif activity == "0":
        return "false"
    elif activity == "":
        return ""
    else:
        print(f"unexpected bool value found!: {activity}")

outFile = open('days-fixed.csv', 'w')

with open("days.csv", 'r') as csvInFile:
    for line in csvInFile:
        parts = line.strip().split(',')
        if parts[0] == "date":
            outFile.write(','.join(parts) + '\n')
            continue
        date = parts[0]
        rating = parts[1] if parts[1] != "0" else ""
        create = activityToBool(parts[2])
        care = activityToBool(parts[3])
        talk = activityToBool(parts[4])
        move = activityToBool(parts[5])
        work = activityToBool(parts[6])
        read = activityToBool(parts[7])
        write = activityToBool(parts[8])
        outFile.write(f"{date},{rating},{create},{care},{talk},{move},{work},{read},{write}\n")
    outFile.close()
