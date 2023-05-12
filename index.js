
class Node{

        
        constructor(val)
        {
            this.val = val;
            this.next = null;
        }
}

class LL{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val){

        var node = new Node(val);

        let print = document.getElementById('display');
        let nodeBox = document.createElement('span');
        
        if(this.head==null){
            this.head = this.tail = node;
            nodeBox.classList.add('headNode');
            nodeBox.innerHTML = node.val;
            print.appendChild(nodeBox);
            return this;
        }
        
        this.tail.next = node;
        this.tail = node;
        this.size ++;

        nodeBox.classList.add('node');
        nodeBox.innerHTML = node.val;
        print.appendChild(nodeBox);

        return this;
    }

    pop(){
        let print = document.getElementById('display');
        
        if(this.head==null)
        {
            console.log("Queue empty!")
            return this;
        }

        let node = this.head;
        if(this.head==this.tail){
            this.head = this.tail = this.head.next;
            print.removeChild(print.firstElementChild);


        }else{
            this.head = this.head.next;
            node.next = null;
            print.removeChild(print.firstElementChild);
            print.firstElementChild.classList.remove('node');
          
                
            print.firstElementChild.classList.add('headNode');
            
        }   
        

      
       

        return this;

    }


    search(index){
        var temp = head;
        while(index>0)
        {
            console.log(temp.val);
            temp = temp.next;
            index--;
        }
    }


}   


var list = new LL();

list.push(2);
list.push(3);
list.push(5);
list.push(8);



function pushFunction(){
    
        let input = document.getElementById('data').value;
        console.log(input);
        console.log(list);
        list.push(input);
}

function popFunction(){

    list.pop();
    console.log(list);
}
    
