#jogo pedra, papel ou tesoura
import random 

vitorias = 0
derrotas = 0
empates = 0

def calculo(jogadaNPC, jogadaUser):
    global empates
    global vitorias
    global derrotas
    if jogadaNPC == jogadaUser:
        global empates
        empates += 1
        retorno = "Empatou!"
    elif jogadaUser == "pedra" and jogadaNPC == "tesoura":
        vitorias += 1
        retorno = "Você venceu!"
    elif jogadaUser == "pedra" and jogadaNPC == "papel":
        derrotas += 1
        retorno = "Você perdeu!"
    elif jogadaUser == "papel" and jogadaNPC == "pedra":
        vitorias += 1
        retorno = "Você venceu!"
    elif jogadaUser == "papel" and jogadaNPC == "tesoura":
        derrotas += 1
        retorno = "Você perdeu!"
    elif jogadaUser == "tesoura" and jogadaNPC == "papel":
        vitorias += 1
        retorno = "Você venceu!"
    elif jogadaUser == "tesoura" and jogadaNPC == "pedra":
        derrotas += 1
        retorno = "Você perdeu!"
    
    return retorno

def escolhaNPC():
    opcoes = ["pedra", "papel", "tesoura"]
    return random.choice(opcoes)

def escolhaUser():
    escolha = input("\nPedra, papel ou tesoura? ").lower()
    while escolha != "pedra" and escolha != "papel" and escolha != "tesoura":
        escolha = input("Opção inválida! Escolha entre pedra, papel ou tesoura ")
    return escolha

def jogar():
    global empates
    global vitorias
    global derrotas
    continuar = "s"
    while continuar == "s":
        user = escolhaUser()
        npc = escolhaNPC()

        print("Você escolheu " + user)
        print("O computador escolheu " + npc)
        print(calculo(npc, user))

        continuar = input("Deseja jogar novamente? s/n ").lower()
        if continuar != "s":

            print("\nVitórias: " + str(vitorias))
            print("Derrotas: " + str(derrotas))
            print("Empates: " + str(empates))

            diferenca = vitorias - derrotas

            if diferenca > 0:
                print("Você ganhou por " + str(diferenca))
            elif diferenca < 0:
                print("Você perdeu por " + str((diferenca * -1)))
            else:
                print("Ninguém ganhou!")
            
            vitorias = 0
            derrotas = 0
            empates = 0
    
jogar()