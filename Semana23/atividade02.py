#Escreva uma função chamada reverter_string que recebe uma string como parametro e retona a string ao contrario

def reverter_string(texto):
    return texto[::-1]
palavra = input("Escreva uma palavra: ")
arvalap = reverter_string(str(palavra))
print(arvalap)