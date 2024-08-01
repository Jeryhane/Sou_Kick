#Faça um programa que converte centímetros em metros. 
def convertor():
    centimetros = float(input("Insira a quantidade em centímetros: "))
    result = centimetros / 100
    input(f"Em metros: {result}")

convertor()