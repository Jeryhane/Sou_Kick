N = int(input())
for i in range(N, -1, -1):
    binario = str(bin(i)[2:])
    if binario == binario[::-1]:
        print(i)
        break
        
