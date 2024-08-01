#Faça um programa em que o usuário digita dois valores e o resultado da soma é exibido na tela. 

def soma():
    valor1 = float(input("Insira o primeiro valor: "))
    valor2 = float(input("Insira o segundo valor: "))
    result = valor1 + valor2
    input(f"A soma de {valor1} e {valor2} é: {result}")

soma()