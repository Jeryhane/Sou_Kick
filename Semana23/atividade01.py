
#G
entrada = input()
palavra1 = ""
palavra2 = ""

for letra in entrada :
    i = 1
    if (i % 2) == 0:
        palavra2 += letra
    else:
        palavra1 += letra

print(palavra1)
print(palavra2)

#C
iterador = int(input())
for i in range(iterador):
    abc = list(map(int, input().split()))
    abc.sort()
    if abc[0] == abc[1]:
        print(abc[2])
    else:
         print(abc[0])


matriz = list(map(int, input().split()))
linhas = matriz[0]#qtde total para rep.
#colunas = matriz[1]
for i in linhas:
    pomar = list(map(int, input().split()))

    for index, macas in pomar:
        qtdeArvore = []
        if macas not in qtdeArvore:
            qtdeArvore.add(macas)
            pomar[index] = macas + 1
    
    print(pomar, sep=" ")