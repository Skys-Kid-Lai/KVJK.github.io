csData.push({
    id: "csharp-oop",
    title: "物件導向 - 以 C# 實作",
    type: "course",
    meta: "物件導向 | 2022.09~2023.01 | C#",
    items: [
        { 
            name: "WindowsForm 實作", 
            tools: "C#", 
            content: `
>>最後編輯 Sat, Jun 25, 2022 09:09 PM<br>
>>移植時間 Thu, Dec 19, 2025 01:02 AM
___
<br>

## 題目敘述：
1.設計點餐應用程式<br>
2.系統包含5個頁面<br>
&nbsp;&nbsp;&nbsp;&nbsp;(1)登入頁面：帳號為學號，密碼為學號後四碼<br>
&nbsp;&nbsp;&nbsp;&nbsp;(2)主頁面：登入完成後可以看到帳號個人資料-->班級、學號、姓名 <br>
&nbsp;&nbsp;&nbsp;&nbsp;(3)點餐頁面：此頁面需包含品名、數量、金額<br>
&nbsp;&nbsp;&nbsp;&nbsp;(4)訂購完成頁面：包含品名、數量(不可修改)、金額(不可修改) 、訂購人姓名、單號、聯繫電話、訂購時間<br>
&nbsp;&nbsp;&nbsp;&nbsp;(5)訂購紀錄頁面：可透過變數儲存相關訊息，點選按鈕後直接輸出紀錄<br>
<br>
<b>使用技巧：</b><br>
1.分頁<br>
2.List儲存資料<br>
<br><br>

## 方案總管
<img src="https://i.imgur.com/MCM0pwl.png" alt="方案總管介面" style="width: 40%; display: block; margin: 20px auto;">
<br>

&nbsp;&nbsp;&nbsp;&nbsp;1. 登入頁面（Login.cs）<br>
&nbsp;&nbsp;&nbsp;&nbsp;2. 主頁面（MainWelcome.cs）<br>
&nbsp;&nbsp;&nbsp;&nbsp;3. 點餐頁面（OrderForm.cs）<br>
&nbsp;&nbsp;&nbsp;&nbsp;4. 訂購完成頁面（Complete.cs）<br>
&nbsp;&nbsp;&nbsp;&nbsp;5. 訂購紀錄頁面（FinalCheck.cs）<br>
<br><br>

## 登入頁面（Login.cs）
### UI介面設計
<img src="https://i.imgur.com/FpU2csB.png" alt="登入頁面" style="width: 40%; display: block; margin: 20px auto;">
<br>

<b>元件</b><br>
\`\`\`label\`\`\`：顯示"Account："以及"PassWord："<br>
\`\`\`TextBox\`\`\`：輸入帳號密碼，並在程式碼中判斷依照題目指示輸入正確的帳號密碼<br>
\`\`\`Button\`\`\`：點擊後前往主頁面<br>
<br>
<b>Object's Name</b><br>
\`\`\`txt_account\`\`\`：輸入帳號<br>
\`\`\`txt_password\`\`\`：輸入密碼<br>
\`\`\`botton1\`\`\`：登入按鈕（我剛剛才發現沒有改到ㅋㅋㅋ）<br>
<br>

### 程式碼設計（使用註解解釋程式碼）
\`\`\`c=
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _1110832059_FinalExam
{
    public partial class Login : Form
    {
        public Login()
        {
            InitializeComponent();
            //將密碼做防窺，輸入時更換成'●'
            txt_password.PasswordChar = '●'; 
        }
        
        private void button1_Click(object sender, EventArgs e)
        {
            //宣告彈出視窗
            DialogResult dia;
            //在此假設學號：1110832059，密碼：2059
            String t_account = "1110832059";
            String t_password = "2059";
            
            //帳號輸入錯誤或是密碼輸入錯誤，彈出視窗顯示錯誤訊息
            if ((txt_account.Text != t_account) || (txt_password.Text != t_password))
            {
                dia = MessageBox.Show("Your Account or Password is not correct !", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Error);
                //清空使用者輸入的內容
                txt_account.Clear();
                txt_password.Clear();
            }
            //帳號輸入正確訊息
            else
            {
                //彈出視窗顯示登入成功
                dia = MessageBox.Show("Sign in suceesfully !", "Remind from kvjk_2125", MessageBoxButtons.OKCancel, MessageBoxIcon.Information);
                //如果使用者點選彈出視窗的OK
                if (dia == DialogResult.OK)
                {
                    //隱藏登入頁面（Login）
                    this.Hide();
                    //宣告主頁面，並傳送帳號名稱至主頁面
                    MainWelcome stunum = new MainWelcome(txt_account.Text);
                    //顯示主頁面（MainWindow）
                    stunum.ShowDialog();
                    //清空使用者輸入
                    txt_account.Clear();
                    txt_password.Clear();
                }
            }
        }
    }
}
\`\`\`

## 主頁面（MainWindow.cs）
### UI介面設計
<img src="https://i.imgur.com/e71QHhH.png" alt="UI設計介面" style="width: 40%; display: block; margin: 20px auto;">
<br>

<b>元件</b><br>
\`\`\`groupBox\`\`\`：將題目要求顯示的文字集合顯示在裡面<br>
\`\`\`label\`\`\`：顯示題目要求之學號、班級、姓名<br>
\`\`\`Button\`\`\`：選擇登出或是往下點餐<br>
<br>
<b>Object's Name</b><br>
\`\`\`lab_stunum\`\`\`：從登入頁面傳過來的帳號名稱（學號）<br>
\`\`\`btn_logout\`\`\`：登出按鈕<br>
\`\`\`btn_goOrder\`\`\`：前往點餐<br>
<br>

### 程式碼設計（使用註解解釋程式碼）
\`\`\`c=
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _1110832059_FinalExam
{
    public partial class MainWelcome : Form
    {
        public MainWelcome()
        {
            InitializeComponent();
        }
        //創建一個建構式能夠獲取從登入頁面傳送來的字串
        public MainWelcome(string account)
        {
            //接取傳送值的函式一定要加這行程式碼
            InitializeComponent();
            //將顯示帳號（學號）的label接取從登入頁面傳送來的值
            lab_stunum.Text = account;
        }
        
        //前往點餐頁面（MainWindow）的按鈕被點擊
        private void btn_goOrder_Click(object sender, EventArgs e)
        {
            //宣告彈出視窗
            DialogResult dia;
            //彈出視窗顯示是否前往點餐頁面（OrderForm）
            dia = MessageBox.Show("Did you want to order alcohol ? ", "Remind from kvjk_2125", MessageBoxButtons.OKCancel, MessageBoxIcon.Question);
            //如果使用者點選彈出視窗的OK
            if (dia == DialogResult.OK)
            {
                //宣告點餐頁面（OrderForm）
                OrderForm order = new OrderForm();
                //顯示點餐頁面（OrderForm）
                order.Show();
                //關閉主頁面（MainWindow）
                this.Close();
            }
        }
        
        //登出按鈕被點擊
        private void btn_logout_Click(object sender, EventArgs e)
        {
            //宣告彈出視窗
            DialogResult dia;
            //彈出視窗顯示是否登出，並前往登入頁面（Login）
            dia = MessageBox.Show("Did you want to logout ? ", "Remind from kvjk_2125", MessageBoxButtons.OKCancel, MessageBoxIcon.Question);
            if (dia == DialogResult.OK)
            {
                Login back = new Login();
                back.Show();
                this.Close();
            }
        }
    }
}

\`\`\`

## 點餐頁面（OrderForm.cs）
### UI介面設計
<img src="https://i.imgur.com/aqcuPbs.png" alt="方案總管介面" style="width: 40%; display: block; margin: 20px auto;">
<br>

<b>元件</b><br>
\`\`\`TextBox\`\`\`：輸入商品數量。要記得控制輸入的量，如果遇到喜歡開玩笑的老師，就會問你＂我可以買99999999999999999999...＂對就是這樣<br>
\`\`\`label\`\`\`：顯示商品項目。另外因為很懶的關係，直接將設品預設成350元，若是想要不同的價格，可以將商品價格獨自放在一個label，計算數量時，將商品數量的TextBox.Text乘上價格的label.Text。寫作：\`\`\`Toatl = TextBox.Text*label.Text;\`\`\`<br>
\`\`\`Button\`\`\`：確認輸入品項數量正確<br>
<br>
<b>Object's Name</b><br>
\`\`\`txt_marPrice\`\`\`：第一項品項的數量<br>
\`\`\`txt_beepPrice\`\`\`：第二項品項的數量<br>
\`\`\`txt_sprPrice\`\`\`：第三項品項的數量<br>
\`\`\`btn_check\`\`\`：確認輸入品項是否正確<br>
<br>

### 程式碼設計（使用註解解釋程式碼）
\`\`\`c=
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _1110832059_FinalExam
{
    public partial class OrderForm : Form
    {
        string txttotal;
        int price = 0;
        public OrderForm()
        {
            InitializeComponent();
        }

        private void btn_check_Click(object sender, EventArgs e)
        {
            int mar = 0, beep = 0, spr = 0;
            //以字串型態儲存數量
            string marPrice = txt_marPrice.Text,
                   beepPrice = txt_beepPrice.Text,
                   sprPrice = txt_sprPrice.Text;

            //尋找數量可能出現的錯誤，文字類型的錯誤
            //三個選項空格Trim
            if (marPrice.Trim() == "" || beepPrice.Trim() == "" || sprPrice.Trim() == "")
            {
                DialogResult dia;
                dia = MessageBox.Show("You have no edit your choose ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txt_marPrice.Text = "0";
                txt_beepPrice.Text = "0";
                txt_sprPrice.Text = "0";
            }
            //輸入不是數字
            else if(marPrice.All(char.IsDigit) != true || beepPrice.All(char.IsDigit) != true || sprPrice.All(char.IsDigit) != true)
            {
                DialogResult dia;
                dia = MessageBox.Show("You escribe somthing is not a number ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txt_marPrice.Text = "0";
                txt_beepPrice.Text = "0";
                txt_sprPrice.Text = "0";
            }
            //沒有以上錯誤
            else
            {
                //以整數型態儲存數量
                mar = Int32.Parse(marPrice);
                beep = Int32.Parse(beepPrice);
                spr = Int32.Parse(sprPrice);
                //數字類型的錯誤
                //都沒有變動
                if (mar == 0 && beep == 0 && spr == 0)
                {
                    DialogResult dia;
                    dia = MessageBox.Show("You have no edit your choose ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    txt_marPrice.Text = "0";
                    txt_beepPrice.Text = "0";
                    txt_sprPrice.Text = "0";
                }
                //負數
                else if (mar < 0 || beep < 0 || spr < 0)
                {
                    DialogResult dia;
                    dia = MessageBox.Show("Here have something smaller than 0 ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
                //大於5
                else if (mar > 5 || beep > 5 || spr > 5)
                {
                    DialogResult dia;
                    dia = MessageBox.Show("Don't bigger than 5 ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }

                //送出到下個畫面
                else
                {
                    if (mar != 0)
                    {
                        txttotal += lab_mar.Text + "          quantity : " + mar + "  price : " + mar * 350 + "\r\n";
                    }
                    if (beep != 0)
                    {
                        txttotal += lab_beep.Text + "           quantity : " + beep + "  price : " + beep * 350 + "\r\n";
                    }
                    if (spr != 0)
                    {
                        txttotal += lab_spr.Text + "  quantity : " + spr + "  price : " + spr * 350 + "\r\n";
                    }
                    txttotal += "\r\nTotal : " + (mar * 350 + beep * 350 + spr * 350) + " dollars\r\n";
                    DialogResult dia;
                    dia = MessageBox.Show("Here check your order form : \n" + txttotal, "Remind from kvjk_2125", MessageBoxButtons.OKCancel, MessageBoxIcon.Question);
                    if (dia == DialogResult.OK)
                    {
                        
                        this.Close();
                        Complete sucess = new Complete(txttotal);
                        sucess.Show();
                        txt_marPrice.Text = "0";
                        txt_beepPrice.Text = "0";
                        txt_sprPrice.Text = "0";
                    }
                    txttotal = "";
                }
            }
        }
    }
}

\`\`\`
## 訂購完成頁面（Complete.cs）
### UI介面設計
<img src="https://i.imgur.com/kLgHAKB.png" alt="方案總管介面" style="width: 40%; display: block; margin: 20px auto;">
<br>

<b>元件</b><br>
\`\`\`groupBox\`\`\`：將使用者的訂單內容顯示在此<br>
\`\`\`label\`\`\`：顯示訂單內容、時間，提示輸入。題目有說不能讓使用者更改內容，因此這邊直接使用label顯示訂單資訊<br>
\`\`\`TextBox\`\`\`：輸入姓名、電話<br>
\`\`\`Button\`\`\`：按鈕確認輸入，並前往訂購紀錄<br>
<br>
<b>Object's Name</b><br>
\`\`\`lab_value\`\`\`：單號。這裡是用時間當單號，記錄到毫秒<br>
\`\`\`lab_order\`\`\`：將前一頁傳過來的訂單內容傳到這裡<br>
\`\`\`lab_timer\`\`\`：顯示時間（停止狀態）<br>
\`\`\`txt_name\`\`\`：輸入訂購人姓名<br>
\`\`\`txt_phone\`\`\`：輸入訂購人電話。在程式碼中，判斷電話號碼是否09開頭，且十位數<br>
\`\`\`button1\`\`\`：又忘記換名稱了...點擊按鈕前往訂購紀錄頁面<br>
<br>

### 程式碼設計（使用註解解釋程式碼）
\`\`\`c=
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _1110832059_FinalExam
{
    public partial class Complete : Form
    {
        string text_form;
        public Complete()
        {
            InitializeComponent();
        }
        public Complete(string order)
        {
            InitializeComponent();
            lab_order.Text = order;
        }
        private void Complete_Load(object sender, EventArgs e)
        {
            //單號設定，因為時間紀錄單位越小，越不容易跟其他筆資料衝撞，所以這裡使用時間當單號
            lab_value.Text = DateTime.Now.ToString("yyyyMMddHHmmssff");
            //時間
            lab_timer.Text = DateTime.Now.ToString("yyyy/MM/dd/ HH:mm:ss");
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string phone = txt_phone.Text;
            //判斷是否有尚未填寫的個人資料
            if(txt_name.Text.Trim() == "" || txt_phone.Text.Trim() == "")
            {
                DialogResult dia;
                dia = MessageBox.Show("Something you're not edit it ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            //判斷電話號碼是否填寫錯誤(>10 or is not start by 09)
            else if(txt_phone.Text.Length != 10 || phone.Substring(0, 2) != "09")
            {
                DialogResult dia;
                dia = MessageBox.Show("Your phone number is not correct ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            //判斷電話欄位是否輸入的是數字
            else if(phone.All(char.IsDigit) != true)
            {
                DialogResult dia;
                dia = MessageBox.Show("You escribe phone number is not a number ! ", "Remind from kvjk_2125", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            else
            {
                text_form = "單號：" + lab_value.Text +
                            "\r\n訂購時間：" + lab_timer.Text +
                            "\r\n訂購人：" + txt_name.Text +
                            "\r\n連絡電話：" + txt_phone.Text +
                            "\r\n\r\n訂購內容：\r\n" + lab_order.Text;
                DialogResult dia;
                dia = MessageBox.Show("Here check your order form : \n" + 
                                        "單號：" + lab_value.Text +
                                        "\n訂購時間：" + lab_timer.Text +
                                        "\n訂購人：" + txt_name.Text +
                                        "\n連絡電話：" + txt_phone.Text +
                                        "\n\n訂購內容：\n" + lab_order.Text, "Remind from kvjk_2125", MessageBoxButtons.OKCancel, MessageBoxIcon.Information);
                if (dia == DialogResult.OK)
                {
                    //將資料儲存到訂單紀錄的Class
                    savedata.orderlist.Add(text_form);
                    FinalCheck review = new FinalCheck(text_form);
                    review.Show();
                    //禁止再更改TextBox欄位
                    txt_name.ReadOnly = true;
                    txt_phone.ReadOnly = true;
                    this.Close();
                }
            }
        }
    }
}

\`\`\`

## 訂購紀錄頁面（FinalCheck.cs）
### UI介面設計
<img src="https://i.imgur.com/WvQH5Y0.png" alt="方案總管介面" style="width: 40%; display: block; margin: 20px auto;">
<br>

<b>元件</b><br>
\`\`\`Button\`\`\`：選擇繼續登入或是登出整個頁面<br>
\`\`\`label\`\`\`：顯示訂單紀錄<br>
<br>
<b>Object's Name</b><br>
\`\`\`lab_view\`\`\`：將記錄存在另外的class裡面，並顯示在這裡<br>
\`\`\`btn_ToOrder\`\`\`：返回點餐頁面<br>
\`\`\`button1\`\`\`：我又忘記改名稱了ㅋㅋ，登出整個頁面並返回登入頁面<br>
<br>

### 程式碼設計（使用註解解釋程式碼）
\`\`\`c=
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _1110832059_FinalExam
{
    public partial class FinalCheck : Form
    {
        //設定一個店數，可以接收訂單內容並儲存到紀錄的Class
        public static string view;
        public FinalCheck()
        {
            InitializeComponent();
        }
        public FinalCheck(string text)
        {
            //接取訂單內容
            InitializeComponent();
            view = "\r\n" + text;
        }
        private void FinalCheck_Load(object sender, EventArgs e)
        {
            //顯示訂單內容，使用Count()計算List資料數目
            for(int i = 0; i < savedata.orderlist.Count(); i ++)
                //顯示在lab_view內
                lab_view.Text += savedata.orderlist[i] + "\r\n======================================\r\n";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Login login = new Login();
            login.Show();
            this.Close();
        }

        private void btn_ToOrder_Click(object sender, EventArgs e)
        {
            OrderForm backTo = new OrderForm();
            backTo.Show();
            this.Close();
        }
    }
}

\`\`\`
## 資料儲存（非資料庫）
### 程式碼設計
\`\`\`c=
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1110832059_FinalExam
{
    internal class savedata
    {
        //對就是一行
        //另建在一個class裡面，以免其他檔案關閉時，資料會一起掰掰
        //如果需要資料庫就是另一回事了
        public static List<string> orderlist = new List<string>(); 
    }
}
\`\`\`

## 更改過程

<b>頁面變數.Show()</b><br>
本來寫成\`\`\`頁面變數.ShowDialog()\`\`\`，但有時在Close()之後，無法關閉頁面。<br>
<br>
<b>TextBox</b><br>
在設計UI介面時，要將MultiLine關閉，以免使用者按下Enter件發生換行。<br>
            `
        }
    ]
});