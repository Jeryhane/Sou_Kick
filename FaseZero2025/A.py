lista = list(map(int, input().split()))
c = lista[0]
g = lista[1]

if c == 1:
    print("vivo e morto")
else:
    if(g==0):
        print("morto")
    else:
        print("vivo")