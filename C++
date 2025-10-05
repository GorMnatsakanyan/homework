// 1.Գրել ֆունկցիա, որը տպում է զանգվածի բոլոր տարրերը՝ օգտագործելով
// ցուցիչներ։

#include<iostream>
void print(int*arr, const int length){
    int*ptr = arr;
    for(int i=0; i<length; i++){
        std::cout<<*(ptr+i);
    }
}
int main(){
    int arr[]={1,2,3,4,5};
    int length = sizeof(arr)/sizeof(arr[0]);
    print(arr,length);
}


// 2.Գրել ֆունկցիա, որը գտնում է զանգվածի մեծագույն(maximum) եւ
// փոքրագույն(minimum) տարրերը ցուցիչներով

#include<iostream>
void findMinMax(int*arr, const int length, int*min, int*max){
    int*ptr = arr;
    *min = *arr;
    *max = *arr;
   
    for(int i=0; i<length; i++){
        if(*(ptr+i)<*min){
            *min = *(ptr+i);
        }if(*(ptr+i)>*max){
            *max = *(ptr+i);
        }
    }
}
int main(){
    int arr[]={2,1,3,5,4};
    int length = sizeof(arr)/sizeof(arr[0]);
    int min, max;
    findMinMax(arr,length, &min, &max);
    std::cout<<"min = "<<min<<"\n";
    std::cout<<"max = "<<max;
}


// 3.Գրել ֆունկցիա, որը վերադարձնում է զանգվածի բոլոր տարրերի գումարը
// ցուցիչների միջոցով։

#include<iostream>
int solveSum(int*arr, const int length){
    int* ptr = arr;
    int sum = 0;
    for(int i=0; i<length; i++){
        sum+=*(ptr+i);
    }
    return sum;  
}
int main(){
    int arr[]={1,2,3,4,5};
    int length = sizeof(arr)/sizeof(arr[0]);
    int sum = solveSum(arr,length);
    std::cout<<sum;
}

// 4.Գրել ֆունկցիա, որը փոխում է զանգվածի առաջին եւ վերջին տարրերը։

#include<iostream
void change(int* arr, const int length){
    int* ptr = arr;
    int first = arr[0];
    ptr[0]=ptr[length-1];
    ptr[length-1]=first;
    for(int i=0; i<length; i++){
        std::cout<<ptr[i];
    }
}
int main(){
    int arr[]={1,2,3,4,5};
    int length = sizeof(arr)/sizeof(arr[0]);
    change(arr, length);
}


// 5.Գրել ֆունկցիա, որը տպում է զանգվածի բոլոր տարրերի հասցեները։
#include<iostream>
void print(int *arr, const int length){
    int*ptr=arr;
    for(int i=0; i<length; i++){
        std::cout<<(ptr+i)<<"\n";
    }
}

int main(){
    int arr[]={1,2,3,4,5};
    int length=sizeof(arr)/sizeof(arr[0]);
    print(arr, length);
}


// 6.Գրել ֆունկցիա, որը ձախ է տեղափոխում զանգվածի բոլոր տարրերը մեկ քայլ։

#include<iostream>

void texapoxelDzax(int* arr, const int length){
    int first = *arr;
    for(int*ptr=arr; ptr<arr+length-1; ptr++){
        *ptr=*ptr+1;
    }
    *(arr+length-1)=first;
    for(int *ptr=arr; ptr<arr+length; ptr++){
        std::cout<<*ptr;
    }

}

int main(){
    int arr[]={1,2,3,4,5};
    int length=sizeof(arr)/sizeof(arr[0]);
    texapoxelDzax(arr,length);
   
}


// 7.Գրել ֆունկցիա, որը աջ է տեղափոխում զանգվածի բոլոր տարրերը մեկ քայլ։

#include<iostream>

void texapoxelAj(int* arr, const int length){
    int last = *(arr+length-1);
    for(int*ptr=arr+length-1; ptr>arr; ptr--){
        *ptr=*(ptr-1);
    }
    *arr=last;
    for(int*ptr=arr; ptr<arr+length; ptr++){
        std::cout<<*ptr;
    }
}
int main(){
    int arr[]={1,2,3,4,5};
    int length=sizeof(arr)/sizeof(arr[0]);
    texapoxelAj(arr,length);
}

// 8.Գրել ֆունկցիա, որը ստուգում է՝ արդյոք զանգվածը պալինդրոմ է (առաջից եւ հետեւից
// նույնն է կարդացվում)։

#include<iostream>
bool pallindrome(int*arr, const int length){
    int* first = arr;
    int* last = (arr+length-1);
    while(first<last){
        if(*first!=*last){
            return false;
        }
        first++;
        last--;
    }
    return true;
}
int main(){
    int arr[]={1,2,2,1};
    int length=sizeof(arr)/sizeof(arr[0]);
    std::cout<<pallindrome(arr,length);
}


// // 9.Գրել ֆունկցիա, որը փնտրում է զանգվածում որեւէ թիվ եւ վերադարձնում նրա
// // ինդեքսը (կամ -1, եթե չկա)։

#include<iostream>
int Return(int* arr, int n, const int length){
    for(int*ptr=arr; ptr<arr+length; ptr++){
        int index = ptr-arr;
        if(*ptr==n){
            return index;
        }
    }
    return -1;
}
int main(){
    int arr[] = {1,2,3,4,5};
    int length = sizeof(arr)/sizeof(arr[0]);
    std::cout<<Return(arr,2,length);
}
