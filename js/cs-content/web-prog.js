// js/data/web-basic.js

csData.push({
    id: "web-prog",
    title: "網頁程式設計",
    type: "course",
    meta: "網頁程式設計 | 2023.02 ~ 2023.05 | HTML, CSS, JS, PHP",
    items: [
        {
            name: "BasicForm",
            tools: "HTML",
            simulationCode: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <form>
        <fieldset >
          <legend>Personal details</legend>
          <label>Your name:</label> <input name="yourname" size="50"><br>
          <br>
          <label>Your email:</label> <input name="yourmail" type="email" pattern=".+@hotmail.com" placeholder="例如123456789@hotmail.com" size="50"><br>
          <br>
          <form>
            <label>Your age:</label>
            <input type="radio" name="age" value="under"> under 20
            <input type="radio" name="age" value="twenty"> 20~29
            <input type="radio" name="age" value="thirty"> 30~39
            <input type="radio" name="age" value="outof"> out of 40歲
          </form>
        </fieldset>
        <br>
        <fieldset>
          <legend>The questions about the phone</legend>
          <p>使用過哪些廠牌的手機？
            <input type="checkbox" name="madecompany" value="htc"> HTC
            <input type="checkbox" name="madecompany" value="apple"> Apple
            <input type="checkbox" name="madecompany" value="asus"> Asus
          </p>
          
          <p>使用手機時最常碰到的問題？<br>
            <textarea name="questiontext"  rows="6"  cols="40"   required> 手機電機時間不夠久</textarea>
          </p>
          
          <p>使用過那些業者的門號？<br>
            <select name = "userPhoneNum[]" size = "4" multiple>
              <option value = "中華電信">中華電信
              <option value = "台灣大哥大">台灣大哥大
              <option value = "遠傳">遠傳
              <option value = "台灣之星">台灣之星
            </select>
          </p>
          <br>
        </fieldset>
        <input type = "submit" value = "提交">
        <input type ="reset" value = "重設">
      </form>
  </body>
</html>
            `,
            
            // === 文字說明 ===
            content: `
>>繳交期限 None<br>
>>移植時間 Fri, Dec 19, 2025 05:52 PM
___
<br>

## 題目敘述：
1.兩個元件分組<br>
2.文字輸入<br>
3.電子信箱輸入<br>
4.按鈕選項<br>
5.核取方塊<br>
6.多行文字輸入方塊<br>
7.下拉式選單<br>
            `
        },
        {
            name: "EasySkim",
            tools: "HTML",
            simulationCode: `<!DOCTYPE html>
<html>
<title>簡易論文資訊</title>
  <header>
    <meta charset="utf-8">
    <center>
      <H1> User Preference Translation Model for Next Top-k Items Recommendation with Social Relations</H1>
      Hao-Shang Ma and Jen-Wei Huang<br><br>
    </center>
  </header>
  <center>
  <footer>
    <br>
    Institute of Computer and Communication Engineering, Department of Electrical Engineering, National Cheng Kung University<br>
    No.1, University Road, Tainan City, Taiwan<br>
    <br>
    <strong>ablove904@gmail.com<br>
    jwhuang@mail.ncku.edu.tw</strong>
  </footer>
  </center>
  <br>
  <br>
  <br>
  <body>
  <div style = "margin-left:15%; margin-right: 15%; display: block;">
    <div>
      <span>
        <b>Abstract.</b> Recommendation systems are used to predict the interests of users through the analysis of historical preferences. Collaborative filteringbased approaches usually ignore the sequential information and sequential recommendation usually focus on the next item prediction. In this work, we would like to determine the next top-k recommendation problem. We propose User Preference Translation Model (UPTM) with item influence embedding and social relations between users. In addition, we will also solve the cold start problem in UPTM.<br>
        <b>Keywords</b>: Next Top-k Recommendation · Influence Diffusion Embedding · Social Recommendation · Cold-Start Problem.<br>
        <br>
        <br>
      </span>
      <menu>
        <h2><b style = "text-align: left;">Menu</b></h2>
        <span style = "text-align: left; font-size:larger;">
          <ul>
            <li><a href = "#T1">1 Introduction</a></li>
          </ul>
          <ul>
            <li><a href = "#T2">2 Related Works</a></li>
            <ul>
              <li><a href = "#t201">2.1 Collaborative Filtering with Deep Neural Network</a></li>
              <li><a href = "#t202">2.2 Social Recommendation Systems</a></li>
            </ul>
          </ul>
          <ul>
            <li><a href = "#T3">3 Methodology</a></li>
            <ul>
              <li><a href = "#t301">3.1 Problem Definitions</a></li>
              <li><a href = "#t302">3.2 User Preference Translation Model</a></li>
              <li><a href = "#t303">3.3 User Preference Translation Model for Social Recommendation</a></li>
            </ul>
          </ul>
          <ul>
            <li><a href = "#T4">4  Experimental Results and Future works</a></li>
          </ul>
          <ul>
            <li><a href = "#sourse">References</a></li>
          </ul>
        </span>
      </menu>
    </div>
    <div id = "T1">
      <span>
        <br>
        <h2>1 Introduction</h2>
          Recommendation systems are trying to learn the low dimensional representation of users and items. Many features can be adopted in recommendation systems, for example, user-item interactions, user features, item features, and other information such as the temporal factor.<br>
          &emsp;Collaborative filtering-based approaches focus on learning users’ preference and predict the items which users will have interest. The sequential relations in users behavior are usually ignored in collaborative filtering. In our opinion, the trigger relations between items are important for users behavior. For example, people usually watch a series of related movies after they watch one of the movie in this series. We would like to discover the target items which can trigger users to buy as much related items as possible. Therefore, we adopt the social influence propagation concept to model the trigger relations between items. In social network, people spread influence to their neighbors and receive influence from their neighbors at the same time. People usually be activated by their friends, family, and followees. Same as the social network, assume an item-item network is formed from users’ sequential interaction behavior with item. The propagation of item influence can be used to indicate the likelihood of a user interacting with a related item based on their interaction with the target item.<br>
          <br>
&emsp;In sequential recommendation research, we consider the sequential information in users behavior. Given the users’ interaction behavior, the problem can be
defined as predicting the next item which user will interact. However, we would
like to recommend the next k items which users will interact in the future. First,
we address the recommendation problem as the next top-k recommendation
problem. We propose a User Preference Translation Model with item influence
embedding, abbrev. as UPTM, to solve this problem. In the future, we would
like to join the social relations between user and propose the social recommendation with UPTM. In addition, the cold start problem is usually ignored in the
sequential recommendation systems. We will propose a new scheme to deal with
the cold start problem in UPTM.
      </span>
    </div>
    <div id = "T2">
      <span>
          <br><br>
        <h2>2 Related Works</h2>
          <h3 id = "t201">2.1 Collaborative Filtering with Deep Neural Network</h3>
            Collaborative filtering solves the recommendation problem by assuming that users with similar behaviors exhibit similar preferences for items. He et al. [2] propose NeuMF to combine the multi-layer perceptron and matrix factorization to learn the user and item embedding. Wang et al. [4] propose NGCF which is based on the graph neural network. They encodes the collaborative signal which represents the high-order connectivities by performing embedding propagation. Another kind of Generative Adversarial Networks-based methods try to apply GAN to recommendation. Chae et al. [1] suggest a new direction of vector-wise adversarial training and propose the GAN-based CF framework.<br>
          <h3 id = "t202">2.2 Social Recommendation Systems</h3>
            On social network, people spread influence to their neighbors and receive influence from their neighbors at the same time. A user is activated by another user since they have same opinion tendency. Social recommendation systems that examine the propagation of influence among network members end up with users who share similar interests connected along diffusion paths. Wu et al. [5] propose DiffNet to model the recursive social influence propagation process and learn the user and item representation in social recommendation. Zhu et al. [6] propose Social Collaborative Mutual Learning Model to combine the item-based collaborative filtering and social collaborative filtering.<br>
      </span>
    </div>
    <div>
      <span>
          <br><br>
        <h2 id = "T3">3 Methodology</h2>
          <h3 id = "t301">3.1 Problem Definitions</h3>
            In the current study, recommendations are generated by using previous behavior patterns to predict the items that are likely to interest the user in the future. In the following,<math><mi><i>U</i></mi><mi>={</mi><mi><i>u</mi><sub>1</sub>, <mi>u</mi><sub>2</sub>, ...<mi>u<sub>m</sub></i></mi>}</mi></math> denotes the user set and <math><mi><i>I</i></mi><mi>={</mi><mi><i>i</mi><sub>1</sub>, <mi>i<sub>2</sub></mi>, ..., <mi>i<sub>n</sub></i></mi><mi>} </mi></math> denotes the item set. Each user <i>u</i> has preference record <math><mi>P</mi><sub><i>u</i></sub><mi>=(<i>i</mi><sub>u,1</sub>, <mi>i</mi><sub>u,2</sub>, ...<mi>i</mi><sub>u,t</sub></i>)</math>,where <i>t</i> is the interactive order. Based on a given P<sub><i>u</i></sub> , our objective is to recom-mend the next k items <math><mi>R</mi><sub><i>u</i></sub><mi>={<i>i</mi><sub>u,t+1</sub><mi>,i</mi><sub>t+2</sub><mi>, ..., i</mi><sub>u,t+k</sub><mi></i>}</mi></math> with which user u is likely to interact.
          <h3 id = "t302">3.2 User Preference Translation Model</h3>
            The proposed translation-based recommendation model is illustrated in Fig. 1.The model includes a simulation of item embedding and a translation of userpreferences. The proposed scheme is based on the assumption that users are likely to interact with items that are associated with other items that they already possess. We propose using influence diffusion to learn the relationships among items. We first generate item influence diffusion paths from social influence paths sampled from the item-item relation graph from which UPTM learns the item influence embedding by which to encode user preferences. UPTM then learns the parameters in the hidden layer to output the item embedding and generate a recommendation list from the decoder of the translation module, to which is applied a softmax function and top-k sampling.<br>
            <center>
              <img src="HTML_BF_t302.png" height = "400px"></br>
              <b>Fig. 1.</b> The Framwork of User Preference Translation model with Item Influence diffusion Embedding
            </center>
          <h3 id = "t303">3.3 User Preference Translation Model for Social Recommendation</h3>
          We would like to apply UPTM on social recommendation by adding the users’ social relation in the item embeddings. Each user are encoded into a user embedding to represent the user’s social relations in the social network. Then, we add the user embedding into the items to translate the user preference. 
      </span>
    </div>
    <div>
      <span>
          <br><br>
        <h2 id = "T4">4  Experimental Results and Future works</h2>
          For evaluating the performance of proposed model, we compare UPTM modelwith other existing model on real several datasets such as Movielen, Amazon, and Yahoo datasets. We use the precision, recall and NDCG metrics to evaluatethe performance for UPTM. In table 1, we only show the results of NDCG. Foroverall performance comparison, UPTM outperforms other comparing methodson three metrics for the next k item recommendation problem. All experimentalresults are shown in our UPTM works [3]. In addition, we will propose the UserPreference  Translation  Model  with  social  recommendation.  The  social  recom-mendation  consider  the users’ preference and users’ social relation simultane-ously.<br>
          <br>
          <center>
            <b>Table 1.</b> Overall performance comparison
            <table border="1">
              <tr>
                <td rowspan="2">methods</td>
                <td colspan="3">Movielens 1M</td>
                <td colspan="3">Movielens 20M</td>
                <td colspan="3">Amazon Book</td>
                <td colspan="3">Yahoo E-commerce</td>
              </tr>
              <tr>
                <td>ND@5</td>
                <td>ND@10</td>
                <td>ND@20</td>
                <td>ND@5</td>
                <td>ND@10</td>
                <td>ND@20</td>
                <td>ND@5</td>
                <td>ND@10</td>
                <td>ND@20</td>
                <td>ND@5</td>
                <td>ND@10</td>
                <td>ND@20</td>
              </tr>
              <tr>
                <td>BPR-MF</td>
                <td>0.086</td>
                <td>0.0812</td>
                <td>0.0901</td>
                <td>0.0786</td>
                <td>0.0864</td>
                <td>0.0916</td>
                <td>0.0118</td>
                <td>0.0107</td>
                <td>0.0129</td>
                <td>0.0138</td>
                <td>0.0141</td>
                <td>0.0153</td>
              </tr>
              <tr>
                <td>CFGAN</td>
                <td>0.1066</td> 
                <td>0.0962</td> 
                <td>0.0916</td> 
                <td>0.0856</td> 
                <td>0.0986</td> 
                <td>0.09</td> 
                <td>0.0166</td> 
                <td>0.0152</td> 
                <td>0.0188</td> 
                <td>0.0152</td> 
                <td>0.0154</td> 
                <td>0.0178</td>
              </tr>
              <tr>
                <td>NeuMF</td>
                <td>0.0945</td>
                <td>0.1033</td>
                <td>0.1131</td>
                <td>0.1193</td>
                <td>0.1168</td>
                <td>0.1231</td>
                <td>0.0135</td>
                <td>0.0141</td>
                <td>0.0166</td>
                <td>0.0144</td>
                <td>0.0164</td>
                <td>0.0177</td>
              </tr>
              <tr>
                <td>NGCF</td>
                <td>0.1168</td>
                <td>0.1157</td>
                <td>0.1235</td>
                <td>0.0931</td>
                <td>0.0921</td>
                <td>0.098</td>
                <td>0.0191</td>
                <td>0.0176</td>
                <td>0.0184</td>
                <td>0.0156</td>
                <td>0.0187</td>
                <td>0.0215</td>
              </tr>
              <tr>
                <td>UPTM</td>
                <td>0.1888</td>
                <td>0.1996</td>
                <td>0.1946</td>
                <td>0.2001</td>
                <td>0.2185</td>
                <td>0.2327</td>
                <td>0.0268</td>
                <td>0.0283</td>
                <td>0.0245</td>
                <td>0.0189</td>
                <td>0.0201</td>
                <td>0.0197</td>
              </tr>
            </table>
          </center>
          <br>
          However, most sequential recommendation cannot deal the cold start problem since the new items are not shown in the training process. The sequential recommendation usually ignore this problem. In previous recommendation systems, they usually use the popularity of items or the similarity of users’ preference to recommend. We would like use the users’ social relation and give the initial item embedding for cold start items. We will join this idea to solve the cold start problem in UPTM.<br>
          <br>
      </span>
    </div>
    <div id = "sourse">
        <br><br>
      <h2>References</h2>
      1. D.-K. Chae, J. Kang, J.-S. Kang, S.-W. Kim, J. Lee, and J.-T. Lee. Cfgan: A generic collaborative filtering framework based on generative adversarial networks. In <i>in Proceedings of the 27th ACM CIKM</i>, pages 137 - 146, 2018.<br>
      2. X. He, L. Liao, H. Zhang, L. Nie, X. Hu, and T.-S. Chua. Neural collaborative filtering. In <i>In Proceedings of WWW</i>, pages 173 - 182, 2017.<br>
      3. H.-S. Ma and J.-W. Huang. User preference translation model for recommendation system with item influence diffusion embedding. In <i>In Proceedings of IEEE/ACM International Conference on ASONAM</i>, pages 50 - 54, 2020.<br>
      4. X. Wang, X. He, M. Wang, F. Feng, and T.-S. Chua. Neural graph collaborative filtering. In <i>in Proceedings of the 42nd International ACM SIGIR</i>, pages 165 - 174, 2019.<br>
      5. L. Wu, P. Sun, Y. Fu, R. Hong, X. Wang, and M. Wang. A neural influence diffusion model for social recommendation. In <i>In Proceedings of the 42nd International ACM SIGIR</i>, pages 235 - 244, 2019.<br>
      6. T. Zhu, G. Liu, and G. Chen. Social collaborative mutual learning for item recom-mendation. <i>ACM Transactions on Knowledge Discovery from Data</i>, 14, 2020.<br><br>
    </div>
  </div>
  </body>
</html>
            `,
            
            // === 文字說明 ===
            content: `
>>繳交期限 Fri, March 17, 2023 11:59 PM<br>
>>移植時間 Fri, Dec 19, 2025 05:56 PM
___
<br>

## 題目敘述：
請架構一個簡易論文瀏覽的網頁<br>
包含header、manu、body、footer<br>
1.header 放論文標題、作者姓名<br>
2.body 放每一個章節內容要載入的文字、圖片、表格、數學公式<br>
3.manu 提供選單可以連結到各個章節<br>
4.footer 放作者的連絡資訊<br>
            `
        },
        {
            name: "以CSS實現RWD",
            tools: "HTML, CSS",
            // === 文字說明 ===
            content: `
>>繳交期限 Sat, March 18, 2023 11:59 PM<br>
>>移植時間 Fri, Dec 19, 2025 05:56 PM
___
<br>

## 題目敘述：
請架構一個簡易論文瀏覽的網頁<br>
包含header、manu、body、footer<br>
1.header 放論文標題、作者姓名<br>
2.body 放每一個章節內容要載入的文字、圖片、表格、數學公式<br>
3.manu 提供選單可以連結到各個章節<br>
4.footer 放作者的連絡資訊<br>
            `,
            multiFiles: {
                html: dedent(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  <link rel="stylesheet" href="CSS_RWD.css" type="text/css"> 
  </head>
  <body>  
  <div class="container WorkBoard">
    <div class="c1 WorkBoard">
      <center><span class="TitleRowd">Menu Here<br></span></center>
      
      <span class="BoildView">
        &emsp;<a href="#P1" color:#663399>初階網頁設計</a>
      </span><br>
      <span class="BoildView">
        &emsp;<a href="#P2" color:#663399>Arduino 實作範例報告</a>
      </span><br>
      <span class="BoildView">
        &emsp;<a href="#P3" color:#663399>資料結構[Java] 作答</a>
      </span><br>
      <span class="BoildView">
        &emsp;<a href="#P4" color:#663399>物件導向[C#] 作答</a>
      </span><br>
      <span class="BoildView">
        &emsp;<a href="#P5" color:#663399>網頁程式設計</a>
      </span><br>
      <br>
      <br>
      製作中：<br>
      <span class="BoildView">
        &emsp;Android 實作範例
      </span><br>
      <span class="BoildView">
        &emsp;Python物件導向 題目作答
      </span><br>
    </div>

    <div id="P1" class="c2">
      <center>
        <span class="TitleRowd">初階網頁設計</span><br>
      <span class="adTitle">課程名稱：程式語言&emsp;學習時間：2020.09 ~ 2020.12&emsp;發布使用：Github&emsp;編譯器：主要使用 Sublime Text</span><br>
    </center>

    <br>
    <br>
      Homework 01 Link： <a href="109-1ProgramLanguage/Homework_01.html">HTML</a><br>
      Homework 02 Link： <a href="109-1ProgramLanguage/Homework_02.html">9*9</a><br>
      Homework 03 Link： <a href="109-1ProgramLanguage/Homework_03.html">DIV</a><br>
      期中報告 連結： <a href="BJ.html">JOE BIDEN</a><br>
      <br>
      Homework 04 Link： <a href="109-1ProgramLanguage/Homework_04.html">BLOG DIV</a><br>
      Homework 05 Link： <a href="109-1ProgramLanguage/Homework_05.html">9*9 JS</a><br>
      期末報告 連結： <a href="COVID-19 about UK.html">COVID-19 about United Kingdom</a><br>
    <br>
        </div>
        <div class="c3">
          <center>
      <span class="TitleRowd">Arduino 實作範例報告</span><br>
      <span class="adTitle">課程名稱：微處理機&emsp;學習時間：2022.03 ~ 2022.06&emsp;報告寫作使用：HackMD</span><br>
    </center>
    <br>
    <br>
    Homework 03 Link： <a href="https://hackmd.io/@AmiYaku1049/HW03_Arduino">人機介面</a><br>
    Homework 04-1 Link： <a href="https://hackmd.io/@AmiYaku1049/HW04_1_Arduino">滑動式電位計與大功率LED</a><br>
    Homework 04-2 Link： <a href="https://hackmd.io/@AmiYaku1049/HW04_2_Arduino">PC 調光燈</a><br>
    Homework 05 Link： <a href="https://hackmd.io/@AmiYaku1049/HW05_Arduino">數位式時鐘設計</a><br>
    Homework 06 Link： <a href="https://hackmd.io/@AmiYaku1049/HW06_Arduino">漂浮的愛心</a><br>
    Finalwork Link： <a href="https://hackmd.io/@AmiYaku1049/Finalwork_Arduino">溫度感測</a><br>
    <br>
    程式碼解釋： <a href="https://hackmd.io/@AmiYaku1049/LEDreader_Arduino">LED陣列動態顯示主程式碼</a><br>
    <br>
        </div>
        <div class="c4">
          <center>
      <span class="TitleRowd">資料結構[Java] 作答</span><br>
      <span class="adTitle">課程名稱：資料結構&emsp;學習時間：2022.09 ~ 2023.01&emsp;發布使用：HackMD&emsp;編譯器：EditPlus 及 Eclipse</span><br>
    </center>
    <br>
    <br>
    Homework 02 20220926 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_LinkedLink">鏈結串列程式碼</a><br>
    Homework 03 20221003 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_LinkedLink_New">鏈結串列程式碼 -- 新增修改刪除查詢</a><br>
    Homework 04 20221017 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_StackByArray">Stack by Array</a><br>
    Homework 04 20221017 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_StackByList">Stack by List</a><br>
    Homework 05 20221024 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_Queue">Queue</a><br>
    Homework 06 20221117 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_BTree">Binary Tree</a><br>
    Homework 07 20221205 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_Graph">Graph</a><br>
    Homework 08 20221212 Link： <a href="https://hackmd.io/@AmiYaku1049/DataStructures_Sorting">Sorting</a><br>
    <br>
        </div>
        <div class="c5">
          <center>
      <span class="TitleRowd">物件導向[C#] 作答</span><br>
      <br>
      <span class="adTitle">課程名稱：多媒體設計&emsp;學習時間：2022.09 ~ 2023.01&emsp;發布使用：HackMD&emsp;編譯器：VisualStudio</span><br>
    </center>
    <br>
    <br>
    FinalExam Link： <a href="https://hackmd.io/@AmiYaku1049/WindowsForm_C_FinalExam">FinalExam</a><br>
    <br>
        </div>
        <div class="c6">
          <center>
      <span class="TitleRowd">網頁程式設計</span><br>
      <br>
      <span class="adTitle">課程名稱：網頁程式設計&emsp;學習時間：2023.02 ~ &emsp;發布使用：Github&emsp;編譯器：主要使用 Sublime Text</span><br>
    </center>
    <br>
    <br>
    ClassToDo 01 Link： <a href="111-2WebDesign/HTML_BasicForm_HW.html">[HTML] BasicForm</a><br>
    Homework 20230310 Link： <a href="111-2WebDesign/HTML_EasySkim_HW.html">[HTML] EasySkim</a><br>
    Homework 20230317 Link： <a href="111-2WebDesign/CSS_EasySkim_HW.html">[CSS] EasySkim</a><br>
    Homework 20230324 Link： <a href="111-2WebDesign/CSS_LikePage_HW.html">[CSS] LikePage</a><br>
    Homework 20230331 Link： <a href="111-2WebDesign/CSS_FlexSkim_HW.html">[CSS] useFlex</a><br>
    <br>
        </div>
      </div>  
  </body>
</html>
                `),
                
                css: dedent(`
/* Ref: https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns?hl=zh-tw*/

/* basic setting */

* {
  box-sizing: border-box;
}

body {
  background: #FFF;
}

a{
  text-decoration:none;
  color:#8a2be2;
}
a:hover{
  text-decoration:underline;
  color:#8b008b;
}

.TitleRowd{
  font-size:150%;
  color:#651170;
  font-family:Courier New;
}
.adTitle{
  font-size:5%;
  color:#000000;
  font-family:Courier New;
}
.BoildView {
  border-left:3px solid #8b4513;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}

.WorkBoard{
  font-size:90%;
  font-family:Courier New;
  border-bottom:2px dashed #651170;
}

.c1, .c2, .c3, .c4, .c5 ,.c6{
  width: 100%;
  border: 1px solid #000;
  background-color: #f5f5f5;
}

/* media query */

@media screen and (min-width: 800px) and (max-width:900px){
  .c3 ,.c2{
    width: 35%;
  }
  .c1 {
    width: 30%;
  }
  .c6, .c5 {
    width: 35%;
  }
  .c4{
    width: 30%;
  }
}

@media screen and (min-width: 500px) and (max-width:799px),(orientation: portrait){
  .c2, .c3, .c4, .c5 ,.c6{
    width: 50%;
  }
}
                `)
            }
        },
        {
            name: "Guess Number",
            tools: "HTML, JS",
            // === 文字說明 ===
            content: `
>>繳交期限 Sat, May 05, 2023 11:59 PM<br>
>>移植時間 Fri, Dec 19, 2025 07:39 PM
___
<br>

[link bio] go to GITHUB：<br>
[JS_GuessNumber.html](https://github.com/Skys-Kid-Lai/1004/blob/master/111-2WebDesign/JS_GuessNumber.html)<br>
<br>

## 題目敘述：
完成一個猜數字遊戲（1～30）<br>
1.用JavaSrcipt獲得使用者輸入的數字並判斷是否為正確答案<br>
2.正確與否在結果顯示區域顯示，並提示使用者輸入的數字比正確答案大或小<br>
            `,
            multiFiles: {
                html: dedent(`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Number guessing game</title>
        <style>
            html {
                font-family: sans-serif;
            }
            body {
                width: 50%;
                max-width: 800px;
                min-width: 480px;
                margin: 0 auto;
            }           
        </style>
    </head>
    <body>
        <h1>這是一個猜數字遊戲</h1>
        <p>請選擇一個1-30的整數,  系統會顯示你是否猜對, 或者提示你猜的數字比正確答案大或小</p>
        <div class="form">
            <label for="guessField">輸入你猜的數字</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" value="送出" class="guessSubmit">
        </div>
        <div class="resultParas">            
            <p class="lastResult"></p>
            <p class="lowOrHi"></p>
        </div>
        <script>
            var max=30,min=0;     
            var flag=Math.round(Math.random()*30)+1;//產生一個亂數
            var guessSubmit = document.querySelector('.guessSubmit'); //取得送出按鈕物件       
            //取得使用者輸入的數字物件(guessField)
            //取得顯示結果的物件(lastResult)
            //取得提示使用者的物件(lowOrHi)
            function checkGuess() {              
                var userGuess = Number(guessField.value);//取得使用者輸入的數字值
                //alert(flag); 
                //判斷是否為正確答案, 並在顯示結果物件的文字內容顯示是否猜的正確(正確/錯誤)
                //如果猜的不正確, 判斷如果比正確答案大, 要在使用者提示物件的文字內容顯示, 猜的答案太大了, 反之顯示太小  
                
                if (userGuess!=flag)
                {
                    if (userGuess<flag)
                        {
                            min = userGuess;
                            //alert(min + " ~ " + max); //用在測試
                            //document.getElementById("lastResult").innerHTML = "太小";
                            //document.getElementById("lowOrHi").innerHTML ="結果在： " + min + " ~ " + max + " 之間";
                            document.querySelector(".lastResult").innerHTML = "太小";
                            document.querySelector(".lowOrHi").innerHTML ="結果在： " + min + " ~ " + max + " 之間";
                       }
                   if (userGuess>flag)
                        {
                            max = userGuess;
                            //alert(min + " ~ " + max);//用在測試
                            //document.getElementById("lastResult").innerHTML = "太大";
                            //document.getElementById("lowOrHi").innerHTML = "結果在： " + min + " ~ " + max + " 之間";
                            document.querySelector(".lastResult").innerHTML = "太大";
                            document.querySelector(".lowOrHi").innerHTML = "結果在： " + min + " ~ " + max + " 之間";
                        }
                }
            else
            {
                //alert("猜中了");//用在測試
                //document.getElementById("lastResult").innerHTML = "猜中了！！";
                //document.getElementById("lowOrHi").innerHTML = "";
                document.querySelector(".lastResult").innerHTML = "猜中了！！";
                document.querySelector(".lowOrHi").innerHTML = "";
            }
            }              
            guessSubmit.addEventListener('click', checkGuess);
            </script>
    </body>    
</html>
                `)
            }
        },
        {
            name: "Paper Scissor Stone",
            tools: "HTML, JS, CSS",
            hidePreview: true,
            // === 文字說明 ===
            content: `
>>繳交期限 Sat, May 19, 2023 11:59 PM<br>
>>移植時間 Fri, Dec 19, 2025 07:39 PM
___
<br>

[link bio] go to GITHUB：<br>
[JS_PaperScissorStone.html](https://github.com/Skys-Kid-Lai/1004/blob/master/111-2WebDesign/JS_PaperScissorStone.html)<br>
[JS_PaperScissorStone.js](https://github.com/Skys-Kid-Lai/1004/blob/master/111-2WebDesign/JS_PaperScissorStone.js)<br>
[JS_PaperScissorStone.css](https://github.com/Skys-Kid-Lai/1004/blob/master/111-2WebDesign/JS_PaperScissorStone.css)<br>
<br>
[[link bio] go to true Website](https://skys-kid-lai.github.io/1004/111-2WebDesign/JS_PaperScissorStone.html)<br>
<br>
## 題目敘述：
1.填補js檔設計，完成猜拳遊戲<br>
2.滑鼠點擊圖片選項，由電腦出拳，並判斷輸贏。<br>

<b>加分項目：</b><br>
1.製作 again button（css原檔裡面有建立button設計）<br>
2.累計玩家贏的次數<br>
            `,
            multiFiles: {
                html: dedent(`<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>剪刀石頭布</title>
    <link rel="stylesheet" href="JS_PaperScissorStone.css">
</head>
<body>
	<h1>剪刀石頭布遊戲</h1>
	<div id="container">
		<p>玩家請出拳吧!<span id="totalWin">你獲勝了<span id="winNum">0</span>次。</span></p>
		<div id="page1">
			<img src="./img/paper.png" class="item" id="item1" name="0">布</img>
			<img src="./img/scissor.png" class="item" id ="item2" name="1">剪刀</img>
			<img src="./img/stone.png" class="item" id ="item3" name="2">石頭</img>
		</div>
		<div id="page2">
			
		</div>
		<input type="button" class = "again" id="again" value="Play again">		
	</div>
	<script src="JS_PaperScissorStone.js"></script>
</body>
</html>
                `),
                js: dedent(`
//取得互動的元素物件
//監聽事件函式
var winNum = 0;
var userPlayer;
var computerPlay = "";
var result = "";
var finall = "";

var gesture=['paper','scissor','stone']; //set the array make when 28 get name can easier to search.

document.querySelector("#again").style.display="none"; //button again non display

//when button be click by user
function againStart()
{
    document.getElementById("page2").innerHTML = ""; //div page2 non display -- set the string none
    document.querySelector("#page1").style.display= "block"; //div page1 on display
    document.querySelector("#again").style.display="none"; //button again non display
}

function checkwin(j){        
    //取得顯示結果區域的元素物件
    //取得勝場顯示結果物件
    //產生電腦隨機出拳結果
    //判斷玩家得出拳和電腦的出拳
    //顯示結果在顯示區域
    //可以的話再增加一個函式, 當玩完一次之後, 可以讓使用者在玩一次的選項

    //find plyer choose
        //userPlayer = Number(guessField.name);
    console.log(j.target.name);
    userPlayer = gesture[j.target.name]; //get which user choose
    computerPlay = gesture[Math.floor(Math.random()*3)]; //get which computer choose

    //critical result
    if( userPlayer == computerPlay )
    {
        result="Tie";
    }
    else if( userPlayer =="paper"){
        if(computerPlay == "stone"){
            result="You win";
            winNum++;
        }
        else{
            result="You lose";
        }
    }
    else if( userPlayer =="scissor"){
        if(computerPlay == "paper"){
            result="You win";
            winNum++;
        }
        else{
            result="You lose";
        }
    }
    else if( userPlayer =="stone"){
        if(computerPlay == "scissor"){
            result="You win";
            winNum++;
        }
        else{
            result="You lose";
        } 
    }

    //finall answer display on div page2
    finall ='The computer is: '+computerPlay+'\n\r' + ',  You are :'+gesture[j.target.name] + ', The result of this round is  :' + result;
    document.getElementById("page2").innerHTML=finall;
    //total the win round 
    document.getElementById("winNum").innerHTML = winNum;
    //when result on diplay, div page1 can't diaplay and button again will diaplay
    document.querySelector("#page1").style.display="none";
    document.querySelector("#again").style.display= "block";
}
//div page2 will be none on start the game
document.getElementById("page2").innerHTML = "";
//content the object
var again = document.querySelector('#again');
var playerPaper = document.getElementById("item1");
var playerScissor = document.getElementById("item2");
var playerStone = document.getElementById("item3");
//listening the click
again.addEventListener('click', againStart); 
playerPaper.addEventListener('click', checkwin); 
playerScissor.addEventListener('click', checkwin);
playerStone.addEventListener('click', checkwin);
                `),
                css: dedent(`
body{
	background-color: #7497fd;
}
h1{
	color: red;
	text-align: center;
}
#container {
	width: 900px;
	height: 300px;
	margin: 0 auto;
}
#container p {
	font-size: 20px;
	font-weight: bold;
}
#container #totalWin {
	float: right;
}
#container #winNum {
	font-weight: bold;
	font-size: 25px;
	color: #fff;
}
#container .item {
	margin: 60px 60px;
	cursor: pointer;
    width:150px;
    height:150px;
}
#page2 {
	text-align: center;
	margin-top: 80px;
}
#container #again {
	width: 100px;
	height: 30px;
	line-height: 30px;
	font-weight: bold;
	background-color: green;
	margin: 10px auto;
	text-align: center;
	display: block;
	cursor: pointer;
	border: 1px solid #000;
	border-radius: 5px;
	margin-top: 40px;
}
                    `)
            }
        },
        {
            name: "Prime Number",
            tools: "HTML, PHP",
            hidePreview: true,
            // === 文字說明 ===
            content: `
>>繳交期限 Sat, May 19, 2023 11:59 PM<br>
>>移植時間 Fri, Dec 19, 2025 09:31 PM
___
<br>

[link bio] go to GITHUB：<br>
[PHP_Primenumber.php](https://github.com/Skys-Kid-Lai/1004/blob/master/111-2WebDesign/PHP_Primenumber.php)<br>
<br>

## 題目敘述：
完成一個猜數字遊戲（1～30）<br>
1.電腦亂數決定數值<br>
2.取出質數<br>
3.印出該質數，並設定該質數字體大小為該質數數值<br>
<br>

## 範例程式碼
\`\`\`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Change the fontsize use prime number</title>
</head>
<body>
	<?php
		$dom = rand(2,30);
		echo "隨機亂數：".$dom."<br>質數們：<br>";
		$count = 0;
		for($i = $dom;$i>=2;$i--)
		{
			for($j = 1 ;$j <=$i; $j++)
			{
				if($i % $j ==0)
					$count ++;
			}
			if($count == 2)
			{
				?>
				<p style="font-size:<?php echo $i;?>pt">

				<?php
				echo $i."<br>";
			}
			$count =0;
		}
		$dom = 0;
	?>
</body>
</html>
\`\`\`
            `
        },
    ]
});