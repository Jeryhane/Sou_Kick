import math

y, k = map(int, input().split())
x = 1

for i in range(k):
    print(math.gcd(y,x), x, y)
    x += math.gcd(y,x)


print(x)