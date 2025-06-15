fases = int(input())

for i in range(fases):
    participantes = int(input())
    acertos = input()
    questoes = len(acertos)
    qtdeErros = acertos.count('0')
    porcentagem = qtdeErros/questoes
    if porcentagem > 0.25:
        print("Bad")
    else:
        print("Good")
    