#calculo media
nota1 = float(input("Insira sua primeira nota: "))
nota2 = float(input("Insira sua segunda nota: "))
nota3 = float(input("Insira sua terceira nota: "))

calculo = (nota1 + nota2 + nota3) / 3
calculo = "%.2f" % calculo

if calculo < 6:
    input(f"Reprovado!Sua média é: {calculo}")
else:
    input(f"Aprovado! Sua média é: {calculo}")
    
