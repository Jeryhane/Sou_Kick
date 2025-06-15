fases = int(input())

for i in range(fases):
    docesEsabor = list(map(int, input().split()))
    qtdeDoces = docesEsabor[0]
    sabor = docesEsabor[1]
    doces = list(map(int, input().split()))
    doces = sorted(doces, key=lambda x: (x < sabor, x))
    qtdeDocesComidos = 0
    segundos = 0
    for l in doces:
        if ((l - segundos) >= sabor):
            qtdeDocesComidos += 1
        segundos += 1
    print(qtdeDocesComidos)
    