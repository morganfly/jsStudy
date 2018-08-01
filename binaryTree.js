class BinarySearchTree {
    constructor() {
        global = null;
    }



    // 插入某个键到二叉树中
    insert(key) {
        let newNode = new Node(key)

        if (global === null) {
            global = newNode
        } else {
            this.insertNode(global, newNode)
        }
    }

    // 用于插入子节点
    // @param {Node} node    根节点
    // @param {Node} newNode 要插入的节点

    insertNode(node, newNode) {
        // 由于二叉搜索树的性质,当键小于当前所在键值时
        // 则使得左子结点成为新的要比较的节点,进行递归调用
        // 如果左子结点为Null,则将键值赋值给左子结点
        // 如果键值大于当前所在的节点的键值,原理同上

        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 中序遍历方法
    /*
        中序遍历操作,常用于排序.会把树中元素从小到大地打印出来.
        因为在js中,遇到递归的规则是,会优先调用递归函数,直到递归不再进行.
        然后会在递归调用的最后的一个函数中执行其他语句,再一层层升上去.
        中序遍历会从小到大输出结果

        @param {functon} callback 

    */

    inOrderTraverse(callback) {
        this._inOrderTraverseNode(global, callback)
    }

    /* 
        中序遍历辅助函数
        @param {Node} node 遍历开始的节点,默认为global
        @param {function} callback 获取到节点后的回调函数
    */

    _inOrderTraverseNode(node, callback) {
        // 当前节点不会NULL则继续调用递归
        if (node != null) {
            this._inOrderTraverseNode(node.left, callback)
            // 获取到节点后,调用函数
            callback(node.key)
            this._inOrderTraverseNode(node.right, callback)
        }
    }

    // 前序遍历方法
    /*
        前序遍历操作,常用于打印一个结构化的文档
        @param {function} 取到节点后的回调函数
    */

    preOrderTraverse(callback) {
        this._preOrderTraverse(global, callback)
    }

    _preOrderTraverse(node, callback) {
        if (node != null) {
            callback(node.key)
            this._preOrderTraverse(node.left, callback)
            this._preOrderTraverse(node.right, callback)
        }
    }

    // 后序遍历
    /*
        通过后序遍历,遍历整个binaryTree节点
    */

    postOrderTraverse(callback) {
        this._postOrderTraverse(global, callback)
    }

    _postOrderTraverse(node, callback) {
        if (node != null) {
            this._postOrderTraverse(node.left, callback)
            this._postOrderTraverse(node.right, callback)
            callback(node.key)
        }
    }

}


class Node {
    constructor(key) {
        // 键值 
        this.key = key;
        // 左子节点
        this.left = null;
        // 右子节点
        this.right = null;
    }
}



b = new BinarySearchTree;


[5, 3, 1, 33, 4322, 23, 34, 64].forEach((x, index) => {
    b.insert(x)
})

// 实例

let printNode = (node) => {
    console.log(node)
}


// b.inOrderTraverse(printNode)

b.preOrderTraverse(printNode)

// b.postOrderTraverse(printNode)