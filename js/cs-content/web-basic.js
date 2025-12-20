// js/data/web-basic.js

csData.push({
    id: "web-basic",
    title: "初階網頁設計",
    type: "course",
    meta: "程式語言 | 2020.09~2020.12 | HTML, CSS",
    items: [
        {
            name: "HTML格線",
            tools: "HTML, CSS",
            simulationCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>homework_01</title>
    <style>
        a{
			text-decoration:none;
			color:#8a2be2;
		}
		a:hover{
			text-decoration:underline;
			color:#8b008b;
		}
    </style>
</head>
<body>
    <center>
        <a href="https://github.com/Skys-Kid-Lai/1004/blob/master/109-1ProgramLanguage/Homework_01.html">此作業位於Github的...</a>
    </center>
    <table border="1" width="300" cellpadding="4" align="center">
        <tr>
            <td colspan="3" align="center">
                作業:HTML表格
            </td>
        </tr>
        <tr>
            <td rowspan="3" style="
				   width: 80px;
				   height: 80px;
				   padding-top: 0px;
				   padding-right: 0px;
				   padding-left: 0px;
				   padding-bottom: 0px;">
                <img src="https://avatars0.githubusercontent.com/u/71302529?s=460&u=ae380b582dec56402bdbf9b59f31a12c9fe26676&v=4" width="80" height="80">
            </td>
            <td width="40" align="center">班級</td>
            <td>資工二乙</td>
        </tr>
        <tr>
            <td align="center">姓名</td>
            <td>賴子婷</td>
        </tr>
        <tr>
            <td align="center">學號</td>
            <td>1110832059</td>
        </tr>
    </table>
</body>
</html>
            `,
            
            // === 文字說明 ===
            content: `<p></p>
            <p>這是第一份HTML的練習。</p>
            <p>主要練習框限表格，並在表格中加入文字及圖像。</p>
            `
        },
        {
            name: "九九乘法表",
            tools: "HTML",
            simulationCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>九九乘法表</title>
    <style type="text/css">
        .one{
            font-size: 14px;
            font-weight: bold;
            color: #FFF;
            background: #000;
        }
    </style>
</head>
<body>
    <center>
        <a href="https://skys-kid-lai.github.io/1004/">原始的作業網頁...</a>
    </center>
    <center>
        <table border="1" cellpadding="0" cellspacing="0" width="300px">
            <thead>
            <tr>
                <td colspan="3" align="center" class="one">九九乘法表</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td align="center" style="
                border-right-width: 0;
                border-bottom-width: 0;
                ">
                1 * 1 = &nbsp;&nbsp;1<br>1 * 2 = &nbsp;&nbsp;2<br>1 * 3 = &nbsp;&nbsp;3<br>1 * 4 = &nbsp;&nbsp;4<br>1 * 5 = &nbsp;&nbsp;5<br>1 * 6 = &nbsp;&nbsp;6<br>1 * 7 = &nbsp;&nbsp;7<br>1 * 8 = &nbsp;&nbsp;8<br>1 * 9 = &nbsp;&nbsp;9</td>
                <td align="center" style="
                border-right-width: 0;
                border-bottom-width: 0;
                ">2 * 1 = &nbsp;&nbsp;2<br>2 * 2 = &nbsp;&nbsp;4<br>2 * 3 = &nbsp;&nbsp;6<br>2 * 4 = &nbsp;&nbsp;8<br>2 * 5 = 10<br>2 * 6 = 12<br>2 * 7 = 14<br>2 * 8 = 16<br>2 * 9 = 18</td>
                <td align="center" style="
                border-bottom-width: 0;
                ">3 * 1 = &nbsp;&nbsp;3<br>3 * 2 = &nbsp;&nbsp;6<br>3 * 3 = &nbsp;&nbsp;9<br>3 * 4 = 12<br>3 * 5 = 15<br>3 * 6 = 18<br>3 * 7 = 21<br>3 * 8 = 24<br>3 * 9 = 27</td>
            </tr>
            <tr>
                <td align="center" style="
                border-right-width: 0;
                border-bottom-width: 0;
                ">4 * 1 = &nbsp;&nbsp;4<br>4 * 2 = &nbsp;&nbsp;8<br>4 * 3 = 12<br>4 * 4 = 16<br>4 * 5 = 20<br>4 * 6 = 24<br>4 * 7 = 28<br>4 * 8 = 32<br>4 * 9 = 36</td>
                <td align="center" style="
                border-right-width: 0;
                border-bottom-width: 0;
                ">5 * 1 = &nbsp;&nbsp;5<br>5 * 2 = 10<br>5 * 3 = 15<br>5 * 4 = 20<br>5 * 5 = 25<br>5 * 6 = 30<br>5 * 7 = 35<br>5 * 8 = 40<br>5 * 9 = 45</td>
                <td align="center" style="
                border-bottom-width: 0;
                ">6 * 1 = &nbsp;&nbsp;6<br>6 * 2 = 12<br>6 * 3 = 18<br>6 * 4 = 24<br>6 * 5 = 30<br>6 * 6 = 36<br>6 * 7 = 42<br>6 * 8 = 48<br>6 * 9 = 54</td>
            </tr> 
            <tr>
                <td align="center" style="
                border-right-width: 0;
                ">7 * 1 = &nbsp;&nbsp;7<br>7 * 2 = 14<br>7 * 3 = 21<br>7 * 4 = 28<br>7 * 5 = 35<br>7 * 6 = 42<br>7 * 7 = 49<br>7 * 8 = 56<br>7 * 9 = 63</td>
                <td align="center" style="
                border-right-width: 0;
                ">8 * 1 = &nbsp;&nbsp;8<br>8 * 2 = 16<br>8 * 3 = 24<br>8 * 4 = 32<br>8 * 5 = 40<br>8 * 6 = 48<br>8 * 7 = 56<br>8 * 8 = 64<br>8 * 9 = 72</td>
                <td align="center">9 * 1 = &nbsp;&nbsp;9<br>9 * 2 = 18<br>9 * 3 = 27<br>9 * 4 = 36<br>9 * 5 = 45<br>9 * 6 = 54<br>9 * 7 = 63<br>9 * 8 = 72<br>9 * 9 = 81</td>
            </tr>
            </tbody>
        </table>
    </center>
</body>
</html>
            `,
            
            // === 文字說明 ===
            content: `<p></p>
            <p>延伸第一份HTML的練習。</p>
            <p>練習框限表格，在表格中加入九九乘法表，必須注意內容的整齊度。</p>
            `
        },
        {
            name: "DIV排版",
            tools: "HTML, CSS",
            simulationCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DIV排版</title>
    <style>
        #container{
            width: 800px;
            height: 600px;
        }
        #header{
            background-color: orange;
            height: 100px;
            text-align: left;
        }
        #nav{
            background-color: deeppink;
            height: 25px;
            margin-top: 5px;
            text-align: left;
        }
        #aside{
            background-color: pink;
            width: 250px;
            height: 350px;
            margin-top: 5px;
            position:relative;
            right: 275px;
            text-align: left;
        }
        #article{
            background-color: deepskyblue;
            width: 545px;
            height: 350px;
            margin-top: 5px;
            margin-left: 5px;
            position: relative;
            left:125px;
            bottom:355px;
            text-align: left;
        }
        #section{
            background-color: yellow;
            width: 535px;
            height: 75px;
            margin-top: 5px;
            position: relative;
            left:128px;
            bottom:440px;
            text-align: left;
        }
        #footer{
            background-color: darkseagreen;
            margin-top: 5px;
            height: 110px;
            position: relative;
            text-align: left;
            bottom: 435px;
        }
    </style>
