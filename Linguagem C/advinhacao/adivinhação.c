#include <stdio.h>

int main(){
    //imprime cabeçalho do nosso jogo
    printf("****************************************** \n");
    printf("* Bem vindo ao nosso jogo de adivinhação! *\n");
    printf("******************************************\n");

    int numerosecreto = 42;
    int chute;

    printf("Qual é o seu chute? \n");
    scanf("%d", &chute);
    printf("Seu chute foi %d", chute);
}