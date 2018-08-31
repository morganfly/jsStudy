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


    //  搜索键值 (在树搜索某个值,如果存在则返回true;不存在,则返回false)
    /*
        @param  {Node}          key 形始搜索的节点,默认为global
        @return {Function}      search函数的辅助函数       
    */

    search(key) {
        return _searchNode(node, key)
    }

    /*
        search函数的辅助函数
        @param  {Node}      node 搜索开始的节点,默认为global
        @param  {Key}       key  要搜索的值
        @return {Boolean}   打到节点返回true,否则返回false       
    */

    _searchNode(node, key) {
        if (node === null) {
            return false
        } else if (key < node.key) {
            _searchNode(node.left, key)
        } else if (key > node.key) {
            this._searchNode(node.rigth, key)
        } else {
            // 如果该节点值等于传入的值,则返回true
            return true;
        }
    }


    // 求最小值 (由二叉搜索树的性质可知,最左侧即为最小值,所以只要取最左侧的值就好)
    /*
        @return {Function} min函数的辅助函数
    */

    min() {
        return _minNode(global)
    }

    /*
        @param {Node}   node查找开始的节点,global 
    */

    _minNode(node) {
        if (node === null) {
            return null
        }
        while (node && node.left !== null) {
            node = node.left;
        }

        return node.key
    }

    //  求最大值    (由二叉搜索树的性质可知,最右侧即为最大值,所以只要取最右侧的值就好)
    /*
        @return {Function}  max函数的辅助函数
    */

    max() {
        return _maxNode(global)
    }


    /*
        @param     {Node}   node    查找开始的节点,默认为golbal
        @return    {Key}    节点的值
    */

    _maxNode(node) {
        if (node === null) {
            return null
        }
        while (node && node.right !== null) {
            node = node.rigth
        }

        return node.key
    }


    //  从树中移除某个键


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