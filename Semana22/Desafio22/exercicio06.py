#Faça um programa em que o usuário digita um número inteiro e o programa exibe todos os números ímpares do 1 até o valor inserido
numero = int(input("Insira um número inteiro: "))
for i in range((numero+1)):
    if i % 2 != 0:
        print(i)
    
    