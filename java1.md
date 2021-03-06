### 队列
首先队列是先进先出（FIFO）的结构，和我们直观的队列的认识是相同的。
平时使用的队列大多是有最大长度限制的（比如下载队列、任务处理队列）这些长度多是由条件限制而形成的，当然在平时的工作中，特别是算法的构建过程中，我们也会因为方便而用到不限制长度的动态队列。
#### 溢出及空队列条件
##### 空队列条件
一般来说，我们的队列经常会维护两个指针front、fore（严谨点说是对于链式队列是这样），如果出现`equal(front,fore)`则我们认为队列是空的
##### 溢出
**上溢出**：一般来说，出现上溢出就是超过队列的最大元素限制队列
**下溢出**：队列空
**假上溢出**：这种情况一般出现在我们用简单的定长数组来实现队列的时候出现
```Java
class QueueExm(){
    int[] elementData;
    //表示队列前指针
    int front;
    //队尾指针
    int fore;
    //....省略构造函数
    //出队的时候，直接让队前指针后移，容器中的元素位置不变
    public int pop(){
        if(!isEmpty())
            reture elementData[--front];
    }
    //入队的时候，直接让队尾指针后移
    public int offer(int num){
        elementData[fore++] = num;
        return num;
    }    
}
```
如果我们的队列构造类似于上述形式，那我们会发现队头尾指针在几次出队后就会渐渐向着`elementData.length`靠拢，从而会出发上溢出条件，但事实上队列中储存的元素数`fore-front`远远没有达到我们的设计长度`elementData.length`这么多，我们称这种现象为假上溢出。

###### 循环队列
为了解决假上溢出的现象，我们发明了循环队列，也就是让`fore`指针超过`elementData.length`后，直接从`0`开始，把`front`指针前面未被利用起来的空间给用起来。

当然现在由于我们常用的语言包中都内置了高效的定长函数的处理函数，比如会让元素永远左对齐的定长数组`ArrayList`，我们很多时候如果不需要采用很高效的代码，或者队列长度不会很长的时候，我们可以直接使用这些封装好的数据结构来构造我们的队列。

Tips：
一般来说，在java中，我们类中使用的常数，我们会定义为`private static final`


#### JDK中的队列
JDK的util类中实现了`Queue`接口，该接口继承了`collection`

之所以这样子，首先我们要知道一个概念叫窄化，大致的意思就是把很多功能给锁了，而只开放部分功能，比如我们如果一个方法中`public void Method(Queue<Integer> queue)`。那么后面我们在函数体中使用我们传入的参数`queue`的时候只能使用实现了接口`Queue`中的方法（虽然我们在定义这个`queue`的时候是`Queue<E> queue = new LinkedList()`）,再岔开一句`LinkedList`类实现了接口`Queue`的子类`Deque`,Deque的意思是 "double ended queue"，也就是双端队列，其中的元素可以从两端弹出，也就是同时具有栈和队列的性质。

##### 多岔开一句
`Queue`的实现分为通用实现和并发实现。
并发实现，很显然加入了同步特性（暂时不知道怎么用专业术语描述这些事……还得在学一下）
通用实现则存在线程不安全的代码。


`Deque`的通用实现主要有两个：`ArrayDeque`和`LinkedList`,前者是个可变数组，后者是个链表，根据JDK中的说辞，由于`Deque`即可作为queue也可以当做stack，当当做stack用的时候，它的效率比`Stack`高，当做队列用的时候比`LinkedList`效率要高

### 栈
这个比较常见，机制是先进后出，有点像往杯子里放东西，先放进去的东西全都跑道杯底去了

##### JDK
这里没什么好说的，主要就是`peek()`、`pop()`、`search()`方法是线程安全的