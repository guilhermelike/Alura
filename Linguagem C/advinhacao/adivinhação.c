#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    //imprime cabeçalho do nosso jogo
    printf("****************************************** \n");
    printf("* Bem vindo ao nosso jogo de adivinhação! *\n");
    printf("******************************************\n");

    int segundos = time(0);
    srand(segundos);
    int numerogrande = rand();

    int numerosecreto = numerogrande % 100;
    int tentativas = 1;
    int chute;
    double pontos = 1000;

    int numerodetentativas;
    int acertou = 0;

    int nivel;
    printf("Qual o nível de dificuldade? \n");
    printf("(1)Fácil (2)Médio (3) Díficil \n\n");
    printf("Escolha: ");
    scanf("%d", &nivel);

    if(nivel == 1){
        numerodetentativas = 20;
    } else if(nivel == 2){
        numerodetentativas = 10;
    } else{
        numerodetentativas = 5;
    }

    for (int i = 1; i <= numerodetentativas; i++){
        printf("Tentativa %d \n", tentativas);
        printf("Qual é o seu chute? \n");
        scanf("%d", &chute);
        printf("Seu chute foi %d \n", chute);

        if(chute<0){
            printf("Você não pode chutar números negativos! \n");
            continue;
        }

        int acertou = (chute == numerosecreto);
        int maior = (chute > numerosecreto);

        if(acertou){
            break;
        } 
            else if(maior){
                printf("Seu chute foi maior que o número secreto \n");
            }
            else{
                printf("Seu chute foi menor que o número secreto \n");
            }
        
        tentativas++;

        double pontosperdidos = abs(chute - numerosecreto) / 2.0;

        pontos = pontos - pontosperdidos;
    }

    printf("Fim de jogo! \n");

    if(acertou){
        printf("Você ganhou! \n");
        printf("Voce acertou em %d tentativas \n", tentativas);
        printf("Total de pontos: %.1f\n", pontos);

    } else{
        printf("Você perdeu!");
    }

}