#Faça um programa que gere as tabuadas do 1 até o 10.

for i in range(1, 11):
    print("-----------------------------")
    for j in range(1, 11):
        result = i * j 
        print(f"{i} x {j} = {result}")
    
    