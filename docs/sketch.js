t=d=p=1;c=0;x=y=(w=300)/2;draw=_=>{createCanvas(w,w);background(255);noLoop();for(n=1;n<w*w;n++){p=n==1?0:1;for(i=2;i<=sqrt(n);i++)if(n%i==0)p=0;p&&rect(x,y,1,1);n==t+d&&(t=n,c++,d+=c%2==0?1:0);x+=c%4==0?2:(c%4==2&&-2);y+=c%4==3?2:(c%4==1&&-2);}/*save("i.png")*/}
//#つぶやきProcessing 

/*
t=d=p=1;
c=0;
x=y=(w=300)/2;
draw=_=>{
    createCanvas(w,w);
    background(255);
    noLoop();
    for(n=1;n<w*w;n++){
        p=n==1?0:1;
        for(i=2;i<=sqrt(n);i++)
            if(n%i==0)p=0;
        p&&rect(x,y,1,1);
        n==t+d&&(t=n,c++,d+=c%2==0?1:0);
        x+=c%4==0?2:(c%4==2&&-2);
        y+=c%4==3?2:(c%4==1&&-2);
    }
    //save("i.png")
}
//#つぶやきProcessing 
*/