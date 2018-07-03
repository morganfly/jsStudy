class BinarySearchTree {
    constructor() {

    }

    // 插入某个键到二叉树中
    insert(key) {
        let newNode = new Node(key)

        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
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
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    



    root = null;
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