import BinarySearchTree from './src/app/Classes/BinarySearchTree/BinarySearchTree'
import DFS from './src/app/Classes/BinarySearchTree/DFS'

const tree = new BinarySearchTree<number>();
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20)

console.log('PreOrder:  ', DFS(tree, 'pre'))

console.log('PostOrder: ' ,DFS(tree, 'post'))

console.log('InOrder:   ', DFS(tree, 'in'))
