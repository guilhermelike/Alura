#include <stdio.h>

void main(){
    int variavel1, variavel2;

    printf("Digite dois números inteiros: \n");
    scanf("%d %d", &variavel1, &variavel2);

    int resultado = variavel1 * variavel2;

    printf("O resultado da multiplicação é: %d", resultado);
}