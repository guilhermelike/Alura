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

    while(1){
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
            printf("Parabéns! Você acertou!!");
            break;;
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
    printf("Voce acertou em %d tentativas \n", tentativas);
    printf("Total de pontos: %.1f\n", pontos);
}