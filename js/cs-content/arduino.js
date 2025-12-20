csData.push({
    id: "arduino",
    title: "Arduino 實驗報告",
    type: "course",
    meta: "微處理機 | 2022.03~2022.06 | C++, Arduino",
    items: [
        {
            name: "Arduino 人機介面",
            tools: "C++, Arduino",
            content: `
>>最後編輯 Tue, Mar 22, 2022 5:49 PM<br>
>>移植時間 Wed, Dec 17, 2025 1:47 AM
___
<br>

## 實驗目的

了解人機介面，並進行實作
<br><br>
## 實驗原理

透過設計程式碼並使用Ktduino積極體驗板及Arduino UNO 開發版，了解人機介面
<br><br>
## 實驗材料

◎Ktduino積極體驗板 x1   <br>
◎Arduino UNO 開發版 x1  <br>
◎杜邦線 x17 <br>
◎跟你默契好的可愛電腦 x1    <br>
◎USB 線 x1  <br>
<br>
## 實驗步驟

1.在Ktduino積極體驗板及Arduino UNO 開發版連接電路   <br>
2.在電腦Aduino編譯程式碼（程式碼在下方↓）   <br>
3.確定程式碼無誤，將電路用USB線連接至電腦   <br>
4.再編譯及上傳程式碼    <br>
5.紀錄輸出  <br>
<br>
### 程式碼（已經過改良，並非為參考文獻內原始程式碼）

\`\`\`clink=
const int seg[7]={6,7,8,9,10,11,12};    //顯示信號接腳
const int scan[4]={2,3,4,5};    //掃描信號接腳
const int seg_code[10]={0xc0,0xf9,0xa4,0xb0,0x99,0x92,0x82,0xf8,0x80,0x90};   //七節顯示碼
const int column[4]={A2,A3,A4,A5};
const int bz=13;    //蜂鳴器
unsigned char kn;   //按鍵值
int disp[4]={0,0,0,0};    //緩衝區
int doot;   //顯示變數

//逼聲函數原型
void beep(int pin, int counts);   
//start set
void setup() {
  for(int i=0; i<7; i++)
    pinMode(seg[i],OUTPUT);  //設定seg為輸出的接腳
  for(int i=0; i<4; i++)
  {
    pinMode(scan[i],OUTPUT);  //設定scan為輸出的接腳
    pinMode(column[i],INPUT);  //設定column為輸入的接腳
  }
  pinMode(bz,OUTPUT);  //設定bz為輸出的接腳
}

//主程式
void loop() {
  for(int i=3; i>=0; i--)  //重複執行4個掃描週期
  {
    for(int j=7; j>=0; j--)
      digitalWrite(seg[j],1);  //關閉七節顯示器的訊號，防止殘影
     
    for(int j=0; j<4; j++)
      digitalWrite(scan[j],1);
    digitalWrite(scan[i],0);
     
    //輸出七節顯示器顯示訊號
    doot=seg_code[disp[i]];
    for(int j=7; j>=0; j--)
    {
      if(bitRead(doot,j))
        digitalWrite(seg[j],1);
      else
        digitalWrite(seg[j],0);
    }
    
    //按鍵
    for(int col=0; col<4; col++)
    {
      if(!digitalRead(column[col]))  //判斷有無按鍵
      {
        while(!digitalRead(column[col]));  //等待放開按鍵
        kn=4*i+col;  //計算鍵值，也就是輸出的數值
        beep(bz,1);  //逼聲
        if(kn>=0 && kn<10)  //判斷是否為數字鍵
        {
          for(int j=0; j<3; j++)
            disp[3-j]=disp[2-j];  //將按鍵的值放入個位數，顯示時會顯示在個位數
            disp[0]=kn;
        }
        delay(3);
        break;
      }
    }
  }
}

//逼聲
void beep(int pin, int counts)
{
  for(int i=0; i<counts; i++)
  {
    tone(pin, 1000, 100);  //發聲
    delay(100);  //靜音
  }
}
\`\`\`

## 實驗結果

按下Ktduino積極體驗板鍵盤，可更改七段顯示器的顯示
<img src="https://i.imgur.com/rLPmbFI.jpg#width=80%" alt="七段顯示器的接線" style="width: 70%; display: block; margin: 20px auto;">
七段顯示器顯示結果：
![](https://i.imgur.com/8X2kYlQ.jpg)
   <br>
   <br>
## 實驗討論

實驗到執行的時候，依序按下1、2、3、4，會依序出現4、3、2、1，思考過後更換了電路接法，將原本連接在P6-4～P6-1的接線換順序連接，換成P6-1～P6-4後，依序按下1、2、3、4，就可依序出現1、2、3、4。

另，程式碼部分，若按照原本參考資料上之程式碼編寫，會出現第28行有錯誤之資訊。上方程式碼為改良後程式碼，將for迴圈改為倒數，則可編譯成功。
   <br>
   <br>
## 實驗心得

發現原本的方式會有錯誤的時候，我超級興奮的！終於有除錯的機會了！！
實驗結果的杜邦線多到看不清楚七段顯示器的結果，下次要注意了。<br>
   <br>
## 實驗文獻

>編者：艾迪諾   <br>
>出版日期：2017.01.06   <br>
>書名（頁數）：Arduino全能微處理機實習：強效解析（p4-50～p4-55）   <br>
>出版社：全華圖書   <br>
            `
        },
        {
            name: "滑動式電位計與大功率LED",
            tools: "C++, Arduino",
            content: `
>>最後編輯 Mon, Mar 28, 2022 10:20 PM<br>
>>移植時間 Thu, Dec 18, 2025 05:54 PM
___
<br>

## 實驗目的

了解滑動式電位計，並配合LED進行實作<br>
<br>
## 實驗原理

透過設計程式碼並使用Ktduino積極體驗板及Arduino UNO 開發版，調整滑動式電位計以控制LED亮度<br>
<br>
## 實驗材料

◎Ktduino積極體驗板 x1<br>
◎Arduino UNO 開發版 x1<br>
◎杜邦線 x2<br>
◎跟你默契好的可愛電腦 x1<br>
◎USB 線 x1<br>
<br>
## 實驗步驟

1.在Ktduino積極體驗板及Arduino UNO 開發版連接電路<br>
2.在電腦Aduino編譯程式碼（程式碼在下方↓）<br>
3.確定程式碼無誤，將電路用USB線連接至電腦<br>
4.再編譯及上傳程式碼<br>
5.紀錄輸出<br>
<br>
### 程式碼（已經過改良，並非為參考文獻內原始程式碼）

\`\`\`clink=
const int led = 3 ;
const int pot = A0 ;
int val = 0 ;

void setup() {
  pinMode(led,OUTPUT);
}

//主程式
void loop() {
  val = analogRead(pot);    //讀取類比信號
  analogWrite(led, val/4);  //輸出PWM信號
}
\`\`\`

## 實驗結果

調整Ktduino積極體驗板上的滑動式電位計，可更改LED亮度：

▼滑杆調至最右時，觀察LED亮度
<img src="https://i.imgur.com/a4eedMq.jpg" alt="滑杆調至最右" style="width: 50%; display: block; margin: 20px auto;">
<br>
▼對比滑杆調至最左時，觀察LED亮度
<img src="https://i.imgur.com/XPjQgp9.jpg" alt="對比滑杆調至最左" style="width: 50%; display: block; margin: 20px auto;">
<br><br>
▼電線接法-1
<img src="https://i.imgur.com/l84JV83.jpg" alt="電線接法-1" style="width: 50%; display: block; margin: 20px auto;">
<br>
▼電線接法-2
<img src="https://i.imgur.com/0MRzTbW.jpg" alt="七段顯示器的接線" style="width: 50%; display: block; margin: 20px auto;">
<br><br>

## 實驗討論

在程式裡應用了analogRead()讀取類比信號，轉換成數位值存放在val變數，再用analogWrite()以PWM的方式輸出值到LED，使LED亮度發生改變
<br><br>
## 實驗心得

這次拍得不錯！LED超級超級亮的！
<br><br>
## 實驗文獻

>編者：艾迪諾<br>
>出版日期：2017.01.06<br>
>書名（頁數）：Arduino全能微處理機實習：強效解析（p3-10～p3-15）<br>
>出版社：全華圖書<br>
            `
        },
        {
            name: "PC調光燈",
            tools: "C++, Arduino",
            content: `
>>最後編輯 Mon, Mar 28, 2022 11:33 PM<br>
>>移植時間 Thu, Dec 18, 2025 08:39 PM
___
<br>

## 實驗目的

透過序列埠監控視窗，進行調光燈實作
<br><br>
## 實驗原理

透過設計程式碼並使用Ktduino積極體驗板及Arduino UNO 開發版，透過序列埠監控視窗控制LED亮度
<br><br>
## 實驗材料

◎Ktduino積極體驗板 x1<br>
◎Arduino UNO 開發版 x1<br>
◎杜邦線 x1<br>
◎跟你默契好的可愛電腦 x1<br>
◎USB 線 x1
<br><br>
## 實驗步驟

1.在Ktduino積極體驗板及Arduino UNO 開發版連接電路<br>
2.在電腦Aduino編譯程式碼（程式碼在下方↓）<br>
3.確定程式碼無誤，將電路用USB線連接至電腦<br>
4.再編譯及上傳程式碼<br>
5.紀錄輸出<br>
<br>
### 程式碼（已經過改良，並非為參考文獻內原始程式碼）

\`\`\`clink=
const int led = 3;
int data_in = 0, pwm = 0;

void setup(){
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}

void loop(){
  if(Serial.available()>0){      //檢查有沒有資料輸入
    data_in = Serial.read()-48;  //讀取資料後轉成數字
    if(data_in<0 || data_in>9){
      Serial.println("unavailable");  //如果不符規定則輸出unavailable
    }
    else{
      pwm = map(data_in,0,9,0,255);   //範圍調整
      Serial.print("pwm: ");  
      Serial.println(pwm);
      analogWrite(led,pwm);  //驅動LED
    }
  }
}
\`\`\`

## 實驗結果

在序列埠監控視窗輸入數字（0~9），可更改LED亮度：<br>

* 在序列埠間視窗輸入1，觀察LED亮度
<img src="https://i.imgur.com/knC6z4k.jpg" alt="序列埠間視窗輸入1" style="width: 50%; display: block; margin: 20px auto;">

* 在序列埠間視窗輸入8，觀察LED亮度
<img src="https://i.imgur.com/uN3W6NG.jpg" alt="序列埠間視窗輸入8" style="width: 50%; display: block; margin: 20px auto;">

* 在序列埠間視窗輸入9，觀察LED亮度
<img src="https://i.imgur.com/Z2E9HOq.jpg" alt="序列埠間視窗輸入9" style="width: 50%; display: block; margin: 20px auto;">

* 電線接法
<img src="https://i.imgur.com/gJCIfwR.jpg" alt="電線接法" style="width: 50%; display: block; margin: 20px auto;">


## 實驗討論

若是在序列埠監控視窗，設定「沒有行結尾」，則不會輸出unavailable。
<br><br>
## 實驗心得

有點可惜感覺沒有拍好結果照片，雖然我看了一下，放大的時候看得到監控視窗輸入欄的數字，但如果沒放大就看得很不清楚了。
不過還好我有想到要把照片亮度調成一樣暗，不然原本的直接每個都超亮（跟影片一樣），拍起來根本看不太出來有沒有變暗啊。
<br><br>
## 實驗文獻

>編者：艾迪諾<br>
>出版日期：2017.01.06<br>
>書名（頁數）：Arduino全能微處理機實習：強效解析（p3-28～p3-32）<br>
>出版社：全華圖書<br>
            `
        },
        {
            name: "數位式時鐘設計",
            tools: "C++, Arduino",
            content: `
>>最後編輯 Sun, May 1, 2022 11:26 PM<br>
>>移植時間 Thu, Dec 18, 2025 08:50 PM
___
<br>

## 實驗目的

透過指撥開關及七段顯示器，配合Arduino UNO 開發版，做出計時以及調整時間之用途
<br><br>
## 實驗原理

透過設計程式碼並使用Tinkercad 網頁版模擬器及Arduino UNO 開發版，透過指撥開關及七段顯示器，做出計時以及調整時間之用途
<br><br>
## 實驗材料

**◆透過Tinkercad網頁模擬器線上實作◆**<br>
<br>
◎七段顯示器 x4<br>
◎Arduino UNO 開發版 x1<br>
◎歐姆版 x1<br>
◎PMOSFET x4<br>
◎電阻 100Ω x7<br>
◎電阻 2.2kΩ x5<br>
◎電阻 10kΩ x4<br>
◎按鈕 x4<br>
◎指撥開關 x1<br>
<br>
◎跟你默契好的可愛電腦 x1<br>
<br>
◎安靜的LED小夥伴 x1  --> 用以方便讀秒<br>
<br>
## 實驗步驟

1.在Tinkercad網頁模擬器連接電路<br>
2.在程式編譯區進行程式碼編譯（程式碼在下方↓）<br>
3.確定程式碼無誤，按左上方即可開始模擬<br>
4.紀錄輸出<br>
<br>
### 電路連接完整圖
<img src="https://i.imgur.com/ClJM3v9.png" alt="電路連接完整圖" style="width: 50%; display: block; margin: 20px auto;">

#### 電路部分放大
▽右下
<img src="https://i.imgur.com/oi98uW7.png" alt="電路部分放大 - 右下" style="width: 50%; display: block; margin: 20px auto;">

▽中
<img src="https://i.imgur.com/iBGxFvf.png" alt="電路部分放大 - 中" style="width: 50%; display: block; margin: 20px auto;">

▽上
<img src="https://i.imgur.com/gKTVYMs.png" alt="電路部分放大 - 上" style="width: 50%; display: block; margin: 20px auto;">

### 程式碼（已經過改良，並非為參考文獻內原始程式碼）

\`\`\`clink= c
const int SEG[7] = {6,7,8,9,10,11,12}; // 宣告顯示信號接腳
const int scan[4] = {2,3,4,5}; // 宣告掃描信號接腳
const int SEG_code [10] = { 
0xc0,0xf9,0xa4,0xb0,0x99, 
0x92,0x82,0xf8,0x80,0x90 };
const int PB[4] = {A2,A3,A4,A5};
const int DD = A1;
const int DIPSW = A0;
const int BZ = 13;
int disp[4]={0,0,0,0};
int DISP;
unsigned long x0,x1,x2;

boolean phase0;
int seconds = 0, sec = 0;

void beep(int pin, int counts);
void scanner(int x);

void setup() {
	for(int i = 0; i < 7; i++) 
		pinMode(SEG[i], OUTPUT); 
	for(int i = 0; i < 4; i++) 
    {
      pinMode(scan[i], OUTPUT);
      pinMode(PB[i], INPUT);
    }
  pinMode(DD, OUTPUT);
  pinMode(BZ, OUTPUT);
  pinMode(DIPSW, INPUT);
}

void loop()
{
  if(digitalRead(DIPSW))
    phase0=true;
  else
   {
     phase0=false;
     disp[3]=1;
     disp[2]=2;
     disp[1]=0;
     disp[0]=0;
   }
  
  while(phase0)
  {
    seconds=0;
    if(!digitalRead(PB[0]))
    {
      if(disp[3]==2 && disp[2]==3)
      {
       disp[3]=0;
       disp[2]=0;
      }
      else if(disp[2]==9)
      {
       disp[2]=0;
       disp[3]++;
      }
      else
       disp[2]++;
    }
    if(!digitalRead(PB[1]))
    {
      if(disp[3]==0 && disp[2]==0)
      {
       disp[3]=2;
       disp[2]=3;
      }
      else if(disp[2]==0)
      {
       disp[2]=9;
       disp[3]--;
      }
      else
       disp[2]--;
    }
  	if(!digitalRead(PB[2]))
  	{
      if(disp[1]==5 && disp[0]==9)
      {
       disp[1]=0;
       disp[0]=0;
      }
      else if(disp[0]==9)
      {
       disp[0]=0;
       disp[1]++;
      }
      else
       disp[0]++;
  }
  if(!digitalRead(PB[3]))
  {
    if(disp[1]==0 && disp[0]==0)
    {
      disp[1]=5;
      disp[0]=9;
    }
    else if(disp[0]==0)
    {
      disp[0]=9;
      disp[1]--;
    }
    else
      disp[0]--;
  }
    
   scanner(25);
   if(digitalRead(DIPSW))
     phase0=true;
   else
   {
     phase0=false;
     disp[3]=1;
     disp[2]=2;
     disp[1]=0;
     disp[0]=0;
   }
  }
  
  while(!phase0)
  {
    scanner(2);
    x1=millis();
    x2=x1-x0;
    if(x2>=500)
    {
      x0=x1;
      sec=!sec;
      digitalWrite(DD,sec);
      if(sec)
      {
        if(++seconds==60)
        {
          seconds=0;
          if(disp[0]==9)
          {
            disp[0]=0;
            if(disp[1]==5)
            {
              disp[1]=0;
              if(disp[2]==2 && disp[3]==2)
              {
                disp[2]=2;
                disp[3]=1;
              }
              else if(disp[2]==9)
              {
                disp[2]=0;
                disp[3]++;
              }
              else
                disp[2]++;
            }
            else
              disp[1]++;
          }
          else
            disp[0]++;
        }
      }
    }
    if(digitalRead(DIPSW))
      phase0=true;
    else
     phase0=false;
  }
}

void beep(int pin, int counts)
{
  for(int i=0; i<counts; i++)
  {
    tone(pin,1000,100);
    delay(100);
  }
}

void scanner(int x)
{
  for(int i=0; i<x; i++)
  {
    for(int j=0; j<4; j++)
    {
      for(int k=0; k<4; k++)
        digitalWrite(scan[k],1);
      DISP=SEG_code[disp[j]];
      for(int k=0; k<8; k++)
      {
        if(bitRead(DISP,k))
          digitalWrite(SEG[k],1);
        else
          digitalWrite(SEG[k],0);
      }
      digitalWrite(scan[j],0);
      delay(1);
    }
  }
}
\`\`\`

## 實驗結果

**◎按鈕功能 由左到右分別為＂小時+＂、＂小時-＂、＂分鐘+＂、＂分鐘-＂**
<img src="https://i.imgur.com/98wCnSg.jpg" alt="按鈕功能" style="width: 50%; display: block; margin: 20px auto;">

**◎指撥開關1調至OFF時，秒數重整為0，暫停計時功能，並以按鈕調整時間**<br>

* 尚未按鈕調整時間，指撥開關1為OFF
<img src="https://i.imgur.com/xJEZ02Z.png" alt="指撥開關1調至OFF" style="width: 50%; display: block; margin: 20px auto;">
<img src="https://i.imgur.com/UW6lRYK.png" alt="指撥開關1調至OFF" style="width: 50%; display: block; margin: 20px auto;">

* 按鈕＂小時+＂及＂分鐘+＂調整時間，指撥開關1為OFF
<img src="https://i.imgur.com/Ksh5pQv.png" alt="按鈕＂小時+＂及＂分鐘+＂調整時間，指撥開關1為OFF" style="width: 50%; display: block; margin: 20px auto;">

**◎指撥開關1調至ON時，秒數從0開始算，計時時間從1200計算到2200；
當秒數計算到60時，秒數重整重加，七段顯示器分鐘個位數加1；時間計算到2259後，時間重回1200**

* 指撥開關1為ON，LED以秒為單位閃爍（此處放照片以供參考）
<img src="https://i.imgur.com/vIVpAZl.png" alt="指撥開關1調至ON，LED以秒為單位閃爍" style="width: 50%; display: block; margin: 20px auto;">

* 指撥開關1為ON，七段顯示器由1200開始計算。當秒數到60時，七段顯示器分鐘個位數由0加為1
<img src="https://i.imgur.com/0NknBrq.png" alt="撥開關1為ON，七段顯示器由1200開始計算" style="width: 50%; display: block; margin: 20px auto;">
<br>

## 實驗討論

* **運作過程中，無法使phase0=false，也就是無法計時**<br>
我的解決方法：先檢查程式碼，確認程式碼沒有編譯上的錯誤後，再調整電路。原因是沒有將使用的指撥開關接腳接地。<br>
* **運作過程中，臨時被我抓來的LED沒有亮**<br>
我的解決方法：調整電路。接地沒有接在一起。<br>
* **指撥開關是否可以4個中只用一個**<br>
我的解決方法：將其他三腳清空，確定只使用一腳不會造成錯誤。<br>

* **作者把小時顯示寫在內層，分鐘顯示寫在外層。如果把分鐘顯示寫在內層迴圈，小時顯示寫在外層會有什麼問題？**<br>
我的解釋：將小時寫在內層並將分鐘寫在外層的做法，是因為數學及生活上即是「<b>分鐘算完之後，＂進位＂到小時；個位算完後，＂進位＂到十位。</b>」 程式中也反映了這點。最外層寫到最內層並依序寫出去，程式的解釋會變成「<b>由小時的十位算完後，＂進位＂到小時的十位；小時算完後，再＂進位＂至分鐘</b>」 的作法。 <br>
<br><br>
## 實驗心得

應該要為我的LED燈拍個影片再傳上來的，就這點有些可惜。<br>
整體來說的話，我覺得這次實驗很有趣！！<br>
<br>
## 實驗文獻

>編者：艾迪諾<br>
>出版日期：2017.01.06<br>
>書名（頁數）：Arduino全能微處理機實習：強效解析（p4-67~p4-77）<br>
>出版社：全華圖書<br>
            `
        },
        {
            name: "漂浮的愛心",
            tools: "C++, Arduino",
            content: `
>>最後編輯 Mon, May 16, 2022 3:31 PM<br>
>>移植時間 Thu, Dec 18, 2025 09:18 PM
___
<br>

## 實驗目的

透過設計程式碼並使用Tinkercad 網頁版模擬器及Arduino UNO 開發版，做出漂移的心和捲動的字。
<br><br>
## 實驗原理

應用LCD的移位技巧及自建字型，讓LCD顯示漂移的心和捲動的字。
<br><br>
## 實驗材料

**◆透過Tinkercad網頁模擬器線上實作◆**<br>
<br>
◎Arduino UNO 開發版 x1<br>
◎歐姆板 x1<br>
◎可變電阻 330Ω x1<br>
◎電阻 220Ω x1<br>
◎滑動式開關 x1<br>
◎AA電池 1.5V x3<br>
<br>
◎跟你默契好的可愛電腦 x1<br>
<br>
## 實驗步驟

1.在Tinkercad網頁模擬器連接電路<br>
2.在程式編譯區進行程式碼編譯（程式碼在下方↓）<br>
3.確定程式碼無誤，按左上方即可開始模擬<br>
4.紀錄輸出<br>
<br>
### 電路連接完整圖
<img src="https://i.imgur.com/fXUzjER.png" alt="電路連接完整圖" style="width: 50%; display: block; margin: 20px auto;">

#### 電路部分放大
▽下
<img src="https://i.imgur.com/3ZmQx0f.png" alt="電路部分放大 - 下" style="width: 50%; display: block; margin: 20px auto;">

▽上
<img src="https://i.imgur.com/jUi7zsE.png" alt="電路部分放大 - 上" style="width: 50%; display: block; margin: 20px auto;">

### 程式碼（已經過改良，並非為參考文獻內原始程式碼）

\`\`\`clink= c
#include <LiquidCrystal.h>
LiquidCrystal LCD(12,11,10,5,4,3,2);
byte heart[8] = {0b00000,
                 0b01010,
                 0b11111,
                 0b11111,
                 0b01110,
                 0b00100,
                 0b00000,
                 0b00000 };
void setup()
{
  LCD.begin(16,2);
  LCD.createChar(0,heart);
}

void loop()
{ 
  LCD.home();
  LCD.print("I love you baby.");
  LCD.setCursor(8,1);
  LCD.write(byte(0));
  for(int i=0; i<8; i++)
  {
    LCD.scrollDisplayLeft();
    delay(200);
  }
  for(int i=0; i<15; i+=2)
  {
    for(int j=0; j<(15-i); j++)
    {
      LCD.scrollDisplayRight();
      delay(200);
    }
    for(int j=0; j<(15-i-1); j++)
    {
      LCD.scrollDisplayLeft();
      delay(200);
    }
  }
  LCD.clear();
  delay(1000);
}
\`\`\`

## 實驗結果

**◎第一行顯示字元"I love you baby"，第二行顯示愛心圖案。**<br>
* 字元會先往左捲動，再往右捲動（此處放電路圖接上電源的照片，以供參考）
<img src="https://i.imgur.com/yZjiK7q.png" alt="電路圖接上電源的照片" style="width: 50%; display: block; margin: 20px auto;">

**◎觀察調整可變電阻或滑動式開關時，螢幕亮度的變化**
* 滑動式開關開啟，慢慢調整可變電阻（字的亮度變暗）
<img src="https://i.imgur.com/8e9Dwbi.png" alt="字的亮度變暗" style="width: 50%; display: block; margin: 20px auto;">

* 滑動式開關不開，可變電阻維持調整後（字以及螢幕亮度都變暗）
<img src="https://i.imgur.com/nIo3RW2.png" alt="字以及螢幕亮度都變暗" style="width: 50%; display: block; margin: 20px auto;">

* 滑動式開關不開，可變電阻調整回原樣（螢幕亮度維持變暗，字的亮度變亮）
<img src="https://i.imgur.com/zcaOntz.png" alt="螢幕亮度維持變暗，字的亮度變亮" style="width: 50%; display: block; margin: 20px auto;">

* 滑動式開關開啟，可變電阻維持原樣（螢幕亮度變亮，字的亮度維持變亮）
<img src="https://i.imgur.com/igR4ZZ5.png" alt="螢幕亮度變亮，字的亮度維持變亮" style="width: 50%; display: block; margin: 20px auto;">
<br>

## 實驗討論

**運作過程中，LCD不會亮**<br>
我的解決方法：先檢查程式碼，確認程式碼沒有編譯上的錯誤後，再調整電路。<br>
原因是沒有將Arduino的GND接腳接地。<br>

## 實驗文獻

>編者：艾迪諾<br>
>出版日期：2017.01.06<br>
>書名（頁數）：Arduino全能微處理機實習：強效解析（p7-27～p7-30）<br>
>出版社：全華圖書<br> 
            `
        },
        {
            name: "溫度感測器DHT22與ILI9341彩色面板應用",
            tools: "C++, Arduino",
            content: `
>>最後編輯 Sat, Jun 25, 2022 09:09 PM<br>
>>移植時間 Thu, Dec 18, 2025 09:28 PM
___
<br>

## 實驗目的

透過DHT22感測器，配合Arduino UNO 開發版，將溫度與濕度量測結果顯示於ILI9341 2.8吋彩色面板。
<br><br>
## 實驗原理

使用 wokwi 模擬器及 Arduino UNO 開發版，運用DHT22溫溼度感測器並引用函式庫取溫度以及濕度的值，並將傳回的結果顯示於ILI9341 2.8吋彩色面板。
<br><br>
## 實驗材料

**◆透過WOKWI模擬器線上實作◆**<br>
<br>
◎Arduino UNO 開發版 x1<br>
◎ILI9341 2.8吋彩色面板 x1<br>
◎DHT22 x1<br>
<br>
◎跟你默契好的可愛電腦 x1<br>
<br><br>
## 實驗步驟

1.在wokwi模擬器連接電路<br>
2.在Library Manager載入需要的函式庫<br>
2.在程式編譯區進行程式碼編譯（程式碼在下方↓）<br>
3.確定程式碼無誤，即可開始模擬<br>
4.紀錄輸出<br>
<br><br>
### 需要的函式庫
<img src="https://i.imgur.com/vS5pSbK.png" alt="函式庫" style="width: 70%; display: block; margin: 20px auto;">

### 電路連接完整圖
<img src="https://i.imgur.com/u8D9FpP.png" alt="電路連接完整圖" style="width: 50%; display: block; margin: 20px auto;">
<br><br>

### 程式碼以及程式標註（已經過修改，並非為參考文獻內原始程式碼）

\`\`\`clink= c
#include "dht.h"        //載入標頭檔dht.h
#define DHTPIN 2
#define DHTTYPE DHT22

#include "SPI.h"               //載入標頭檔SPI.h
#include "Adafruit_GFX.h"      //載入標頭檔Adafruit_GFX.h
#include "Adafruit_ILI9341.h"  //載入標頭檔Adafruit_ILI9341.h

#define TFT_DC 9
#define TFT_CS 10
Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC);
dht DHT;

#define RED      0xF800        //設定顏色RED
#define YELLOW   0xFFE0        //設定顏色YELLOW
#define WHITE    0xFFFF        //設定顏色WHITE

void setup() {
  tft.begin();
}

void loop() {
  delay(500);
  tft.fillScreen(ILI9341_BLACK);    //讓ILI9341顯示全黑

  
  float t = DHT.temperature;        //由DHT取溫度的值並傳回
  float h = DHT.humidity;           //由DHT取濕度的值並傳回
  
  //在座標(0,90)位置畫一個長240寬65的方形，並設定邊框為黃色
  tft.drawRect(0, 90, 240, 65, YELLOW);

  if(DHT.read(DHTPIN) == DHTLIB_OK){    
    
    //設定顯示溫度、濕度
    tft.setTextColor(ILI9341_WHITE);    //設定為白色
    tft.setTextSize(2);                 //設定字的大小
    tft.setCursor(0,100);               //設定位置座標
    tft.print(" Temp: ");
    tft.print(t);
    tft.println("  C");
    tft.println();
    tft.setTextSize(2);
    tft.print(" Humidity: ");
    tft.print(h);
    tft.println("%");
    tft.println();
    
    //當溫度大於或等於60度（t為第27行由DHT傳回的溫度值）
    if(t >= 60){                        
      tft.println();
      tft.setTextColor(ILI9341_RED);
      tft.setTextSize(2);
      tft.print("Temperature above 60 degrees !");
    }
  }
}
\`\`\`

## 實驗結果

**◎ wokwi實作設計畫面：<b>[Final Home Work - 連結](https://wokwi.com/projects/335428327395295828)</b>**

**◎ 起始畫面**
因為程式碼在loop的第二行顯示全黑，故一開始為黑屏狀態
<img src="https://i.imgur.com/p0dJHN9.png" alt="一開始為黑屏狀態" style="width: 50%; display: block; margin: 20px auto;">

**◎ 當溫度低於60度**
<img src="https://i.imgur.com/rL1d0lX.png" alt="溫度低於60度" style="width: 50%; display: block; margin: 20px auto;">

**◎ 當溫度高於或等於60度**
<img src="https://i.imgur.com/tNuAlAM.png" alt="溫度高於或等於60度" style="width: 50%; display: block; margin: 20px auto;">

## 實驗討論

* **運作過程中，想要改變字體顏色**<br>
我參考了<b>[RGB Color Codes Chart](https://www.rapidtables.com/web/color/RGB_Color.html) </b>中的顏色值的16進制。<br>
* **黃色的外框**<br>
這是整個裡面最麻煩的部分，必須要調整他到最好的位置。 在程式碼第31行寫到說： \`\`\`tft.drawRect(0, 90, 240, 65, YELLOW);\`\`\`
第一個數值為外框位置在x軸位置，第二個數值為外框在y軸位置，第三個數值為外框的寬，第四個數值為外框的高。<br>

<br><br>
## 實驗文獻

>編者：艾迪諾<br>
>出版日期：2017.01.06<br>
>書名（頁數）：Arduino全能微處理機實習：強效解析（p10-18~p10-32）<br>
>出版社：全華圖書<br>
            `
        }
    ]
});
