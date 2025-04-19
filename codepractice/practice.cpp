#include<bits/stdc++.h>
using namespace std;
int countwithlog(int n){
    int count =int(log10(n)+1);
    return count;
    //time complexity -> O(1)
    //space somplexity -> O(1)
}

int countwithbrute(int n){
    int count=0;
    while(n){
        n=n/10;
        count++;
    }
    return count;
    //time complexity -> O(log10N+1)
    //space complexity -> O (1)
}

int reversenumber(int n){
    int c=0;
    int x=0;
    while(n){
        c=n%10;
        x=x*10+c;
        n=n/10;
    }
    return x;

    //time compl -> O(log10N+1)
}

int find_hcf(int a, int b){
    int max=1;
    if(a>b) find_hcf(b,a);
    for(int i=1;i<=int(sqrt(a));i++){
        cout<<i<<endl;
        if(a%i==0 && b%i==0){
            max=i>max?i:max;
            cout<<max<<"hi"<<endl;
        }
        int sec=a/i;
        if(a%sec==0 && b%sec==0){
            max=sec>max?sec:max;
            cout<<max<<"hi2"<<endl;
        }
    }
    return max;
}
int main(){
    int n;
    cin>>n;
    int m;
    cin>>m;
    cout<<countwithlog(n)<<" is the count of digits"<<endl;
    cout<<countwithbrute(n)<<" is the count of digits"<<endl;
    cout<<reversenumber(n)<<endl;
    cout<<find_hcf(n,m);
    return 0;
}

