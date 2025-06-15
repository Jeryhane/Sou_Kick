import math

mb = int(input())

bits = 8000000 * mb

resultado = math.log(bits)/math.log(2)

print(math.ceil(resultado))