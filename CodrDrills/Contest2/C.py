t = int(input())

for _ in range(t):
    n, k = map(int, input().split())
    a = list(map(int, input().split()))

    max_len = 0

    for l in range(n):
        max_val = a[l]
        count = {}
        for r in range(l, n):
            # Atualiza o máximo
            max_val = max(max_val, a[r])

            # Conta as ocorrências
            count[a[r]] = count.get(a[r], 0) + 1

            if count[max_val] <= k:
                max_len = max(max_len, r - l + 1)
            else:
                break  # já passou do limite, não vale mais expandir

    print(max_len)
