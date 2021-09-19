/**
 * 构建前缀树
 * node 属性 label 单词字母
 * children 使用哈希映射存放子结点。哈希便于确认是否已经添加过某个字母对应的结点。
 * prefix  //从树的根到当前结点这条通路上，全部字母所组成的前缀。例如通路b->o->y，对于字母o结点而言，前缀是b；对于字母y结点而言，前缀是bo
 */
class TreeNode {
    constructor(){
        this.label =''
        this.children = new Map()
        this.prefix =''
    }
}

function createTree(parent,words){
  for(let word of words) {
    const firstChar = word[0]
    let found =null
    if(parent.children.get(firstChar)) {
        found = parent.children.get(firstChar)
    }else{
      for(let char of word){
        const currentNode = createNode(parent,char)
        parent = currentNode
        console.log('parent===>',parent)
      }
    } 
  }
}

function createNode(parent,char){
    const node = new TreeNode()
    node.label = char
    node.prefix = parent.prefix + char
    parent.children.set(char,node)
    return node
}

const root = new TreeNode()
createTree(root,['geek','geometry'])
console.log(JSON.stringify(root))

