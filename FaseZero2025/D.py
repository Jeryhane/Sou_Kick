N = int(input())
S = input()
T = input()

qtdeS = S.count('*')
qtdeT = T.count('*')

total = (qtdeS - qtdeT)/qtdeS

print('{:.2f}'.format(total))