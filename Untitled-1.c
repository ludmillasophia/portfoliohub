#include <stdio.h>

int main() {
    int num1, num2, soma, resultado;
    
    printf("Digite o primeiro número: ");
    scanf("%d", &num1);
    
    printf("Digite o segundo número: ");
    scanf("%d", &num2);
    
    soma = num1 + num2;
    resultado = soma * num1;
    
    printf("Soma: %d\n", soma);
    printf("Resultado final: %d\n", resultado);
    
    return 0;
}