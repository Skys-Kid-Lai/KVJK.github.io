csData.push({
    id: "leetccode use java",
    title: "Leetcode 練習題目集（Java）",
    type: "course",
    meta: "演算法 | 2024.03~2024.06 | Java",
    items: [
        {
            name: "Leetcode 189. Rotate Array",
            tools: "Java",
            content: `
>>最後編輯 Fri, Mar 29, 2024 04:00 PM<br>
>>移植時間 Fri, Dec 19, 2025 09:47 PM
___
<br>

## 題目
### 說明 Description
原文：<br>
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.<br>

翻譯：<br>
給一個整數陣列nums，將陣列中的元素循環右移 k 個位置，其中 k 非負數。<br>
<br>

### 範例 Example
Example 1:<br>
> Input: nums = [1,2,3,4,5,6,7], k = 3<br>
Output: [5,6,7,1,2,3,4]<br>
<br>
>Explanation:<br>
rotate 1 steps to the right: [7,1,2,3,4,5,6]<br>
rotate 2 steps to the right: [6,7,1,2,3,4,5]<br>
rotate 3 steps to the right: [5,6,7,1,2,3,4]<br>
<br>
Example 2:<br>
>Input: nums = [-1,-100,3,99], k = 2<br>
Output: [3,99,-1,-100]<br>
<br>
>Explanation: <br>
rotate 1 steps to the right: [99,-1,-100,3]<br>
rotate 2 steps to the right: [3,99,-1,-100]<br>
<br>

### 限制條件 Constraints
\`\`\`1 <= nums.length <= 105\`\`\`<br>
\`\`\`-231 <= nums[i] <= 231 - 1\`\`\`<br>
\`\`\`0 <= k <= 105\`\`\`<br>
<br>

## 解題
### 思路 Intuition/Approach
<b>Step1.</b><br> 如果k=3，則陣列內nums[0]的執會成為輸出陣列的[3]<br>
<b>Step2.</b><br> 如下圖推算<br>
<img src="https://hackmd.io/_uploads/BJQKdgEyC.png" alt="189 Step2" style="width: 70%; display: block; margin: 20px auto;">
<br>
<b>Step3.</b><br> 更改移動位置時，可以發現 \`\`\`(k+原位置)%nums.length\`\`\` 滿足移動後位置的條件<br>
<br>

### 程式碼 Code（加註解）
\`\`\`clink=java
class Solution {
    public void rotate(int[] nums, int k) {
        //建立一個空陣列儲存結果
        int cut[] = new int[nums.length];
        //把題目提供的陣列提供到新陣列的位置
        for(int i = 0; i < nums.length; i++)
            cut[(k + i) % nums.length] = nums[i];
        //把移動過的新陣列放回原本的陣列
        for(int i = 0; i < nums.length; i ++)
            nums[i] = cut[i];
    }
}
\`\`\`
            `
        },
        {
            name: "Leetcode 344. Reverse String",
            tools: "Java",
            content: `
>>最後編輯 SAT, May 18, 2024 05:40 PM<br>
>>移植時間 Fri, Dec 19, 2025 09:54 PM
___
<br>

## 題目
### 說明 Description
原文：<br>
Write a function that reverses a string. The input string is given as an array of characters \`\`\`s\`\`\`.<br>
You must do this by modifying the input array in-place with \`\`\`O(1)\`\`\` extra memory.<br>

翻譯：<br>
寫一個函數，其作用是將輸入的字串反轉過來。輸入字串以字元陣列s的形式給出。<br>
不要給另外的陣列分配額外的空間，你必須原地修改輸入陣列、使用O(1)的額外空間解決這個問題。<br>
<br>

### 範例 Example
Example 1:<br>
>Input: s = ["h","e","l","l","o"]<br>
Output: ["o","l","l","e","h"]<br>
<br>
Example 2:<br>
>Input: s = ["H","a","n","n","a","h"]<br>
Output: ["h","a","n","n","a","H"]<br>
<br>

### 限制條件 Constraints
-\`\`\`1 <= s.length <= 10^5\`\`\`<br>
-\`\`\`s[i]\`\`\`is a printable ascii character.<br>
<br>

## 解題
### 思路 Intuition/Approach
<b>Step1.</b><br>
<img src="https://hackmd.io/_uploads/Hkq7Zg9mR.png" alt="344 Step1" style="width: 70%; display: block; margin: 20px auto;">
<br>
<b>Step2.</b><br> for 迴圈前，設定一個存放\`\`\`s.length\`\`\`的變數：<br>
\`\`\`int lengths = s.length\`\`\`<br>
<br>
<b>Step3.</b><br> for迴圈中，設定一個變數\`\`\`char boxtemp = s[i]\`\`\`，存放左邊要被交換的值;<br>
將左邊要被交換的＂位置＂放入右邊要交換的值\`\`\`s[i] = s[--lengths]\`\`\`;<br>
將右邊要被交換的＂位置＂放入存放在\`\`\`boxtemp\`\`\`中的值<br>
<br>

### 程式碼 Code（加註解）
\`\`\`clink=
class Solution {
    public void reverseString(char[] s) {
        int lengths = s.length; //建立長度變數
        //交換
        for(int i = 0; i <= (s.length-1) / 2; i++)
        {
            char boxtemp = s[i];    //暫時存放左邊要被交換的值
            s[i] = s[--lengths];    //左邊要被交換的'位置'存放右邊要交換的值
            s[lengths] = boxtemp;   //右邊要被交換的'位置'存放左邊原本的值
        }
    }
}
\`\`\`
            `
        },
        {
            name: "Leetcode 498. Diagonal Traverse",
            tools: "Java",
            content: `
>>最後編輯 Fri, Mar 29, 2024 04:00 PM<br>
>>移植時間 Fri, Dec 19, 2025 10:17 PM
___
<br>

## 題目
### 說明 Description
原文：<br>
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.<br>
翻譯：<br>
給一個 m x n 的矩陣mat，回一個以對角線遍歷，並包含該陣列所有元素的陣列。<br>
<br>

### 範例 Example
Example 1:<br>
<img src="https://hackmd.io/_uploads/BkSEoxEJ0.png" alt="498 Example 1" style="width: 50%; display: block; margin: 20px auto;">
<br>
> Input: mat = [[1,2,3],[4,5,6],[7,8,9]]<br>
Output: [1,2,4,7,5,3,6,8,9]<br>
<br>
Example 2:<br>
>Input: mat = [[1,2],[3,4]]<br>
Output: [1,2,3,4]<br>
<br>

### 限制條件 Constraints
-\`\`\`m == mat.length\`\`\`<br>
-\`\`\`n == mat[i].length\`\`\`<br>
-\`\`\`1 <= m, n <= 104\`\`\`<br>
-\`\`\`1 <= m * n <= 104\`\`\`<br>
-\`\`\`-105 <= mat[i][j] <= 105\`\`\`<br>
<br>

## 解題
### 思路 Intuition/Approach
以Example 1做解釋：<br>
<b>Step1.</b><br>
<img src="https://hackmd.io/_uploads/HyY0ilV1R.png" alt="498 先標注出xy軸" style="width: 50%; display: block; margin: 20px auto;">
<br>
<br>
<b>Step2.</b><br>
記下輸出時的xy順序以及走訪方向：<br>
-第1次對角線走訪：右上\`\`\`(0,0)\`\`\`<br>
-第2次對角線走訪：左下\`\`\`(0,1)(1,0)\`\`\`<br>
-第3次對角線走訪：右上\`\`\`(2,0)(1,1)(0,2)\`\`\`<br>
-第4次對角線走訪：左下\`\`\`(1,2)(2,1)\`\`\` <br>
-第5次對角線走訪：右上\`\`\`(2,2)\`\`\`<br>
<br>
<b>Step3.</b><br>
發現在第3次時，x走訪順序為2 --> 1 --> 0 由大到小；<br>
而第2、4次時，x走訪順序為0 --> 1 --> 2 由小到大。<br>
建立一個計次變數\`\`\`count = 1\`\`\`，在奇數次數時，反轉陣列再儲存。<br>
<br>
<b>Step4.</b><br> 要創建兩個ArrayList：<br>
一個用作走訪對角線，並進行判斷反轉；<br>一個用作儲存可輸出的結果。<br>
<br>
<b>Step5.</b><br>
因為Step3.的'拿取後反轉'，可統一走訪方式為'右上至左下'。<br>
每次走訪路線均為\`\`\`(++, --)\`\`\`。<br>
<br>
<b>Step6.</b><br>
建立\`\`\`int x = 0\`\`\`以及\`\`\`int y = 0\`\`\`：<br>
x會累加至row走訪完，<br>
y會計算至col走訪完。<br>
建立\`\`\`int i = x\`\`\`以及\`\`\`int j = y\`\`\`在走訪迴圈內：<br>
用於計算被統一的走訪方式，寫作\`\`\`i++\`\`\`以及\`\`\`j--\`\`\`。<br>
當\`\`\`y > col\`\`\`時，即 x不會再出現0，<br>
於是\`\`\`x++\`\`\`，且\`\`\`y = col\`\`\`並繼續。直到\`\`\`x >= row\`\`\`且\`\`\`y >= col\`\`\`。<br>
<br>

### 程式碼 Code（加註解）
\`\`\`clink=java
class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        ArrayList<Integer> list = new ArrayList<>();    //用來存放最後結果的陣列
        int row = mat.length-1; //row
        int col = mat[0].length-1;  //col
        int x = 0, y = 0, count = 1;
        while(x<=row && y<=col){
            int i = x;
            int j = y;
            //在迴圈內建立一個新的ArrayList，在新一輪的xy中，用來遇到x為0時reverse
            ArrayList<Integer> get = new ArrayList<>();
            while(i>=0 && i<=row && j>=0){
                get.add(mat[i][j]); //加入陣列
                //向左上移動
                i++;    //向右
                j--;    //向上
            }
            //如果是在第奇數次數走訪，則反轉該次陣列
            if(count%2 != 0){
                Collections.reverse(get);
            }
            
            list.addAll(get);
            count++;    //次數++
            y++;    
            //在y大於col時，表示x不會再是0
            if(y>col){
                x++;    //x必須+1
                y = col;    //y最大就是col
            }
        }
        //沒有在Leetcode、沒有另外用class，可以用這個直接輸出
        //System.out.println(list);
        
        //Leetcode因為另外用了class，所以必須return相同型態的變數
        //建立一個與一開始傳入的陣列相同的變數，並以該陣列回傳
        int [] ans = new int[(row+1)*(col+1)];
        int size = 0;
        for(int i: list){
            ans[size++] = i;
        }
        //System.out.println("the output about that mat do Diagonal Traverse : \n" + ans) ;
        return ans;
    }
}
\`\`\`
            `
        },
        {
            name: "Leetcode 509. Fibonacci Number",
            tools: "Java",
            content: `
>>最後編輯 Sat, May 18, 2024 06:10 PM<br>
>>移植時間 Fri, Dec 19, 2025 10:27 PM
___
<br>

## 題目
### 說明 Description
原文：<br>
The Fibonacci numbers, commonly denoted \`\`\`F(n)\`\`\` form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from \`\`\`0\`\`\` and \`\`\`1\`\`\`. <br>
That is,<br>
\`\`\`
F(0) = 0, F(1) = 1<br>
F(n) = F(n - 1) + F(n - 2)，for n > 1<br>
\`\`\`
Given \`\`\`n\`\`\`, calculate \`\`\`F(n)\`\`\`.<br>
<br>
翻譯：<br>
斐波那契數（通常以\`\`\`F(n)\`\`\`表示）所形成的數列稱為 斐波那契數列。數列由\`\`\`0\`\`\`和\`\`\`1\`\`\`開始，後面的每一項數字都是前面兩個數字的和。<br>
也就是：<br>
\`\`\`
F(0) = 0, F(1) = 1<br>
F(n) = F(n - 1) + F(n - 2)，其中 n > 1<br>
\`\`\`
給定\`\`\`n\`\`\`，請計算\`\`\`F(n)\`\`\`。<br>
<br>

### 範例 Example
Example 1:<br>
> Input: n = 2<br>
Output: 1<br>
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.<br>
<br>
Example 2:<br>
>Input: n = 3<br>
Output: 2<br>
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.<br>
<br>
Example 3:<br>
>Input: n = 4<br>
Output: 3<br>
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.<br>
<br>

### 限制條件 Constraints
\`\`\`0 <= n <= 30\`\`\`<br>
<br>

## 解題
### 思路 Intuition/Approach
<b>Step1.</b><br>
題目中指出：\`\`\`F(0) = 0, F(1) = 1\`\`\`<br>可知，n=0時，輸出0；n=1時，輸出1。<br>
因此建立\`\`\`if(n <= 1)\`\`\`時，回傳n。<br>
<br>
<b>Step2.</b><br> 直接使用題目中的公式：\`\`\`F(n) = F(n - 1) + F(n - 2)\`\`\`<br>
建立公式中陣列F，並設定其長度為 n+1。<br>
<br>
<b>Step3.</b><br> 
設定\`\`\`F[0]\`\`\`及\`\`\`F[1]\`\`\`為1，並設定for迴圈從2開始\`\`\`for(int i = 2; i <= n; i++)\`\`\`，並在迴圈中放入公式\`\`\`F[i] = F[i-1] + F[i-2];\`\`\`。<br>
<br>
<b>Step4.</b><br> 
最終回傳F[n-1]。<br>
<br>

### 程式碼 Code（加註解）
\`\`\`clink=
class Solution {
    public int fib(int n) {
        //確認n是否小於或等於1
        if(n <= 1)
            return n;
        //建立一變數，為n長度+1
        int[] F = new int[n+1];

        //設定好'從0開始的'前兩位
        F[0] = 1;
        F[1] = 1;
        //依題目提供之公式進行計算
        for(int i = 2; i <= n; i++)
            F[i] = F[i-1] + F[i-2];
        
        //返回最終值
        return F[n-1];
    }
}
\`\`\`
            `
        },
        {
            name: "Leetcode 707. Design Linked List",
            tools: "Java",
            content: `
>>最後編輯 Fri, Mar 29, 2024 10:07 PM<br>
>>移植時間 Fri, Dec 19, 2025 10:56 PM
___
<br>

## 題目
### 說明 Description
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.<br>
A node in a singly linked list should have two attributes: \`\`\`val\`\`\` and \`\`\`next\`\`\`. \`\`\`val\`\`\` is the value of the current node, and \`\`\`next\`\`\` is a pointer/reference to the next node.<br>
If you want to use the doubly linked list, you will need one more attribute \`\`\`prev\`\`\` to indicate the previous node in the linked list. Assume all nodes in the linked list are **0-indexed**.<br>
<br>
Implement the \`\`\`MyLinkedList\`\`\` class:<br>
-\`\`\`MyLinkedList()\`\`\` Initializes the \`\`\`MyLinkedList\`\`\` object.<br>
-\`\`\`int get(int index)\`\`\` Get the value of the \`\`\`index th\`\`\` node in the linked list. If the index is invalid, return \`\`\`-1\`\`\`.<br>
-\`\`\`void addAtHead(int val)\`\`\` Add a node of value \`\`\`val\`\`\` before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.<br>
-\`\`\`void addAtTail(int val)\`\`\` Append a node of value \`\`\`val\`\`\` as the last element of the linked list.<br>
-\`\`\`void addAtIndex(int index, int val)\`\`\` Add a node of value \`\`\`val\`\`\` before the \`\`\`index th\`\`\` node in the linked list. If \`\`\`index\`\`\` equals the length of the linked list, the node will be appended to the end of the linked list. If \`\`\`index\`\`\` is greater than the length, the node **will not be inserted**.<br>
-\`\`\`void deleteAtIndex(int index)\`\`\` Delete the \`\`\`index th\`\`\` node in the linked list, if the index is valid.<br>
<br>

### 範例 Example
Example 1:<br>
> Input<br>
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]<br>
[[], [1], [3], [1, 2], [1], [1], [1]]<br>
Output<br>
[null, null, null, null, 2, null, 3]<br>
<br>
>Explanation<br>
MyLinkedList myLinkedList = new MyLinkedList();<br>
myLinkedList.addAtHead(1);<br>
myLinkedList.addAtTail(3);<br>
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3<br>
myLinkedList.get(1);              // return 2<br>
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3<br>
myLinkedList.get(1);              // return 3<br>
<br>

### 限制條件 Constraints
-\`\`\`0 <= index, val <= 1000\`\`\`<br>
-Please do not use the built-in LinkedList library.<br>
-At most 2000 calls will be made to \`\`\`get\`\`\`, \`\`\`addAtHead\`\`\`, \`\`\`addAtTail\`\`\`, \`\`\`addAtIndex\`\`\` and \`\`\`deleteAtIndex\`\`\`.<br>
<br>

## 解題
### 思路 Intuition/Approach
以Example 1做解釋：<br>
<b>Step1.</b><br>
先建立一個\`\`\`class Node\`\`\`，其中建立\`\`\`val\`\`\`存放值，\`\`\`next\`\`\`指向下一個node<br>
<br>
<b>Step2.</b><br>
在\`\`\`MyLinkedList\`\`\`中，建立一個空指標\`\`\`Node head = null\`\`\`，以及一個變數紀錄資料長度\`\`\`int bruh = 0\`\`\`<br>
<br>
<b>Step3.</b>整理函式內容<br>
<b>MyLinkedList()</b>：初始化。<br>
<b>get(index)</b>：<br>
先判斷index是否有效（是否超出長度，或是否小於0）\`\`\`index >= bruh || index < 0\`\`\`，否則回傳\`\`\`-1\`\`\`。<br>
有效則建立一個新節點\`\`\`Node headtmp = head\`\`\`，在執行\`\`\`index\`\`\`次內，指向\`\`\`next\`\`\`，在最後回傳值。<br>
<b>addAtHead(val)</b>：<br>
建立一個新節點\`\`\`Node veHead = new Node(val)\`\`\`，將\`\`\`veHead.next\`\`\`指向\`\`\`head\`\`\`，再把\`\`\`head\`\`\`指向\`\`\`vehead\`\`\`，這樣就把新節點放入最前面了。<br>
在最後長度記得加1\`\`\`bruh++\`\`\`。<br>
<b>addAtTail(val)</b>：<br>
先判斷head是否為空（\`\`\`head == null ?\`\`\`）。<br>若為空的話，直接將\`\`\`val\`\`\`加入list即可（\`\`\`head = new Node(val)\`\`\`）；<br>
若不為空，則建立一個指向\`\`\`head\`\`\`的新節點\`\`\`Node headtmp = head\`\`\`。直到\`\`\`next\`\`\`為空(\`\`\`null\`\`\`)之前，將新建的node指向\`\`\`next\`\`\`。<br>最後一個\`\`\`next\`\`\`指向\`\`\`val\`\`\`使其成為最後一個元素。<br>
在最後長度記得加1\`\`\`bruh++\`\`\`。<br>
<b>addAtIndex(index, val)</b>：有點亂，我用寫的。<br>
<img src="https://hackmd.io/_uploads/ByZ6dS410.jpg" alt="707 addAtIndex" style="width: 50%; display: block; margin: 20px auto;">
<br>
<b>addAtDelete(index)</b>：<br>
先判斷index是否有效（是否超出長度，或是否小於0）\`\`\`index >= bruh || index < 0\`\`\`，<br>
有效的話，建立一個指向\`\`\`head\`\`\`的新節點\`\`\`Node current = head\`\`\`，在建立一個指向空\`\`\`null\`\`\`的新節點\`\`\`Node previous = null\`\`\`。<br>
在執行index次內，指向\`\`\`next\`\`\`。<br>結束後，若\`\`\`previous == null\`\`\`，則將\`\`\`head\`\`\`指向\`\`\`next\`\`\`；若\`\`\`previous!=null\`\`\`，則略過\`\`\`current\`\`\`，讓\`\`\`previous.next\`\`\`指向\`\`\`current.next\`\`\`，即刪除\`\`\`current\`\`\`。<br>
在最後長度記得減1\`\`\`bruh--\`\`\`。<br>
<br>

### 程式碼 Code（加註解）
\`\`\`clink=java
class MyLinkedList {
    Node head = null;   //建立空指標
    int bruh = 0;   //這個用來記錄長度
    
    //初始化
    public MyLinkedList() {
    }
    
    //取得下標為index的node的值。無效則回傳-1。
    public int get(int index) {
        //判斷是否有效
        if(index < 0 || index >= bruh)
            return -1;
        //建立指向head的node
        Node headtmp = head;
        //在index次數內，指向next
        for(int i = 0;i<index;i++)
           headtmp = headtmp.next;
        //如果不是空值，就回傳值
        return headtmp != null ? headtmp.val : 0; 
    }
    
    //將一個值為val的node插入第一個元素之前(vefore the first element)，成為linked list第一個node
    public void addAtHead(int val) {
        Node vehead = new Node(val);    //建立新的node
        vehead.next = head; //新node的下一個指向head
        head = vehead;  //head指向新node，讓新node成為first element
        bruh++;
    }
    
    //將一個值為val的node追加到linkedlist，成為最後一個元素(as the last element)
    public void addAtTail(int val) {
        //判斷head是不是null
        if(head == null){
            head = new Node(val);   //是空指標的話，就追加val
        }else{
           Node headtmp = head; //建立新node指向head
           while(headtmp.next != null) //直到next為空指標(null)之前
             headtmp = headtmp.next;    //將新建的node指向next
            headtmp.next = new Node(val);   //並成為val
        }
        bruh++; //長度記得++
    }
    
    //將一個值為val的node插入到下標為index的node前
    //如果index等於linked list的長度，該node會被追加到linked list的末端。
    //如果index大於linked list的長度，該node不會被寫入(will not be inserted)。
    public void addAtIndex(int index, int val) {
        if(index == bruh){
            addAtTail(val); //追加到末端
        }else if(index > bruh){
            return; //不寫入
        }else{
            Node veNode = new Node(val);
            if(head == null ){
                //如果head為空
                head = veNode;  //head指向新node
            }else if(index == 0){
                //如果index為0
                veNode.next = head; //新node的next指向head
                head = veNode;   //head指向新node
            }else{
                //建立分別指向head和null的node
                Node current = head;
                Node previous = null;
                //在index次數內
                for(int i = 0;i<index;i++){
                    previous = current; 
                    current = current.next; //指向next
                }
                veNode.next = current;  //新node的next指向最後
                previous.next = veNode; //指向新節點
            }
            bruh++; //長度記得++
        }
    }
    
    //如果下標有效(if the index is valid)，刪除表中下標為index的node
    public void deleteAtIndex(int index) {
        //判斷是否有效
        if(index < 0 || index >= bruh )
            return;
        //建立分別指向head和null的node
        Node current = head;
        Node previous = null;
        //在index次數內
        for(int i = 0;i<index;i++){
            previous = current;
            current = current.next; //指向next
        }
        if(previous == null){
            //將head指向next
            head = head.next;
        }else {
            //略過current，刪除
            previous.next = current.next;
        }
        bruh--; //長度記得--
    }
}

class Node{
    //題目說要叫做val跟next
    int val;
    Node next = null;
    public Node(int val){
        this.val = val;
    }
    public Node(int val, Node next){
        this.val = val;
        this.next = next;
    }
}
\`\`\` 
            `
        },
        {
            name: "Leetcode 860. Lemonade Change",
            tools: "Java",
            content: `
>>最後編輯 Sat, May 18, 2024 10:30 PM<br>
>>移植時間 Sat, Dec 20, 2025 03:15 AM
___
<br>

## 題目
### 說明 Description
EN：<br>
At a lemonade stand, each lemonade costs \`\`\`$5\`\`\`. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a \`\`\`$5\`\`\`, \`\`\`$10\`\`\`, or \`\`\`$20\`\`\` bill. You must provide the correct change to each customer so that the net transaction is that the customer pays \`\`\`$5\`\`\`.<br>
<br>
Note that you do not have any change in hand at first.<br>
<br>
Given an integer array \`\`\`bills\`\`\` where \`\`\`bills[i]\`\`\` is the bill the \`\`\`ith\`\`\` customer pays, return \`\`\`true\`\`\` if you can provide every customer with the correct change, or \`\`\`false\`\`\` otherwise.<br>
<br>
繁中：<br>
在檸檬水攤上，每一杯檸檬水的售價為\`\`\`5\`\`\`美元。顧客排隊購買你的產品，（按帳單\`\`\`bills\`\`\`支付的順序）一次購買一杯。<br>
每位顧客只買一杯檸檬水，然後向你付\`\`\`5\`\`\`美元、\`\`\`10\`\`\`美元或\`\`\`20\`\`\`美元。你必須給每個顧客正確找零，這意味著淨交易是每位顧客向你支付\`\`\`5\`\`\`美元。<br>
<br>
注意，一開始你手邊沒有任何零錢。
<br>
給你一個整數陣列\`\`\`bills\`\`\`，其中\`\`\`bills[i]\`\`\`是第\`\`\`i\`\`\`位顧客付的帳，如果你能給每位顧客正確找零，回傳\`\`\`truw\`\`\`，否則回傳\`\`\`false\`\`\`。<br>
<br>

### 範例 Example
Example 1:<br>
> Input: bills = [5,5,5,10,20]<br>
Output: true<br>
Explanation: <br>
From the first 3 customers, we collect three $5 bills in order.<br>
From the fourth customer, we collect a $10 bill and give back a $5.<br>
From the fifth customer, we give a $10 bill and a $5 bill.<br>
Since all customers got correct change, we output true.<br>
<br>
Example 2:<br>
>Input: bills = [5,5,10,10,20]<br>
Output: false<br>
Explanation: <br>
From the first two customers in order, we collect two $5 bills.<br>
For the next two customers in order, we collect a $10 bill and give back a $5 bill.<br>
For the last customer, we can not give the change of $15 back because we only have two $10 bills.<br>
Since not every customer received the correct change, the answer is false.<br>
<br>

### 限制條件 Constraints
\`\`\`1 <= bills.length <= 105\`\`\`<br>
\`\`\`bills[i]\`\`\` is either \`\`\`5\`\`\`, \`\`\`10\`\`\`, or \`\`\`20\`\`\`.<br>
<br>

## 解題
### 思路 Intuition/Approach

<b>Step1.</b><br>
建立變數\`\`\`coin5\`\`\`和\`\`\`coin10\`\`\`紀錄手中擁有的零錢，初始設定為0<br>
<br>
<b>Step2.</b><br>
建立for迴圈，設定為\`\`\`bills\`\`\`長度的次數<br>
<br>
<b>Step3.</b><br>
若收到5元，則\`\`\`coin5++\`\`\`；<br><br>若收到10元，則確認是否能夠找零：<br>
-是：\`\`\`coin5--\`\`\`且\`\`\`coin10++\`\`\`<br>
-否：不可找零，傳回\`\`\`false\`\`\`<br>
<br>
若收到20元，則確認是否能夠找零：<br>
-有5元及10元：\`\`\`coin5--\`\`\`且\`\`\`coin10--\`\`\`<br>
-只有5元，且5元最少有三個：\`\`\`coin5-=3\`\`\`<br>
-以上情況皆非：不可找零，傳回false<br><br> 若全部順利找零，則最終回傳\`\`\`true\`\`\`。<br>
<br>

### 程式碼 Code（加註解）
\`\`\`clink=
class Solution {
    public boolean lemonadeChange(int[] bills) {
        //建立變數紀錄手上有的零錢
        int coin5 = 0,coin10 = 0;
        //開始交易（？）
        for(int i : bills)
        {
            //如果是5，則5元+1
            if(i == 5)
                coin5 ++;
            //如果是10，則確認有無零錢    
            else if(i == 10)
            {
                //可找錢的情況
                if(coin5 > 0)
                {
                    coin5--;
                    coin10++;
                }
                //不可找錢
                else
                    return false;
            }
            //因為只有5、10、20，所以這邊是20
            else
            {
                //可找錢的情況：5元跟10元都有，則找錢
                if(coin5 > 0 && coin10 > 0)
                {
                    coin5 --;
                    coin10 --;
                }
                //可找錢的情況：沒有10元，5元有兩個以上
                else if(coin5 > 2)
                {
                    coin5 -= 3;
                }
                //不可找錢的情況
                else
                    return false;
            }
        }
        return true;
    }
}
\`\`\`
            `
        }
    ]
});