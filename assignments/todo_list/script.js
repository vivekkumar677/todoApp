function createtodo(){
    var tag = document.createElement("p");
    tag.setAttribute("key",index)
    index+=1
    tag.addEventListener("click",function(){
        this.remove()
    })
    var newtodo = document.getElementsByTagName('input')[0].value
    var text = document.createTextNode(newtodo)
    
    var element = document.getElementsByClassName("todos")[0]
    tag.appendChild(text)
    element.appendChild(tag)

}


var index=0
var form=document.getElementsByTagName("button")[0]
form.addEventListener('click',createtodo)