#include <stdio.h>

int main(){
    int numero;
    printf("Digite o número para receber a tabuada! \n");
    scanf("%d", &numero);

    for(int i = 1; i<=10; i++){
        int tabuada = numero * i;
        printf("%dx%d=%d \n", numero, i, tabuada);
    }
}