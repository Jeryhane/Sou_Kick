def calcular_area_retangulo(largura, altura):
    """
    Calcula a area de um retangulo.

    Parâmetros:
    largura (float): A largura do retangulo.
    altura (float): A altura do retângulo.

    Retorna:
    float: A área do retângulo.
    """
    area = largura * altura
    return area

# Chamando a função comylargura 5 e altura 10
largura = 5
altura = 10
area = calcular_area_retangulo(largura, altura)
print(f"A area do retangulo de largura {largura} e altura {altura} e {area}")

# # Chamando a função com largura 7.5 e altura 3.2
# largura = 7.5
# altura = 3.2
# area = calcular_area_retangulo(largura, altura)
# print(f"A área do retângulo de largura (largura} e altura {altura} é {area}")