# Programa que soma dois valores
def subtrair_valores():
    # Recebendo os valores do usuário
    valor1 = int(input("Digite o primeiro valor: "))
    valor2 = int(input("Digite o segundo valor: "))

    # Calculando a subtracao
    sub = valor1 - valor2

    # Exibindo o resultado
    print(f"A subtração de {valor1} e {valor2} é {sub}")

# Chama a função
subtrair_valores()