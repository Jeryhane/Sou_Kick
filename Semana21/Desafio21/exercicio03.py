#Faça um programa no qual o usuário precisa cadastrar as informações de um produto: código, nome, quantidade e preço. No final o programa deve mostrar as informações cadastradas e exibir o valor total da compra. 
def cadastro():
    codigo = input("Insira o código do produto: ")
    nome = input("Insira a produto: ")
    quantidade = float(input("Insira a quantidade desejada: "))
    preco = float(input("Insira o valor unitário: "))
    result = quantidade * preco
    input(f"O produto #{codigo} - {nome} saira por {result}")

cadastro()