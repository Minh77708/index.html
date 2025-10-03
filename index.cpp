#include <stdio.h>

int main() {
    int a[10], x, c = 0;

    printf("Nhap 10 so nguyen:\n");
    for (int i = 0; i < 10; i++) {
        printf("So thu %d: ", i + 1);
        scanf("%d", &a[i]);
    }

    printf("Nhap so can dem: ");
    scanf("%d", &x);

    for (int i = 0; i < 10; i++) {
        if (a[i] == x) c++;
    }

    printf("So %d xuat hien %d lan trong mang.\n", x, c);

    return 0;
}