</head>
<body>
    <center>
        <a href="https://skys-kid-lai.github.io/1004/">原始的作業網頁...</a>
        <div id=container>
            <div id=header>header</div>
            <div id=nav>nav</div>
            <div id=aside>aside</div>
            <div id=article>article</div>
            <div id=section>section</div>
            <div id=footer>footer</div>
        </div>       
    </center>
</body>
</html>
            `,
            
            // === 文字說明 ===
            content: `<p></p>
            <p>依照範例實作DIV排版，必須注意內容的整齊度。</p>
            `
        },
        {
            name: "實作BLOG排版",
            tools: "HTML, CSS",
            simulationCode: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>BLOG排版</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
    crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"><\/script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"><\/script>
	<style type="text/css">
		.box{
			height: 300px;
		}
	</style>
</head>
<body>
	<!-- navbar -->
	<nav class="navbar navbar-expand-lg navbar-light bg-info">
	    <a class="navbar-brand" href="#" style="color: white;">
	    	<i class="fas fa-rss bg-info" style="color: white; font-size: 20px;"></i>
	    	<strong>部落格排版</strong>
	    </a>
	    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    	<ul class="navbar-nav mr-auto"></ul>
	      	<ul class="navbar-nav my-2 my-lg-0">
	        	<li class="nav-item active">
	            	<a class="nav-link" href="https://skys-kid-lai.github.io/1004/109-1ProgramLanguage/Homework_04.html" style="color: white;">Home <span class="sr-only">(current)</span></a>
        		</li>
	        	<li class="nav-item disabled">
	            	<a class="nav-link" href="#" style="color: white;">Link</a>
	        	</li>
	        </ul>
	    </div>
	</nav>
	<!-- container -->
	<div class="container" style="width: 1200px;">
		<!-- internal container (row) -->
		<div class="row">
			<div class="col-lg-8">
				<!-- breadcrumb -->
				<nav aria-label="breadcrumb">
				    <ol class="breadcrumb bg-white">
				    	<li class="breadcrumb-item"><a href="https://skys-kid-lai.github.io/1004/109-1ProgramLanguage/Homework_04.html" class="text-info">Home</a></li>
					    <li class="breadcrumb-item"><a href="https://skys-kid-lai.github.io/1004/109-1ProgramLanguage/Homework_04.html" class="text-info">Library</a></li>
					    <li class="breadcrumb-item active" aria-current="page">Data</li>
				  	</ol>
				</nav>
				<!-- blog's title -->
				<div class="col-12">
					<h1 class="text-info">部落格標題</h1>
					<div class="content">
						<i class="fas fa-user text-info"></i>
						<strong>作者&nbsp;&nbsp;</strong>
						<i class="far fa-clock text-info"></i>
						2020-11-29 12:11:29&nbsp;&nbsp;
						<i class="fas fa-tags text-info"></i>
						blog
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<!-- left -->
			<div class="container col-lg-8 bg-light" style="border-color: #d8d8d8; border-style: solid; border-width: thin; margin-bottom: 5px">
				<br>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime doloribus ab, perspiciatis accusamus quis pariatur iste, quo voluptatem fugit doloremque voluptatum dolorem, laboriosam. Sapiente dignissimos molestias laborum vero facere?</p>
				<h2 class="text-secondary"><strong>副標題</strong></h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque voluptate, animi expedita hic, ratione autem ipsa optio, veniam dolores neque accusantium? Amet necessitatibus nesciunt, labore ad debitis officiis molestiae.</p>
				<ul>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus, ipsa, amet magnam magni beatae. Temporibus, hic, repellendus commodi labore quam magni dolores nam praesentium provident illo, similique numquam? Amet!</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur minus enim sit, explicabo impedit perspiciatis voluptate similique reprehenderit sed temporibus quasi mollitia officiis odit unde possimus iure molestiae doloremque! Maxime!</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus animi sint, at, dolores dolorem sed ab, consectetur eum excepturi voluptate dignissimos sequi tenetur? Nulla unde saepe, ducimus placeat aut, possimus?</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis veniam ex odit nam praesentium? Cupiditate dolorem porro, possimus doloribus debitis sint magni accusantium placeat a aperiam repudiandae voluptas nam.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus fugiat eligendi, accusantium illo repellendus, dicta vitae rerum omnis, dolore molestias in earum corrupti. Fugit officiis officia hic praesentium quaerat est!</p>
					</li>
				</ul>
				<img src="https://fakeimg.pl/800x400/01dfd7/FFFFFF/?text=img placeholder" class="img-fluid">
				<div style="height: 10px;"></div>
				<div class="card">
				    <div class="card-header">
				    	留言板
				    </div>
				    <div class="card-body">
				    	<div class="media">
				    		<div style="padding-top: 40px">
							  	<img src="https://fakeimg.pl/70x70/01dfd7/FFFFFF/?text=img placeholder" class="align-self-center mr-3" class="img-fluid">
							</div>
						  	<div class="media-body">
						    	<h5 class="mt-0">留言內容</h5>
							    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
							    <div style="height: 5px;"></div>
							    <button type="button" class="btn btn-light btn-lg btn-block">提交</button>
						  	</div>
						</div>
						<div style="height: 20px;"></div>
						<div class="media">
							<img src="https://fakeimg.pl/70x70/01dfd7/FFFFFF/?text=img placeholder" class="align-self-center mr-3" class="img-fluid">
							<div class="media-body">
							    <h5 class="mt-0">Media&nbsp;heaping</h5>
							    <p>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Aliquid expedita vitae in debitis fuga iusto, autem optio illo nesciunt quas iure voluptates dolorem accusamus! Nisi voluptatibus in itaque reprehenderit fugiat.</p>
							</div>
						</div>
						<div class="media">
						    <img src="https://fakeimg.pl/70x70/01dfd7/FFFFFF/?text=img placeholder" class="align-self-center mr-3" class="img-fluid">
						    <div class="media-body">
						    	<h5 class="mt-0">Media&nbsp;heaping</h5>
						    	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem facere rerum, non animi! In similique maiores libero officiis expedita placeat fugiat beatae ea pariatur esse inventore, ratione animi molestias?</p>
						  	</div>
						</div>
				    </div>
				</div>
				<div style="height: 10px;"></div>
			</div>
			<!-- right -->
			<div class="container col-md-auto col-lg-3">
				<div class="row">
					<div class="col-12 bg-light" style="border-color: #d8d8d8; border-style: solid; border-width: thin;">
						<h3><strong>Tags</strong></h3>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badgeasd</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<span class="badge badge-info"><i class="fas fa-tags">Badge</i></span>
					<div style="height: 5px;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<center>
		<a href="https://skys-kid-lai.github.io/1004/109-1ProgramLanguage/Homework_04.html">Home</a>
	</center>
	<nav class="navbar navbar-expand-lg navbar-light bg-light" style="top: 20px;">
		<div class="container" style="width: 1200px;">
			<div class="row" style="width: 1200px;">
				<div class="col-2" style="left: 5px;">
					<h7>
						版權宣告
					</h7>
				</div>
				<div class="col-7"></div>
				<div class="col-3" style="background">
					<div class="container" style="justify-content: flex-end; right: 5px;">
						<span>&nbsp;<i class="fab fa-facebook-square text-info"></i>&nbsp;</span>
						<span><i class="fab fa-twitter text-info"></i>&nbsp;</span>
						<span><i class="fab fa-qq text-info"></i>&nbsp;</span>
						<span><i class="fab fa-line text-info"></i></span>
					</div>
				</div>
			</div>
		</div>
	</nav>
</body>
</html>
            `,
            
            // === 文字說明 ===
            content: `<p></p>
            <p>實作BLOG排版。</p>
            <p>這裡顯示的模擬網頁有問題，因此設定成在模擬網頁中點擊連結的話，模擬網頁會前往真實網頁，請小心使用。</p>
            `
        },
        {
            name: "九九乘法表",
            tools: "JS, HTML",
            simulationCode: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>九九乘法表</title>
</head>
<body>
	<center>
		<a href="https://skys-kid-lai.github.io/1004/109-1ProgramLanguage/Homework_05.html">原始的作業網頁...</a>
	</center>
</body>
<script>
	document.write("<table align=\"center\" width=\"300\" border=\"1\" style=\"border-collapse: collapse; border-width: 2px\">"+
		"<thead>"+
			"<td colspan=\"3\" align=\"center\" bgcolor=\"black\" style=\"color: #FFFFFF; font-size: 14px; font-weight: bold\">"+
				"九九乘法表"+
			"</td>");
	for (var i = 0, firstNum = 1; i < 3; firstNum % 3 == 0 ? i++ : i, firstNum++){
		if(firstNum == 4 || firstNum == 7)
			document.writeln("</tr>");
		if(firstNum % 3 == 1)
			document.writeln("<tr align=\"center\">");
		document.write("<td>");
			for (var j = 1; j < 10; j++)
				if(firstNum*j < 10)
					document.write(firstNum+"*"+j+"=&nbsp;&nbsp;"+firstNum*j+"<br>");
				else
					document.write(firstNum+"*"+j+"="+firstNum*j+"<br>");
		document.write("</td>");
	}
	document.write("</tr></thead>");
<\/script> 
</html>
            `,
            
            // === 文字說明 ===
            content: `<p></p>
            <p>第一份Java Script的練習。</p>
            <p>練習框限表格，在表格中加入九九乘法表，必須注意內容的整齊度。</p>
            <p>這裡顯示的模擬網頁有問題，因此設定成在模擬網頁中點擊連結的話，模擬網頁會前往真實網頁，雖然建議但也請小心使用。</p>
            `
        },
        {
            name: "期中&期末分組報告",
            tools: "HTML, JS, CSS",
            
            // === 文字說明 ===
            content: `<p></p>
            <p>期中以及期末分組報告，因為原本的網頁牽扯了不少跳轉問題，評估過後，決定以實際跳轉的方式呈現。</p>
            <p>她們做的網頁真的很好看！這邊放我們的成果，大家可以過去看看！</p>
            <p>不過因為網頁牽扯到時事議題，細項沒有後續更新，因此請當作參考就好！！</p>
            <br>
            <H2>期中報告</H2>
            <a href="https://maggie-zhuang.github.io/text/homework/hw04.html"  target="_blank">（在新分頁開啟）程式語言 期中考 -- 美國總統大選</a>
            <br><br>
            <H2>期末報告</H2>
            <a href="https://maggie-zhuang.github.io/text/homework/hw07.html"  target="_blank">（在新分頁開啟）程式語言 期末考 -- COVID-19</a>
            `
        }
    ]
});