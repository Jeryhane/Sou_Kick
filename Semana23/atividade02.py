matriz = list(map(int, input().split()))
linhas = matriz[0]#qtde total para rep.
colunas = matriz[1]
qtdeArvore = []

for i in range(linhas):
    pomar = list(map(int, input().split()))

    for index, macas in enumerate(pomar):
        if macas not in qtdeArvore:
            qtdeArvore.append(macas)
        else:
            pomar[index] = macas + 1
            qtdeArvore.append(macas + 1)


    
    print(*pomar)