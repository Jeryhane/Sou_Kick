#Faça um programa em que o usuário precisa cadastrar nome, idade, telefone e e-mail. Depois mostre os valores digitados na tela. 
def cadastro():
    nome = input("Insira o nome: ")
    idade = int(input("Insira a idade: "))
    telefone = input("Insira o telefone: ")
    email = input("Insira o email: ")
    input(f"O nome é {nome} e tem {idade} anos, podendo entrar em contato pelo telefone {telefone} e e-mail {email}")

cadastro()
