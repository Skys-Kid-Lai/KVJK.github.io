csData.push({
    id: "java-ds",
    title: "資料結構 - 以 Java 實作",
    type: "course",
    meta: "資料結構 | 2022.09~2023.01 | Java",
    items: [
        { 
            name: "鏈結串列", 
            tools: "Java", 
            content: `
>>最後編輯 Mon, Nov 26, 2022 11:25 AM<br>
>>移植時間 Thu, Dec 18, 2025 09:46 PM
___
<br>

## 題目敘述
<p></p>
學校學生本學期有五門必修課，為同學們建立功課表的串列，該串列可輸入：<br>
1. 課程名稱 (String)<br>
2. 上課時間 (Int)<br>
3. 教室代碼 (Int)<br>
<br>
輸出要求：<br>
1. 輸出本學期所有必修課<br>
2. 使用鏈結串列 (Linked List) 來實作此功課表<br>
<br>

## 程式碼 

\`\`\`clink=
import java.io.*;
class ClassWork_0926_1110832059 
{
	public static void main(String[] args) throws IOException
	{
		BufferedReader buf;
		buf=new BufferedReader(new InputStreamReader(System.in));
		String DataName;
		String time;
		String Classroom;

		System.out.println("請輸入3組課程資料：");
		LinkedList list=new LinkedList();
		for(int i=0; i<3; i++)
		{
			System.out.print("Insert ClassName: ");
			DataName=buf.readLine();
			System.out.print("Insert ClassTime: ");
			time=buf.readLine();
			System.out.print("Insert ClassRoom: ");
			Classroom=buf.readLine();

			list.insert(DataName,time,Classroom);
			System.out.println("--------------------");
		}
        System.out.println("Class Data: ");
		System.out.println("ClassName|ClassTime|ClassRoom =========================");
		list.print();
	}
}
class Node
{
	String DataName;
	String time;
	String Classroom;
	Node next;
	public Node(String DataName,String time,String Classroom){
		this.time=time;
		this.Classroom=Classroom;
		this.DataName=DataName;
		this.next=null;
	}
}
class LinkedList
{
	public Node first;
	public Node last;
	public boolean isEmpty()
	{
		return first==null;
	}
	public void print()
	{
		Node current=first;
		while(current!=null)
		{
			System.out.println("["+current.DataName+" "+current.time+" "+current.Classroom+"]");
			current=current.next;
		}
		System.out.println();
	}
	public void insert(String DataName,String time,String Classroom){
		Node newNode=new Node(DataName,time,Classroom);
		if(this.isEmpty())
		{
			first=newNode;
			last=newNode;
		}
		else
		{
			last.next=newNode;
			last=newNode;
		}
	}
}
\`\`\`
## 錯誤資訊

原本在41行：
\`\`\`java
public class LinkedList
{
	public Node first;
	public Node last;
	public boolean isEmpty()
	{
\`\`\`
<b>修改原因：</b><br>
一個程式碼，無法出現兩個擁有public的class<br>
<b>修改方式：</b><br>
刪除主程式外class的public<br>
<br>
## 用書資訊：
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        },
        { 
            name: "鏈結串列程式碼_新增修改刪除查詢", 
            tools: "Java", 
            content: `
>>最後編輯 Wed, Jan 18, 2023 7:53 PM<br>
>>移植時間 Thu, Dec 18, 2025 11:20 PM
___
<br>

## 題目敘述
每筆資料可存入<br>
1.座號<br>
2.姓名<br>
3.成績<br>
<br>
電腦提供使用者選擇所需功能<br>
1.新增一筆資料 <br>
2.刪除某筆資料(使用者輸入座號) <br>
3.查詢某筆資料(使用者輸入座號) <br>
4.查詢全部資料<br>
<br>

## 程式碼

\`\`\`clink=
import java.io.*;
import java.util.Scanner;
class ClassWork_1110832059_1003 
{
	public static void main(String[] args) throws IOException
	{
		BufferedReader buf;
		buf=new BufferedReader(new InputStreamReader(System.in));
		int DataNumber;
		String name;
		String grade;
		int findword;
		
		LinkedList list=new LinkedList();
		String input;
        while(1==1) 
		{
			System.out.print("Please insert the funtion you want to do: ");
            Scanner in = new Scanner(System.in);
            input = in.next();
            switch(input) {
                //輸入n新增資料
                case "n":
                    System.out.print("No: ");
                    DataNumber=Integer.parseInt(buf.readLine());
                    System.out.print("Name: ");
                    name=buf.readLine();
                    System.out.print("Score: ");
                    grade=buf.readLine();
                    list.insert(DataNumber,name,grade);
                    System.out.println("-------------");
                    break;
               //輸入d刪除該資料
                case "d":
                    System.out.print("Insert the number need to delete: ");
                    findword=Integer.parseInt(buf.readLine());
               
                    Node current=new Node(list.first.DataNumber,list.first.name,list.first.grade);
                    current.next=list.first.next;
                    while(current.DataNumber!=findword) 
						current=current.next;
                    list.delete(current);
                   
                    break;
               //輸入l輸出現在有的全部資料
                case "l":
                    System.out.println("=============");
                    System.out.println("Score List");
                    list.print();
                   
                    break;
				//離開程式
				case "b":		//輸入b則結束程式
					System.exit(1);
                //查詢該筆資料
				case "i":
					System.out.print("Insert the number need to find: ");
                    findword=Integer.parseInt(buf.readLine());
               
                    Node current2=new Node(list.first.DataNumber,list.first.name,list.first.grade);
                    current2.next=list.first.next;
                    while(current2.DataNumber!=findword) 
						current2=current2.next;
					list.contains(current2);
                   
                    break;
            }
           
        }
	}
}
class Node
{
	int DataNumber;
	String name;
	String grade;
	Node next;
	public Node(int DataNumber,String name,String grade){
		this.name=name;
		this.grade=grade;
		this.DataNumber=DataNumber;
		this.next=null;
	}
}
class LinkedList
{
	public Node first;
	public Node last;
	public boolean isEmpty()
	{
		return first==null;
	}
	public void print()
	{
		Node current=first;
		while(current!=null)
		{
			System.out.println("["+current.DataNumber+"             "+current.name+"             "+current.grade+"]");
			current=current.next;
		}
		System.out.println();
	}
	public void insert(int DataNumber,String name,String grade){
		Node newNode=new Node(DataNumber,name,grade);
		if(this.isEmpty())
		{
			first=newNode;
			last=newNode;
		}
		else
		{
			last.next=newNode;
			last=newNode;
		}
	}
	public void delete(Node delNode){
		Node newNode;
		Node tmp;
		if(first.DataNumber==delNode.DataNumber)
		{
			first=first.next;
		}
		else if(last.DataNumber==delNode.DataNumber)
		{
			System.out.println("["+delNode.DataNumber+"             "+delNode.name+"             "+delNode.grade+"]");
			newNode=first;
			while(newNode.next!=last)
				newNode=newNode.next;
			newNode.next=last.next;
			last=newNode;
		}
		else
		{
			newNode=first;
			tmp=first;
			while(newNode.DataNumber!=delNode.DataNumber)
			{
				tmp=newNode;
				newNode=newNode.next;
			}
			tmp.next=delNode.next;
		}
	}
	public void contains(Node conNode){
		if(conNode.DataNumber==conNode.DataNumber)
		{
			System.out.println("["+conNode.DataNumber+"             "+conNode.name+"             "+conNode.grade+"]");
		}
		
	}
}
\`\`\`

## 結果圖示
<img src="https://i.imgur.com/k0Apbnr.png" alt="結果" style="width: 50%; display: block; margin: 20px auto;">
<br>

## 用書資訊：
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        },
        { 
            name: "Stack By Array", 
            tools: "Java", 
            content: `
>>最後編輯 Wed, Jan 18, 2023 07:45 PM<br>
>>移植時間 Thu, Dec 19, 2025 00:01 AM
___
<br>

## 題目敘述
請設計一個堆疊(Stack)類別，利用陣列(Array)來實作堆疊的基本操作。<br>
<br>

## 程式碼
\`\`\`java
import java.io.*;

class ClassWork_1110832059_1017_stackByArray 
{
	public static void main(String[] args) throws IOException 
	{
		BufferedReader buf;
		int val;
		StackByArray stack = new StackByArray(10);
		buf = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Please push ten number: ");

		for(int i = 0; i < 10; i++)
		{
			val = Integer.parseInt(buf.readLine());
			stack.Push(val);
		}
		System.out.println("========================");

		while(!stack.Empty())
			System.out.println("The stack in array is: " + stack.Pop());
	}
}

class StackByArray
{
	private int[] stack;
	private int TopNum;
	
	public StackByArray(int StackSize)
	{
		stack = new int [StackSize];
		TopNum =- 1;
	}

	public boolean Push(int data)
	{
		if(TopNum >= stack.length)
		{
			System.out.println("The stack is full, cannot insert anymore");
			return false;
		}
		else
		{
			stack[++TopNum] = data;
			return true;
		}
	}

	public boolean Empty()
	{
		if(TopNum == -1)
			return true;
		else
			return false;
	}

	public int Pop()
	{
		if(Empty())
			return -1;
		else
			return stack[TopNum--];
	}
}
\`\`\`

## 結果圖示
<img src="https://i.imgur.com/be0tQOh.png" alt="結果" style="width: 30%; display: block; margin: 20px auto;">
<br>

## 用書資訊：
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        },
        { 
            name: "Stack By List", 
            tools: "Java", 
            content: `
>>最後編輯 Wed, Jan 18, 2023 07:54 PM<br>
>>移植時間 Thu, Dec 19, 2025 00:06 AM
___
<br>

## 題目敘述
請設計一個堆疊(Stack)類別，利用鏈結串列(Linked List)來實作堆疊的基本操作。<br>
<br>

## 程式碼
\`\`\`java
import java.io.*;

class ClassWork_1110832059_1017_stackByList 
{
	public static void main(String[] args) throws IOException
	{
		BufferedReader buf;
		buf = new BufferedReader(new InputStreamReader(System.in));
		StackByLink stack = new StackByLink();
		int choice = 0;
		while(true)
		{
			System.out.print("[0: End, 1: Push, 2: Pop]: ");
			choice = Integer.parseInt(buf.readLine());
			if(choice == 2)
			{
				stack.Pop();
				System.out.println("The stack after the number poped: ");
				stack.PrintStack();
			}
			else if(choice == 1)
			{
				System.out.print("Please insert number into the stack: ");
				choice = Integer.parseInt(buf.readLine());
				stack.Insert(choice);
				System.out.println("The stack after the number inserted: ");
				stack.PrintStack();
			}
			else if(choice == 0)
				break;
			else
				System.out.println("Insert Error!");
		}
	}
}


class Node
{
	int data;
	Node next;
	public Node(int data)
	{
		this.data = data;
		this.next = null;
	}
}

class StackByLink
{
	public Node front;
	public Node rea;

	public boolean isEmpty()
	{
		return front == null;
	}

	public void PrintStack()
	{
		Node current = front;
		while(current != null)
		{
			System.out.print("[" + current.data + "]");
			current = current.next;
		}
		System.out.println();
	}

	public void Insert(int data)
	{
		Node newNode = new Node(data);
		if(this.isEmpty())
		{
			front = newNode;
			rea = newNode;
		}
		else
		{
			rea.next = newNode;
			rea = newNode;
		}
	}

	public void Pop()
	{
		Node newNode;
		if(this.isEmpty())
		{
			System.out.println("It's an empty stack");
			return;
		}
		newNode = front;
		if(newNode == rea)
		{
			front = null;
			rea = null;
			System.out.println("It's an empty stack");
		}
		else
		{
			while(newNode.next != rea)
				newNode = newNode.next;
			newNode.next = rea.next;
			rea = newNode;
		}
	}
}
\`\`\`

## 結果圖示
<img src="https://i.imgur.com/6sieNZ1.png" alt="結果" style="width: 50%; display: block; margin: 20px auto;">
<br>

## 用書資訊：
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        },
        { 
            name: "Queue Implementation", 
            tools: "Java", 
            content: `
>>最後編輯 Wed, Jan 18, 2023 08:04 PM<br>
>>移植時間 Thu, Dec 19, 2025 00:10 AM
___
<br>

## 題目敘述

請設計一個佇列結構，此結構用來記錄急診室七個診間病人的叫號順序<br>
可選擇使用陣列、也可選擇使用串列<br>
可使用一般佇列、也可使用環狀佇列、也可使用雙向佇列<br>
<br>
病人資料<br>
時間序號(202210240900)<br>
身分證號碼(一碼英文+九碼數字)<br>
連絡電話(十碼數字)<br>
<br>
功能<br>
1.新增叫號病人<br>
2.移除結束看診之病人<br>
3.顯示候診順序<br>
<br>

## 程式碼
\`\`\`java=
import java.io.*;
import java.util.Scanner;
import java.util.Queue;
import java.util.LinkedList;

class ClassWork_1110832059_1024_Queue 
{
	private String password, phonenum, datetime;
	
	//checking for charters and length of Date time is correct
	public String MathDate(String datetime)
	{
		Scanner scn = new Scanner(System.in);

		this.datetime = datetime;
		int rite = 0;
		//looking for which charter is not a number or input's length is not correct
		for(int i = 0; i < datetime.length(); i++)
		{
			rite = datetime.charAt(i);
			
			if((rite < 47 || rite > 58) || datetime.length() < 12)
			{
				System.out.println("	Format is not correct ! !\n");
				System.out.print("	input yyyyddddtttt: ");
				datetime = scn.next();
				return MathDate(datetime);
			}
		}
		return datetime;
	}

	//checking for first word and another words of ID number are correct
	public String MathPass(String password)
	{
		Scanner scn = new Scanner(System.in);

		this.password = password;
		int rite = 0, sum = 0;
		for(int i = 0; i < password.length(); i ++)
		{
			rite = password.charAt(i);
			//checing for first charter is a word at english
			if(i == 0 && (rite > 64 && rite < 91))
				sum ++;
			//checking for other of first word are number
			else if(i >= 1 && (rite > 47 && rite < 58))
				sum ++;
			else
			{
				System.out.println("	Format is not correct !\n" );
				System.out.print("	input ex:A123456789: ");
				password = scn.next();
				return MathPass(password);
			}

			if(password.length() != 10)
			{
				System.out.println("	Format is not correct !\n" );
				System.out.print("	input ex:A123456789: ");
				password = scn.next();
				return MathPass(password);
			}
		}
		return password;
	}
	
	//checking for length and charters of phone number are correct
	public String MathPhone(String phonenum)
	{
		Scanner scn = new Scanner(System.in);

		this.phonenum = phonenum;
		int rite = 0;
		//checking for length of phone number is correct
		if(phonenum.length() != 10)
		{
			System.out.println("	Format is not correct !\n" );
			System.out.print("	input 09xxxxxxxx: ");
			phonenum = scn.next();
			return MathPhone(phonenum);	
		}
		//checking for charters of phone number are correct
		for(int i = 0; i < phonenum.length(); i++)
		{
			rite = phonenum.charAt(i);
			if(rite < 47 || rite > 58)
			{
				System.out.println("	Format is not correct !\n");
				System.out.print("	input 09xxxxxxxx: ");
				phonenum = scn.next();
				return MathPhone(phonenum);
			}
		}
		return phonenum;
	}

	//Main
	public static void main(String[] args) throws IOException
	{
		ClassWork_1110832059_1024_Queue sequl = new ClassWork_1110832059_1024_Queue();
		Queue<String> queue = new LinkedList<String>();

		Scanner scn = new Scanner(System.in);
		String time,password,phonenum;


		while(1 == 1)
		{
			System.out.print("insert[n], see all[a], delete[d], over program[b]: ");
            String choise = scn.next();
			System.out.println();
			switch(choise)
			{
				//Select
				case "n":
					if(queue.size() < 21)
					{
						//date
						System.out.print("	input yyyyddddtttt: ");
						time = scn.next();
						time = sequl.MathDate(time);
						queue.offer(time);
					
						//password
						System.out.print("	input ex:A123456789: ");
						password = scn.next();
						password = sequl.MathPass(password);
						queue.offer(password);
					
						//phone number
						System.out.print("	input 09xxxxxxxx: ");
						phonenum = scn.next();
						phonenum = sequl.MathPhone(phonenum);
						queue.offer(phonenum);

						//********list.insert(time,password,phonenum); //Node
						System.out.println("------------------");
					}
					else if(queue.size() >= 21)
					{
						System.out.println("List is full ! Please delete some data !");
					}
					System.out.println();
					break;

				//Watch all in queue
				case "a":
                    System.out.println("Disp List");
                    //list.print(); //Node
					System.out.println();
					int train = 0;
					for(String q : queue)
					{
						if(train < 3)
							System.out.print(q +"             ");
						if(train == 3)
						{
							System.out.println();
							System.out.print(q +"             ");
							train = 0;
						}
						train ++;
					}
					System.out.println("\n------------------");
					System.out.println("\n");
					break;

				//Delete one which at queue first sit
				case "d":
					if(queue.peek() != null)
					{
						System.out.println("Delete this data now: ");
						for(int i = 0; i < 3; i++)
						{
							//System.out.print(queue.remove() +"             ");
							System.out.print(queue.poll() +"             ");
						}
						System.out.println();
					}
					else if(queue.peek() == null)
						System.out.println("No data here now, please insert data !");

					System.out.println("\n");
					break;

				//end program
				case "b":
					System.exit(1);
					break;
			}
		}
	}
}
\`\`\`

## 結果圖示
<img src="https://i.imgur.com/lN3vM39.png" alt="結果" style="width: 70%; display: block; margin: 20px auto;">
<br>

## 用書資訊：
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        },
        { 
            name: "Binary Tree", 
            tools: "Java", 
            content: `
>>最後編輯 Wed, Jan 18, 2023 08:08 PM<br>
>>移植時間 Thu, Dec 19, 2025 00:14 AM
___
<br>

## 題目敘述
請實作一棵二元樹，陣列或鏈結串列都可以，只要能提供以下功能<br>
1.詢問使用者需要輸入多少資料<br>
2.讓使用者輸入資料<br>
<br>
使用者存好之後，自動列印出依序存入的二元樹…<br>
1.中序走訪<br>
2.後序走訪<br>
3.前序走訪<br>
<br>

## 程式碼
\`\`\`java=
import java.io.*;
import java.util.Scanner;

class TreeNode
{
	int value;
	TreeNode leftNode;
	TreeNode rightNode;

	public TreeNode(int value)
	{
		this.value = value;
		this.leftNode = null;
		this.rightNode = null;
	}
}

class BinaryTree
{
	public TreeNode rootNode;

	public void AddNodeToTree(int value)
	{
		if(rootNode == null)
		{
			rootNode = new TreeNode(value);
			return;
		}
		TreeNode currentNode = rootNode;
		while(true)
		{
			if(value < currentNode.value)
			{
				if(currentNode.leftNode == null)
				{
					currentNode.leftNode = new TreeNode(value);
					return;
				}
				else
					currentNode = currentNode.leftNode;
			}
			else
			{
				if(currentNode.rightNode == null)
				{
					currentNode.rightNode = new TreeNode(value);
					return;
				}
				else
					currentNode = currentNode.rightNode;
			}
		}
	}

	public void InOrder(TreeNode node)
	{
		if(node != null)
		{
			InOrder(node.leftNode);
			System.out.print("[" + node.value + "]" + " ");
			InOrder(node.rightNode);
		}
	}

	public void PreOrder(TreeNode node)
	{
		if(node != null)
		{
			System.out.print("[" + node.value + "]" + " ");
			PreOrder(node.leftNode);
			PreOrder(node.rightNode);
		}
	}

	public void PostOrder(TreeNode node)
	{
		if(node != null)
		{
			PostOrder(node.leftNode);
			PostOrder(node.rightNode);
			System.out.print("[" + node.value + "]" + " ");
		}
	}
} 

class ClassWork_1110832059_1114_PIPBTree 
{
	public static void main(String[] args) 
	{
		Scanner scn = new Scanner(System.in);
		System.out.print("請輸入需要的陣列大小：");
		int n = scn.nextInt();
		int[] arr = new int[n];
		System.out.println("請輸入陣列內容，並以換行分隔： ");
		for(int i = 0; i < arr.length ; i++)
		{
			arr[i] = scn.nextInt();
		}

		BinaryTree tree = new BinaryTree();
		System.out.println("=================================");
		System.out.println("原始陣列內容：");
		for(int i = 0; i < arr.length; i++)
		{
			System.out.print("[" + arr[i] + "]" + " ");
		}
		System.out.println("\n");
		
		for(int i = 0; i < arr.length; i++)
			tree.AddNodeToTree(arr[i]);
		System.out.println("前序走訪：");
		tree.PreOrder(tree.rootNode);
		System.out.println("\n");

		System.out.println("中序走訪：");
		tree.InOrder(tree.rootNode);
		System.out.println("\n");

		System.out.println("後序走訪：");
		tree.PostOrder(tree.rootNode);
		System.out.println("\n");
	}
}
\`\`\`

## 結果圖示
<img src="https://i.imgur.com/0yQeZ94.png" alt="結果" style="width: 40%; display: block; margin: 20px auto;">
<br>

## 用書資訊：
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        },
        { 
            name: "Graph", 
            tools: "Java", 
            content: `
>>最後編輯 Wed, Jan 18, 2023 08:12 PM<br>
>>移植時間 Thu, Dec 19, 2025 00:21 AM
___
<br>

## 題目敘述
將城市視為節點，火車路線視為邊<br>
1.節點：TP-台北、TC-台中、TN-台南、KCG-高雄、TT-台東<br>
2.邊，分別為五個城市之間的火車路線：<br>
&nbsp;&nbsp;&nbsp;&nbsp;E1：台北-台中[直達]<br>
&nbsp;&nbsp;&nbsp;&nbsp;E2：台中-台南[直達]<br>
&nbsp;&nbsp;&nbsp;&nbsp;E3：台北-高雄[直達]<br>
&nbsp;&nbsp;&nbsp;&nbsp;E4：台南-高雄[直達]<br>
&nbsp;&nbsp;&nbsp;&nbsp;E5：高雄-台東[直達]<br>
&nbsp;&nbsp;&nbsp;&nbsp;E6：台東-台北[直達]<br>
<br>

### 基本題
1.請嘗試用圖形結構來儲存上圖<br>
2.請以先深後廣法進行走訪，並列印出走訪後之城市順序 <br>
<br>

### 挑戰題
請嘗試用圖形結構來儲存上圖 <br>
選單1: 新增城市 <br>
選單2: 新增連線 <br>
選單3: 先深後廣法進行走訪，並列印出走訪後之城市順序<br> 
<br>

## 程式碼
\`\`\`java=
class Node
{
	int x;
	Node next;
	public Node(int x)
	{
		this.x = x;
		this.next = null;
	}
}
class GraphLink
{
	public Node first;
	public Node last;
	public boolean isEmpty()
	{
		return first == null ;
	}
	public void print()
	{
		String station[] = {"","TP","KCG","TT","TN","TC"};
		int stop = 0;
		Node current = first;
		while(current != null)
		{
			stop = current.x;
			System.out.print("[" + station[stop] + "]");
			//System.out.print("[" + stop + "]");
			current = current.next;
		}
		System.out.println();
	}
	public void insert(int x)
	{
		Node newNode = new Node(x);
		if(this.isEmpty())
		{
			first = newNode;
			last = newNode;
		}
		else
		{
			last.next = newNode;
			last = newNode;
		}
	}
}
class  ClassWork_1110832059_1205_Graph
{
	public static int run[] = new int[7];
	public static GraphLink Head[] = new GraphLink[7];
	public static String station[] = {"","TP","KCG","TT","TN","TC"};
	public static void Dfs(int current)
	{
		run[current] = 1;
		System.out.print("[" + station[current] + "]");

		while((Head[current].first) != null)
		{
			if (run[Head[current].first.x] == 0)
			{
				Dfs(Head[current].first.x);
			}
			Head[current].first = Head[current].first.next;
		}
	}
	public static void main(String[] args) 
	{
		//String station[] = {"TP","KCG","TT","TN","TC"};
		int StopStep[][] = {{1,2},{2,1},{2,3},{3,2},{2,4},{4,2},{1,3},{3,1},{4,5},{5,4},{1,5},{5,1}};

		int StopCipher;
		int j,i;
	
		System.out.println("圖形的鄰接串列內容：");
		for(i = 1; i < 6; i++)
		{
			run[i] = 0;
			Head[i] = new GraphLink();
			System.out.print("停靠站：" + station[i] + " => ");
			for (j = 0; j < 12 ; j ++)
			{

				//System.out.println("CipherStop == " + j + "||" + i);
				if(StopStep[j][0] == i)
				{
					//System.out.println("Cipher == " + j + "||" + i);
					StopCipher = StopStep[j][1];
					//System.out.println("Header == " + i);
					Head[i].insert(StopCipher);
				}
			}
			Head[i].print();
		}
		System.out.println("走訪頂點： ");
		Dfs(1);
		System.out.println("");
	}
}
\`\`\`

## 結果圖示
<img src="https://i.imgur.com/BwijJR1.png" alt="結果" style="width: 40%; display: block; margin: 20px auto;">
<br>

## 用書資訊：
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        },
        { 
            name: "Sorting Algorithms", 
            tools: "Java", 
            content: `
>>最後編輯 Wed, Jan 18, 2023 08:17 PM<br>
>>移植時間 Thu, Dec 19, 2025 00:29 AM
___
<br>

## 題目敘述
測資：課本第8-56頁第8題，11, 8, 14, 7, 6, 8', 23, 4 <br>
<br>
排序 <br>
1.氣泡法<br>
2.選擇法<br>
3.插入法<br>
<br>
輸出內容<br>
1.第N回排序結果<br>
2.比較次數<br>
3.交換次數<br>
<br>

## 程式碼
\`\`\`java=
class ClassWork_1110832059_1212_Sorting extends Object
{
	int data[] = new int[]{11,8,14,7,6,8,23,4};
	int bdata[] = new int[]{11,8,14,7,6,8,23,4};
	int sdata[] = new int[]{11,8,14,7,6,8,23,4};
	int idata[] = new int[]{11,8,14,7,6,8,23,4};

	public static void main(String[] args) 
	{
		ClassWork_1110832059_1212_Sorting point = new ClassWork_1110832059_1212_Sorting();

		System.out.println("----------原始資料----------");
		point.ShowArr();

		System.out.println("\n----------氣泡排序----------");
		point.ShowBubble();

		System.out.println("\n----------選擇排序----------");
		point.ShowSelect();

		System.out.println("\n----------插入排序----------");
		point.ShowInsert();
	}

	public void ShowArr()
	{
		for (int i = 0;i < data.length ;i++ )
		{
			System.out.print(data[i] + " ");
		}
		System.out.println();
	}

	public void ShowBubble()
	{
		int compare = 0, change = 0, i, j, tmp;
		for (i = bdata.length-1; i >= 0 ; i-- )
		{
			for (j = 0; j < i; j++ )
			{
				if(bdata[j+1] < bdata[j])
				{
					tmp = bdata[j];
					bdata[j] = bdata[j+1];
					bdata[j+1] = tmp;
					change ++;
					compare ++;
				}
				else
					compare ++;
			}
			
			System.out.print("第" + (bdata.length-i) + "次排序後的結果：");
			for (j = 0; j < bdata.length ; j++ )
			{
				System.out.print(bdata[j] + " ");
			}
			System.out.println();
		}

		System.out.println("\n比較次數：" + compare + "             交換次數：" + change);
	}

	public void ShowSelect()
	{
		int compare = 0, change = 0, tmp,i,j;
		for (i = 0; i < sdata.length -1; i++)
		{
			for (j = i+1; j < sdata.length; j++)
			{
				if(sdata[j] < sdata[i])
				{
					tmp = sdata[i];
					sdata[i] = sdata[j];
					sdata[j] = tmp;
					change ++;
					compare ++;
				}
				else
					compare ++;
			}
			System.out.print("第" + (i+1) + "次排序後的結果：");
			for (j = 0; j < sdata.length ; j++ )
			{
				System.out.print(sdata[j] + " ");
			}
			System.out.println();
		}
		System.out.println("\n比較次數：" + compare + "             交換次數：" + change);
	}

	public void ShowInsert()
	{
		int compare = 0, change = 0, tmp, i, j, k;
		for (i = 1; i < idata.length; i++)
		{
			tmp = idata[i];
			j = i -1;
			
			while(j >= 0 && tmp < idata[j])
			{
				idata[j+1] = idata[j];
				j--;
				compare++;
			}
			change++;
			idata[j+1] = tmp;
			System.out.print("第" + i + "次排序後的結果：");
			for(k = 0; k <idata.length; k ++)
			{
				System.out.print(idata[k] + " ");
			}
			System.out.println();
		}
		System.out.println("\n如果第二小於第一元素的次數：" + compare + "\n將最小的元素向前放的次數：" + change);
	}
}
\`\`\`

## 結果圖示
<img src="https://i.imgur.com/9LMRl5g.png" alt="結果" style="width: 40%; display: block; margin: 20px auto;">
<br>

## 用書資訊
>書名：圖解資料結構 使用java（第三版）<br>
>作者：吳燦銘、胡昭民<br>
>出版社：博碩文化<br>
>出版年份：2018年05月<br>
            `
        }
    ]
});