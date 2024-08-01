#Faça um programa que calcule a área de um quadrado/retângulo.
def calc():
    altura = float(input("Insira a altura em centímetros: "))
    base = float(input("Insira a base em centímetros: "))
    result = altura * base
    input(f"A área, em centimetros quadrado é: {result}")

calc()